import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import RestaurantList from './components/RestaurantList';


function App() {
  return (
    <Provider store = {store}>
      <RestaurantList />
    </Provider>
  );
}

export default App;
