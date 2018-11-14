import React from 'react';
import { Grid } from 'semantic-ui-react';
import Details from './Details';
import LogPanel from './LogPanel';
import ColdStorage from './ColdStorage';

function Headquarters() {
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
