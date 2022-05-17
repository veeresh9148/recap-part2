import "./App.css";
import StateTutorial from "./UseState/StateTutorial"
import RefTutorial from "./UseRef/RefTutorial"
import ReducerTutorial from "./UseReducer/ReducerTutorial"
import MemoTutorial from "./UseMemo/MemoTutorial"
import LayoutEffect from "./UseLayoutEffect/LayoutEffectTutorial"
import LayoutEffectTutorial from "./UseLayoutEffect/LayoutEffectTutorial"
import ContextTutorial from "./UseContext/ContextTutorial"
import CallbackTutorial from "./UseCallback/CallbackTutorial"

function App() {
  return (
    <div className="App">
      <StateTutorial />
      <RefTutorial />
      <ReducerTutorial />
      <MemoTutorial />
      <LayoutEffect />
      <LayoutEffectTutorial />
      <ContextTutorial />
      <CallbackTutorial />
    </div>
  );
}

export default App;
