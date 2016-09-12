"use strict";

app.factory("FlowerFactory", ($q, $http, FirebaseURL) => {

  let getAllFlowers = () => {
  let flowers = [];
  return $q( (resolve, reject) => {
    $http.get(`${FirebaseURL}arrangements.json`)
    .success((flowerObj) => {
      console.log(flowerObj);
      // Object.keys(flowerObj).forEach((key) => {
      //   flowerObj[key].id = key;
      //   flowers.push(flowerObject[key]);
      // });
    resolve(flowersObj);
    })
    .error((error) => {
      reject(error);
    });
  });
};
  return {getAllFlowers}
});