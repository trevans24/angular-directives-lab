
angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);

CardsController.$inject = ['$http'];

function CardsController($http){
  this.test = 'test';
  let vm = this;
  vm.all = [];
  this.newCard = {};
  this.addCard = addCard;
  this.deleteCard = deleteCard;
  this.updateCard = updateCard;
  this.editCard = {};
 
  function getCards(){
    $http.get('http://localhost:3000/cards')
    .then((res) => {
      // console.log('Getting Cards');
      // console.log(res.data);
      // console.log(res.data[0]);
      vm.all = res.data;
    });
  }

// POST
  function addCard(){
    console.log('POST');
    vm.all.push(this.newCard);
    $http.post('http://localhost:3000/cards', this.newCard)
    .then((res) =>{
      console.log(res);
    });
    vm.newCard = {};
  }

// DELETE
  function deleteCard(card){
    console.log(card);
    console.log('Clicked Delete');
    $http.delete('/cards/' + card)
    .then((res)=>{
      let index = vm.all.indexOf(card);
      vm.all.splice(index,1);
    });
  }

// PUT
  function updateCard(card, id){
    console.log(card);
    console.log("update clicked");
    console.log(id);
  }

getCards();
 
}