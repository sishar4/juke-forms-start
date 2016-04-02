juke.controller('PlaylistsCtrl', function($scope, $state, PlaylistsFactory) {

	$scope.savePlaylist = function() {
		// console.log("The new playlist: " + $scope.newPlaylist.name);
		PlaylistsFactory.createPlaylist($scope.newPlaylist)
		.then(function(playlist) {
			$scope.newPlaylist = {};
			$scope.newPlaylistForm.newPlaylistNameInput.$pristine = true;
			$state.go('playlist', {"playlistId": playlist._id});
		});
	}
});

juke.controller('PlaylistCtrl', function($scope, PlaylistsFactory, playlist) {
	$scope.playlist = playlist;	
});