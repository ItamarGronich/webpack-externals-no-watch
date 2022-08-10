## How to reproduce:
1. Clone this repo
2. Run `npm ci`
3. Run `npm start` tile the terminal window running the cli next to your text editor
4. Edit the file under `node_modules/underscore/modules/range` (just add a space or something) 
5. Watch how webpack recompiles the code.
6. Edit the file in `node_modules/lodash/get.js` (for example change end of line 30 from `: result;` to `: result + result;`)
7. Watch how webpack doesn't recompile the code when a dependency declared as external is changed. 