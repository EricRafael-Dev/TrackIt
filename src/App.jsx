import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';
import Habits from './pages/Habits/Habits';
import Historic from './pages/Historic/Historic';


export default function App() {

  const [screen1, setScreen1] = useState(true);
  const [screen2, setScreen2] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<SignIn />}></Route>
          <Route path="/cadastro" element={<Register />}></Route>
          <Route path="/habitos" element={<Habits screen1={screen1} setScreen1={setScreen1} screen2={screen2} setScreen2={setScreen2} />}></Route>
          <Route path="/historico" element={<Historic />}></Route>
          
        </Routes>
      </BrowserRouter>

    </>
  )
}