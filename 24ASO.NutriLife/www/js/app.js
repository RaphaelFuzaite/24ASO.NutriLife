// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        /*if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
  
      }*/
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })
    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html'
            }
        }
    })
    .state('app.inicio', {
        url: '/inicio',
        views: {
            'menuContent': {
                templateUrl: 'templates/inicio.html',
                controller: 'InicioCtrl'
            }
        }
    })
    .state('app.refeicoes', {
        url: '/refeicoes',
        views: {
            'menuContent': {
                templateUrl: 'templates/refeicoes.html',
                controller: 'RefeicoesCtrl'
            }
        }
    })
    .state('app.refeicao', {
        url: '/refeicoes/:refeicaoId',
        views: {
            'menuContent': {
                templateUrl: 'templates/refeicao.html',
                controller: 'RefeicoesCtrl'
            }
        }
    })
    .state('app.recomendacoes', {
        url: '/recomendacoes',
        views: {
            'menuContent': {
                templateUrl: 'templates/recomendacoes.html',
                controller: 'RecomendacoesCtrl'
            }
        }
    })
    .state('app.nutricionistas', {
        url: '/nutricionistas',
        views: {
            'menuContent': {
                templateUrl: 'templates/nutricionistas.html',
                controller: 'NutricionistasCtrl'
            }
        }
    })
    .state('app.nutricionista', {
        url: '/nutricionistas/:nutricionistaId',
        views: {
            'menuContent': {
                templateUrl: 'templates/nutricionista.html',
                controller: 'NutricionistasCtrl'
            }
        }
    })
    .state('app.modelos-alimentares', {
        url: '/modelos-alimentares',
        views: {
            'menuContent': {
                templateUrl: 'templates/modelos.alimentares.html',
                controller: 'ModelosAlimentaresCtrl'
            }
        }
    })
    .state('app.modelo', {
        url: '/modelos-alimentares/:modeloId',
        views: {
            'menuContent': {
                templateUrl: 'templates/modelo.alimentar.html',
                controller: 'ModeloAlimentarCtrl'
            }
        }
    })
    .state('app.registrar', {
        url: '/registrar',
        views: {
            'menuContent': {
                templateUrl: 'templates/registrar.html',
                controller: 'RegistrarCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
