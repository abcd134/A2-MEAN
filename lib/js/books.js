//using https://github.com/daniel-nagy/md-data-table for sorting table
app.controller ('booksController', function ($scope, $http, $cookieStore) {
	$scope.bookOrder = 'title';
	var url = 'api/employees/' + $cookieStore.get ('employeeId');
	var googleBooks = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';
	var key = '&key=AIzaSyC5XcbgwysOIUFdFnp_NPwVqCIKSfEBtUU';
	$http.get (url)
		.then (function (res) {
			var i=0;
			angular.forEach(res.data[0].books, function(book){

				//API call to google books
				$http.get(googleBooks + book.isbn13 + key)
					.then(function(response) {

						if (response.data.items) {
							console.log(response.data.items);
							res.data[0].books[i].image = response.data.items[0].volumeInfo.imageLinks.thumbnail
						}
						else {
							res.data[0].books[i].image = "http://www.publicdomainpictures.net/pictures/50000/nahled/open-book-silhouette.jpg"
						}
						i++
					}, function errorCallback(){
							res.data[0].books[i].image = "http://www.publicdomainpictures.net/pictures/50000/nahled/open-book-silhouette.jpg"
							i++
						})
			});
			$scope.books = res.data[0].books;

		})
});