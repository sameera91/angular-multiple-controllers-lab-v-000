function ContactController() {
  var vm = this;
  
  vm.name = "Bill Gates";
  vm.email = "bill@microsoft.com";
  vm.phone = "8888887777";
 
  this.changeName = function () {
    vm.name = 'Something else!';
  }

}

angular
  .module('app')
  .controller('ContactController', ContactController);