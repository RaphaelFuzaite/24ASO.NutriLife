angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $ionicHistory, $timeout, $state) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function (auth) {
        $scope.modal.show();
    };

    $scope.loginData = {
        username: "raphaelfuzaite@gmail.com",
        password: "123456"
    }

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        $scope.loginData.authenticated = true;
        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go("app.inicio", {}, { location: "replace", reload: true });
        }, 1000);
    };
})

.controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
})

.controller('PlaylistCtrl', function ($scope, $stateParams, $state) {
})

.controller('InicioCtrl', function($scope, $state){
    $scope.inicio = {
        refeicaoNome: "",
        refeicaoImagem: ""
    };

    var now = new Date();
    if (now.getHours() >= 5 && now.getHours() < 12) {
        $scope.inicio.id = 1;
        $scope.inicio.refeicaoNome = "Café da manhã";
        $scope.inicio.refeicaoImagem = "img/cafe-da-manha.jpg";
    } else if (now.getHours() >= 12 && now.getHours() < 15) {
        $scope.inicio.id = 2;
        $scope.inicio.refeicaoNome = "Almoço";
        $scope.inicio.refeicaoImagem = "img/almoco.jpg";
    } else if (now.getHours() >= 15 || now.getHours() < 5) {
        $scope.inicio.id = 3;
        $scope.inicio.refeicaoNome = "Lanche";
        $scope.inicio.refeicaoImagem = "img/lanche.jpg";
    }

    $scope.registrarRefeicao = function(){
        $state.go("app.registrar");
    };
    

    $('#copo-de-agua').progress();

})

.controller('RefeicoesCtrl', function ($scope, $stateParams, $state) {
})

.controller('RegistrarCtrl', function ($scope, $stateParams, $state) {
})

.controller('ModelosAlimentaresCtrl', function($scope){

    $scope.modelos = [];

    var cafe = {
        id: 1,
        refeicaoNome: "Café da manhã",
        refeicaoImagem: "img/cafe-da-manha.jpg"
    };

    var almoco = {
        id: 2,
        refeicaoNome: "Almoço",
        refeicaoImagem: "img/almoco.jpg"
    };

    var lanche = {
        id: 3,
        refeicaoNome: "Lanche",
        refeicaoImagem: "img/lanche.jpg"
    };

    var now = new Date();
    if (now.getHours() >= 5 && now.getHours() < 12) {
        $scope.modelos = [cafe, almoco, lanche];
    } else if (now.getHours() >= 12 && now.getHours() < 15) {
        $scope.modelos = [almoco, lanche, cafe];
    } else if (now.getHours() >= 15 || now.getHours() < 5) {
        $scope.modelos = [lanche, cafe, almoco];
    }

})

.controller('ModeloAlimentarCtrl', function($scope, $stateParams, $ionicPopup){

    $scope.modelos = [];

    var cafe = {
        id: 1,
        refeicaoNome: "Café da manhã",
        refeicaoImagem: "img/cafe-da-manha.jpg",
        icon: "coffee",
        itens: [
            { nome: "Ovo", calorias: 44 },
            { nome: "Café", calorias: 53 },
            { nome: "Aveia", calorias: 20, button: true },
            { nome: "Morango", calorias: 45 },
            { nome: "Iogurte grego", calorias: 49, button: true },
            { nome: "Chá", calorias: 38 },
            { nome: "Banana", calorias: 34 }
        ]
    };

    var almoco = {
        id: 2,
        refeicaoNome: "Almoço",
        refeicaoImagem: "img/almoco.jpg",
        icon: "food",
        itens: [
            { nome: "Rúcula, pepino e palmito", calorias: 27, button: true },
            { nome: "Espinafre refogado", calorias: 15 },
            { nome: "Filé de frango grelhado", calorias: 46, button: true },
            { nome: "Macarrão integral ao molho vermelho", calorias: 50 },
            { nome: "Maçã", calorias: 29, button: true }
        ]
    };

    var lanche = {
        id: 3,
        refeicaoNome: "Lanche",
        refeicaoImagem: "img/lanche.jpg",
        icon: "food",
        itens: [
            { nome: "8 cenouras baby", calorias: 80, button: true },
            { nome: "Pão sírio integral com ricota", calorias: 93 },
            { nome: "14 Amêndoas", calorias: 90, button: true },
            { nome: "Bolacha água e sal com cottage", calorias: 50 },
            { nome: "Barra de cereal de morango", calorias: 100 },
            { nome: "Torrada com patê de atum", calorias: 70, button: true },
            { nome: "Pão sueco com cottage", calorias: 60, button: true }
        ]
    };

    $scope.modelos = [cafe, almoco, lanche];
    $scope.modelo = $scope.modelos.filter(function(t){ return t.id == $stateParams.modeloId })[0];

    $scope.comprar = function(){
        var alertPopup = $ionicPopup.alert({
            title: 'Aguarde novidades',
            template: 'Em breve este recurso de compras será disponibilizado!'
        });
    
        alertPopup.then(function(res) {
        });
   };

})

.controller('NutricionistasCtrl', function($scope, $state, $stateParams, $timeout){

    var stevie = {
        id: 1,
        rating: 5,
        atualizacao: new Date(2010,2,2),
        nome: "Stevie Moreira",
        crn: "1111-P",
        uf: "ES",
        imagem: "img/stevie.jpg",
        pacientes: "19 pacientes"
    };

    var matthew = {
        id: 2,
        rating: 4,
        nome: "Matthew Perry",
        crn: "2222-P",
        uf: "ES",
        proprio: true,
        imagem: "img/matthew.png",
        pacientes: "6 pacientes"
    };

    var molly = {
        id: 3,
        rating: 4,
        nome: "Molly Willian",
        crn: "3333-P",
        uf: "RJ",
        imagem: "img/molly.png",
        pacientes: "32 pacientes"
    };

    var elyse = {
        id: 4,
        rating: 3,
        nome: "Elyse Jhonson",
        crn: "4444-P",
        uf: "SP",
        imagem: "img/elyse.png",
        pacientes: "17 pacientes"
    };

    var kristy = {
        id: 5,
        rating: 2,
        nome: "Kristy Simpson",
        crn: "5555-P",
        uf: "SP",
        imagem: "img/kristy.png",
        pacientes: "20 pacientes"
    };

    $scope.pesquisar = { 
        label: "Meu local",
        acao: function () {
            $scope.pesquisar.status = false;
            $scope.pesquisar.loading = true;
            $timeout(function(){
                $scope.pesquisar.loading = false;
                $scope.pesquisar.status = true;
            }, 2000);
        },
        loading: false,
        status: $stateParams.nutricionistaId > 0
    };

    $scope.nutricionistas = [stevie, matthew, molly, elyse, kristy];
    $scope.detalhes = function (id) {
        $state.go("app.nutricionista", { "nutricionistaId": id });
    };
    $scope.nutricionista = $scope.nutricionistas.filter(function(t){ return t.id == $stateParams.nutricionistaId })[0];

    $scope.informacoes = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet porttitor nisl, at suscipit orci. Vestibulum sagittis diam sit amet eros consequat, nec elementum dolor malesuada. Quisque tincidunt velit vel est posuere venenatis. Cras blandit laoreet euismod. Aenean in dolor vel tortor laoreet facilisis sed in arcu. Quisque porttitor tempor dui ut porttitor. Donec et eros sagittis, laoreet diam quis, suscipit augue. Fusce quis dui a augue lacinia ornare. Mauris ornare lorem vel enim accumsan volutpat. Cras vel sollicitudin lorem."
    $scope.localizacao = "Avenida Lins de Vasconcelos 1335, Cambuci - SP - Brasil"
    $scope.especialidades = "Emagrecimento, Vida saudável, Atletas e Ganho de massa";

    if($scope.nutricionista) {  
        $('.ui.rating').rating({ maxRating: 5, initialRating: $scope.nutricionista.rating });
    }
});