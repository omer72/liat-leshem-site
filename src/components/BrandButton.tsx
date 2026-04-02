"use client";

import Link from "next/link";
import MuiButton, { type ButtonProps } from "@mui/material/Button";
import type { ElementType } from "react";

export type BrandButtonProps = Omit<ButtonProps, "component"> & {
  href?: string;
};

export default function BrandButton({
  variant = "contained",
  href,
  ...props
}: BrandButtonProps) {
  if (href) {
    return (
      <MuiButton
        variant={variant}
        component={Link as ElementType}
        href={href}
        {...props}
      />
    );
  }
  return <MuiButton variant={variant} {...props} />;
}
