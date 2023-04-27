import TipCalculator from "./Layout/TipCalcuator/TipCalculator";
import "./app.scss";

const App = () => {
  return (
    <main className="main">
      <div className="logo-block">
        <span className="logo-top-part">SPLI</span>TTER
      </div>
      <TipCalculator />
    </main>
  );
};

export default App;
