import Person from "src/app/entities/Person";
import Address from "src/app/entities/Address";
import { IndexedDbService } from "../utils/db/IndexedDbService";

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

    // Inicializa um cliente com dados fictícios, excluir essa função depois...
    static createClients(): void{
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
        IndexedDbService.addClientInDb(client)
        IndexedDbService.addClientInDb(client2)
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

    static addClient(client: Client): void {
        IndexedDbService.addClientInDb(client)
    }

    static removeClient(client: Client): void {
        IndexedDbService.removeClientFromDb(client)
    }

    // 
    static async getAllClients(): Promise<Client[]> {
        console.log("Em entities/Client.ts")
        let clients = await IndexedDbService.getAllClientsFromDB()
        console.log(clients)
        return clients
    }
}