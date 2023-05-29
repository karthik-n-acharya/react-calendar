import './App.css';
import Calendar from './components/Calendar/Calendar';

function App() {
  return (
    <div className="App">
     
      <Calendar date={new Date('2022-05-10')} />
    </div>
  );
}

export default App;
