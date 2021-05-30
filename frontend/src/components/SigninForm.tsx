import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

interface FormData {
  username: string;
  password: string;
  remember: boolean;
}

function SignInForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  React.useEffect(() => {
    setError('username', {
      type: 'manual',
      message: 'Please enter your username',
    });
  }, [setError]);

  React.useEffect(() => {
    setError('password', {
      type: 'manual',
      message: 'Please enter your password',
    });
  }, [setError]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="text-3xl font-bold text-gray-900-mt-2 text-center font-sans">
        Log In{' '}
      </div>
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor=""
              className="label text-sm font-bold text-gray-600 block font-sans"
            >
              Username
            </label>
            <input
              type="text"
              {...register('username', { required: true })}
              style={{ borderColor: errors.username ? 'red' : '' }}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.username && <p>{errors.username.message}</p>}
          </div>
          <div>
            <label
              htmlFor=""
              className="label text-sm font-bold text-gray-600 block font-sans "
            >
              Password
            </label>
            <input
              type="text"
              {...register('password', { required: true })}
              style={{ borderColor: errors.password ? 'red' : '' }}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.password && <p>{errors.password.message}</p>}
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
