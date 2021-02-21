const updateNotifier = require("update-notifier");
const chalk = require("chalk");
const pkg = require("../package.json");

// Checks for available updateand returns an instance
const notifier = updateNotifier({ pkg });

// `notifier.update` contains some useful info about the update
// console.log(notifier.update);
/*
{
  latest: '1.0.1',
	current: '1.0.0',
	type: 'patch', // Possible values: latest, major, minor, patch, prerelease, build
	name: 'tellmee'
}
*/

if (notifier.update) {
  const { name, current, latest } = notifier.update;

  console.log(
    `
    Update available ${chalk.dim(current)} → ${chalk.green(latest)}
    Run ${chalk.cyan.bold(`npm i -g ${name}`)} to update.
    `
  );
}
