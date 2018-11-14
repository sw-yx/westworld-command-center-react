import React from 'react';
import { Segment } from 'semantic-ui-react';
import { unstable_createResource as createResource } from 'react-cache';
import WestworldMap from 'components/WestworldMap';
import Headquarters from 'components/Headquarters';
import { useLogs, useHosts } from 'hooks';

export const HostContext = React.createContext();
const HostResource = createResource(() =>
  fetch('/.netlify/functions/hosts').then(res => res.json())
);

export const AreaContext = React.createContext();
const AreaResource = createResource(() =>
  fetch('/.netlify/functions/areas').then(res => res.json())
);

export const LogContext = React.createContext();

function App() {
  const allHosts = HostResource.read();
  const allAreas = AreaResource.read();
  console.log({ allAreas });
  return (
    <LogContext.Provider value={useLogs()}>
      <AreaContext.Provider value={allAreas}>
        <HostContext.Provider value={useHosts(allHosts)}>
          <Segment id="app">
            <WestworldMap />
            <Headquarters />
          </Segment>
        </HostContext.Provider>
      </AreaContext.Provider>
    </LogContext.Provider>
  );
}

export default App;
