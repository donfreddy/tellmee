const chalk = require("chalk");
const olog = require("ololog");
const wrapAnsi = require("wrap-ansi");
const figlet = require("figlet");
const os = require("os");

const { username } = os.userInfo();
const { version, author } = require("../package.json");
const { prettyJsonLog } = require("./pettry_json");
const { capitalizeFirst } = require("./method");

function about() {
  let name = chalk.yellow.bold(capitalizeFirst(username));
  let cmd = chalk.yellow("tellmee -h (or --help)");
  let detail = {
    version: "v" + version,
    author: author,
    npm: "https://www.npmjs.com/package/tellmee",
    repository: "https://github.com/Donfreddy/tellmee",
  };

  let msg = chalk(`
  👋 Hello ${name}!, Welcome to tellmee cli
  
  Command line tool that provides you with jokes
  and some more cool information.

  Quick start by typing ${cmd}
  to display usage information.
  `);

  console.log(
    chalk.yellow(
      figlet.textSync("Tellmee  CLI", {
        font: "Ogre",
        horizontalLayout: "fitted",
      })
    )
  );

  olog.noLocate(" ", wrapAnsi(msg, 60));
  prettyJsonLog(detail);
}

module.exports = { about };
