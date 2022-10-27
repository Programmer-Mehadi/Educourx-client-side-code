import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './contexts/AuthProvider/AuthProvider';
import { routes } from './Routes/Routes/Routes';

function App() {
  const { mode } = useContext(AuthContext);
  return (
    <div className={`App max-w-[1440px] mx-auto ${mode === true && 'bg-black text-white'} `}>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
