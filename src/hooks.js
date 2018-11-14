import React from 'react';
import { Log } from 'services/Log';

export function useLogs() {
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

    export function useHosts(allHosts) {
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
