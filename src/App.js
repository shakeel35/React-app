import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <Layout>
      <p>Burger</p>
      <BurgerBuilder/>
    </Layout>
  );
}

export default App;
