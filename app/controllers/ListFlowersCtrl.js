"use strict";

app.controller("ListFlowersCtrl", function ($scope, FlowerFactory, $routeParams, $location) {

  // let userId = $scope.$parent.getUser();

    FlowerFactory.getAllFlowers()
    .then( (flowerObj) => {
        console.log("in ctrl-flower object", flowerObj);
        $scope.flowers = flowerObj
        console.log("in ctrl -", $scope.flowers);
    });

});
