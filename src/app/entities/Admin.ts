import Person from "src/app/entities/Person";

export default class Admin
{
    person: Person;

    constructor(person:Person)
    {
        this.person = person;
    }
}