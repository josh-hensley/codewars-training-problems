import fs from 'node:fs';

// Get files in each folder in each language directory
const languages = ['JavaScript', 'TypeScript', 'Python'];
languages.forEach(language => {
    const kataFolders = fs.readdirSync(language);
    kataFolders.forEach(kataFolder => {
        const files = fs.readdirSync(`${language}/${kataFolder}`);
        const readme = files.find(file => file.endsWith('.md'));
        const solution = files.find(file => file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.py') || file.endsWith('.txt'));
        if (readme && solution) {
            fs.renameSync(`${language}/${kataFolder}/${readme}`, `${language}/${kataFolder}/README.md`);
            fs.renameSync(`${language}/${kataFolder}/${solution}`, `${language}/${kataFolder}/solution.${solution.split('.')[1]}`);
        }
    });
});