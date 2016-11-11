angular.module('loginApp', [])
    .controller('loginController', loginController)
    .controller('registerController', registerController);

    loginController.$inject =['$http'];

    function loginController($http) {
        var login = this;

        login.submit = function() {
            console.log(login);
            var loginInfo = {

                email: login.email, 
                password: login.password
            }

            $http.post('/login', loginInfo)
                .then(function(res) {
                    console.info(res.data);
                    location.href = '/';
                }, function(err) {
                    // DO NOT FORGET!!!! an error callback
                    // when things go bad, you need this!!!!!!!!
                    console.error(err);
                });

        }
    };

    function registerController($http) {
        var register = this;

        register.submit = function() {
            console.log(register);
            var registerInfo = {
                
                email: register.email,       
                password: register.password,          
                firstname: register.firstname,    
                lastname: register.lastname,     
                birthday: register.birthday     
            }

            $http.post('/register', registerInfo)
                .then(function(res) {
                    console.info(res.data);
                    location.href = '/';
                }, function(err) {
                    // DO NOT FORGET!!!! an error callback
                    // when things go bad, you need this!!!!!!!!
                    console.error(err);
                });
        }

    
    };
