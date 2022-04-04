import React from 'react';
import Input from '../Components/UI/Input/Input';
import Button from '../Components/UI/Button/Button';

const Login = () => {
    return (
      <div className={'container'}>
          <h1>Login</h1>
          <form className={'form-container'}>
              <Input type="text" ph={'Login'}/>
              <Input type="password" ph={'password'}/>
              <Button title={'Войти'} />
          </form>
      </div>
    );
};

export default Login;