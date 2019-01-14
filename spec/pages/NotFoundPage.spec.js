/* eslint-disable no-unused-vars */
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

describe('NotFoundPage', function () {
  var Elem;

  beforeEach(function () {
    Elem = require('../../app/pages/NotFoundPage.jsx');
  });

  it('should render when given required props', function () {
    var component = (<Elem id="test-elem" />);
    ReactTestUtils.renderIntoDocument(component);

    expect(document.getElementById('test-elem')).toBeDefined();
  });
});
