"use strict";

app.controller("ListFlowersCtrl", function ($scope, FlowerFactory, $routeParams, $location) {
  //will delete these unused variables as soon as I figure this out
  // let holidays = [];
  // let bereavements = [];
  // let miscs = [];
  // let groups = [];
  let flowers = [];

    FlowerFactory.getAllFlowers()
    .then( (flowerObj) => {
        console.log("in ctrl-flower object", flowerObj);

        for (var key in flowerObj) {
          console.log(flowerObj[key]);
          flowers.push(flowerObj[key]);
        }
        console.log(flowers);
        //I'm starting to change stuff
        $scope.ourGrouper = "category";
        $scope.flowers = flowers;
    });

});

// I tried to separate these into different arrays inside objects to do an ng-repeat inside an ng-repate. totally wrong way to go but since I haven't figured it out completely I don't want to erase...
        //   if (flowerObj[key].category === "holiday") {
        //     holidays.push(flowerObj[key])
        //   } else if (flowerObj[key].category === "bereavement") {
        //     bereavements.push(flowerObj[key])
        //   } else miscs.push(flowerObj[key])
        // };
        // console.log("holiday", holidays);
        // console.log("bereavement", bereavements);
        // console.log("misc", miscs);


        // let holidayObject = {
        //   holiday
        // };
        // // console.log("holidayObject", holidayObject);
        // let bereavementObject = {
        //   bereavement
        // };
        // let miscObject = {
        //   misc
        // };
        // groups.push(holidayObject);
        // groups.push(bereavementObject);
        // groups.push(miscObject);
        // console.log(groups);
        // $scope.groups = groups;
