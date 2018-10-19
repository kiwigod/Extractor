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
			compare_and_update();
			browser.runtime.sendMessage(metadata);
        	        break;
	        }
	};
	var observer = new MutationObserver(callback);
	observer.observe(E_main, config);
}


function dump() {
	console.log('artist: ' + metadata.artist);
        console.log('album: ' + metadata.album);
        console.log('title: ' + metadata.title);
}

function compare_and_update() {
	var raw = E_artist_album.innerText;
        var iSep = raw.indexOf('—');
        var newArtist = raw.slice(0, iSep).trim();
        var newAlbum = raw.slice(iSep + 1).trim();
        if (metadata.artist != newArtist) { metadata.artist = newArtist; }
        if (metadata.album != newAlbum) { metadata.album = newAlbum; }
        raw = E_title.innerText;
        var newTitle = raw.slice(0, raw.indexOf('\n')).trim();
        if (metadata.title != newTitle) { metadata.title = newTitle; }
	dump();
}
