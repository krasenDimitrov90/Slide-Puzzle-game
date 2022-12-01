import React from 'react';

import { useSpring, animated } from '@react-spring/web';


import Demo from './Demo';
import Board from './components/Board/Board';
import WinGame from './components/Board/WinGame';

const App = () => {

  const [win, setWin] = React.useState(false);

  const setWinHandler = () => {
    setWin(true);
  }

  return (
    <div>
      {/* <Demo /> */}
      {win 
        ? <WinGame />
        : <Board setWinHandler={setWinHandler}/>}
      
    </div>
  );
}

export default App;
