import React, { useEffect } from 'react'
import './App.css';
import { useDispatch} from 'react-redux'
import { fetchAllData } from './Actions/DataAction';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';


const App = () => {
  const dispatch = useDispatch();
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return  (
    <div style={{paddingTop : "10px"}} >
      <NavBar/>
      <hr style={{marginTop : "10px"}} />
      <Main/>
    </div>
  )
}

export default App