import React from 'react';
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider
} from 'semantic-ui-react';
import { clean } from 'utils';

import { HostContext, AreaResource } from 'App';
import { LogContext } from 'App';

const HostInfo = () => {
  const { selectedHost, editSelectedHost } = React.useContext(HostContext);
  const { logNotify, logWarn } = React.useContext(LogContext);

  const handleChange = (e, { value }) => {
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Don't worry too much about how this works.
    // Just know that Semantic dropdowns take options as an array of objects in this form:
    // {key: "some_text", text: "Some Text", value: "some_text"}
    // You get access to the last one for whatever is selected
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
    // Also, there's more info on this below
    editSelectedHost({ area: value });
    logNotify(`${selectedHost.firstName} set in area ${clean(value)}`);
  };

  const allAreas = AreaResource.read();
  const options = allAreas.map(area => ({
    key: area.name,
    value: area.name,
    text: clean(area.name)
  }));
  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          style={{ overflow: 'hidden', height: '160px', width: '130px' }}
          floated="left"
          size="small"
          src={selectedHost && selectedHost.imageUrl}
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {selectedHost && selectedHost.firstName} |{' '}
              {selectedHost.gender === 'Male' ? (
                <Icon name="man" />
              ) : (
                <Icon name="woman" />
              )}
            </Card.Header>
            <Card.Meta>
              <Radio
                style={{ margin: '10px' }}
                slider
                onChange={() => {
                  editSelectedHost({ active: !selectedHost.active });
                  if (!selectedHost.active)
                    logWarn(`${selectedHost.firstName} Activated`);
                  else logNotify(`Decommissioned ${selectedHost.firstName}`);
                }}
                label={'AmIActive?'}
                checked={selectedHost.active}
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleChange}
              value={selectedHost.area}
              selection
              options={options}
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
};
/* This is the value of whatever is currently selected. See example below */
/*
                Pass an array of objects to 'options' like so:
                [{key: "area_one" text: "Area One" value: "area_two"}, {key: "area_two" text: "Area Two" value: "area_two"}]
                The value should be set to whatever you want currently selected. Like "area_two".
                The dropdown will display whatever corresponds to the test key, like "Area Two".
                  */
export default HostInfo;
