import Person from "src/app/entities/Person";

export default class Manager extends Person
{
    cpf: string;
    phone: string;

    constructor(
        name: string,
        email: string,
        password: string,
        cpf: string,
        phone: string,
    )
    {
        super(name, email, password);
        this.cpf = cpf;
        this.phone = phone;
    }
}