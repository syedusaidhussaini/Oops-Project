#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright('**WELCOME TO TYPESCRIPT OOPS PROJECT'));
class Personn {
    _personalityy;
    constructor() {
        this._personalityy = 'Nature';
    }
    userrinput(input) {
        if (input.includes("You are interested in creating websites and applicatoins")) {
            this._personalityy = 'You should be a programmer.';
        }
        else if (input.includes("You are interested in helping others peoples.")) {
            this._personalityy = 'Then you are a great human.';
        }
        else if (input.includes("You are under 18.")) {
            this._personalityy = "You are teenager.";
        }
    }
    get personalityy() {
        return this._personalityy;
    }
}
class Main {
    async main() {
        const anss = await inquirer.prompt([{
                name: "Usaid",
                message: chalk.blueBright("Select who you are."),
                type: "list",
                choices: ["You are interested in creating websites and applicatoins",
                    "You are interested in helping others peoples.",
                    "You are under 18."]
            }]);
        let mypersonn = new Personn();
        mypersonn.userrinput(anss.Usaid);
        console.log(chalk.green(`${mypersonn.personalityy}`));
    }
}
const myobject = new Main();
myobject.main();
