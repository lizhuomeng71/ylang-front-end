import React from 'react'

function PaginationNumeric() {
  return (
    <div className="flex justify-center">
      <nav className="flex" role="navigation" aria-label="Navigation">
        <div className="mr-2">
          <span className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-2.5 py-2 leading-5 text-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-600">
            <span className="sr-only">Previous</span>
            <wbr />
            <svg
              className="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
            </svg>
          </span>
        </div>
        <ul className="inline-flex -space-x-px rounded-lg text-sm font-medium shadow-xs">
          <li>
            <span className="inline-flex items-center justify-center rounded-l-lg border border-gray-200 bg-white px-3.5 py-2 leading-5 text-violet-500 dark:border-gray-700/60 dark:bg-gray-800">
              1
            </span>
          </li>
          <li>
            <a
              className="inline-flex items-center justify-center border border-gray-200 bg-white px-3.5 py-2 leading-5 text-gray-600 hover:bg-gray-50 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-900"
              href="#0"
            >
              2
            </a>
          </li>
          <li>
            <a
              className="inline-flex items-center justify-center border border-gray-200 bg-white px-3.5 py-2 leading-5 text-gray-600 hover:bg-gray-50 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-900"
              href="#0"
            >
              3
            </a>
          </li>
          <li>
            <span className="inline-flex items-center justify-center border border-gray-200 bg-white px-3.5 py-2 leading-5 text-gray-400 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-500">
              …
            </span>
          </li>
          <li>
            <a
              className="inline-flex items-center justify-center rounded-r-lg border border-gray-200 bg-white px-3.5 py-2 leading-5 text-gray-600 hover:bg-gray-50 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-900"
              href="#0"
            >
              9
            </a>
          </li>
        </ul>
        <div className="ml-2">
          <a
            href="#0"
            className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-2.5 py-2 leading-5 text-violet-500 shadow-xs hover:bg-gray-50 dark:border-gray-700/60 dark:bg-gray-800 dark:hover:bg-gray-900"
          >
            <span className="sr-only">Next</span>
            <wbr />
            <svg
              className="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default PaginationNumeric
