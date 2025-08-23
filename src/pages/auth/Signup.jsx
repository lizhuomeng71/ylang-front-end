import React from 'react'
import { Link } from 'react-router-dom'

import AuthImage from '../../images/auth-image.jpg'

function Signup() {
  return (
    <div className="mx-auto w-full max-w-sm px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-800 dark:text-gray-100">
        Create your Account
      </h1>
      {/* Form */}
      <form>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input id="email" className="form-input w-full" type="email" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="name">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input id="name" className="form-input w-full" type="text" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="role">
              Your Role <span className="text-red-500">*</span>
            </label>
            <select id="role" className="form-select w-full">
              <option>Designer</option>
              <option>Developer</option>
              <option>Accountant</option>
            </select>
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              className="form-input w-full"
              type="password"
              autoComplete="on"
            />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="mr-1">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm">Email me about product news.</span>
            </label>
          </div>
          <Link
            className="btn ml-3 bg-gray-900 whitespace-nowrap text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
            to="/"
          >
            Sign Up
          </Link>
        </div>
      </form>
      {/* Footer */}
      <div className="mt-6 border-t border-gray-100 pt-5 dark:border-gray-700/60">
        <div className="text-sm">
          Have an account?{' '}
          <Link
            className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400"
            to="/auth/signin"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
