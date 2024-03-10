'use client';
import React from 'react';
import {
  signUp,
  confirmSignUp,
  autoSignIn,
  signIn,
} from '@repo/aws-auth-service/authService';
import { Button } from '@repo/ui';
const SignUpPage = () => {
  const [values, setValues] = React.useState({
    username: '',
    password: '',
    email: '',
  });
  const [isCodeValidationRequired, setIsCodeValidationRequired] =
    React.useState(false);
  const [validationCode, setValidationCode] = React.useState('');
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
      const { isSignUpComplete, nextStep } = signUpResponse;
      console.log(signUpResponse);
      if (!isSignUpComplete) {
        // handle next step
        if (nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
          // handle confirm sign up
          setIsCodeValidationRequired(true);
          alert(`Confirm Sign Up code sent to: ${values.email}`);
        }
      } else {
        if (nextStep.signUpStep === 'COMPLETE_AUTO_SIGN_IN') {
          const signInResponse = await autoSignIn();
          console.log(signInResponse);
        }
        setValues({ username: '', password: '', email: '' });
        // handle sign up complete
        console.log('Sign Up Complete');
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleConfirmSignUp = async () => {
    try {
      const confirmSignUpResponse = await confirmSignUp({
        username: values.username,
        confirmationCode: validationCode,
      });
      console.log(confirmSignUpResponse);
      const { isSignUpComplete } = confirmSignUpResponse;
      if (!isSignUpComplete) {
        // handle next step
        console.log('Sign Up Incomplete');
      } else {
        setValues({ username: '', password: '', email: '' });
        alert('Sign Up Complete');
      }
      setIsCodeValidationRequired(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <div>
      {isCodeValidationRequired ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleConfirmSignUp();
          }}
        >
          <input
            value={validationCode}
            className="border border-gray-400 p-2 w-full my-3"
            placeholder="Validation Code"
            onChange={(e) => setValidationCode(e.target.value)}
          />
          <Button type="submit" className="p-1 bg-orange-300">
            Validate
          </Button>
        </form>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
        >
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
            type="submit"
            className="p-1 bg-green-300  hover:bg-green-400"
          >
            Sign In
          </Button>
        </form>
      )}
    </div>
  );
};

export default SignUpPage;
