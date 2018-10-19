var artist = '';
var album = '';
var title = '';
var metadata = {
	artist: '',
	album: '',
	title: ''
};
var E_artist_album = document.getElementsByClassName("artist")[0];
var E_title = document.getElementsByClassName("title")[0];

window.onload = function() {
	var E_main = document.getElementsByClassName("main")[1];
	var config = { attributes: true, childList:true, subtree: true, characterData: true };

	var callback = function(mutationsList, observer) {
        	for (var mutation of mutationsList) {
                	setTimeout(compare_and_update, 1500);
        	        break;
	        }
	};
	var observer = new MutationObserver(callback);
	observer.observe(E_main, config);
}


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
