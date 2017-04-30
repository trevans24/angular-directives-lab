
angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);

CardsController.$inject = ['$http'];

function CardsController($http){
  this.test = 'test';
  var vm = this;
  vm.all = [];
 
  function getCards(){
    $http.get('https://shielded-forest-41789.herokuapp.com/api/flashcards')
    .then((res) => {
      console.log('Getting Cards');
      console.log(res.data);
      // console.log(res.data[0]);
      vm.all = res.data;
    });
  }
  getCards();
 
}