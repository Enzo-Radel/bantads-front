import Person from "src/app/entities/Person";
import Address from "src/app/entities/Address";

export default class Client extends Person
{
    address: Address;
    cpf: string;
    phone: string;
    salary: number;

    constructor(
        name: string,
        email: string,
        password: string,
        address: Address,
        cpf: string,
        phone: string,
        salary: number
    )
    {
        super(name, email, password);
        this.address = address;
        this.cpf = cpf;
        this.phone = phone;
        this.salary = salary;
    }

    static findClient(id: number)
    {
        let address = new Address(
            Address.getAddressTypes().street,
            "rua dos tolos",
            100,
            "ap 20",
            "12345678",
            "curitiba",
            "parana"
        );
        let client = new Client(
            "enzo",
            "enzo@radel",
            "1234",
            address,
            "12345678901",
            "12345678",
            5000
        );

        return client;
    }
}