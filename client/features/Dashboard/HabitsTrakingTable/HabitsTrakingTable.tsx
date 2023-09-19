"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import { useHabitsTrackingContext } from "./HabitsTrackingContext";
import { RowType } from "./utils/helpers";
import Score from "./components/Score";
import useCreateHabitTracking from "./hooks/useCreateHabitTracking";
import dayjs from "dayjs";
import { HabitTrackingFieldsFragment } from "@/graphql/codegen/graphql";

type Props = {};

type RowTypeKey = keyof RowType;

const HabitsTrakingTable = (props: Props) => {
  const { columns, rows, dataHabitTrackings } = useHabitsTrackingContext();
  const { createHabitTracking } = useCreateHabitTracking();

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

  return (
    <>
      {columns.length ? (
        <Table shadow="sm" aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.key}
                style={{
                  textAlign: column.key !== "habits" ? "center" : "left",
                  minWidth: column.key !== "habits" ? "auto" : "150px",
                  textTransform: "uppercase",
                }}
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
