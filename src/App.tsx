import { useMemo, useReducer } from 'react';

import machineReducer from 'context/reducers/machineReducer';
import MachineContext, { initialMachineState } from 'context/machineContext';

import Machine from 'components/Machine/Machine';

function App() {
  const [machineState, dispatch] = useReducer(machineReducer, initialMachineState);
  const machineContext = useMemo(
    () => ({ machineState, dispatch }),
    [machineState, dispatch]
  );

  return (
    <main className="main">
      <MachineContext.Provider value={machineContext}>
        <Machine />
      </MachineContext.Provider>
    </main>
  );
}

export default App;
