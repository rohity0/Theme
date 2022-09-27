
import { useContext } from 'react';
import './App.css';
import { Body } from './Component/Body';
import { Sidebar } from './Component/SideBar';
import { AppContext } from './Context/Context';
 


function App() {
  const {theme} = useContext(AppContext)

  let style = theme? "AppDark" : "App"

  console.log(style)
  return (
    <div className={style}>
     <Sidebar />
     <Body />
    </div>
  );
}

export default App;
