"use client";
import { Navbar } from "@/components/navbar";
import { PropsWithChildren, useState } from "react";
import {
  Upload,
  RefreshCw,
  Cross,
  CrossIcon,
  Archive,
  Save,
  Info,
} from "lucide-react";

export default function QuizLayout({ children }: PropsWithChildren) {
  return (
    <div className="p-4">
      {/* <Navbar /> */}
      <div className="flex items-center justify-between p-4 bg-white shadow shadow-gray-200 rounded-lg w-full">
        <h1 className="text-xl font-semibold">Q&A Management System</h1>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 py-2 px-4 rounded-sm">
            <Upload size={16} />
            Upload Questions
          </button>
          <button className="flex items-center gap-2 py-2 px-4 bg-gray-300 rounded-sm">
            <RefreshCw size={16} />
            Refresh
          </button>
        </div>
      </div>

      {children}
    </div>
  );
}
