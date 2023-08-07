import Person from "src/app/entities/Person";

export default class Manager
{
    person: Person;
    cpf: string;
    phone: string;

    constructor(
        person: Person,
        cpf: string,
        phone: string,
    )
    {
        this.person = person;
        this.cpf = cpf;
        this.phone = phone;
    }
}