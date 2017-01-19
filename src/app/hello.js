angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (MathFactory) {
      this.hello = 'Hello MV';

      this.person = {

      	firstname: 'Carlos',
      	lastname: 'Romano'
      };

      this.sub = function(num1, num2) {
      	return alert(MathFactory.sub(num1, num2));
      };

      this.alertMe = function() {
      	alert('First Name: ' + this.person.firstname + ' Last Name: ' + this.person.lastname);
      };
    }
  });
