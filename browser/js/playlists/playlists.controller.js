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

juke.controller('PlaylistCtrl', function($scope, PlaylistsFactory, playlist, allSongs, PlayerFactory) {
	$scope.playlist = playlist;
	$scope.allSongs = allSongs;

	$scope.addSong = function(song) {
		PlaylistsFactory.addSong($scope.playlist._id, song)
		.then(function(song) {
			// song = PlayerFactory.convert(song);
			$scope.playlist.songs.push(song);
			$scope.chooseSong={};
		});
	}

	$scope.toggle = function (song) {
	  	if (song !== PlayerFactory.getCurrentSong()) {
	      PlayerFactory.start(song, $scope.playlist.songs);
	    } else if ( PlayerFactory.isPlaying() ) {
	      PlayerFactory.pause();
	    } else {
	      PlayerFactory.resume();
	    }
	  };

	  $scope.getPercent = function () {
	    return PlayerFactory.getProgress() * 100;
	  };

});