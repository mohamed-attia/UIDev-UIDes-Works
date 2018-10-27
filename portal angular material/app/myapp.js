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
        
  //default langua
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
 
// HomeModule // 
var homeModule = angular.module('homeModule', []);

// NavModule // 
var navModule = angular.module('navModule',[])

// modal module //
var modalModules = angular.module('modalModule',[]);

// side menu module //
var sideMenuModule = angular.module('sideMenuModule',[]);

 // Service definition
mainModule.factory('Language', function ($translate) {
    //add the languages you support here. ar stands for arabic
    var rtlLanguages = ['ar'];

    var isRtl = function() {
        var languageKey = $translate.proposedLanguage() || $translate.use();
        for (var i=0; i<rtlLanguages.length; i+=1) {
            if (languageKey.indexOf(rtlLanguages[i])>-1) 
                return true;
        }
        return false; 
    };

    //public api
    return {
        isRtl: isRtl
    };
});
 
// Nav Controller  //
modalModules.controller('navController', function ($mdDialog,$scope, $timeout, $mdSidenav,$translate) {

  // language
	$scope.changeLanguage = function () {
	  //use parameter needs to be part of a known locale Eg: en-UK, en, etc
	  $translate.use($scope.selectedLanguage);
	};

    this.showAdvanced = function (ev) {
        $mdDialog.show({
            controller: navController2,
            templateUrl: 'temps/login.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: this.customFullscreen // Only for -xs, -sm breakpoints.
        });

    };

    // modal con
    function navController2($scope, $mdDialog) {

        $scope.close = function () {
            $mdDialog.cancel();
        };
        $scope.hide = function () {
            $mdDialog.hide();
        };
        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }//end modal

    //side menu
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    }//end side menu
    $scope.showmenu = true;
 })
//.directive("compileTranslation",function($compile){
//     return {
//      //   template:"{{combiledData}}",
//         link:function($scope,elem){
//             console.log("inside directive")
//        $scope.combiledData=$compile("<span translate='title'></span>")($scope);
//      // console.log("eley rege3 b3d el cut",cut($scope.combiledData,true,10)) ;
//        elem.append($scope.combiledData)
//        angular.element($scope.combiledData[0]).addClass("test2");
//       console.log(angular.element(".test2").innerText) ;
//      //  console.log("data after compilation",$scope.combiledData[0].toString())
//     //  var parser= new DOMParser();
//     // var doc = parser.parseFromString($scope.combiledData[0].toString(), "text/xml")
//     console.log(angular.element(".test span"));
//     console.log(doc)
//         }
//     }
// })

// Home //
homeModule.controller('homeCon', function ($scope) {
    $scope.x = true;
    $scope.y = true;
    $scope.z = true;
    $scope.a = true;
    $scope.b = true;
});

// Side Menu //
sideMenuModule.controller('sideMenuCon', function () {

    //console.log("this is side menu")
});