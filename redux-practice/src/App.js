import './App.css';
import { Provider } from 'react-redux';
import Login from './Container/Authentication/Login/Index';
import Signup from "./Container/Authentication/Register/Index"
import configureStore from "../src/redux/ConfigureStore"

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {localStorage.getItem('token') ? <Signup /> : <Login />}
      </div>
    </Provider>
  );
}

export default App;
