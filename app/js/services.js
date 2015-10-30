(function() {
	'use strict';

	angular
		.module('todoListy')
		.factory('todoService', function($q) {
			var deferred = $q.defer();
			return {
				get: function() {						//console.log('get called in service');
					var todos = JSON.parse(localStorage.getItem('myTodos')) || [];
					deferred.resolve(todos);
					//deferred.reject('failure...');
					return deferred.promise;
				}, 
				update: function(todos) {		//console.log('update called in service');
					localStorage.setItem('myTodos', JSON.stringify(todos));
					deferred.resolve(todos);
					return deferred.promise;
				}
			}
		})

}());