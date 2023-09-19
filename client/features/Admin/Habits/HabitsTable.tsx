import React from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  CircularProgress,
  useDisclosure,
} from "@nextui-org/react";
import { Habit } from "@/graphql/codegen/graphql";
import { useHabitsContext } from "./HabitsContext";
import HabitFormModal from "./components/HabitFormModal/HabitFormModal";
import { ActionsCell } from "./components/Cells";
import dayjs from "dayjs";
import { DeleteModal } from "@/components/Modals";
import { useDeleteHabit } from "./hooks";
import BulkActions from "./components/BulkActions/BulkActions";
import StatusCell from "./components/Cells/StatusCell";

type HabitKey = keyof Habit;
type ExtendedHabitKey = HabitKey | "actions";

export default function HabitsTable() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));

  const {
    isOpen: isOpenHabitForm,
    onOpen: onOpenHabitForm,
    onOpenChange: onOpenChangeHabitForm,
  } = useDisclosure();
  const {
    isOpen: isOpenDeleteModal,
    onOpen: onOpenDeleteModal,
    onOpenChange: onOpenChangeDeleteModal,
  } = useDisclosure();

  const {
    items,
    loading,
    setHabitToEdit,
    setHabitToDelete,
    habitToDelete,
    columns,
  } = useHabitsContext();
  const { deleteHabit } = useDeleteHabit();

  const topContent = React.useMemo(
    () => (
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <BulkActions
            isDisabled={!Boolean(selectedKeys.size)}
            items={Array.from(selectedKeys)}
          />

          <Button color="primary" onPress={onOpenHabitForm}>
            Add Habit
          </Button>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Selected {selectedKeys.size} of {items.length} items
          </span>
        </div>
      </div>
    ),
    [items.length, selectedKeys, onOpenHabitForm]
  );

  const renderCell = React.useCallback(
    (habit: Habit, columnKey: ExtendedHabitKey) => {
      if (columnKey === "actions") {
        return (
          <ActionsCell
            habit={habit}
            onDelete={() => {
              setHabitToDelete(habit);
              onOpenDeleteModal();
            }}
            onEdit={() => {
              setHabitToEdit(habit);
              onOpenHabitForm();
            }}
          />
        );
      }

      const cellValue = habit[columnKey];

      switch (columnKey) {
        case "isPaused":
          return <StatusCell value={cellValue} />;
        case "createdAt":
        case "dueDate":
          return cellValue ? dayjs(cellValue).format("DD/MM/YYYY") : "";
        default:
          return cellValue;
      }
    },
    [onOpenHabitForm, setHabitToEdit, onOpenDeleteModal, setHabitToDelete]
  );

  const handleDeleteHabit = React.useCallback(async () => {
    if (habitToDelete) await deleteHabit({ id: habitToDelete.id });
  }, [habitToDelete, deleteHabit]);

  return (
    <>
      <Table
        aria-label="Example table with custom cells, pagination and sorting"
        isHeaderSticky
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        topContent={topContent}
        topContentPlacement="inside"
        onSelectionChange={(value) => {
          if (typeof value === "string" && value === "all") {
            const ids = items.map((item) => item.id);
            // @ts-ignore
            setSelectedKeys(new Set(ids));
          } else {
            // @ts-ignore
            setSelectedKeys(value);
          }
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              style={{
                textAlign: column.uid === "actions" ? "center" : "start",
              }}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          emptyContent={"No habits found"}
          loadingContent={<CircularProgress aria-label="Loading..." />}
          isLoading={loading}
          items={items}
        >
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  {renderCell(item, columnKey as ExtendedHabitKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

      <HabitFormModal
        isOpen={isOpenHabitForm}
        onOpenChange={onOpenChangeHabitForm}
      />
      <DeleteModal
        isOpen={isOpenDeleteModal}
        onOpenChange={onOpenChangeDeleteModal}
        onDelete={handleDeleteHabit}
        deleteText={`Do you want delete ${habitToDelete?.name}?`}
      />
    </>
  );
}
