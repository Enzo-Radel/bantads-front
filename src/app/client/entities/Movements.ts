import Account from "./Account";

enum MovementTypes {
    deposit = "Depósito",
    withDraw = "Saque",
    transference = "Transferência",
};

export default class Movements
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
}