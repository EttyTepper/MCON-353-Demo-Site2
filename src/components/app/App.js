import './App.css';

import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Home} from '../home/home';
import {Todo} from '../todo/todo';
import {Header} from '../header/header';

// const TodoContext = React.createContext();
function App() {
  return (
    <div> 
   
   <BrowserRouter>
   <Header />
    <Routes>
      <Route path="/" element={<Home/>}></Route> {/*Route is top level domain*/}
      <Route path="/todo" element={<Todo />}> {/*This is an 'or' so either the Home pg will show or todo */}
      {/* if the two paths would be nested, both would show up at the same time, not what we want right now.
       sometimes you will want that like when you want the header to appear on every page */}
      </Route>
    </Routes>
  </BrowserRouter>
    

    </div>
    
  );
}


export default App;
