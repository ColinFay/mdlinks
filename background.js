chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(null, { file: "md.js" });
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        const sandbox = document.getElementById('sandbox');
        sandbox.value = request.md;
        sandbox.select();
        document.execCommand('copy');
        sendResponse(`copy ${request.md}`);
    }
);
