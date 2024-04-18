import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionCounter from './components/FunctionalCounter';
import ConditionalComponent from './components/ConditionalComponent';
import Product from './components/Product';
import FormSubmittion from './components/FormSubmittion';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Todo></Todo>
      {/* <FormSubmittion></FormSubmittion> */}
      {/* <Product></Product> */}
      {/* <ConditionalComponent></ConditionalComponent> */}
      {/* <FunctionCounter></FunctionCounter> */}
      {/* <header className="App-header">
        <Hello/>
        <Message/>
        <Profile firstname = 'Perito' lastname='Moreno' ></Profile>
        <Counter/>
        <Resume name='Perito'></Resume>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
