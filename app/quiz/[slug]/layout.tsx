"use client";
import { PropsWithChildren } from "react";

export default function QuizSlugLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col md:flex-row h-screen mt-4 gap-4 shadow shadow-gray-200">
      {children}
    </div>
  );
}
