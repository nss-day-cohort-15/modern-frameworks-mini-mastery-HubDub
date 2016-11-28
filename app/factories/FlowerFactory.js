"use strict";

app.factory("FlowerFactory", ($q, $http, FirebaseURL) => {

  let getAllFlowers = () => {
  // let flowers = [];
  return $q( (resolve, reject) => {
    $http.get(`${FirebaseURL}arrangements.json`)
    .success((flowerObj) => {
      console.log(flowerObj);

    resolve(flowerObj);
    })
    .error((error) => {
      reject(error);
    });
  });
};
  return {getAllFlowers}
});