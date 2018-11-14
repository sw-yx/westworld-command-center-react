import React from 'react';
import { Segment } from 'semantic-ui-react';

import Area from 'components/Area';
import { HostContext, AreaContext } from 'App';

const WestworldMap = () => {
  const { activeHosts } = React.useContext(HostContext);
  const allAreas = React.useContext(AreaContext);
  console.log({ allAreas });
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
