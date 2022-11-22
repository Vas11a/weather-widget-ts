import React, {FC} from 'react';
import WetherShow from './components/WetherShow';
import Form from './components/Form';

const App:FC = () => {
  return (
    <div>
      <WetherShow />
      <Form />
    </div>
  );
}

export default App;
