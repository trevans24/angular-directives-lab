angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);

CardsController.$inject = ['$http'];

function CardsController($http){
  let vm = this;
  vm.questionsList = [];

  // GET Cards
  function getCards(){
    console.log('getting cards');
    $http.get('https://shielded-forest-41789.herokuapp.com/api/flashcards')
      .then((res) => {
        console.log(res.data);
        vm.questionsList = res.data;
      });
  }

  getCards();
  



}
