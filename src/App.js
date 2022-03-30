import Calculator from './Component/Calculator';
import ToDo from './Component/ToDo';


function App() {
  return (
    <div className="container">
      <div className="vstack gap-2 col-md-5 mx-auto">
        {/* <Calculator /> */}
        <ToDo />
      </div>
    </div>
  );
}

export default App;
