'use strict';

require('../stylesheets/app.scss');

var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
      </div>
    );
  }
});

module.exports = App;
