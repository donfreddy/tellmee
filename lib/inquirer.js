const inquirer = require("inquirer");

async function getUserName() {
  const questions = {
    type: "input",
    name: "nickname",
    message: "What do your friends call you ?",
    default: function () {
      return "User";
    },
  };

  let name = await inquirer.prompt(questions);

  return name.nickname;
}

module.exports = { getUserName };
