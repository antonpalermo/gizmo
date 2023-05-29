import * as React from "react";

export interface HeadlineProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Headline({ className, ...props }: HeadlineProps) {
  return (
    <div
      className={`${className} inline-flex w-full items-center justify-between`}
      {...props}
    />
  );
}
