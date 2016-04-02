'use strict';

juke.controller('SidebarCtrl', function ($scope, PlaylistsFactory) {

	PlaylistsFactory.getAllPlaylists()
	.then(function(playlists) {
		$scope.playlists = playlists;
	});
});
