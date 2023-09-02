import Counter from "./Components/Counter";
import ComponentA from "./Components/ComponentA";
import CounterContextProvider from "./Contexts/CounterContext";

const App = () => {
  return (
    <CounterContextProvider>
      <div className="App d-flex justify-content-center mt-5">
        <Counter />
      </div>
      <ComponentA />
    </CounterContextProvider>
  );
};

export default App;
