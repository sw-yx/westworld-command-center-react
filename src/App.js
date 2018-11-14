import React from 'react';
import { Segment } from 'semantic-ui-react';
import { unstable_createResource as createResource } from 'react-cache';
import WestworldMap from 'components/WestworldMap';
import Headquarters from 'components/Headquarters';
import { useLogs, useHosts } from 'hooks';

const HostContext = React.createContext();
export const HostResource = createResource(() =>
  fetch('http://localhost:4000/hosts').then(res => res.json())
);
export const LogContext = React.createContext();

// instead just export the resource...
export const AreaResource = createResource(() =>
  fetch('http://localhost:4000/areas').then(res => res.json())
);

function App() {
  const allHosts = HostResource.read();
  return (
    <LogContext.Provider value={useLogs()}>
      <HostContext.Provider value={useHosts(allHosts)}>
        <Segment id="app">
          <WestworldMap />
          <Headquarters />
        </Segment>
      </HostContext.Provider>
    </LogContext.Provider>
  );
}

export default App;
