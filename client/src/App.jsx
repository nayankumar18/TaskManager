import Header from './components/Header/Header'
import Home from './components/Home/Home'
import LoginForm from './components/Login/login'
import Dashboard from './components/Dashboard/Dashboard'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	
	return (

     <Router>
				<Header />
				<Routes>
				
          <Route path='/' element={<LoginForm/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          </Routes>
			</Router>
	);
}

export default App;
