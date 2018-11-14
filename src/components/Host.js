import React from 'react';
import { Card } from 'semantic-ui-react';
import { HostContext } from 'App';

const Host = ({ host }) => {
  const { selectedHost, setSelectedHost } = React.useContext(HostContext);
  return (
    <Card
      className={`host ${selectedHost && selectedHost.id === host.id ? 'selected' : ''}`}
      onClick={() => setSelectedHost(host)}
      image={host.imageUrl}
      raised
    />
  );
};

export default Host;
