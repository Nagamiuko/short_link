import React, { useEffect } from 'react';
import './App.css';
import HomePage from "./pages/HomePage"
import {Routes , Route  , BrowserRouter} from "react-router-dom"
import HistoryPage from './pages/HistoryPage';
import Store from './redux/store';
import { getHistory } from './redux/action/histrory';
function App() {
   useEffect(()=>{
     Store.dispatch(getHistory())
   },[])
  return (
     <BrowserRouter>
       <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/history' element={<HistoryPage/>}/>
       </Routes>
     </BrowserRouter>
  );
}

export default App;
