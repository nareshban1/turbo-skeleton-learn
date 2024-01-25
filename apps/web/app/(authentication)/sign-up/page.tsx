'use client';
import React from 'react';
import { signUp } from '@repo/aws-auth-service/authService';
import { Button } from '@repo/ui';
const SignUpPage = () => {
  const [values, setValues] = React.useState({
    username: '',
    password: '',
    email: '',
  });
  const [error, setError] = React.useState('');
  const handleSignIn = async () => {
    if (!values.username || !values.password || !values.email) return;
    console.log(values);
    try {
      const signUpResponse = await signUp({
        username: values.username,
        password: values.password,
        options: {
          userAttributes: {
            email: values.email,
          },
        },
      });
      setValues({ username: '', password: '', email: '' });
      const { isSignUpComplete, nextStep, userId } = signUpResponse;
      console.log(signUpResponse);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <div>
      <input
        value={values.username}
        className="border border-gray-400 p-2 w-full my-3"
        placeholder="Username"
        onChange={(e) => setValues({ ...values, username: e.target.value })}
      />
      <input
        value={values.password}
        className="border border-gray-400 p-2 w-full my-3"
        placeholder="Password"
        onChange={(e) => setValues({ ...values, password: e.target.value })}
      />
      <input
        value={values.email}
        className="border border-gray-400 p-2 w-full my-3"
        placeholder="Email"
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      {error && <p className="text-red-500 mb-3">{error}</p>}
      <Button
        onClick={handleSignIn}
        className="p-1 bg-green-300  hover:bg-green-400"
      >
        Sign In
      </Button>
    </div>
  );
};

export default SignUpPage;
