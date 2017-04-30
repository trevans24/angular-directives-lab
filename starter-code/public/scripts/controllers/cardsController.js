
angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);

CardsController.$inject = ['$http'];

function CardsController($http){
  this.test = 'test';
  var vm = this;
  vm.all = [];
 
  function getCards(){
    $http.get('http://localhost:3000/cards')
    .then((res) => {
      // console.log('Getting Cards');
      // console.log(res.data);
      // console.log(res.data[0]);
      vm.all = res.data;
    });
  }
  getCards();

// POST
  this.newCard = {};
  this.addCard = addCard;

  function addCard(){
    console.log('TEST');
    vm.all.push(this.newCard);
    $http.post('http://localhost:3000/cards', this.newCard)
    .then((res) =>{
      console.log(res);
    });

    vm.newCard = {};
  }

// DELETE
  this.deleteCard = deleteCard;

  function deleteCard(id){
    console.log(id);
    console.log('Clicked Delete');
    $http.delete('/cards/' + id)
    .then((res)=>{
      let index = vm.all.indexOf(card);
      vm.all.splice(index,1);
    });
  }
 
}