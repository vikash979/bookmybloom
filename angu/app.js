var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html',
		  controller: 'WizardController'
        })
       
/* .state('home.profile', {
            url: '/profile',
            templateUrl: 'form-profile.html'
        }) 
.state('home.interests', {
            url: '/interests',
            templateUrl: 'form-interests.html'
        })
 .state('home.payment', {
            url: '/payment',
            templateUrl: 'form-payment.html'
        })
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        */
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        /*.state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }
            
        });*/
        
});

routerApp.controller("WizardController", [wizardController]);

function wizardController() {
  var vm = this;
  
  //Model
  vm.currentStep = 1;
  vm.steps = [
    {
    step: 1,
    name: "First step",
    template: "step1.html"
    },
    {
    step: 2,
    name: "Second step",
    template: "step2.html"
    },   
    {
    step: 3,
    name: "Third step",
    template: "step3.html"
    },             
  ];
  vm.user = {};
  
  //Functions
  vm.gotoStep = function(newStep) {
    vm.currentStep = newStep;
  }
  
  vm.getStepTemplate = function(){
    for (var i = 0; i < vm.steps.length; i++) {
      if (vm.currentStep == vm.steps[i].step) {
        return vm.steps[i].template;
      }
    }
  }
  
  vm.save = function() {
    //todo: save data...
  }
}  
routerApp.controller('formController', function($scope) {
$scope.message='hello';
$scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');  
    };
});
routerApp.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});
