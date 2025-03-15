import logo from './logo.svg';
import './App.css';
// import ListItem from './components/listItem';
import OrderedList from './components/OrderedList';
import UnorderedList from './components/UnorderedList';

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
        <UnorderedList itemList = {nameList}/>
        
      </header>
    </div>
  );
}

export default App;
