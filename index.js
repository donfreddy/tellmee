var program = require("commander");
var inquirer = require("inquirer");
var chalk = require("chalk");
var argv = require("yargs");
var arg = require("arg");

var VERSION = require("./package").version;

var data = require("./lib/data");

/**
 * Token
 * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDY0Mjg0MzczNDI5MjU2MTkzIiwibGltaXQiOjEwMCwia2V5IjoiZFdqU3I5YnF4c0swQmk3ZnEzQnpPWjRPT1Z0WTZsTXZ0bTVDNW1CcWZsRHZCeGdtWkgiLCJjcmVhdGVkX2F0IjoiMjAyMS0wMi0xNVQxNjowMTowMiswMDowMCIsImlhdCI6MTYxMzQwNDg2Mn0.bl--hUzt446V2UQkQfAtyZ_VNTh034HNjrZZJ0RDnGE
 */

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      // Types
      "--yes": Boolean,
      "--cat": String,
      "--lang": String,

      // Aliases
      "-y": "--yes",
      "-c": "--cat",
      "-l": "--lang",
    },
    {
      argv: rawArgs.slice(2),
    }
  );

  console.log(args["_"][0]);

  const options = {
    skipPrompts: args["--yes"] || false,
    category: args["--cat"] || "",
    language: args["--lang"] || "",
    subject: args._[0],
  };

  return options;
}

async function promptForMissingOptions(options) {
  const defaultSubject = "joke";
  if (options.skipPrompts) {
    return {
      ...options,
      subject: options.subject || defaultSubject,
    };
  }

  const questions = [];

  if (!options.subject) {
    questions.push({
      type: "list",
      name: "subject",
      message: "Please choose which subject to tell you",
      choices: ["joke", "quote", "inspire"],
      default: defaultSubject,
    });
  }

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    subject: options.subject || answers.subject,
  };
}

async function main(options) {
  if (options.subject.toLowerCase() == "joke") {
    argv.command(
      "joke",
      "Fetching your joke",
      (yargs) => {},
      (argv) => {
        data.getJoke();
      }
    ).argv;
  } else if (options.subject.toLowerCase() == "quote") {
    argv.command(
      "quote",
      "Fetching a quote",
      (yargs) => {},
      (argv) => {
        data.getQuote();
      }
    ).argv;
  } else if (options.subject.toLowerCase() == "inspire") {
  } else {
    console.error("%s Invalid subject name", chalk.red.bold("ERROR"));
  }
}
argv.help();

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  console.log(options);
  main(options);
}
