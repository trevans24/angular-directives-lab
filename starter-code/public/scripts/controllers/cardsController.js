
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
    $http.get('/cards')
    .then((res) => {
      vm.all = res.data;
    });
  }

// POST
  function addCard(){
    console.log('POST');
    vm.all.push(this.newCard);
    $http.post('/cards', this.newCard)
    .then((res) =>{
      console.log(res);
    });
    vm.newCard = {};
  }

// DELETE
  function deleteCard(id){
    console.log(id);
    console.log('Clicked Delete');
    $http.delete('/cards/' + id)
    .then((res)=>{
      let index = vm.all.indexOf(id);
      vm.all.splice(index,1);
    });
  }

// PUT
  function updateCard(question, id){
    console.log(question);
    console.log("update clicked");
    console.log(id);
    let cardData = {
      question: question
    };
    console.log(cardData);
    $http.put('/cards/' + id, cardData)
    .then((res)=>{
      console.log(res);
    });
  }

getCards();
 
}