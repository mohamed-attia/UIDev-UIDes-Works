var mainModule =
angular.module("itsPortal", ['ui.router', 'ngMaterial', 'homeModule','navModule','modalModule','sideMenuModule','pascalprecht.translate'])

.config(['$urlRouterProvider', '$stateProvider','$translateProvider', function ($urlRouterProvider, $stateProvider,$translateProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('app', {
            abstract: true,
            views: {
                nav: {
                    templateUrl: 'temps/nav.html',
                    controller:'navController',
                    controllerAs:'navController'
                }, 
                filterlbar: {
                    templateUrl: 'temps/filterbar.html'
                },

                '': {
                    templateUrl: 'temps/content.html'
                },

                footer: {
                    templateUrl: 'temps/footer.html'
                },
                sidemenu: {
                    templateUrl: 'temps/sidemenu.html',
                    controller:'navController'
                }

            }
        }) //end parent state

    .state('app.home', {
            url: '/home',
            templateUrl: 'temps/home.html',
            controller: 'homeCon',
            controllerAs: 'homeCon'
        }) //end home state

    .state('app.project', {
            url: '/project',
            templateUrl: 'temps/project.html'
        }) //end project state

    .state('app.research', {
            url: '/research',
            templateUrl: 'temps/research.html'
        }) //end research state
        //  .state('app.lolo', {
            
        //     url: '/lolo2',
        //     abstract: true,
        //     views: {
        //         nav: {
        //             templateUrl: 'temps/lolo2.html'
        //         }, 
        //         filterlbar: {
        //             templateUrl: 'temps/filterbar.html'
        //         },
        //     }
        // }) 
        
  //default language
  $translateProvider.preferredLanguage('en');
	//fallback language if entry is not found in current language
	$translateProvider.fallbackLanguage('es');
  //load language entries from files
	$translateProvider.useStaticFilesLoader({
		prefix: 'assets/language/', //relative path Eg: /assets/languages/
		suffix: '.json' //file extension
	});
       
}])  

 .run(function($rootScope, Language) {
   //make the service available     
   $rootScope.Language = Language;
})

// string filter
// mainModule.filter('cut', function () {
//         return function (value, wordwise, max, tail) {
//             if (!value) return '';

//             max = parseInt(max, 10);
//             if (!max) return value;
//             if (value.length <= max) return value;

//             value = value.substr(0, max);
//             if (wordwise) {
//                 var lastspace = value.lastIndexOf(' ');
//                 if (lastspace != -1) {
//                   //Also remove . and , so its gives a cleaner result.
//                   if (value.charAt(lastspace-1) == '.' || value.charAt(lastspace-1) == ',') {
//                     lastspace = lastspace - 1;
//                   }
//                   value = value.substr(0, lastspace);
//                 }
//             }

//             return value + (tail || ' …');
//         };
//     });
 