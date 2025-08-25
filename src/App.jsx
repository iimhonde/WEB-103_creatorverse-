import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { useRoutes } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import { supabase } from './client';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

function App() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreators = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('creators').select('*');
      if (error) {
        setCreators([]);
      } else {
        setCreators(data || []);
      }
      setLoading(false);
    };
    fetchCreators();
  }, []);

  const routes = useRoutes([
    { path: '/', element: <ShowCreators creators={creators} loading={loading} /> },
    { path: '/creator/:id', element: <ViewCreator /> },
    { path: '/edit/:id', element: <EditCreator /> },
    { path: '/add', element: <AddCreator /> },
  ]);

  return (
    <>
      {routes}
    </>
  );
}

export default App
