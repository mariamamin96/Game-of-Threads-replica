App.controller('RegisterCtrl' , function( $scope , $location){


$scope.register= function(){
$location.url('/BusinessRegister');
},

$scope.registerCust= function(){
$location.url('/CustomerRegister');
}

$scope.viewClients= function(){
$location.url('/writeReview');
}





});
