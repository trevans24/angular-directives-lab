angular.module('CardsAgainstAssembly')
  .controller('cardsController', cardsController);

cardsController.$inject = ['$http'];

function cardsController($http){
  var vm = this;
  vm.questionsList = [];

  function getCards(){
    $http.get('https://shielded-forest-41789.herokuapp.com/api/flashcards')
    .then((res) => {
      vm.questionsList = res.data;
    });
  }
  getCards();
 
}