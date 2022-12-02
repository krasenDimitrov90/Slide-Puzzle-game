import React from 'react';

import Board from './components/Board/Board';
import WinGame from './components/Board/WinGame';

const App = () => {

  const [win, setWin] = React.useState(false);

  const setWinHandler = () => {
    setWin(true);
  }

  return (
    <>
      {/* <Demo /> */}
      {/* {<WinGame />} */}
      {win
        ? <WinGame />
        : <Board setWinHandler={setWinHandler}
        />
      }
    </>
  );
}

export default App;
