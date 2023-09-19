"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { useHabitsTrackingContext } from "./HabitsTrackingContext";
import { RowType, getCurrentWeek } from "./utils/helpers";
import Score from "./components/Score";
import useCreateHabitTracking from "./hooks/useCreateHabitTracking";
import { Divider } from "@nextui-org/react";
import dayjs from "dayjs";

type RowTypeKey = keyof RowType;

const HabitsTrakingTable = () => {
  const { columns, rows } = useHabitsTrackingContext();
  const { createHabitTracking } = useCreateHabitTracking();
  const week = getCurrentWeek();

  const renderCell = React.useCallback(
    (item: RowType, columnKey: RowTypeKey) => {
      if (columnKey === "habits") return item[columnKey];

      const columnInfo = columns.find((col) => col.key === columnKey);

      return (
        <Score
          value={(item[columnKey] as number) ?? 0}
          onChange={async (value) => {
            await createHabitTracking({
              date: columnInfo?.date,
              habitId: item.habitItem.id,
              points: value,
            });
          }}
        />
      );
    },
    [columns, createHabitTracking]
  );

  const topContent = React.useMemo(
    () => (
      <div className="flex flex-row gap-2">
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            {dayjs(week[0].date).format("MMM DD")} to{" "}
            {dayjs(week[week.length - 1].date).format("MMM DD")}
          </span>
        </div>
      </div>
    ),
    [week]
  );

  return (
    <>
      {columns.length ? (
        <Table
          topContent={topContent}
          topContentPlacement="inside"
          shadow="sm"
          aria-label="Weekly habits table"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.key}
                style={{
                  textAlign: column.key !== "habits" ? "center" : "left",
                  textTransform: "uppercase",
                }}
                width={column.key !== "habits" ? "100" : "200"}
              >
                {column.label}
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
      ) : null}
    </>
  );
};

export default HabitsTrakingTable;
