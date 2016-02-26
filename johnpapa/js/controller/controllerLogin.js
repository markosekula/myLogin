(function () {

    angular
        .module('mainApp')
        .controller('controllerLogin', controllerLogin);

    controllerLogin.$inject = ['$location', 'loginService'];

    function controllerLogin($location, loginService) {

        var vm = this;
        vm.openKeyboard = openKeyboard;
        vm.message = '';
        vm.login = login;

        function login(user) {
            return Message(user).then(function () {
                console.log("Activated!");

            });
        }

        function Message(user) {
            return loginService.login(user)
                .then(function (data) {
                    vm.message = data;
                    return vm.message;

                });
        }

        function openKeyboard() {
            $location.path('/shop');
        }

    }


})();