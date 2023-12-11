import { useEffect, useState } from "react";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";

import CreateHabitDialog from "./components/CreateHabitDialog";
import DeleteHabitsButton from "./components/DeleteHabitsButton";
import EditHabitDialog from "./components/EditHabitDialog";
import { columns } from "./config/columns";
import { useHabitsContext } from "./HabitsContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const HabitsTable = () => {
  const { items, habitToEdit, setHabitToEdit } = useHabitsContext();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const table = useReactTable({
    data: items,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  const selectedRows = table.getFilteredSelectedRowModel().rows;

  useEffect(() => {
    if (habitToEdit) {
      setOpenEditModal(true);
    }
  }, [habitToEdit]);

  useEffect(() => {
    if (!openEditModal) {
      setHabitToEdit(null);
    }
  }, [setHabitToEdit, openEditModal]);

  return (
    <>
      <div className="flex items-center justify-between">
        <Input
          placeholder="Filter by name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          classNameWrapper="mb-0"
          className="max-w-sm"
        />
        <div className="flex justify-end gap-2">
          {selectedRows.length > 0 && (
            <DeleteHabitsButton
              ids={selectedRows}
              onDelete={() => setRowSelection([])}
            />
          )}
          <CreateHabitDialog />
        </div>
      </div>

      <Card className="rounded-sm">
        <CardContent className="p-0">
          <Table className="border-b">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between p-3">
          <div className="flex-1 text-sm text-muted-foreground">
            {selectedRows.length} of {table.getFilteredRowModel().rows.length}{" "}
            row(s) selected.
          </div>
        </CardFooter>
      </Card>

      {habitToEdit && (
        <EditHabitDialog
          setOpen={setOpenEditModal}
          open={openEditModal}
          habit={habitToEdit}
        />
      )}
    </>
  );
};

export default HabitsTable;
