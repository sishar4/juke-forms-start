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
			console.log(response.data.songs);
			if (response.data.songs.length > 0) {
				response.data.songs.forEach(function(song) {
					song.audioUrl = '/api/songs/' + song._id + '.audio';
				});
			}
      		return response.data;
		});
	};

	PlaylistsFactory.addSong = function(playlistId, song) {
		return $http({method:'POST', url:'/api/playlists/' + playlistId + '/songs', data: {song: song}})
		.then(function(response) {
			var song = response.data;
			song.audioUrl = '/api/songs/' + song._id + '.audio';
			return song;
		})
	};

	return PlaylistsFactory;
});