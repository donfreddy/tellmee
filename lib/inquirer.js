const inquirer = require("inquirer");

module.exports = {
  askSubject: (options) => {
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
        name: "template",
        message: "Please choose which subject to tell you",
        choices: ["joke", "quote", "inspire"],
        default: defaultSubject,
      });
    }

    const answers = inquirer.prompt(questions);
    return {
      ...options,
      subject: options.subject || answers,
    };
  },
};
