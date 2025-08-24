import React from 'react'

function CreditCard({
  cardType = '_Metal',
  cardNumber = '**7328',
  holderName = 'Dominik Lamakani',
  currentLimit = '$780,00',
  totalLimit = '$20,000',
  status = 'Active',
  isChecked = false,
  gradientId = 'c1-a',
  gradientColors = {
    start: '#4B5563',
    middle: '#1F2937',
    end: '#9FA1FF'
  }
}) {
  const getStatusStyles = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/20 text-green-700'
      case 'Blocked':
        return 'bg-yellow-500/20 text-yellow-700'
      default:
        return 'bg-gray-500/20 text-gray-700'
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
          {/* Card */}
          <div className="lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-3 order-1 col-span-6 flex items-center space-x-4 sm:order-none sm:col-span-3">
            <svg
              className="shrink-0"
              width="32"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1="1.829%"
                  y1="100%"
                  x2="100%"
                  y2="2.925%"
                  id={gradientId}
                >
                  <stop stopColor={gradientColors.start} offset="0%" />
                  <stop stopColor={gradientColors.middle} offset="100%" />
                  <stop stopColor={gradientColors.end} offset="100%" />
                </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <rect
                  fill={`url(#${gradientId})`}
                  width="32"
                  height="24"
                  rx="3"
                />
                <ellipse
                  fill="#E61C24"
                  fillRule="nonzero"
                  cx="12.522"
                  cy="12"
                  rx="5.565"
                  ry="5.647"
                />
                <ellipse
                  fill="#F99F1B"
                  fillRule="nonzero"
                  cx="19.432"
                  cy="12"
                  rx="5.565"
                  ry="5.647"
                />
                <path
                  d="M15.977 7.578A5.667 5.667 0 0 0 13.867 12c0 1.724.777 3.353 2.11 4.422A5.667 5.667 0 0 0 18.087 12a5.667 5.667 0 0 0-2.11-4.422Z"
                  fill="#F26622"
                  fillRule="nonzero"
                />
              </g>
            </svg>
            <div>
              <div className="text-sm font-medium text-gray-800 dark:text-gray-100">
                {cardType}
              </div>
              <div className="text-xs">{cardNumber}</div>
            </div>
          </div>
          {/* Name */}
          <div className="lg:sidebar-expanded:hidden xl:sidebar-expanded:block order-2 col-span-6 text-left sm:order-none sm:col-span-3 sm:text-center">
            <div className="truncate text-sm font-medium text-gray-800 dark:text-gray-100">
              {holderName}
            </div>
          </div>
          {/* Card limits */}
          <div className="lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4 order-1 col-span-6 text-right sm:order-none sm:col-span-4 sm:text-center">
            <div className="text-sm">{currentLimit} / {totalLimit}</div>
          </div>
          {/* Card status */}
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

export default CreditCard