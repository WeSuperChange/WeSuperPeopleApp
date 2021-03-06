import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './assets/fonts/FiraSans-Bold.ttf';
import './assets/fonts/FiraSans-Light.ttf';
import './assets/fonts/FiraSans-Regular.ttf';
import './assets/fonts/Montserrat-Medium.ttf';
import './assets/fonts/Montserrat-SemiBold.ttf';
import { AuthContextProvider } from './context/AuthContext';
import QuestionContextProvider from './context/questionContext';
ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <QuestionContextProvider>
                <App />
            </QuestionContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
