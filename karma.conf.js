// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [ // setup all pluggins used
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {

      // Represents the directory when the html coverage files will be placed
      dir: require('path').join(__dirname, './coverage/unit-tests-sample'),

      // Reports used
      // html - generate html files
      // text-summary - generates console output
      reports: ['html', 'text-summary'],
      fixWebpackSourcePaths: true,
      // It`s possible to set a minimal value for each item
      thresholds: {
        // Represents variable declarations when it`s value change
        // utils.service /  information variable
        statements: 80,

        // Represents all the conditionals in code
        // Ifs and else
        // switch case
        // everything that creates more than one possibility
        branches: 80,

        // Represents the functions
        functions: 54,

        // Lines of code
        lines: 71,
      }
    },
    reporters: ['progress', 'kjhtml'], // karma jasmine html
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
