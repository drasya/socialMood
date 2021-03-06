socialMood.controller('SearchController', function($scope, $http, SearchService){
    $scope.tagName = '';
    $scope.searchResults = {};
    $scope.searchResults.twitter = [];
    $scope.searchResults.instagram = [];
    $scope.showPreloader = false;
    $scope.showStatus = false;
    $scope.showTwitter = false;
    $scope.showInstagram = false;
    $scope.statusCount = 0;
    $scope.showErrors = false;
    $scope.errorMessage = '';

    $scope.searchByTag = function() {
        $scope.searchResults = [];

        $scope.showTwitter = false;
        $scope.showInstagram = false;
        $scope.showPreloader = true;
        $scope.showErrors = false;
        $scope.showStatus = false;
        $scope.errorMessage = '';

//        SearchService.twitterSearch($scope.tagName)
//            .success(function(data){
//                if (!data.error) {
//                    $scope.showStatus = true;
//                    $scope.showPreloader = false;
//                    $scope.showTwitter = true;
//
//                    $scope.searchResults.twitter = data.content;
//                    $scope.statusCount = data.content.length;
//                }
//            })
//            .error(function(data){
//
//            });
        SearchService.instagramSearch($scope.tagName)
            .success(function(data){
                if (!data.error) {
                    $scope.showStatus = true;
                    $scope.showPreloader = false;
                    $scope.showInstagram = true;

                    $scope.searchResults.instagram = data.content;
                    $scope.statusCount = data.content.length;
                } else {
                    $scope.showPreloader = false;
                    $scope.showErrors = true;
                    $scope.errorMessage = data.content;
                }
            })
            .error(function(data){

            });
    };
});