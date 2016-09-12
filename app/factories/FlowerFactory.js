"use strict";

app.factory("FlowerFactory", ($q, $http, FirebaseURL) => {

  let getAllFlowers = () => {
  let flowers = [];
  return $q( (resolve, reject) => {
    $http.get(`${FirebaseURL}flowers.json`)
    .success((flowerObj) => {
      Object.keys(flowerObj).forEach((key) => {
        flowerObj[key].id = key;
        flowers.push(flowerObject[key]);
      });
    resolve(flowers);
    })
    .error((error) => {
      reject(error);
    });
  });
};
  return {getAllFlowers}
});