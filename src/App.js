import Clock from './component/Clock';
import Counter from './component/Counter';

function App() {
  console.log('App compent render');
  return (
    <div className="App">
      <Clock locale='bn-BD' />
      <Counter />
    </div>
  );
}

export default App;
