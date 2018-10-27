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