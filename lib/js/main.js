app.controller ('mainController', function ($scope, $http, $window, $cookieStore) {
	
	url = '/loggedin';
	$http.get (url)
		.then (function (res) {
			if (res.data == 'yes') {
				$scope.showContent = true;
			} else {
				$scope.showContent = false;
				$window.location.href = "/#/login";
			}
		})
	;

	$scope.toggleContent = function (content) {
		if (content == 'todo') {
			if ($scope.todoToggle) {
				$scope.todoToggle = false;
			} else {
				$scope.todoToggle = true;
			}
		} else if (content == 'books') {
			if ($scope.booksToggle) {
				$scope.booksToggle = false;
			} else {
				$scope.booksToggle = true;
			}
		} else if (content == 'messages') {
			if ($scope.messagesToggle) {
				$scope.messagesToggle = false;
			} else {
				$scope.messagesToggle = true;
			}
		}
	};
});