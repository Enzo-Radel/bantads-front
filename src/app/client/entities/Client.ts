import Person from "../../entities/Person";
import Address from "./Address";

export default class Client
{
    person: Person;
    address: Address;
    cpf: string;
    phone: string;
    salary: number;

    constructor(
        person: Person,
        address: Address,
        cpf: string,
        phone: string,
        salary: number
    )
    {
        this.person = person;
        this.address = address;
        this.cpf = cpf;
        this.phone = phone;
        this.salary = salary;
    }
}