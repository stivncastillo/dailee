import React, { useMemo } from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  CircularProgress,
} from "@nextui-org/react";
import { VerticalDotsIcon } from "../../../components/icons";
import { Habit } from "@/graphql/codegen/graphql";
import { HabitsProvider, useHabitsContext } from "./HabitsContext";
import HabitFormModal from "./components/HabitFormModal/HabitFormModal";
const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const columns = [
  { name: "NAME", uid: "name" },
  { name: "STATUS", uid: "isPaused" },
  { name: "DUE DATE", uid: "dueDate" },
  { name: "CREATED AT", uid: "createdAt" },
  { name: "ACTIONS", uid: "actions" },
];
type HabitKey = keyof Habit;
type ExtendedHabitKey = HabitKey | "actions";

export default function HabitsTable() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const { items, loading, onOpenModal, isOpenModal, onOpenChangeModal } =
    useHabitsContext();

  const topContent = React.useMemo(
    () => (
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <Dropdown>
            <DropdownTrigger>
              <Button
                color="primary"
                variant="bordered"
                isDisabled={!Boolean(selectedKeys.size)}
              >
                Actions
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Bulk actions"
              // disabledKeys={["pause", "delete"]}
            >
              <DropdownItem key="pause">Pause</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Button color="primary" onPress={onOpenModal}>
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
    [items.length, selectedKeys, onOpenModal]
  );

  const renderCell = React.useCallback(
    (habit: Habit, columnKey: ExtendedHabitKey) => {
      if (columnKey === "actions") {
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>View</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      }

      const cellValue = habit[columnKey];

      switch (columnKey) {
        case "isPaused":
          return <span>{cellValue ? "YES" : "NO"}</span>;
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <>
      <Table
        aria-label="Example table with custom cells, pagination and sorting"
        isHeaderSticky
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        topContent={topContent}
        topContentPlacement="inside"
        // @ts-ignore
        onSelectionChange={setSelectedKeys}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
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

      <HabitFormModal isOpen={isOpenModal} onOpenChange={onOpenChangeModal} />
    </>
  );
}
