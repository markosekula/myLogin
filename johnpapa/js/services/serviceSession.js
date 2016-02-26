(function () {

    angular
        .module('mainApp')
        .factory('sessionService', sessionService);

    sessionService.$inject = ['$http'];

    function sessionService($http) {

        return {
            set: set,
            get: get,
            destroy: destroy

        };

        function set(key, value) {
            return sessionStorage.setItem(key, value);
        }

        function get(key) {
            return sessionStorage.getItem(key);
        }

        function destroy(key) {
            return sessionStorage.removeItem(key);
        }


    }


})();