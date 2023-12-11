import { ColumnDef } from "@tanstack/react-table";

import { Icon } from "@/components/icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DIFFICULTIES } from "@/lib/config";
import { Habit } from "@/lib/graphql/codegen/graphql";

export const columns: ColumnDef<Habit>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <Icon
            name={column.getIsSorted() === "asc" ? "arrow-down" : "arrow-up"}
            className="ml-2 h-4 w-4"
          />
        </Button>
      );
    },
  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
    cell: ({ row }) => {
      const difficulty = DIFFICULTIES[row.original.difficulty];
      return <Badge variant={difficulty.color}>{difficulty.name}</Badge>;
    },
  },
  {
    accessorKey: "start_date",
    header: "Start Date",
    cell: ({ row }) => {
      const date = row.original.start_date;
      const formattedDate = new Date(date).toISOString().substring(0, 10);
      return <time dateTime={date}>{formattedDate}</time>;
    },
  },
  {
    accessorKey: "is_paused",
    header: "Paused",
    cell: ({ row }) => {
      const isPaused = row.original.is_paused;
      return <span>{isPaused ? "Yes" : "No"}</span>;
    },
  },
  {
    accessorKey: "due_date",
    header: "Due Date",
    cell: ({ row }) => {
      const date = row.original.due_date;
      const formattedDate = date
        ? new Date(date).toISOString().substring(0, 10)
        : "--";
      return <time dateTime={date}>{formattedDate}</time>;
    },
  },
  {
    accessorKey: "points",
    header: () => <div className="text-right">Points</div>,
    cell: ({ row }) => {
      const points = row.original.points;
      return <div className="text-right">{points}</div>;
    },
  },
  {
    accessorKey: "target_frequency",
    header: () => <div className="text-right">Tgt Freq</div>,
    cell: ({ row }) => {
      const target_frequency = row.original.target_frequency;
      return <div className="text-right">{target_frequency}</div>;
    },
  },
  {
    accessorKey: "current_frequency",
    header: () => <div className="text-right">Cur Freq</div>,
    cell: ({ row }) => {
      const current_frequency = row.original.current_frequency;
      return <div className="text-right">{current_frequency}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <Icon name="more-horizontal" className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
