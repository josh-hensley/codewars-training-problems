chrome.tabs.onUpdated.addListener((tabId, changeinfo, tab) => {
    const { status } = changeinfo;
    if (status == 'complete' && tab.url && tab.url.includes("codewars.com/kata")) {
        const kataId = tab.url.split('/')[4];
        const language = tab.url.split('/')[6];
        const extension = language == 'javascript' ? 'js' :
            language == 'python' ? 'py' :
            language == 'typescript' ? 'ts' : 'txt';
        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            kataId,
            extension
        });
        console.log("New kata loaded", kataId);
    }
})
