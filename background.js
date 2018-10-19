browser.runtime.onMessage.addListener(dump);

function dump(msg) {
    console.log(msg);
}