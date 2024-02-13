"use client";

import { useState } from "react";

export const useDisclosure = (defaultValue?: boolean) => {
  const [isOpen, setIsOpen] = useState(defaultValue || false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};
