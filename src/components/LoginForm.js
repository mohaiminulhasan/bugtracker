import React from 'react';

export const LoginForm = () => {
  return (
    <>
      <form>
        <input type='text' placeholder='Username' name='username' /> <br/>
        <input type='password' placeholder='Password' name='password' /> <br/>

        <button type='submit'>Login</button>
      </form>
    </>
  );
}