"use client";
import React from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@nextui-org/react";
import dayjs from "dayjs";

import CheckboxHabit from "./components/CheckboxHabit";
import { useHabitsTrackingContext } from "./HabitsTrackingContext";
import useCreateHabitTracking from "./hooks/useCreateHabitTracking";
import useDeleteHabitTracking from "./hooks/useDeleteHabitTracking";
import { RowType } from "./utils/helpers";

type RowTypeKey = keyof RowType;

const HabitsTrakingTable = () => {
  const { columns, rows } = useHabitsTrackingContext();
  const { createHabitTracking } = useCreateHabitTracking();
  const { deleteHabitTracking } = useDeleteHabitTracking();

  const renderCell = React.useCallback(
    (item: RowType, columnKey: RowTypeKey) => {
      if (columnKey === "habits") return item[columnKey];

      const columnInfo = columns.find((col) => col.key === columnKey);

      return (
        <CheckboxHabit
          isChecked={Boolean(item[columnKey])}
          value={(item[columnKey] as number) ?? 0}
          onDelete={async () => {
            await deleteHabitTracking({
              date: columnInfo?.date,
              habitId: item.habitItem.id,
            });
          }}
          onSave={async (value) => {
            await createHabitTracking({
              date: columnInfo?.date,
              habitId: item.habitItem.id,
              points: value,
            });
          }}
        />
      );
    },
    [columns, createHabitTracking, deleteHabitTracking],
  );

  return (
    <div>
      <Table
        topContentPlacement="inside"
        shadow="sm"
        aria-label="Weekly habits table"
        radius="sm"
        removeWrapper
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              style={{
                textAlign: column.key !== "habits" ? "center" : "left",
                textTransform: "uppercase",
              }}
            >
              <Tooltip
                content={dayjs(column.date).format("DD MMM") || "Habits"}
              >
                <span>{column.label}</span>
              </Tooltip>
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={rows}
          emptyContent={"No habits found, please create one"}
        >
          {(item) => (
            <TableRow key={item.habitItem.id}>
              {(columnKey) => (
                <TableCell>
                  {renderCell(item, columnKey as RowTypeKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default HabitsTrakingTable;
