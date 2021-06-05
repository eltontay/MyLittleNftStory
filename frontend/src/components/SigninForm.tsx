import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

/*
  Elton Notes 30 May 2021
  Adding cross checking validation to backend database to prevent duplicate email
*/

interface FormData {
  email: string;
  password: string;
  remember: boolean;
}

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onSubmit' });

  const onSubmit = handleSubmit(({ email, password, remember }) => {
    console.log(email, password, remember);
  });

  return (
    <div className="py-10 flex flex-col justify-center">
      <div className="text-2xl font-medium text-gray-900-mt-2 text-center font-sans">
        Log In
      </div>
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label
              htmlFor=""
              className="label text-sm font-bold text-gray-600 block font-sans"
            >
              Email
            </label>
            <input
              type="text"
              {...register('email', { required: true })}
              style={{ borderColor: errors.email ? 'red' : '' }}
              className="placeholder-gray-500 w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="email"
            />
            {errors.email && <p>"Please enter your email."</p>}
          </div>
          <div>
            <label
              htmlFor=""
              className="label text-sm font-bold text-gray-600 block font-sans "
            >
              Password
            </label>
            <input
              type="password"
              {...register('password', { required: true })}
              style={{ borderColor: errors.password ? 'red' : '' }}
              className="placeholder-gray-500 w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Password"
            />
            {errors.password && <p>"Please enter your password."</p>}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                {...register('remember')}
                className="h-4 w-4 text-blue-300 rounded"
              />
              <label
                htmlFor=""
                className="ml-2 text-sm text-gray-600 font-sans"
              >
                Remember Me
              </label>
            </div>
            <div>
              <RouterLink
                to="/ForgotPassword"
                className="font-medium text-sm text-blue-500 font-sans"
              >
                Forgot Password
              </RouterLink>
            </div>
          </div>
          <div>
            <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm font-sans">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
