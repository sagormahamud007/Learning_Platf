import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/pages/Home/Shere-routes/route/Route';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
