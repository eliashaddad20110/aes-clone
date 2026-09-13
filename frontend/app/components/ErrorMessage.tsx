"use client";

import { AlertCircle, X } from "lucide-react";
import { cn } from "../lib/utils";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  onClose?: () => void;
  className?: string;
}

export default function ErrorMessage({ 
  message, 
  onRetry, 
  onClose, 
  className = "" 
}: ErrorMessageProps) {
  return (
    <div className={cn(
      "bg-red-50 border border-red-200 rounded-lg p-4",
      "flex items-start space-x-3",
      className
    )} role="alert">
      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
      <div className="flex-1">
        <p className="text-red-800 text-sm font-medium">Error</p>
        <p className="text-red-700 text-sm mt-1">{message}</p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="ml-4 px-3 py-1 bg-red-100 text-red-800 rounded text-sm font-medium hover:bg-red-200 transition-colors"
        >
          Retry
        </button>
      )}
      {onClose && (
        <button
          onClick={onClose}
          className="ml-2 p-1 text-red-600 hover:text-red-800 transition-colors"
          aria-label="Close error message"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
