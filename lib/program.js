var program = require("commander");

var VERSION = require("../package").version;

around(program, "optionMissingArgument", function (fn, args) {
  program.outputHelp();
  fn.apply(this, args);
  return { args: [], unknown: [] };
});

before(program, "outputHelp", function () {
  // track if help was shown for unknown option
  this._helpShown = true;
});

before(program, "unknownOption", function () {
  // allow unknown options if help was shown, to prevent trailing error
  this._allowUnknownOption = this._helpShown;

  // show help if not yet shown
  if (!this._helpShown) {
    program.outputHelp();
  }
});

program
  .name("tellme")
  .version("v" + VERSION, "-v, --version")
  .usage("[options] [dir]")
  .option("-c, --cat <category>", "get joke or quote by category")
  .parse(process.env);
