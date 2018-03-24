import React from 'react';
import { Button } from 'semantic-ui-react';
// import EntryList from './EntryList';

const Dashboard = () => {
  return (
    <div>
      {/* <EntryList /> */}
      hey I am dashboard
      <Button
        content="Add Entry"
        icon="plus"
        labelPosition="right"
        floated="right"
      />
    </div>
  );
};

export default Dashboard;
