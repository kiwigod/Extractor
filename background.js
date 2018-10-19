browser.runtime.onMessage.addListener(dump);

function dump(msg) {
    var blob = new Blob(
        [JSON.stringify(msg, null, 4)], 
        {type: 'text/plain'}
    );
    var url = URL.createObjectURL(blob);

    browser.downloads.download(
        {
            conflictAction: 'overwrite',
            filename: 'metadata',
            saveAs: false,
            url: url
        }
    );
}