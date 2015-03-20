module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    files: [
	    'bower_components/angular/angular.js',
		  'bower_components/angular-classy/angular-classy.js',
      'computed.js',
      'bower_components/angular-mocks/angular-mocks.js',
		  'examples/app.js',
		  'test/unit/*.js'
    ],
    autoWatch: true,
    singleRun: true,
    browsers: [
      // 'Firefox',
      'PhantomJS'
    ]
  });
};

