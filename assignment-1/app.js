(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  function LunchCheckController ($scope) {
    $scope.lunchItems = "";
    $scope.checkLunch = function(){
      $scope.message="";
      var lunchItems = $scope.lunchItems.replace(/\s+/g, '').split(',');
      if (lunchItems[0]==""){
        $scope.message="Please enter data first";
      }
      else if(lunchItems.length<=3){
        $scope.message = "Enjoy!";
      }
      else{
        $scope.message = "Too much!";
      }
    }
  };
}
)();
