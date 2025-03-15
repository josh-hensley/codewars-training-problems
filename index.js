import fs from 'node:fs'

const getInfo = async () => {
    const [ tab ] = await chrome.tabs.query({ active: true, currentWindow: true });
    const kataId = tab.url.split('/')[4];
    const language = tab.url.split('/')[6];
    const extension = language == 'javascript' ? 'js' :
        language == 'python' ? 'py' :
        language == 'typescript' ? 'ts' : 'txt';
    
    const response = await fetch(`https://www.codewars.com/api/v1/code-challenges/${kataId}`);
    const { name, slug, description } = await response.json();
    const md = `
# ${name}

${description}
`
    const solution = '';
    await fs.write(`${language}/${slug}/README.md`, md, 'utf-8', err => err ? console.error(err) : console.log('Success!'))
    await fs.write(`${language}/${slug}/solution.${extension}`, solution, 'utf-8', err => err ? console.error(err) : console.log('Success!'))
}
button.addEventListener('click', getInfo);
