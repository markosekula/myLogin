(function () {
    angular
        .module('mainApp', ['ngRoute'])
        .config(config).run(run);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'controllerLogin',
                controllerAs: 'vm'
            })
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'controllerHome',
                controllerAs: 'vm'
            })
            .when('/shop', {
                templateUrl: 'views/item-list.html',
                controller: 'controllerList',
                controllerAs: 'vm'
            })
            .when('/item/:index', {

                templateUrl: 'views/item-detail.html',
                controller: 'controllerService',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    };

    function run($rootScope, $location, loginService) {

        run.$inject = ['$rootScope', '$location', 'loginService'];

        var routepermission = ['/home'];
        $rootScope.$on('$routeChangeStart', $routeChangeStart);

        function $routeChangeStart() {
            // console.log('exit: ' + routepermission.indexOf($location.path()));
            //console.log('logged: ' + loginService.islogged());

            if (routepermission.indexOf($location.path()) != -1 && !loginService.islogged()) {
                $location.path('/login');
            }

        }
    }

})();