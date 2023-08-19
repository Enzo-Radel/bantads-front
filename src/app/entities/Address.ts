enum AddressTypes {
    street = "Rua",
    avenue = "Avenida",
    other = "Outro",
};

export default class Address
{
    type: AddressTypes = AddressTypes.street;
    address: string;
    number: number;
    complement: string;
    zipCode: string;
    city: string;
    state: string;

    constructor(
        type: AddressTypes = AddressTypes.street,
        address: string = "",
        number: number = 0,
        complement: string = "",
        zipCode: string = "",
        city: string = "",
        state: string = ""
    )
    {
        this.type = type;
        this.address = address;
        this.number = number;
        this.complement = complement;
        this.zipCode = zipCode;
        this.city = city;
        this.state = state;
    }

    static getAddressTypes()
    {
        return AddressTypes;
    }
}