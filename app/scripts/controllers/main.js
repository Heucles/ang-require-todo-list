define(['angular','jquery','jquery-ui'], function (angular, $, jqueryUi) {
  'use strict';

  /**
   * @ngdoc function
   * @name todoApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the todoApp
   */
   angular.module('todoApp.controllers.MainCtrl', [])
   .controller('MainCtrl', function ($scope) {
    $scope.todos=[];

    $scope.addTodo = function(){
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

  });
 });