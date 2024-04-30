export class Person {
    //declare a field to represent the personality
    private personality:string;
    //constructor    
    public constructor () {
        this.personality="Mystery";
    }

    public AskQuestion(answer:number):void{
        if (answer==1) {
            this.personality="Extravert";
        } else if(answer==2){
            this.personality="Introvert";
        }else{
            this.personality="You are still a Mystery";
        }
    }

    // this method returns the value of the personality
    public GetPersonality(){
        return this.personality;
    }
}