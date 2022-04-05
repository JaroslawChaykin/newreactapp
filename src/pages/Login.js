import React, { useContext } from 'react';
import Input from '../Components/UI/Input/Input';
import Button from '../Components/UI/Button/Button';
import { AuthContext } from '../context';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
      <div className={'container'}>
          <h1>Login</h1>
          <form className={'form-container'} onSubmit={login}>
              <Input type="text" ph={'Login'}/>
              <Input type="password" ph={'password'}/>
              <Button title={'Войти'} />
          </form>
      </div>
    );
};

export default Login;