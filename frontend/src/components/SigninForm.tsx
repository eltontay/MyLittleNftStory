import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

function signinForm() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="text-3xl font-bold text-gray-900-mt-2 text-center">
        Sign In{' '}
      </div>
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        <form action="" className="space-y-6">
          <div>
            <label
              htmlFor=""
              className="label text-sm font-bold text-gray-600 block"
            >
              Username
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="label text-sm font-bold text-gray-600 block"
            >
              Password
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-300 rounded"
              />
              <label htmlFor="" className="ml-2 text-sm text-gray-600">
                Remember Me
              </label>
            </div>
            <div>
              <RouterLink
                to="/ForgotPassword"
                className="font-medium text-sm text-blue-500"
              >
                Forgot Password
              </RouterLink>
            </div>
          </div>
          <div>
            <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default signinForm;
