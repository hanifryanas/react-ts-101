import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import AddEmployee from './pages/AddEmployee';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/detail`} element={<Detail />} />
          <Route path={`/add`} element={<AddEmployee />} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
