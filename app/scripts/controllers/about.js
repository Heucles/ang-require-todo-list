define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name todoApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the todoApp
   */
  angular.module('todoApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
