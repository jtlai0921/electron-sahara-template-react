require('./styles/index.less');

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Entry = React.createClass({
  render: function(){
    return (
      <div id="app">
        <h1>Electron React Starter Kit</h1>
        <div id="data">Sending message to Electron...</div>
      </div>
    )
  }
});

ReactDOM.render(<Entry />, window.document.body);
