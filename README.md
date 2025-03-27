# CodeWars Training Problems

## Description

This project has turned into a bunch of different things.  It is a collection of my solutions to codewars katas, but It is a chrome extension that creates files and downloads them.  There is also a cli program that moves all saved kata solutions and READMEs from Downloads into this repo and renames them.  And to top it all off, I have a bash script that combines all these individual operations and pushes a commit to github.  I do know that there is a chrome extension that exists that does just about the same thing.  This just seemed like a fun project to learn chrome extensions a little.

## Table of Contents


* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Questions](#Questions)
 

## <a name="Installation"></a>Installation

To install as a chrome extension (for any chromium browser):  Navigate to the manage extensions page in your browser and toggle developer mode.  Then you will want to load an unpacked extension.  Select the source folder.  You will need to edit index.js.  `solutionFiles` and `READMEFiles` need to read from your downloads folder.  

To use the codewars script the way I do, you'll need to edit your .bashrc to export PATH to a scripts folder with a line like `export PATH="$PATH:~/scripts"`, and then move the codewars script to that folder. You will also need to edit the `$CODEWARS_PATH` variable to navigate to your codewars repo.

## <a name="Usage"></a>Usage

There is currently a bug in this build.  To use the extension, login to codewars and begin training.  Currently you need to refresh the page before solving a kata to trigger the chrome extension.  Solve the kata and click attempt.  When you get a green light, the code is automatically saved into your downloads folder. You may need to tell your browser to keep .js files or whatever code files it downloads.

After you are done solving katas, open a bash terminal and run `codewars`.  The files will be moved from Downloads into your repo and a commit will be pushed to github with the current date.

## <a name="contributing"></a>Contributing

If you wish to contribute, please follow these [guidelines](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).

## <a name="questions"></a>Questions

If you have questions you can reach me at me@joshhensley.com. Add me on [Github](github.com/josh-hensley).
