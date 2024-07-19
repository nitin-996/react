import Player from './components/Player.jsx';
import Timer from './components/Timer.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <Timer targettime={5} title="new game"/>
      <Timer targettime={1} title="easy"/>
          </>
  );
}

export default App;
