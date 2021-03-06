import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

/*
  Elton Notes 30 May 2021
  Adding cross checking validation to backend database to prevent duplicate email
*/

interface FormData {
  email: string;
  username: string;
  password: string;
  confirmpassword: string;
}

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onSubmit' });

  const onSubmit = handleSubmit(({ email, username, password, confirmpassword }) => {
    console.log(email, password);
  });

  return (
    <div className="py-10 flex flex-col justify-center">

      
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
      
        <RouterLink to="/Login">
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 640 640"
            height="100px"
            width="100px"
            className="mx-auto mb-8"
          >
            
            <path d="M323.7 54.6c-1 1.1.3 2.4 2.3 2.4 1 0 2.2.4 2.5 1 .3.5-.2 10-1.1 21l-1.8 20h-2.8c-2.4 0-4.9 2.3-3.7 3.4.2.2 4.3.6 9.2 1 7.4.6 8.7.5 8.7-.8 0-.9-1.3-1.8-3.5-2.2-1.9-.3-3.7-.9-3.9-1.3-.1-.3.3-6.7 1-14.1.7-7.4 1.3-15.1 1.3-17 .1-4.7.6-4.1 14.5 18.7 10.9 17.9 13.1 21.1 14.1 20.1.3-.2 4.5-42.7 4.5-45.3 0-.3 1.3-.5 2.9-.5 1.6 0 3.1-.6 3.4-1.4.6-1.5.3-1.6-12.6-3-4.2-.5-4.8-.3-4.5 1.1.2.9 1.8 2.1 3.7 2.6l3.4.8-.6 5.8c-.4 3.2-.9 10.2-1.3 15.5-.4 5.3-1 9.6-1.4 9.6-.3 0-5.3-7.8-11-17.3-5.7-9.4-11-18-11.8-19-1.5-1.7-10.1-2.5-11.5-1.1zM394 65.3c0 .8 1.1 1.9 2.5 2.5 1.4.6 2.5 1.8 2.5 2.5s-2.9 9.4-6.4 19.3l-6.4 17.9-3.5-.1c-2.1-.1-3.8.4-4.1 1.2-.5 1.3-.2 1.5 9.4 4.9 3.6 1.3 7.3 2.6 8.3 3 1.3.5 1.7.2 1.7-1.4 0-1.4-.8-2.3-2.5-2.7-1.4-.3-2.5-1.1-2.5-1.7 0-2.5 5.5-17.7 6.4-17.7.6 0 3 .8 5.4 1.7 4.3 1.6 4.4 1.7 3.9 5.4-.4 2.8-.1 3.9 1 4.4.9.3 1.7.4 1.8.3 1.2-1.8 5.4-16.1 5-16.8-1.1-1.8-2.4-1.1-4 2.1-1.7 3.2-2.1 3.2-9.1.3l-3.3-1.4 2.5-7.2c3.6-10.6 2.9-10.2 11.2-7.4 4 1.4 7.6 2.7 8.1 3 .4.3.5 2.5.1 4.8-.8 4.2-.1 5.7 2.5 5.8 1.2 0 4.7-11.2 3.7-12.2-.8-.7-32-11.8-33.3-11.8-.5 0-.9.6-.9 1.3zM210.8 75.8c-2.6 2-4.6 4.1-4.4 4.7.2.5 1.8 1 3.5 1h3.3l8.4 18.9c4.6 10.4 8.4 19.3 8.4 19.8s-1 1.8-2.2 2.8c-4.2 3.4-.9 3.3 7.2-.1 8.3-3.5 11-6.7 4.6-5.5l-3.3.6-5.4-11.7c-2.9-6.5-7.4-16.7-10-22.6-2.6-6-4.9-11-5.1-11.2-.2-.2-2.5 1.2-5 3.3zM257 77.9c-10.6 5.6-10.6 24.9-.1 31.8 4.7 3.2 12.5 3.2 17.1 0 4.5-3 7.4-7.1 6.6-9.3-.5-1.4-1.2-1.1-3.9 2.1-2.6 3-4.1 3.8-7.8 4.2-2.7.3-5.5 0-6.8-.7-2.3-1.2-6.1-6.6-6.1-8.6 0-.7 5-2.5 11-4 10-2.6 11-3.1 11-5.2 0-3.2-2.5-7.6-5.6-10.1-3.4-2.7-10.6-2.8-15.4-.2zm11.2 3.1c2.8 2.1 4 5.1 2.9 6.9-.6.9-13.4 5.1-15.6 5.1-.3 0-.5-1.8-.5-4.1 0-3.1.6-4.7 2.9-7 3.4-3.4 6.8-3.7 10.3-.9zM444.5 90c-3.1 4.2-3.5 5.3-2.4 6.6 1.1 1.3 1.7 1 4.9-2.1l3.6-3.5 4.8 3 4.7 3-2.2 3.8c-1.3 2-6.3 9.9-11.2 17.4l-8.9 13.8-2.8-1.5c-3.6-1.9-5-1.9-5-.1 0 1.2 16.6 12.6 18.4 12.6 1.6 0 .3-3.1-2-4.9l-2.7-2.1 3.9-6.3c2.1-3.4 7.1-11.3 11.1-17.5l7.3-11.3 2.8 1.6c6.8 4.1 6.8 4 5 9-1.6 4.3-1.6 4.5.2 5.5 1.6.8 2.3.2 5-4.6 1.7-3.1 3-5.7 2.8-5.9-.3-.3-29.8-19.2-32.5-20.8-.7-.4-2.6 1.3-4.8 4.3zM185 99c-1.3.8-1.3 1.4.2 5.4 1.6 4.3 1.6 4.4-.7 6.6-1.3 1.2-2.1 2.8-1.8 3.6.4 1.1 1 1.1 3.4-.1l2.8-1.5 5.8 9.7c7.1 11.9 9.3 14.3 13.1 14.3 4.9 0 11.8-6.8 9.3-9.3-.7-.7-1.7-.2-3.2 1.7-3.6 4.5-5.6 3.2-13.1-8.4-3.7-5.8-6.7-10.8-6.7-11.1-.1-.3 1.7-1.6 4-2.8 2.7-1.6 3.8-2.8 3.5-3.8-.3-.8-.6-1.7-.6-2 0-.3-2 .7-4.5 2.1l-4.5 2.7-2-3.3c-1.1-1.8-2-3.6-2-4.1 0-1-1.2-.9-3 .3zM155.3 120.1c-.9.9-.6 2.3 1 5.5l2.1 4.4-2.2 2.3c-3 3.1-1.1 5.3 2.5 3 2.8-1.9 1.7-2.8 12.3 10 4.2 5.1 8.3 9 9.7 9.3 3.4.9 6.9-1 9.3-4.8 2.4-3.9 2.5-5.8.5-5.8-.8 0-1.5.4-1.5 1 0 .5-.9 1.9-2 3-2.8 2.8-4.3 1.8-13.6-9.1l-7.8-9.2 3.9-3.3c3.3-2.8 3.7-3.4 2.6-4.8-1.2-1.4-1.7-1.3-4.9 1.5l-3.6 3.2-3-3.7c-3.4-4-3.7-4.1-5.3-2.5zM340.3 121c-3.9.9-9.8 5.2-11.4 8.3-1.6 2.9-1.4 9.4.4 13.6 2 4.7 1.2 7.3-9.3 31.6-5.1 11.5-10.2 23.7-11.5 27-1.3 3.3-4 9.8-6 14.5-4.5 10.3-12.2 33-13 38.5-.6 3.6.7 14.2 2.2 18.1.3.9-.1 1.4-1.4 1.4-2.5 0-12.5 3.5-18.7 6.7-11 5.5-19.7 13-29.2 24.9-5.8 7.4-10.7 18.5-20 45.9-2.5 7.1-5.6 16.3-7.1 20.3l-2.6 7.4-3.9-4.4c-2.1-2.3-6.3-8.4-9.3-13.4-7.6-12.7-8.5-12.7-16.8-.4-8.6 13-25.1 25.5-39.3 29.9-9.9 3.1-28.2 4.7-35.6 3.2-8.5-1.7-17.2-5.9-23.9-11.3-8.7-7.1-13-8.6-14.3-5.1-.9 2.2 3.7 19.7 8.4 31.8 2.1 5.5 4.8 13.6 6 18 2.6 9.3 12 27.5 15.7 30.5 3.5 2.7 9.9 4.3 14.1 3.5 2-.4 6.5-2.4 10.1-4.6 7.3-4.4 9.1-4.7 11.5-2 3 3.3 1.6 6-5.3 10.8-7.1 4.9-15.7 7.8-20.7 7l-3.3-.6 3 4.7c2.4 3.9 10.1 13.8 14.4 18.6.6.6 4.4 4.9 8.4 9.6 10.6 12.1 25.1 26.7 28.6 28.9 4.3 2.7 12.8 4.3 16.1 3.1 1.4-.6 4.5-2.5 6.7-4.4 2.3-1.8 5-3.6 6-3.9 2.2-.8 6.4 1.2 9.2 4.3 3.5 3.9 9 6 15.6 6 6.9 0 10.5-1.6 13.5-6.1 1.4-2.1 2.7-2.9 5-2.9 6.6 0 7.3 5.4 1.5 11.7-6.2 6.6-9.2 7.8-20.1 7.8-8.4 0-10.1-.3-14.6-2.7-2.7-1.4-5.6-3.4-6.3-4.2-1.7-2-3.5-2-5.2 0-.7.8-2.8 2.3-4.7 3.3l-3.4 1.7 2.6 1.7c3.5 2.3 27.1 14.3 38.6 19.6 12.5 5.8 30.2 11.5 42 13.5 5.2.9 14.5 2.5 20.5 3.7 30.2 5.5 59.8 4.5 94.5-3.2 18.3-4.1 54.1-19.3 76.7-32.5 8.9-5.2 32.6-24 42.3-33.4 4.9-4.8 24.4-28.5 30.3-36.7l3.7-5.3h-4.8c-6.6 0-11.3-1.5-17.1-5.4l-5-3.4-3.5 3.3c-2 1.8-5.6 4.1-8.2 5.1-4 1.5-5.4 1.6-10.4.6-7.3-1.5-14-4.4-18-7.9l-3.1-2.6-2.8 2.7c-5.5 5.2-19.1 7.3-27.7 4.2-6.1-2.1-12.3-6.3-13.6-9.1-1.6-3.5-.3-7.3 2.9-8.1 2.1-.6 3.1-.1 5.2 2.5 3.9 4.7 10.8 6.5 18.9 5 6.1-1.1 10.2-4.1 10.2-7.4 0-2.1 4.7-5.7 7.1-5.3 1.3.2 3.5 2.1 5.4 4.8 3.4 5 13.6 11 18.8 11 4.4 0 8.3-2.8 11.1-8.1 4.1-7.3 6.8-7.3 14.9.5 5.2 4.9 9.1 6.8 14.3 6.8 4.4.1 6-.8 14.6-8.4 6.2-5.6 17.6-31.5 21.3-48.4 1-4.4 2.5-9.7 3.5-11.9 1-2.2 2-6.4 2.4-9.2.6-4.9.5-5.3-1.4-5.3-1.2 0-4.9 2-8.3 4.4-8.8 6.2-15.5 8-30.2 8h-12l-11-5.3c-15.3-7.4-18.6-10.2-30.8-25.3-5.4-6.8-6.6-7.8-9.5-7.8-2.8 0-3.7.7-6.6 5.2-4.5 7-9.1 11.2-21 19.2-11 7.5-16.7 10.6-19.2 10.6-1.5 0-1.6-1.2-.8-13.3 1.8-26.9.2-39-7.3-54.2-4.5-9-7.7-13.4-16.3-22.1l-7.1-7.1 3.9-5.9c6.1-9.3 7.2-13.2 8.3-29.3.5-8 1.2-15.3 1.5-16.1.3-.8 1-12.5 1.5-26s1.6-31.2 2.3-39.3c1.3-14.3 1.5-15 4.4-18 4-4.3 5.2-6.9 5.2-11.2 0-8.3-4.6-12.6-16-15-10.6-2.2-23.9-5.4-39.4-9.4-12.6-3.3-12.4-3.3-17.3-2.1zm9.4 27.5c12.9 3.8 30 7.5 34.3 7.5 7.1 0 10.1 1.1 9.8 3.4-.3 1.9-.8 2.1-6.8 1.8-6.4-.2-19.5-2.4-25.5-4.1-17.6-5.2-23.5-7.5-23.5-9.3 0-2.4 1.3-2.3 11.7.7zm-8.9 19.5c.3 2.7-5.1 17.8-9.8 27-5.6 11.2-20.1 49.2-21.1 55.2-.6 3.5-.9 9.4-.7 13.3.3 6.6.2 7-2 7.3-3.4.5-6.4-6.9-6.4-15.7 0-7.8 2.8-16.8 13.4-42.6 3.8-9.4 7.4-18.4 8-20 .7-1.7 3.1-7.2 5.5-12.3 2.4-5 4.3-9.6 4.3-10 0-.4.7-1.8 1.6-3 2.2-3.2 6.8-2.7 7.2.8zm-36 115.2c.7.7 1.2 2.4 1.2 3.8 0 2.3-.7 2.7-6.7 4.5-20.8 5.9-38.3 24.2-47.4 49.6-3.1 8.8-16.9 63.3-16.9 66.9 0 1.2-.7 3.4-1.5 5.1-1.5 2.7-1.9 2.9-5.3 2.3-6.7-1.2-7.3-2.9-4.7-12.4 2.7-9.5 6.4-23 10.4-38 5.4-20.4 9-29.6 16.5-42.2 13.2-21.9 25.7-33.1 43.6-38.9 6.6-2.1 9.2-2.3 10.8-.7zm36.2 2.4c3.6.7 8 1.4 9.8 1.4 2.9 0 3.3.3 3 2.2-.3 2-.8 2.3-4.8 2.1-6.5-.4-18.8-3.4-20.1-4.9-1.7-2 0-3.7 3-2.9 1.4.4 5.5 1.3 9.1 2.1zm-6.7 16.2c8.8 4 22.8 13.4 26.8 18 1.8 2 4.3 6 5.6 8.9 2.3 4.9 2.4 5.7 1.3 11-.7 3.1-2.3 9.3-3.6 13.6-1.3 4.4-3.1 11.4-3.9 15.6-.9 4.2-3.2 13.4-5.2 20.6-2 7.1-4.9 18.4-6.4 25-3.1 12.9-4.1 14.5-9.4 14.5-5.4 0-9.5-2-14.2-7.1-5.1-5.5-11.6-8.4-16.6-7.6-1.9.3-6.5 2.6-10.2 5.1-8.8 5.9-12.6 6.1-20.5 1.1-3-1.9-6-3.5-6.7-3.5-1.6 0-1.6-1.4.1-9.2 1.3-6.3 3-16 6.2-35.8 3.2-19.8 9.5-50.2 12.5-60.3 1.8-6.1 2.3-6.8 4.3-6.5 1.6.2 3.2-.7 5-2.9 3.1-3.7 5.4-4.2 18.6-3.8 8.2.2 10.4.6 16.3 3.3zM230.7 428.6c3.5 4.6 10.1 7.4 17.5 7.4 6.4 0 8.3-.7 14-5.3 4.9-3.9 7.9-3.8 12.7.6 4.7 4.2 10.8 6.1 17.3 5.4 5.7-.7 8.3-2.2 10.9-6.4 4-6.5 8.4-6 15.9 1.6 12 12.4 29.7 13.7 37 2.7 3.4-4.9 5.1-5.9 8.4-4.6 6.7 2.5-.3 16.1-10.6 20.4-12.1 5.1-28.4 1.7-38.5-7.9-4.2-4-4.4-4.1-6-2.3-7.8 8.6-27.1 10.1-37.2 2.7l-4-2.9-3.7 2.5c-5.3 3.6-10.9 4.8-19 4.2-7.2-.5-16.8-4.1-19.4-7.1-.9-1.2-1.9-1-6 1.1-9.6 5-24.8 4.1-33-1.8-5-3.7-6.7-6.8-5.1-9.8 1.6-2.9 4.4-2.6 9.1.8 7.6 5.5 21.2 4.9 26.8-1.1 5.1-5.5 8.7-5.6 12.9-.2zm68.4 66.4c1 .6 1.9 2 1.9 3.2 0 3.1 4.6 8.5 9.3 11 3 1.5 6.1 2.2 10.9 2.2l6.6.1 7-6.8c4.3-4.1 7.8-6.7 9.2-6.7 1.2 0 3.7 1.6 5.7 3.7s4.9 5.3 6.6 7c4.4 4.6 10.3 6.6 17.7 6.1 6-.4 6.3-.6 11.4-6.1 6.2-6.7 8.5-7.1 14.2-2.6 5.7 4.6 12.2 7.6 19.2 8.9 8.8 1.8 12.9.4 18.4-6.1 5.5-6.6 7.2-7.5 10.4-5.4 3.5 2.3 3.1 5.9-1.3 11.4-6.3 8-10.5 10.5-19.1 11.7-7.5 1-20.2-2.7-29.5-8.4l-3.7-2.4-4.5 4c-5.5 4.9-11.5 6.6-19.9 6-8.2-.7-16.2-4.4-22-10.2-4.2-4.1-4.7-4.4-5.8-2.8-2.9 4-9.5 8.1-15 9.3-12.6 2.7-27.2-4.1-32.9-15.3-2.6-5.1-2.5-9.3.3-11.2 2.7-1.9 2.4-1.9 4.9-.6z" />
            <path d="M306.1 303.9c-1.3.3-2.9 1.4-3.5 2.3-1.8 2.9 5.7 9.4 21.9 19.3 3.5 2.1 8.4 3.4 9 2.5.3-.6-2.7-2.5-6.8-4.5-12-5.6-16.3-10.5-12.5-14.3 4.6-4.6 27.2 5.4 36.3 16 4 4.7 4.6 9.1 1.6 10.8-6.3 3.3-24.2-2-38.4-11.3-10.1-6.7-10.1-5.2.1 3.4 12 10 23.7 14.9 35.8 14.9 6.3 0 7.6-.3 10.3-2.6 4.2-3.5 4.1-7.6 0-13.5-3.9-5.3-5-6.4-11.4-10.9-13.5-9.6-22.4-13-32.9-12.9-3.9.1-8.2.4-9.5.8z" />
            <path d="M320 313.9c0 .8 12.3 7.1 13.8 7.1 1.9 0 4.2 3.8 4.2 6.8 0 2.9.3 3.1 4.4 3.7 2.5.4 5.1.5 5.8.2 1.9-.7-7.7-9.6-14-13-5.6-3-14.2-5.9-14.2-4.8zM124.5 138.4c-1.8 2.7-1.1 5.2 1.7 6.7 4.2 2.3 9-4.5 5.6-7.9-2-2-5.6-1.4-7.3 1.2zM137 153.4c-2.6 6.6-2 8.4 1.9 5.7l2.7-2 8.9 8.2 8.8 8.3-1.6 2.5c-1.5 2.3-1.4 3.9.2 3.9.4 0 3-2.7 5.9-6 5.4-6.1 6.2-9.6 1.6-6.5-2.3 1.5-2.6 1.3-9.6-5.3-13.1-12.2-15.3-14.2-15.9-14.2-.4 0-1.7 2.4-2.9 5.4zM502.9 155.5c-1.4.8-3.2 2.8-3.9 4.5-1.1 2.8-1 4.1 1 10.4 2.5 8 2.4 10.3-.5 12.2-2.8 1.8-7.7-.6-10-5-1.7-3-1.7-3.4-.1-5.8 1.5-2.3 1.3-5.8-.3-5.8-.4 0-2 1.3-3.5 2.9l-2.8 2.9 1.9 4.3c2.2 4.9 8 10.5 11.8 11.5 3.4.9 7.1-.2 9.5-2.8 2.5-2.7 2.6-8.6.4-15.1-.8-2.5-1.4-5.6-1.2-6.8.7-5.1 7.7-5 10.3.1 1.4 2.7 1.4 3.2-.1 5.5-1.5 2.4-1.4 5.5.3 5.5.4 0 2-1.2 3.6-2.5 2.7-2.4 2.7-2.5 1.2-6.2-1.9-4.4-4.9-7.9-8.7-9.9-3.4-1.7-5.6-1.7-8.9.1zM101.1 167.7c-2.5 6.6-1.6 9 2.2 5.5l2.4-2.3 17.6 12.6c17.2 12.2 17.6 12.6 16.6 15.2-.6 1.6-.6 3-.1 3.5.6.6 3-1.9 6.1-6.3 3.4-4.8 4.8-7.6 4.1-8.3-.6-.6-1.8-.2-3.3 1.2l-2.4 2.2-18.4-13.1c-10.1-7.2-19.1-13.7-20-14.5-.8-.8-1.8-1.4-2.1-1.4-.3 0-1.5 2.6-2.7 5.7zM530.7 183.7c-.4.3 0 1.7.9 3.1.8 1.3 1.4 2.5 1.2 2.7-.2.1-5.2 3.1-11.1 6.5-11.8 6.8-14.3 9.5-13.3 13.6 1.3 5.2 9.6 11.1 9.6 6.9 0-.8-.4-1.5-1-1.5-.5 0-1.7-1.2-2.6-2.6-1.6-2.4-1.6-2.6.2-4.4 1.9-1.9 20.1-13 21.3-13 .3 0 1.6 1.8 2.9 4 1.2 2.2 2.7 4 3.3 4 2 0 1.9-2.8-.2-6.4-1.2-2-2-3.8-1.8-4 .2-.1 2.1-1.3 4.1-2.5 3.1-1.9 3.6-2.6 2.8-4.1-.9-1.7-1.2-1.7-5.6-.1-4.5 1.6-4.6 1.6-6.4-.7-1.9-2.3-3.1-2.7-4.3-1.5zM90.9 221.7c-1.7 4.3-3.9 10.5-3.9 10.9 0 .2.7.4 1.5.4s1.5-.4 1.5-.8c0-.5.6-1.7 1.4-2.7 1.3-1.8 1.9-1.4 10.9 6.1 5.3 4.3 9.6 8.2 9.6 8.6.1.5-5.7.8-12.9.8-7.1 0-13-.1-13-.3 0-.1.4-1.6.9-3.4.7-2.4.6-3.3-.4-3.7-.9-.3-2.1 1.8-3.9 6.7-1.4 4-2.7 7.8-2.8 8.6-.5 2.1 2 2.4 2.6.3.6-1.7 2.2-1.9 18.8-2.5 17.9-.7 18.2-.7 20.6 1.5 1.4 1.3 3.3 3.6 4.3 5.2 1.7 2.9 1.7 2.9-.7 4.8-4.5 3.6-2.2 11 2.5 8.1 2.6-1.6 4.3-6.1 3.6-9.3-.9-4.1-8.2-11.8-24.1-25.6-10.2-8.9-13.4-12.2-13.4-14 0-3.2-1.8-3-3.1.3zM536.1 221.5c-15.1 4.7-17.6 24-4 31.3 10 5.4 24.4-1.1 26.9-12.1 1.7-7.7-1.7-14.7-9-18.5-5-2.5-7.6-2.6-13.9-.7zm14.8 5.9c2.7 1.4 5.1 5.3 5.1 8.2 0 5.5-8.9 12-17.9 13.1-4.6.5-5.2.3-8-2.5-6.5-6.5-3-14.5 8.1-18.3 6.5-2.2 9.1-2.3 12.7-.5zM562 268.9c0 3.2.1 3.2-16.9 6.1-6.6 1.2-8 .7-8.1-2.8 0-.6-.7-1.2-1.5-1.2-1.8 0-1.8 1.2-.2 10.4 1.3 7.5 3.7 10.3 3.7 4.3v-3.5l7.3-1.3c9.4-1.6 12.6-1.6 16.2.2 2.7 1.3 3 1.9 3 5.8 0 5 2.2 7.4 5.3 5.5 3.2-2.1 2.7-6.2-1.3-10-2-1.9-4.3-3.4-5.1-3.4-2.5 0-.6-1.7 2.6-2.3 3.7-.8 3.8-2.1.5-7-3.1-4.5-5.5-4.9-5.5-.8zM104.8 275.2c-.3 2.2-.6 2.3-7.3 1.8-3.8-.3-10.3-.5-14.2-.5-6.2 0-7.6.3-9.5 2.3-3.1 3-3.1 10.4 0 15.4 2.6 4.1 2.7 4.8.9 4.8-5 0-6.7 10-2.9 16.4 2.7 4.6 2.7 4.6-.1 4.6-3.5 0-3.7.7-1.8 6.3 2.1 6.1 3.9 7.1 4.8 2.7l.6-3.2 7.6.6c16.8 1.5 17.1 1.5 17.1 4.7 0 1.8.5 2.9 1.4 2.9 1.3 0 2.6-6.6 2.6-13.8 0-3.7-2.7-4.6-3.2-1-.3 2.1-.8 2.3-5.3 2.1-13.9-.6-17.5-1.4-19.3-4.1-2.3-3.6-2.2-10 .3-11.9 2-1.5 9.1-1.4 21.3.3 3.8.6 4.2.9 4.2 3.5 0 1.8.5 2.9 1.4 2.9 1.2 0 2.6-7.6 2.6-14.6 0-3.1-2.8-3.2-3.2-.2-.3 2.5-.2 2.5-15.1 1.3-8.6-.8-10.3-2-11.4-8.8-.4-2.7-.1-3.9 1.7-5.7 2.1-2.1 2.8-2.2 10.9-1.6 13.7 1.1 15.1 1.5 15.1 4.2 0 2 1.6 4.2 2.5 3.3.2-.2.6-4.1 1-8.7.7-7.1.5-8.2-.8-8.2-.9 0-1.7 1-1.9 2.2zM522 306.9c-1.6 3.1-1.2 7.6 1 10.3 2.6 3.4 12.3 8.2 31.2 15.7 11.5 4.6 15.7 6.7 16.1 8.2.7 2.7 2.7 2.4 2.7-.5 0-1.3.3-4.4.6-7 .6-3.8.4-4.6-.9-4.6-.9 0-1.8 1.2-2.2 3.1-.4 1.7-1.2 2.8-1.8 2.6-.7-.3-6.1-2.4-12-4.7-6-2.3-10.7-4.4-10.5-4.6.2-.1 5.5-2.1 11.8-4.4 11.7-4.2 12.9-4.2 13 .2 0 1 .7 1.8 1.5 1.8 1.2 0 1.5-1.6 1.5-8.5s-.3-8.5-1.5-8.5c-.8 0-1.5.7-1.5 1.5 0 1.8-2.4 3-19.2 9.4-15.2 5.8-17.2 5.9-22.8 1.2-3.3-2.7-3.3-2.7-1.5-5.4 1.4-2.3 1.6-3.2.7-5.2-1.4-3-4.7-3.3-6.2-.6z" />
          </svg>
          </RouterLink>
      <div className="text-2xl font-medium text-gray-900-mt-2 text-center font-sans ">
      Create an Account
      </div>


        <form onSubmit={onSubmit}>
        {/* Start of Email  */}
          <div className="mb-4">
            <label className="label text-sm font-bold text-gray-600 block font-sans mb-2" >
              Email
            </label>
            <input
              type="text"
              {...register('email', { required: true })}
              style={{ borderColor: errors.email ? 'red' : '' }}
              className="placeholder-gray-500 w-full p-3 border border-gray-300 rounded-full mt-1"
              placeholder="Email Address..."
            />
            {errors.email && <p>Please enter your email.</p>}
          </div>
         {/* End of Email  */}      
              
         {/* Start of username  */}
          <div className="mb-4">
            <label
              htmlFor=""
              className="label text-sm font-bold text-gray-600 block font-sans mb-2"
            >
              Username
            </label>
            <input
              type="text"
              {...register('username', { required: true })}
              style={{ borderColor: errors.username ? 'red' : '' }}
              className="placeholder-gray-500 w-full p-3 border border-gray-300 rounded-full mt-1"
              placeholder="Username"
            />
            {errors.username && <p>Please enter a username.</p>}
          </div>
        {/* End of username  */}

        {/* Start of password  */}
        <div className="mb-3">
            <label
              htmlFor=""
              className="label text-sm font-bold text-gray-600 block font-sans mb-2"
            >
              Password
            </label>
            <input
              type="password"
              {...register('password', { required: true })}
              style={{ borderColor: errors.password ? 'red' : '' }}
              className="placeholder-gray-500 w-full p-3 border border-gray-300 rounded-full mt-1"
              placeholder="password"
            />
            {errors.password && <p>Please enter a password.</p>}
          </div>
        {/* End of password  */}

        <div className="text-left mb-3 ml-3">
            <div><input type="checkbox"/><label className="ml-3">Contains UpperCase (A-Z)</label></div>
            <div><input type="checkbox"/><label className="ml-3">Contains LowerCase (a-z)</label></div>
            <div><input type="checkbox"/><label className="ml-3">Contains Numbers (0-9)</label></div>
            <div><input type="checkbox"/><label className="ml-3">At least 8 characters in length</label></div>
        </div>

        {/* Start of confirmpassword  */}
        <div className="mb-4">
            <label
              htmlFor=""
              className="label text-sm font-bold text-gray-600 block font-sans mb-2"
            >
              Confirm password
            </label>
            <input
              type="password"
              {...register('confirmpassword', { required: true })}
              style={{ borderColor: errors.password ? 'red' : '' }}
              className="placeholder-gray-500 w-full p-3 border border-gray-300 rounded-full mt-1"
              placeholder="Confirm password"
            />
            {errors.confirmpassword && <p>Please enter a password.</p>}
          </div>
        {/* End of confirmpassword  */}


          <div>
            <button className="w-full py-2 px-4 bg-black hover:bg-gray-500 rounded-full text-white text-sm font-sans mt-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
