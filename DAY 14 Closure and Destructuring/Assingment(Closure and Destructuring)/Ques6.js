/**
 * Q6. You are developing a music playlist management system. Implement functions that leverage closures
and higher-order functions to perform common playlist operations.
Task 1: Create a function createPlaylist that takes a playlist name as a parameter and returns a closure. This
closure should allow adding and listing songs for the given playlist.
Task 2: Create a function addSong that takes a song name and artist as parameters and adds the song to the
specified playlist. Use the closure created in TASK 1.
Task 3: Create a function listSongs that lists all the songs in a specified playlist. Use the closure created in the
Task 1
 */
// solution:-
//create playlist
function createPlaylist(playlistName) {
    let playlist = [];
    return {
        addSong: function(songName, artist) {
            playlist.push({songName, artist});
        },
        listSongs: function() {
            if(playlist.length === 0) {
                console.log(`${playlistName} playlist is empty.`);
            } else {
                console.log(`${playlistName} playlist: ${playlist.map(song => `${song.songName} by ${song.artist}`).join(', ')}`);
            }
        }
    };
}

// Add song to playlist
function addSong(playlist, songName, artist) {
    playlist.addSong(songName, artist);
}

// List songs in playlist
function listSongs(playlist) {
    playlist.listSongs();
}

const myPlaylist = createPlaylist("My Favourites");
addSong(myPlaylist, "Song1", "Artist1");
addSong(myPlaylist, "Song2", "Artist2");
addSong(myPlaylist, "Song3", "Artist3");

listSongs(myPlaylist);

