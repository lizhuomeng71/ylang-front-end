import React, { useState } from 'react'

import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'

function EmptyState() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        variant="v2"
      />

      {/* Content area */}
      <div className="relative flex flex-1 flex-col overflow-x-hidden overflow-y-auto bg-white dark:bg-gray-900">
        {/*  Site header */}
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          variant="v3"
        />

        <main className="grow">
          {/* Page header */}
          <div className="border-b border-gray-200 px-4 py-8 sm:flex sm:items-center sm:justify-between sm:px-6 dark:border-gray-700/60">
            {/* Left: Title */}
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-100">
                Empty State
              </h1>
            </div>

            {/* Right: Actions */}
            <div className="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">
              {/* Add event button */}
              <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                Add Event
              </button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">
            <div className="m-auto mt-16 max-w-2xl">
              <div className="px-4 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-t from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800">
                  <svg className="h-6 w-5 fill-current" viewBox="0 0 20 24">
                    <path
                      className="text-gray-500 dark:text-gray-600"
                      d="M10 10.562l9-5-8.514-4.73a1 1 0 00-.972 0L1 5.562l9 5z"
                    />
                    <path
                      className="text-gray-300 dark:text-gray-400"
                      d="M9 12.294l-9-5v10.412a1 1 0 00.514.874L9 23.294v-11z"
                    />
                    <path
                      className="text-gray-400 dark:text-gray-500"
                      d="M11 12.294v11l8.486-4.714a1 1 0 00.514-.874V7.295l-9 4.999z"
                    />
                  </svg>
                </div>
                <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-100">
                  Pay your bills in just a few clicks
                </h2>
                <div className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                  Add Event
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default EmptyState
