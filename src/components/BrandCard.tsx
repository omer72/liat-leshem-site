"use client";

import MuiCard, { type CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import type { CSSProperties } from "react";

interface BrandCardProps extends CardProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function BrandCard({
  children,
  className,
  style,
  ...props
}: BrandCardProps) {
  return (
    <MuiCard
      className={className}
      style={style}
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "rgba(250,247,242,0.95)",
        backdropFilter: "blur(12px)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
        },
        // Gold top-border reveal on hover
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, #C9A84C, #D4BC72, #C9A84C)",
          transform: "scaleX(0)",
          transformOrigin: "center",
          transition: "transform 0.3s ease",
        },
        "&:hover::before": {
          transform: "scaleX(1)",
        },
        ...props.sx,
      }}
      {...props}
    >
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
}
