import React from "react";
import { Button1Props } from "./interface";

export const Button1: React.FC<Button1Props> = ({ title, ...props }) => {
  return <button {...props}>{title}</button>;
};