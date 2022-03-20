import ClockList from './component/ClockList';
import Counter from './component/Counter';

function App() {
  console.log('App compent render');
  const quantities = [1, 2, 3];
  return (
    <div className="App">
      <ClockList quantities={quantities} />
      <Counter />
    </div>
  );
}

export default App;
