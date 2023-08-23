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

    // cria dois clientes e retorna um array com eles
    static getAllClients(): Client[] {
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
        let address2 = new Address(
            Address.getAddressTypes().street,
            "perto do fim do mundo",
            200,
            "casa azul",
            "12345678",
            "curitiba",
            "parana"
        );
        let client2 = new Client(
            "Claudio",
            "claudio@sla",
            "54321",
            address2,
            "12345678901",
            "12345678",
            100000000
        );
        const clients: Client[] = [
            client,
            client2,
        ]
        return clients;
    }
}