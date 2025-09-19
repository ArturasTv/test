'use client';

import { useState, type ReactNode } from 'react';

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg dark:border-gray-700">
      <button
        type="button"
        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-0 rounded-t-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg className={`w-3 h-3 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-5 border-t border-gray-200 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400">{children}</div>
        </div>
      )}
    </div>
  );
}
