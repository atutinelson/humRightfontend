import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="mb-8 w-full flex-1 flex flex-col gap-1 border border-gray-200 rounded-md shadow-sm bg-white p-4">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h1>

      {subtitle && (
        <p className="text-sm text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Header;