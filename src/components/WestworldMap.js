import React from 'react';
import { Segment } from 'semantic-ui-react';

import Area from 'components/Area';
import { HostContext, AreaResource } from 'App';

const WestworldMap = () => {
  const { activeHosts } = React.useContext(HostContext);
  const allAreas = AreaResource.read();
  return (
    <Segment id="map">
      {allAreas &&
        allAreas.map(areaData => {
          const hostsInArea = activeHosts.filter(
            ({ area }) => area === areaData.name
          );
          return <Area {...areaData} hosts={hostsInArea} key={areaData.id} />;
        })}
    </Segment>
  );
};

export default WestworldMap;
