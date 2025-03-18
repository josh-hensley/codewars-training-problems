(() => {
    chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
        const { type, kataId, extension } = message;
        if (type === 'NEW') {
            newKataLoaded(kataId, extension);
        }
    });
    const newKataLoaded = async (kataId, extension) => {
        let codeLines;
        let submitted = false;
        const interval = setInterval(async () => {
            alertBox = document.querySelector('.alert-box.working');
            if (!submitted && alertBox) {
                codeElements = document.querySelectorAll('.CodeMirror-line');
                codeLines = Array(...codeElements).map(el => el.innerText).join('\n');
                kataResponse = await fetch(`https://www.codewars.com/api/v1/code-challenges/${kataId}`);
                const { name, slug, description } = await kataResponse.json();
                const md = `
        # ${name}
        
        ${description}
        `;
                const blob = new Blob([md], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${slug}-README.md`;
                a.click();
                const blob2 = new Blob([codeLines], { type: 'text/plain' });
                const url2 = URL.createObjectURL(blob2);
                const a2 = document.createElement('a');
                a2.href = url2;
                a2.download = `${slug}-solution.${extension}`;
                a2.click();
                submitted = true;
                clearInterval(interval);
            }
        }, 1000)
    }
})();