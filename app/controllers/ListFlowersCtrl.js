"use strict";

app.controller("ListFlowersCtrl", function ($scope, FlowerFactory, $routeParams, $location) {

  // let userId = $scope.$parent.getUser();
    $scope.flowers = [];

    FlowerFactory.getAllFlowers()
    .then( (flowerArray) => {
        $scope.flowers = flowerArray;
        // $scope.selectedPin = $scope.pins.filter(function(pin){
        //     return pin.id === $routeParams.pinId;
        // })[0];
    });

});
