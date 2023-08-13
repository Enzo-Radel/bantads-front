import Manager from "src/app/manager/entities/Manager";
import Client from "./Client";
import Address from "./Address";

export default class Account
{
    client: Client;
    number: number;
    limit: number;
    manager: Manager;
    balance: number;
    created_at: Date;

    constructor(
        client: Client,
        number: number,
        limit: number,
        manager: Manager,
        balance: number,
        created_at: Date,
    )
    {
        this.client = client;
        this.number = number;
        this.limit = limit;
        this.manager = manager;
        this.balance = balance;
        this.created_at = created_at;
    }

    static findAccount(id: number)
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

        let manager = new Manager(
            "gerente",
            "gerente@email",
            "1234",
            "12345",
            "1111-1111"
        );

        let account = new Account(
            client,
            123,
            2000,
            manager,
            5000,
            new Date("08-01-2023")
        );

        return account;
    }
}