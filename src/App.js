import logo from './logo.svg';
import './App.css';
// import ListItem from './components/listItem';
import OrderedList from './components/OrderedList';

function App() {

  const nameList = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
    "Ivy",
    "Jack"
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <OrderedList itemList = {nameList}/>
        
      </header>
    </div>
  );
}

export default App;
