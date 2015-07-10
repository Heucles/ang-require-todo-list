/*jshint unused: vars */
require.config({
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
  packages: [

  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'jquery',
  'angular',
  'app',
  'angular-route',
  'angular-cookies',
  'angular-sanitize',
  'angular-resource',
  'angular-animate',
  'angular-touch',
  'angular-ui-sortable'
], function($,angular, app, ngRoutes, ngCookies, ngSanitize, ngResource, ngAnimate, ngTouch, uiSortable) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});
