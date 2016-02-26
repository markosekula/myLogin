(function () {

    angular
        .module('mainApp')
        .factory('loginService', loginService);

    loginService.$inject = ['$http', '$location', 'sessionService'];

    function loginService($http, $location, sessionService) {
        var vm = this;

        return {
            login: login,
            logout: logout,
            islogged: islogged

        };

        function login(user) {
            return $http.post('http://localhost:8082/Seminarski/rest/admin/login', user).then(msgSucces);

            function msgSucces(msg) {
                var uid = msg.data;
                if (uid === 'true') {
                    console.log(uid)
                    sessionService.set('user', uid);
                    $location.path('/home');
                } else {
                    vm.message = 'incorrect information';
                    return vm.message;
                    $location.path('/login');
                }

            }

        }

        function logout() {
            sessionService.destroy('user');
            $location.path('/login');
        }

        function islogged() {
            //console.log("aa " + sessionService.get('user'));
            if (sessionService.get('user')) return true;

        }




    }

})();