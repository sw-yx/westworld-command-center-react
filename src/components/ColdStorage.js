import React from 'react';
import { Segment } from 'semantic-ui-react';
import HostList from './HostList';
import { HostContext } from 'App';

const ColdStorage = () => {
  const { coldHosts } = React.useContext(HostContext);
  
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
      <HostList hosts={coldHosts} />
      </Segment>
    </Segment.Group>
  );
};

export default ColdStorage;
