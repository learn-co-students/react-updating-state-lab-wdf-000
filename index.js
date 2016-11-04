const React = require('react');
const ReactDOM = require('react-dom');

const DigitalClicker = require('./components/DigitalClicker');
const YouTubeDebugger = require('./components/YouTubeDebugger');
const Lucille = require('./components/Lucille');

ReactDOM.render(
  <div>
    <DigitalClicker />
    <YouTubeDebugger />
    <Lucille/>
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
