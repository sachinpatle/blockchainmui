import './App.css';
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Services from './components/Services'
import Transaction from './components/Transaction';
function App() {
  return (
    <div>
     <Navbar/>
     <Welcome/>
     <Services/>
     <Transaction/>
    </div>
  );
}

export default App;
