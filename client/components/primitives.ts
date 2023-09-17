import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      primary: "text-primary-500",
      secondary: "text-secondary-500",
      success: "text-success-500",
      warning: "text-warning-500",
      danger: "text-danger-500",
      foreground: "text-foreground"
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
    color: "foreground"
  },
  compoundVariants: [
    {
      color: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "foreground"
      ],
      class: "",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants:{
    fullWidth: true
  }
});
