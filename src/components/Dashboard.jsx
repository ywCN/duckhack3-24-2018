import React from 'react';
import { Button } from 'semantic-ui-react';
import EntryList from './EntryList';

const Dashboard = () => {
  return (
    <div>
      <EntryList />
      <Button content="Add Entry" icon="plus" labelPosition="right" />
    </div>
  );
};

export default Dashboard;
