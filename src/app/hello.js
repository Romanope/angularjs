angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (MathFactory, MathService) {
      this.hello = 'Hello MV';
      
      person = {

      	firstname: 'Carlos',
      	lastname: 'Romano'
      };

      this.list = [{
        name: 'Lizianne Priscila',
        lastname: 'Souto'
      }, 
      {
        name: 'Marluce de souza',
        lastname: 'pereira'
      },
      {
        name: 'Luiza Possi',
        lastname: 'zizi'
      }];

      this.sub = function(num1, num2) {
      	return alert(MathService.subService(num1, num2));
      };

      this.sum = function(num1, num2) {
        return alert(MathService.sumService(num1, num2));
      };

      this.alertMe = function() {
      	alert('First Name: ' + person.firstname + ' Last Name: ' + person.lastname);
      };
    }
  });
