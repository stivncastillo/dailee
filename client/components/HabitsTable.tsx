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
import { Rating } from "./Rating";

const Score = () => <Rating />;

const rows = [
  {
    key: "1",
    habit: "Read",
    monday: <Score />,
    tuesday: <Score />,
    wednesday: <Score />,
    thursday: <Score />,
    friday: <Score />,
    saturday: <Score />,
    sunday: <Score />,
  },
  {
    key: "2",
    habit: "Meditate",
    monday: <Score />,
    tuesday: <Score />,
    wednesday: <Score />,
    thursday: <Score />,
    friday: <Score />,
    saturday: <Score />,
    sunday: <Score />,
  },
  {
    key: "3",
    habit: "Work out",
    monday: <Score />,
    tuesday: <Score />,
    wednesday: <Score />,
    thursday: <Score />,
    friday: <Score />,
    saturday: <Score />,
    sunday: <Score />,
  },
  {
    key: "4",
    habit: "Workoutpapacho",
    monday: <Score />,
    tuesday: <Score />,
    wednesday: <Score />,
    thursday: <Score />,
    friday: <Score />,
    saturday: <Score />,
    sunday: <Score />,
  },
];

const columns = [
  {
    key: "habit",
    label: "HABIT",
  },
  {
    key: "monday",
    label: "MON",
  },
  {
    key: "tuesday",
    label: "TUE",
  },
  {
    key: "wednesday",
    label: "WED",
  },
  {
    key: "thursday",
    label: "THU",
  },
  {
    key: "friday",
    label: "FRI",
  },
  {
    key: "saturday",
    label: "SAT",
  },
  {
    key: "sunday",
    label: "SUN",
  },
];

type Props = {};

const HabitsTable = (props: Props) => {
  return (
    <div>
      <Table shadow="sm" aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default HabitsTable;
