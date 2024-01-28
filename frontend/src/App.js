import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<LoginPage/>}/>
            <Route exact path="/home" element={<Home/>}/>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;