import React, { useState } from 'react'

import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'
import AccountRow from '../../components/AccountRow'
import AccountDetails from '../../components/AccountDetails'

function Accounts() {
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
          <div className="lg:relative lg:flex">
            {/* Content */}
            <div className="mx-auto w-full max-w-[96rem] px-4 py-8 sm:px-6 lg:px-8">
              {/* Page header */}
              <div className="mb-5 sm:flex sm:items-center sm:justify-between">
                {/* Left: Title */}
                <div className="mb-4 sm:mb-0">
                  <h1 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-100">
                    Chart Of Accounts
                  </h1>
                </div>

                {/* Add card button */}
                <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                  Add Accounts
                </button>
              </div>

              {/* Filters */}
              <div className="mb-5">
                <ul className="-m-1 flex flex-wrap">
                  <li className="m-1">
                    <button className="inline-flex items-center justify-center rounded-full border border-transparent bg-gray-900 px-3 py-1 text-sm leading-5 font-medium text-white shadow-xs transition dark:bg-gray-100 dark:text-gray-800">
                      View All
                    </button>
                  </li>
                  <li className="m-1">
                    <button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm leading-5 font-medium text-gray-500 shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
                      Assets
                    </button>
                  </li>
                  <li className="m-1">
                    <button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm leading-5 font-medium text-gray-500 shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
                      Liabilities
                    </button>
                  </li>
                  <li className="m-1">
                    <button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm leading-5 font-medium text-gray-500 shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
                      Revenue
                    </button>
                  </li>
                  <li className="m-1">
                    <button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm leading-5 font-medium text-gray-500 shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600">
                      Expenses
                    </button>
                  </li>
                </ul>
              </div>

              {/* Account Row */}
              <div className="space-y-2">
                <AccountRow
                  accountName="Cash in Bank"
                  accountType="Asset"
                  currentBalance="$25,430.50"
                  status="Active"
                  isChecked={true}
                />
                <AccountRow
                  accountName="Accounts Payable"
                  accountType="Liability"
                  currentBalance="$8,750.00"
                  status="Active"
                  isChecked={false}
                />
                <AccountRow
                  accountName="Sales Revenue"
                  accountType="Revenue"
                  currentBalance="$45,200.75"
                  status="Active"
                  isChecked={false}
                />
                <AccountRow
                  accountName="Office Supplies"
                  accountType="Expense"
                  currentBalance="$1,250.30"
                  status="Active"
                  isChecked={false}
                />
                <AccountRow
                  accountName="Retained Earnings"
                  accountType="Equity"
                  currentBalance="$15,680.95"
                  status="Inactive"
                  isChecked={false}
                />
              </div>
            </div>

            <AccountDetails
              accountName="Cash in Bank"
              accountType="Asset"
              currentBalance="$25,430.50"
              status="Active"
              accountCode="1001"
              lastTransaction="Dec 15, 2024"
              monthlyActivity={{
                debits: '$12,450.00',
                credits: '$8,230.50',
                transactions: 24
              }}
            />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Accounts
