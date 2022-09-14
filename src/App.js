import React, {  useContext, useState } from 'react';
import { Route, HashRouter } from "react-router-dom"
import Admin from './components/admin/Admin';
import { Context } from './container/Context';
const App = () => {

  const context = useContext(Context)


 
  return (
    <HashRouter>
      <Route path="/admin" component={Admin} exact/>
    </HashRouter>
  );
}

export default App;