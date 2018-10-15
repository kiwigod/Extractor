var artist = '';
var album = '';
var title = '';

var E_artist_album = document.getElementsByClassName("artist")[0];
var E_title = document.getElementsByClassName("title")[0];

function dump() {
	console.log('artist: ' + artist);
        console.log('album: ' + album);
        console.log('title: ' + title);
}

function compare_and_update() {
	var raw = E_artist_album.innerText;
        var iSep = raw.indexOf('—');
        var newArtist = raw.slice(0, iSep);
        var newAlbum = raw.slice(iSep + 1);
        if (artist != newArtist) { artist = newArtist; }
        if (album != newAlbum) { album = newAlbum; }
        raw = E_title.innerText;
        var newTitle = raw.slice(0, raw.indexOf('\n'));
        if (title != newTitle) { title = newTitle; }
	dump();
}


var E_main = document.getElementsByClassName("main")[1];
E_main.addEventListener('DOMSubtreeModified', compare_and_update);
