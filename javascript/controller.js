angular.module('routingControllers',[])
.controller('HomeController',function($scope) {
 //put your code here
 $scope.title="Home Page";
 })
 .controller('AboutController',function($scope) {
 //put your code here
 $scope.title="Who are we";
 })
 .controller('ContactController',function($scope) {
 //put your code here
 $scope.title="Say Hello";
 })
 .controller('FeaturedController',function($scope) {
 //put your code here
 $scope.title="Featured Photos";
 })
 .controller('ServicesController',function($scope) {
 //put your code here
 $scope.title="Services";
 })
 .controller('MagazineController',function($scope) {
 //put your code here
 $scope.title="Magazine";
 })
 .controller('PortraitController',function($scope) {
 //put your code here
 $scope.title="Portraits";
 })
 .controller('LandscapeController',function($scope) {
 //put your code here
 $scope.title="Landscapes";
 })
 .controller('ProductController',function($scope) {
 //put your code here
 $scope.title="Product Studio";
 })
 .controller('EventsController',function($scope) {
 //put your code here
 $scope.title="Events";
 })
 .controller('Personal-PortfolioController',function($scope) {
 //put your code here
 $scope.title="Personal Portfolio";
 })
 .controller('Web-DesignController',function($scope) {
 //put your code here
 $scope.title="Web Design";
 })
 .controller('Angular-TestController',function($scope) {
 //put your code here
 $scope.title="Angular Test Page";
 })
 .controller('DetailsController',function($scope,$routeParams) {
 //put your code here
 $scope.title="Details Page";
 $scope.wherefrom=$routeParams.page;
 });




 