import { Person } from "./person.js";
// here we can either write or read data to this class
export class Student extends Person{
    // private field (backing field hold any data assignment name property)
    private _name:string;

    public constructor(){
        super();
        this._name="";
    }

    public get Name(): string {
        return this._name;
    }
    
    public set Name(value : string){
        this._name = value;
    }

}