import React from "react";

type ErrorMessageProps = {
  message?: string;
  children?: React.ReactNode;
  className?: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, children, className = "" }) => {
  if (!message && !children) return null;

  return (
    <div
      className={`bg-red-50 border border-red-200 text-red-800 px-3 py-2 rounded ${className}`.trim()}
      role="alert"
      aria-live="assertive"
    >
      <p className="text-sm">{message ?? children}</p>
    </div>
  );
};

export default ErrorMessage;