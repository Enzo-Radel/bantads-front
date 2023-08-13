import Account from "./Account";

export enum MovementTypes {
    deposit = "Depósito",
    withDraw = "Saque",
    transference = "Transferência",
};

export default class Movement
{
    type: MovementTypes;
    date: Date;
    value: number;
    origin: Account|null = null;
    destination: Account|null = null;

    constructor(
        type: MovementTypes,
        date: Date,
        value: number,
        origin: Account|null = null,
        destination: Account|null = null,
    )
    {
        this.type = type;
        this.date = date;
        this.value = value;

        if (origin != null && destination != null) {
            this.origin = origin;
            this.destination = destination;
        }
    }

    static getByAccount(id: number)
    {
        let account1 = Account.findAccount(1);
        let account2 = Account.findAccount(2);

        let movements = [
            new Movement(MovementTypes.transference, new Date("08-02-2023 12:23:32"), 50, account1, account2),
            new Movement(MovementTypes.withDraw, new Date("08-03-2023 12:23:32"), 50),
            new Movement(MovementTypes.transference, new Date("08-04-2023 12:23:32"), 50, account1, account2),
            new Movement(MovementTypes.deposit, new Date("08-05-2023 12:23:32"), 50),
            new Movement(MovementTypes.deposit, new Date("08-05-2023 12:23:32"), 50),
            new Movement(MovementTypes.deposit, new Date("08-05-2023 12:23:32"), 50),
            new Movement(MovementTypes.deposit, new Date("08-05-2023 12:23:32"), 50),
            new Movement(MovementTypes.deposit, new Date("08-05-2023 12:23:32"), 50),
            new Movement(MovementTypes.deposit, new Date("08-06-2023 12:23:32"), 50),
        ];

        return movements;
    }

    getOriginName()
    {
        let origin = this.origin;
        var name;
        if(origin != null)
        {
            name = origin.client.name;
        } else {
            name = null;
        }

        return name;
    }

    getDestinationName()
    {
        let destination = this.destination;
        var name;
        if(destination != null)
        {
            name = destination.client.name;
        } else {
            name = null;
        }

        return name;
    }

    getFormattedDate()
    {
        let date = "";

        date += this.date.toLocaleDateString("pt-BR");

        date += (" " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds());

        return date;
    }
}