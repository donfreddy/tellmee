const inquirer = require("inquirer");

module.exports = {
  askSubject: async function () {
    const defaultSubject = "joke";

    const questions = [];

    questions.push({
      type: "radio",
      name: "template",
      message: "Please choose which subject to tell you",
      choices: ["joke", "quote", "inspire"],
      default: defaultSubject,
    });

    const answers = await inquirer.prompt(questions);

    console.log(answers);
  },
};
