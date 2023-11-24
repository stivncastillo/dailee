import React from "react";

import { CircularProgress } from "@nextui-org/react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import { CheckboxCell, TaskCell } from "./components/Cells";
import TaskFormRow from "./components/TaskForm";
import { useTasksTableContext } from "./TasksTableContext";
import { ComplexType, StatusType } from "./utils/@types";
import DashboardCard from "@/components/Cards/DashboardCard";
import { Task } from "@/graphql/codegen/graphql";

const TaskTable = () => {
  const { data, loading, columns } = useTasksTableContext();

  const renderCell = React.useCallback((task: Task, columnKey: any) => {
    if (columnKey === "checkbox") {
      return <CheckboxCell task={task} />;
    }
    if (columnKey === "description") {
      return (
        <TaskCell
          task={task}
          status={task.status as StatusType}
          complex={task.complexId.name.toLowerCase() as ComplexType}
        />
      );
    }

    return "--";
  }, []);

  return (
    <>
      <DashboardCard title="Today Tasks" subtitle="There are 5 tasks to do">
        <Table
          removeWrapper
          hideHeader
          aria-label="Example static collection table"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid}>{column.name}</TableColumn>
            )}
          </TableHeader>
          <TableBody
            isLoading={loading}
            emptyContent={"Hey, today you don't have any taks"}
            loadingContent={<CircularProgress aria-label="Loading..." />}
            items={data}
          >
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell
                    width={columnKey === "checkbox" ? "16" : ""}
                    className={
                      columnKey === "checkbox"
                        ? "px-0"
                        : "flex flex-row items-center justify-between"
                    }
                  >
                    {renderCell(item, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>

        <TaskFormRow />
      </DashboardCard>
    </>
  );
};

export default TaskTable;
