import React from 'react'

function AccountRow({
  accountName = 'Cash in Bank',
  accountType = 'Asset',
  currentBalance = '$15,000.00',
  status = 'Active',
  isChecked = false
}) {
  const getStatusStyles = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/20 text-green-700'
      case 'Inactive':
        return 'bg-gray-500/20 text-gray-700'
      default:
        return 'bg-gray-500/20 text-gray-700'
    }
  }

  const getAccountTypeStyles = (type) => {
    switch (type) {
      case 'Asset':
        return 'bg-blue-500/20 text-blue-700'
      case 'Liability':
        return 'bg-red-500/20 text-red-700'
      case 'Equity':
        return 'bg-purple-500/20 text-purple-700'
      case 'Revenue':
        return 'bg-green-500/20 text-green-700'
      case 'Expense':
        return 'bg-orange-500/20 text-orange-700'
      default:
        return 'bg-gray-500/20 text-gray-700'
    }
  }

  const getAccountTypeIcon = (type) => {
    switch (type) {
      case 'Asset':
        return (
          <svg className="shrink-0" width="32" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M7 8h10M7 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      case 'Liability':
        return (
          <svg className="shrink-0" width="32" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        )
      case 'Equity':
        return (
          <svg className="shrink-0" width="32" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      case 'Revenue':
        return (
          <svg className="shrink-0" width="32" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case 'Expense':
        return (
          <svg className="shrink-0" width="32" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M17 7L7 17M7 7h10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      default:
        return (
          <svg className="shrink-0" width="32" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        )
    }
  }

  return (
    <label className="relative block w-full cursor-pointer text-left">
      <input
        type="radio"
        name="radio-buttons"
        className="peer sr-only"
        defaultChecked={isChecked}
      />
      <div className="rounded-lg border border-gray-200 p-4 shadow-xs transition hover:border-gray-300 dark:border-gray-700/60 dark:bg-gray-800 dark:hover:border-gray-600">
        <div className="grid grid-cols-12 items-center gap-x-2">
          {/* Account Icon & Name */}
          <div className="lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4 order-1 col-span-6 flex items-center space-x-4 sm:order-none sm:col-span-4">
            <div className={`p-2 rounded-lg ${getAccountTypeStyles(accountType)}`}>
              {getAccountTypeIcon(accountType)}
            </div>
            <div>
              <div className="text-sm font-medium text-gray-800 dark:text-gray-100">
                {accountName}
              </div>
            </div>
          </div>
          {/* Account Type */}
          <div className="lg:sidebar-expanded:hidden xl:sidebar-expanded:block order-2 col-span-6 text-left sm:order-none sm:col-span-2 sm:text-center">
            <div className={`inline-flex rounded-full px-2.5 py-1 text-center text-xs font-medium ${getAccountTypeStyles(accountType)}`}>
              {accountType}
            </div>
          </div>
          {/* Current Balance */}
          <div className="lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4 order-1 col-span-6 text-right sm:order-none sm:col-span-4 sm:text-center">
            <div className="text-sm font-semibold text-gray-800 dark:text-gray-100">{currentBalance}</div>
          </div>
          {/* Status */}
          <div className="lg:sidebar-expanded:hidden xl:sidebar-expanded:block order-2 col-span-6 text-right sm:order-none sm:col-span-2">
            <div className={`inline-flex rounded-full px-2.5 py-1 text-center text-xs font-medium ${getStatusStyles(status)}`}>
              {status}
            </div>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 rounded-lg border-2 border-transparent peer-checked:border-violet-400 dark:peer-checked:border-violet-500"
        aria-hidden="true"
      />
    </label>
  )
}

export default AccountRow