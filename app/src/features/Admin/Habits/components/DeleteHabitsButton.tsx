import React from "react";

import { Row } from "@tanstack/react-table";

import { Icon } from "@/components/icon";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import useDeleteHabits from "@/hooks-api/useDeleteHabits";
import { Habit } from "@/lib/graphql/codegen/graphql";

interface DeleteHabitsButtonProps {
  ids: Row<Habit>[];
  onDelete?: () => void;
}

const DeleteHabitsButton: React.FC<DeleteHabitsButtonProps> = ({
  ids,
  onDelete,
}) => {
  const { deleteHabits, loading } = useDeleteHabits();
  const { toast } = useToast();

  const handleDelete = async () => {
    try {
      await deleteHabits({
        ids: ids.map((row) => row.original.id),
      });
      onDelete?.();
      toast({
        title: `${ids.length} habits deleted successfully.`,
        variant: "success",
      });
    } catch (error) {
      toast({
        title: `${ids.length} habits could not be deleted, please try again.`,
        variant: "destructive",
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Icon name="trash-2" className="mr-2 h-5 w-5" />
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete ({ids.length}) items?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete these
            items from your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={loading} onClick={handleDelete}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteHabitsButton;
