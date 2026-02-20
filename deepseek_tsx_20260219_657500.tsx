'use client';

interface NavbarProps {
  toggleSidebar?: () => void;
}

export default function Navbar({ toggleSidebar }: NavbarProps) {
  return (
    <header className="border-b border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="mr-4 rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
        >
          {/* Хамбургер икона */}
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-xl font-semibold">My App</h1>
      </div>
    </header>
  );
}