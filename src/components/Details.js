import React from 'react';
import { Segment, Image } from 'semantic-ui-react';
import * as Images from '../services/Images';
import { HostContext } from 'App';
import HostInfo from './HostInfo';
const Details = () => {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  const renderSomething = () => (
    <Image size="medium" src={Images.westworldLogo} />
  );

  const { selectedHost } = React.useContext(HostContext);
  return (
    <Segment id="details" className="HQComps">
      {selectedHost ? <HostInfo /> : renderSomething()}
    </Segment>
  );
};

export default Details;
