import { h } from 'preact';
import { ConfigContextConnected } from '../context/Config.context';
import Gallery from './Gallery';

const App = ({ config }) => {
  return (
    <ConfigContextConnected config={config}>
      <Gallery/>
    </ConfigContextConnected>
  );
};

export default App;
