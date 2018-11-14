import React from 'react';
import HostList from './HostList';
import { clean } from 'utils';

const Area = ({ id, name, hosts }) => {
  const cleanName = clean(name);
  return (
    <div className="area" id={name}>
      <h3 className="labels">{cleanName}</h3>

      <HostList hosts={hosts} />
    </div>
  );
};

Area.propTypes = {
  hosts: function(props, propName, componentName) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${
          props.name
        }. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  }
};

export default Area;
