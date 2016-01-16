angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings)
  {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
	$scope.sortType = 'code';
	$scope.sortBack = false;
	$scope.defSearch = '';
	$scope.detType = '';

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
	$scope.Reset = function () {
		$scope.newCode = '';
        $scope.newName = '';
        $scope.newLatitude = 0;
		$scope.newLongitude = 0;
		$scope.newAddress = '';
    }
    $scope.Reset();
	
	$scope.detReset - function () {
		$scope.detAddr = '';
	}
	$scope.detReset;
	
    $scope.addListing = function()
    {
		if (!$scope.newCode)
			return;
		// Add to main records
		var lat = Number($scope.newLatitude)
		var long = Number($scope.newLongitude)
		$scope.listings.push({
			code: $scope.newCode,
			name: $scope.newName,
			latitude: lat,
			latitude: $scope.newLongitude,
			address: $scope.newAddress
		});
		// See $Scope.Reset...
		$scope.Reset();
    };
    $scope.deleteListing = function(item)
    {
		var index = $scope.listings.indexOf(item)
        $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(item)
    {
		var index = $scope.listings.indexOf(item)
		document.getElementById("detName").innerHTML = ' ';
		document.getElementById("detCode").innerHTML = ' ';
		document.getElementById("detLat").innerHTML = ' ';
		document.getElementById("detLong").innerHTML = ' ';
		document.getElementById("detAddr").innerHTML = ' ';
		document.getElementById("detName").innerHTML = $scope.listings[index].name;
		document.getElementById("detCode").innerHTML = $scope.listings[index].code;
		document.getElementById("detLat").innerHTML = $scope.listings[index].coordinates.latitude;
		document.getElementById("detLong").innerHTML = $scope.listings[index].coordinates.longitude;
		document.getElementById("detAddr").innerHTML = $scope.listings[index].address;
		$scope.detReset();
    };
  }
]);
