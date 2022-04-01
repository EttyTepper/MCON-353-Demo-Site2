import './App.css';
import * as React from 'react';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Home} from '../home/home';
import {Todo} from '../todo/todo';
import {Header} from '../header/header';
import {Chat} from '../chat/chat';
import { TodoProvider } from '../todo/context.jsx';

 
function App() {
  
  return (
    
    <div> 
   <TodoProvider>
   <HashRouter>
   <Header />
    <Routes>
      <Route path="/" element={<Home/>}></Route> {/*Route is top level domain*/}
      <Route path="/todo" element={<Todo />}> {/*This is an 'or' so either the Home pg will show or todo */}
      {/* if the two paths would be nested, both would show up at the same time, not what we want right now.
       sometimes you will want that like when you want the header to appear on every page */}
      </Route>
      <Route path="/chat" element={<Chat />}></Route>
    </Routes>
  </HashRouter>
  
  </TodoProvider>

    </div>
    
  );
}


export default App;
