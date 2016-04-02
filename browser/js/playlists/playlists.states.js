'use strict'

juke.config(function($stateProvider) {
	$stateProvider.state('newPlaylist', {
		url: '/playlists/new',
		templateUrl: '/js/playlists/templates/playlists-form.html',
		controller: 'PlaylistsCtrl'
	});
});

juke.config(function($stateProvider) {
	$stateProvider.state('playlist', {
		url: '/playlists/:playlistId',
		templateUrl: '/js/playlists/templates/single-playlist.html',
		resolve: {
			playlist: function(PlaylistsFactory, $stateParams) {
				return PlaylistsFactory.getPlaylist($stateParams.playlistId);
			}
		},
		controller: 'PlaylistCtrl'
	});
})