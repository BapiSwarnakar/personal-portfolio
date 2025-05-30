import './App.css';
import SetRoute from './routes/SetRoute'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  // Initialize AOS (Animate On Scroll) library
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <SetRoute />
    </div>
  );
}

export default App;
