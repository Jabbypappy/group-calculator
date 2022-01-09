import "./App.css";
import NumBtn from "./components/ui/NumBtn";
import SubBtn from "./components/ui/SubBtn";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="Num-buttons">
        <NumBtn>1</NumBtn>
        <NumBtn>2</NumBtn>
        <NumBtn>3</NumBtn>
        <NumBtn>4</NumBtn>
        <NumBtn>5</NumBtn>
        <NumBtn>6</NumBtn>
        <NumBtn>7</NumBtn>
        <NumBtn>8</NumBtn>
        <NumBtn>9</NumBtn>
      </div>
      <div className="sub-buttons">
        <SubBtn>0</SubBtn>
        <SubBtn>Clear</SubBtn>
      </div>
    </div>
  );
}

export default App;
