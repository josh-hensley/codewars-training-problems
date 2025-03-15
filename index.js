import fs from 'node:fs'

const getInfo = async () => {
    const url = process.argv[2];
    const kataId = url.split('/')[4];
    const language = url.split('/')[6];
    const extension = language == 'javascript' ? 'js' :
        language == 'python' ? 'py' :
        language == 'typescript' ? 'ts' : 'txt';
    
    const response = await fetch(`https://www.codewars.com/api/v1/code-challenges/${kataId}`);
    const { name, slug, description } = await response.json();
    const md = `
# ${name}

${description}
`
    const solution = ' ';
    fs.mkdirSync(`${language}/${slug}`);
    fs.writeFileSync(`${language}/${slug}/README.md`, md, 'utf-8');
    fs.writeFileSync(`${language}/${slug}/solution.${extension}`, solution, 'utf-8')
}

getInfo();
