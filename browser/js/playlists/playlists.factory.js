juke.factory('PlaylistsFactory', function($http) {

	var cachedPlaylists = [];

	var PlaylistsFactory = {};

	PlaylistsFactory.createPlaylist = function(playlistObj) {
		return $http.post('/api/playlists', playlistObj)
		.then(function(response) {
			var playlist = response.data;
		    cachedPlaylists.push(playlist);
		    return playlist;
		});
	};

	PlaylistsFactory.getAllPlaylists = function() {
		return $http.get('/api/playlists')
		.then(function(response) {
			angular.copy(response.data, cachedPlaylists);
      		return cachedPlaylists;
		});
	};

	PlaylistsFactory.getPlaylist = function(playlistId) {
		return $http.get('/api/playlists/' + playlistId)
		.then(function(response) {
			console.log(response.data);
      		return response.data;
		});
	};

	return PlaylistsFactory;
});