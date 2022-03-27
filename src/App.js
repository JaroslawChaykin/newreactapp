import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import NavBar from './Components/UI/NavBar/NavBar';
import AppRouter from './Components/UI/AppRouter/AppRouter';

function App() {

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    )
}


export default App;
