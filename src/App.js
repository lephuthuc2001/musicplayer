import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./TrackList";
import Controller from "./Controller";
import ImgTitle from "./ImgTitle";
const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <ImgTitle/>
        <TrackList />
        <Controller />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
