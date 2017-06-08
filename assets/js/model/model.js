(function (window) {
	'use strict';

	function Model(storage, todos) {
		this.storage = storage;
		this.todos = todos;
	}

	Model.prototype.read = function(query) {
		this.storage.findAll(query);
	}

})(window);