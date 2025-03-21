import { Outlet } from 'react-router-dom';
import NavTabs from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {

  return (
    <>
      <NavTabs />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
