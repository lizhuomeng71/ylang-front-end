import React from 'react'

function AccountDetails({
  accountName = 'Cash in Bank',
  accountType = 'Asset',
  currentBalance = '$25,430.50',
  status = 'Active',
  accountCode = '1001',
  lastTransaction = 'Dec 15, 2024',
  monthlyActivity = { 
    debits: '$12,450.00', 
    credits: '$8,230.50',
    transactions: 24 
  }
}) {
  return (
    <div>
      <div className="no-scrollbar border-t border-gray-200 bg-linear-to-b from-gray-100 to-white lg:sticky lg:top-16 lg:h-[calc(100dvh-64px)] lg:w-[390px] lg:shrink-0 lg:overflow-x-hidden lg:overflow-y-auto lg:border-t-0 lg:border-l dark:border-gray-700/60 dark:from-gray-800/30 dark:to-gray-900">
        <div className="px-4 py-8 lg:px-8">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <div className="mb-6 text-center font-semibold text-gray-800 dark:text-gray-100">
              Account Details
            </div>

            {/* Account Summary Card */}
            <div className="relative overflow-hidden rounded-xl bg-linear-to-tr from-blue-900 to-blue-800 p-5">
              <div className="relative flex h-full flex-col justify-between">
                {/* Account Type Icon */}
                <div className="mb-4">
                  <div className="inline-flex rounded-lg bg-white/20 p-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M7 8h10M7 12h6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                
                {/* Account Name */}
                <div className="mb-2">
                  <div className="text-lg font-bold text-white">
                    {accountName}
                  </div>
                  <div className="text-sm text-blue-200">
                    {accountType} • {accountCode}
                  </div>
                </div>
                
                {/* Current Balance */}
                <div className="text-2xl font-bold text-white">
                  {currentBalance}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="mt-6">
              <div className="mb-1 text-sm font-semibold text-gray-800 dark:text-gray-100">
                Account Information
              </div>
              <ul>
                <li className="flex items-center justify-between border-b border-gray-200 py-3 dark:border-gray-700/60">
                  <div className="text-sm">Account Code</div>
                  <div className="ml-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                    {accountCode}
                  </div>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 py-3 dark:border-gray-700/60">
                  <div className="text-sm">Status</div>
                  <div className="flex items-center whitespace-nowrap">
                    <div className={`mr-2 h-2 w-2 rounded-full ${status === 'Active' ? 'bg-green-500' : 'bg-gray-500'}`} />
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-100">
                      {status}
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 py-3 dark:border-gray-700/60">
                  <div className="text-sm">Account Type</div>
                  <div className="ml-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                    {accountType}
                  </div>
                </li>
                <li className="flex items-center justify-between py-3">
                  <div className="text-sm">Last Transaction</div>
                  <div className="ml-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                    {lastTransaction}
                  </div>
                </li>
              </ul>
            </div>

            {/* Monthly Activity */}
            <div className="mt-6">
              <div className="mb-4 text-sm font-semibold text-gray-800 dark:text-gray-100">
                This Month Activity
              </div>
              <div className="border-b border-gray-200 pb-4 dark:border-gray-700/60">
                <div className="mb-2 flex justify-between text-sm">
                  <div>Total Debits</div>
                  <div className="font-medium text-gray-800 dark:text-gray-100">
                    {monthlyActivity.debits}
                  </div>
                </div>
                <div className="mb-2 flex justify-between text-sm">
                  <div>Total Credits</div>
                  <div className="font-medium text-gray-800 dark:text-gray-100">
                    {monthlyActivity.credits}
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <div>Transactions</div>
                  <div className="font-medium text-gray-800 dark:text-gray-100">
                    {monthlyActivity.transactions}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center space-x-3">
              <div className="w-1/2">
                <button className="btn w-full border-gray-200 text-gray-800 hover:border-gray-300 dark:border-gray-700/60 dark:text-gray-300 dark:hover:border-gray-600">
                  <svg
                    className="shrink-0 fill-current text-gray-400 dark:text-gray-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                  </svg>
                  <span className="ml-2">Edit Account</span>
                </button>
              </div>
              <div className="w-1/2">
                <button className="btn w-full border-gray-200 text-gray-800 hover:border-gray-300 dark:border-gray-700/60 dark:text-gray-300 dark:hover:border-gray-600">
                  <svg
                    className="shrink-0 fill-current text-gray-400 dark:text-gray-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 4h2v5H7zM7 11h2v2H7z"/>
                  </svg>
                  <span className="ml-2">View Ledger</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountDetails