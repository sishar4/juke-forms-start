'use strict';

juke.factory('SongFactory', function ($http) {

  return {
    convert: function (song) {
      song.audioUrl = '/api/songs/' + song._id + '.audio';
      return song;
    },
    fetchAll: function() {
    	return $http.get('/api/songs')
		.then(function(songs) {
      return songs.data;
		});
    }
  };

});
