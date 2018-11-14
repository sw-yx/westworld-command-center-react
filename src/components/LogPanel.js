import React from 'react';
import { Segment, Button } from 'semantic-ui-react';
import { LogContext } from 'App';

const LogPanel = () => {
  const { logs, clearLogs } = React.useContext(LogContext);
  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {logs.map((log, i) => (
          <p key={i} className={log.type}>
            {log.msg}
          </p>
        ))}
      </pre>
      <Button fluid color={logs.length ? 'red' : 'grey'} onClick={clearLogs}>
        Clear Logs
      </Button>
    </Segment>
  );
};

export default LogPanel;
