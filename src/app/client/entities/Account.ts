import Manager from "src/app/manager/entities/Manager";
import Client from "./Client";

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
}