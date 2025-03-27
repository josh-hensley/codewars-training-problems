import fs from 'node:fs';

// Get files in downloads directory that have extension .md or .js
const READMEfiles = fs.readdirSync('D:/joshua/Downloads').filter(file => file.endsWith('.md'));
const SolutionFiles = fs.readdirSync('D:/joshua/Downloads').filter(file => file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.py'));

// create folders for each md file and move the .md and .js files into the folder
READMEfiles.forEach(async file => {
    const folderName = file.split('-README')[0];
    const solutionFile = SolutionFiles.find(file => file.startsWith(folderName));
    const language = 
        solutionFile.split('.')[1] === 'js' ? 'JavaScript' :
        solutionFile.split('.')[1] === 'ts' ? 'TypeScript' :
        solutionFile.split('.')[1] === 'py' ? 'Python' : 'Other';
    fs.mkdirSync(`${language}/${folderName}`);
    fs.cpSync(`D:/joshua/Downloads/${file}`, `${language}/${folderName}/README.md`);
    fs.cpSync(`D:/joshua/Downloads/${solutionFile}`, `${language}/${folderName}/solution.${solutionFile.split('.')[1]}`);
    fs.rmSync(`D:/joshua/Downloads/${file}`);
    fs.rmSync(`D:/joshua/Downloads/${solutionFile}`);
});
