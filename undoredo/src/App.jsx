import React from "react";
import useUndoRedo from "./UndoRedo.jsx";

const App = () => {
  const { state, setState, undo, redo, canUndo, canRedo } = useUndoRedo("");

  return (
    <div>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={undo} disabled={!canUndo}>Undo</button>
      <button onClick={redo} disabled={!canRedo}>Redo</button>
    </div>
  );
};

export default App;
