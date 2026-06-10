"use client";

import { useRef } from "react";

export function useGsapReveal<T extends HTMLElement>() {
  const scope = useRef<T | null>(null);
  return scope;
}
