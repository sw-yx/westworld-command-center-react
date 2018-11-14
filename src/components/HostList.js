import React from 'react';
import { Card } from 'semantic-ui-react';
import Host from './Host';
const HostList = ({ hosts }) => {
  console.log({ hosts });
  return (
    <Card.Group itemsPerRow={6}>
      {hosts && hosts.map(host => (
        <Host host={host} key={host.id} />
      ))}
    </Card.Group>
  );
};

export default HostList;
