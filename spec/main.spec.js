'use strict';

describe('main', function () {
  it('should render when required', function () {
    var appWrapper = document.createElement('div');
    appWrapper.id = 'app';
    document.body.appendChild(appWrapper);

    require('../app/index.js');
    expect(document.querySelector('body > #app > .App')).toBeDefined();
  });
});
