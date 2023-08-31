import Person from "src/app/entities/Person";

export default class Manager extends Person
{
    cpf: string;
    phone: string;
    clientsNumber : string; // numero de clientes, a corrigir
    positiveBalances: string; // *
    negativeBalances: string;//*

    constructor(
        name: string,
        email: string,
        password: string,
        cpf: string,
        phone: string,
        clientsNumber: string,
        positiveBalances: string,
        negativeBalances: string
    )
    {
        super(name, email, password);
        this.cpf = cpf;
        this.phone = phone;
        this.clientsNumber = clientsNumber;
        this.positiveBalances = positiveBalances;
        this.negativeBalances = negativeBalances
    }
}