(function() {
	'use strict';

	angular
		.module('todoListy')
		.controller('TodoController', TodoController);

		TodoController.$inject = ['$scope', 'todoService'];

		function TodoController($scope, todoService) {
			//$scope.foo = 'bar';		
			var vm = this;	
			vm.foo = "Todos"
			vm.newTodo = ' stuff';
			vm.todos;


			vm.init = function() {
				//vm.todos = [{title:"some stuff", completed:false},{title:"some other stuff", completed:true},{title:"even more stuff", completed:false}];
				vm.getTodos();
			}

			vm.getTodos = function() {
				todoService.get()
					.then(function(response) {							//console.log('success!');	console.log(response);
							return vm.todos = response;
					}).catch(console.log.bind(console));
			}

			vm.addTodo = function() {
				if (vm.newTodo!=='') {
					vm.todos.push({title:vm.newTodo, completed:false});
					vm.update();
				} else {
					console.log('no saving when title is empty');
				}
			}

			vm.update = function() {
				todoService.update(vm.todos)
					.then(function(response) {						//console.log('success!');	console.log(response);
						return vm.newTodo = '';
					}).catch(function(err) {
						throw new Error(err);	// or console.log(err);
					});
			}

			vm.doLog = function(str) {console.log(str+'!')};

			vm.init();

		}	//end TodoController

}());