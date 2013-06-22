var Button = (function(module) {
	
	module.SignUp = function(resultObject) {
		resultObject.prepend(Date() + '<br/>');
	};
	
	return module;
	}(BUTTON || {}));