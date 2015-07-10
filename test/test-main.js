var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    // Removed "Spec" naming from files
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/scripts',

    paths: {
    jquery: '../../bower_components/jquery/dist/jquery',
    angular: '../../bower_components/angular/angular',
    'angular-route': '../../bower_components/angular-route/angular-route',
    'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
    'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
    'angular-resource': '../../bower_components/angular-resource/angular-resource',
    'angular-animate': '../../bower_components/angular-animate/angular-animate',
    'angular-touch': '../../bower_components/angular-touch/angular-touch',
    'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
    'jquery-ui': '../../bower_components/jquery-ui/jquery-ui',
    'angular-ui-sortable': '../../bower_components/angular-ui-sortable/sortable'
  },

    // shim: {
    //     'angular' : {'exports' : 'angular'},
    //     'angular-route': ['angular'],
    //     'angular-cookies': ['angular'],
    //     'angular-sanitize': ['angular'],
    //     'angular-resource': ['angular'],
    //     'angular-animate': ['angular'],
    //     'angular-touch': ['angular'],
    //     'angular-mocks': {
    //       deps:['angular'],
    //       'exports':'angular.mock'
    //     }
    // },

      shim: {
    angular: {
      deps: [
        'jquery'
      ],
      exports: 'angular'
    },
    'angular-route': [
      'angular'
    ],
    'angular-cookies': [
      'angular'
    ],
    'angular-sanitize': [
      'angular'
    ],
    'angular-resource': [
      'angular'
    ],
    'angular-animate': [
      'angular'
    ],
    'angular-touch': [
      'angular'
    ],
    'angular-mocks': {
      deps: [
        'angular'
      ],
      exports: 'angular.mock'
    },
    'angular-ui-sortable': [
      'jquery',
      'angular'
    ],
    'jquery-ui': {
      deps: [
        'jquery'
      ]
    }
  },
  priority: [
    'jquery',
    'angular'
  ],

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
