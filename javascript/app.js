// create the module and name it mainApp
// also include ngRoute for all our routing needs
angular.module('routingApp', ['ngRoute','routingControllers']);
// configure our routes
angular.module('routingApp').config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'templates/home.html',
			controller  : 'HomeController'
		})
		// route for the about page
		.when('/about', {
			templateUrl : 'templates/about.html',
			controller  : 'AboutController'
		})
		// route for the contact page
		.when('/contact', {
			templateUrl : 'templates/contact.html',
			controller  : 'ContactController'
		})

		// route for the featured page
		.when('/featured', {
			templateUrl : 'templates/featured.html',
			controller  : 'FeaturedController'
		})

		// route for the services page
		.when('/services', {
			templateUrl : 'templates/services.html',
			controller  : 'ServicesController'
		})

		// route for the magazine page
		.when('/magazine', {
			templateUrl : 'templates/magazine.html',
			controller  : 'MagazineController'
		})

		// route for the portrait page
		.when('/portrait', {
			templateUrl : 'templates/portrait.html',
			controller  : 'PortraitController'
		})

		// route for the landscape page
		.when('/landscape', {
			templateUrl : 'templates/landscape.html',
			controller  : 'LandscapeController'
		})

		// route for the product page
		.when('/product', {
			templateUrl : 'templates/product.html',
			controller  : 'ProductController'
		})

		// route for the events page
		.when('/events', {
			templateUrl : 'templates/events.html',
			controller  : 'EventsController'
		})

		// route for the personal-portfolio page
		.when('/personal-portfolio', {
			templateUrl : 'templates/personal-portfolio.html',
			controller  : 'Personal-PortfolioController'
		})

		// route for the web-design page
		.when('/web-design', {
			templateUrl : 'templates/web-design.html',
			controller  : 'Web-DesignController'
		})
		// route for the web-design page
		.when('/angular-test', {
			templateUrl : 'templates/angular-test.html',
			controller  : 'Angular-TestController'
		})




		
		
		.otherwise({redirectTo: '/'}); ;
});

	
