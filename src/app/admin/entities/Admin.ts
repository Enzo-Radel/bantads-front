import Person from "../../entities/Person";

export default class Admin
{
    person: Person;

    constructor(person:Person)
    {
        this.person = person;
    }
}