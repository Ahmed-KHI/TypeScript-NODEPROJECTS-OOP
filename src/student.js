import { Person } from "./person.js";
// here we can either write or read data to this class
export class Student extends Person {
    // private field (backing field hold any data assignment name property)
    _name;
    constructor() {
        super();
        this._name = "";
    }
    get Name() {
        return this._name;
    }
    set Name(value) {
        this._name = value;
    }
}
