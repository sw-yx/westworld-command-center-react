import React from 'react';
import { Segment } from 'semantic-ui-react';
import { unstable_createResource as createResource } from 'react-cache';
import WestworldMap from 'components/WestworldMap';
import Headquarters from 'components/Headquarters';
import { Log } from 'services/Log';

export const HostContext = React.createContext();
const HostResource = createResource(() =>
  fetch('http://localhost:4000/hosts').then(res => res.json())
);

export const AreaContext = React.createContext();
const AreaResource = createResource(() =>
  fetch('http://localhost:4000/areas').then(res => res.json())
);

export const LogContext = React.createContext();

function App() {
  // As you go through the components you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.
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

function useLogs() {
  const [logs, setLogs] = React.useState([]);
  return {
    logWarn(msg) {
      setLogs([...logs, Log.warn(msg)]);
    },
    logNotify(msg) {
      setLogs([...logs, Log.notify(msg)]);
    },
    logError(msg) {
      setLogs([...logs, Log.error(msg)]);
    },
    clearLogs() {
      setLogs([]);
    },
    logs
  };
}

function useHosts(allHosts) {
  const [hosts, setHosts] = React.useState(allHosts);
  const [selectedHost, setSelectedHost] = React.useState(null);
  const editSelectedHost = obj => {
    let newSelectedHost;
    const newHosts = hosts.map(host => {
      if (host.id !== selectedHost.id) return host;
      newSelectedHost = { ...host, ...obj };
      return newSelectedHost;
    });
    setHosts(newHosts);
    setSelectedHost(newSelectedHost);
  };
  const activeHosts = hosts.filter(host => host.active);
  const coldHosts = hosts.filter(host => !host.active);
  return {
    hosts,
    setHosts,
    activeHosts,
    coldHosts,
    selectedHost,
    setSelectedHost,
    editSelectedHost
  };
}

export default App;
