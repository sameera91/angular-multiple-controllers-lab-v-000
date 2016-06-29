function StaffController() {
  var vm = this;
 
  vm.name = 'Something else!';
  vm.email = "bill@microsoft.com";
  vm.phone = "8888887777";
}

angular
  .module('app')
  .controller('StaffController', StaffController);