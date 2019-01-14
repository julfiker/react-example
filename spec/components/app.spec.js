/* eslint-disable no-unused-vars */
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

describe('App', function () {
  var Elem;

  beforeEach(function () {
    Elem = require('../../app/components/app.jsx');
  });

  it('should render when given required props', function () {
    var component = (<Elem id="test-elem" />);
    ReactTestUtils.renderIntoDocument(component);

    expect(document.getElementById('test-elem')).toBeDefined();
  });
});
