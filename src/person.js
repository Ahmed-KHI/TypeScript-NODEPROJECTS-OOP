export class Person {
    //declare a field to represent the personality
    personality;
    //constructor    
    constructor() {
        this.personality = "Mystery";
    }
    AskQuestion(answer) {
        if (answer == 1) {
            this.personality = "Extravert";
        }
        else if (answer == 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are still a Mystery";
        }
    }
    // this method returns the value of the personality
    GetPersonality() {
        return this.personality;
    }
}
