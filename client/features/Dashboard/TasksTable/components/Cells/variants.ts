import { tv } from "tailwind-variants";

export const taskTitle = tv({
  base: "text-default-500 text-md",
  variants: {
    status: {
      done: "text-default-400 line-through",
      todo: "text-default-500",
      cancel: "text-red-400 line-through",
    },
  },
  defaultVariants: {
    status: "todo",
  },
  compoundVariants: [
    {
      status: ["done", "todo", "cancel"],
      class: "",
    },
  ],
});

export const pointsText = tv({
  base: "text-xs text-default-400 ",
  variants: {
    status: {
      done: "line-through",
      todo: "",
      cancel: "text-red-400 line-through",
    },
  },
  defaultVariants: {
    status: "todo",
  },
  compoundVariants: [
    {
      status: ["done", "todo", "cancel"],
      class: "",
    },
  ],
});

export const dotComplex = tv({
  base: "rounded-full w-2 h-2",
  variants: {
    complex: {
      high: "bg-danger-300",
      medium: "bg-warning-400",
      low: "bg-default-300",
    },
  },
  defaultVariants: {
    complex: "low",
  },
  compoundVariants: [
    {
      complex: ["high", "medium", "low"],
      class: "",
    },
  ],
});
