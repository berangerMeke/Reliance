var app = angular.module('gaeaApp');

app.controller('homeCtrl', function($scope, $http, $interval, $translate) { 


    
/* SLIDE ACCUEIL*/
    /*slide 1*/ 
        $scope.slide1 ='images/homeSlide/2.JPG';
        $scope.Slide1titre1 = 'Peuple Bamiléké danse Ndop';
        $scope.Slide1titre2 = 'Le Ndop est une étoffe traditionnelle africaine portée par le peuple Bamiléké';
    /*slide 2*/
        $scope.slide2 ='images/homeSlide/3.JPG';
        $scope.Slide2titre1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        $scope.Slide2titre2 = 'Nulla convallis egestas rhoncus. Donec facilisis fermentum';
        $scope.Slide2detail = 'sem, ac viverra ante luctus vel.';
    /*slide 3*/
        $scope.slide3 ='images/RelPhotos/maternel14.png';
        $scope.Slide3titre1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        $scope.Slide3titre2 = 'Nulla convallis egestas rhoncus. Donec facilisis fermentum';
        $scope.Slide3detail = 'sem, ac viverra ante luctus vel.';

    
    
    
         $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
          };
    
    
  
    
});

