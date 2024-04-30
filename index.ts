#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { titleTimer } from "./src/title.js";
import { Person } from "./src/person.js";
import { Student } from "./src/student.js";

class _Opp {
    // run the app
    async Run(): Promise<void> {
        await this.AppTitle();
        await this.Program();
    }

    // autor watermark on app at the begening
    private async AppTitle(): Promise<void> {
        const title = chalkAnimation.neon(`__________________Welcome to M.A App__________________`);
        await titleTimer();
        title.stop();
        console.log(chalk.bgRed.italic(`                                                             Autor:"M.A"`));
    }

    // app
    private async Program(): Promise<void> {
        //user input
        const input = await inquirer.prompt([{
            type: "input",
            name: "usrInput",
            message: "Type 1 if you like to talk to others and type 2 if you would rather keep to yourself ",
            validate: function (input: string) {
                if (input !== "" && Number(input)) {
                    return true;
                } else {
                    return "invalid input"
                }
            },
        },]);

        let MyPerson = new Person();
        MyPerson.AskQuestion(parseInt(input.usrInput));
        console.log(chalk.cyan(`You are: ${MyPerson.GetPersonality()}`));

        //user input
        const name = await inquirer.prompt([{
            type: "input",
            name: "usrInput",
            message: "What is your Name ",
            validate: function (input: string) {
                if (input !== "" && isNaN(parseInt(input))) {
                    return true;
                } else {
                    return "invalid input"
                }
            },
        },]);
        let myStudent = new Student();
        myStudent.Name = name.usrInput;
        console.log(chalk.cyan(`Your name is :${myStudent.Name} and your personality type is :${myStudent.GetPersonality()} `));
        console.log(chalk.green(chalk.bgGray(` #                 Thanks for using M.A App                 # `)));

    }

}


let run = new _Opp();
run.Run();

