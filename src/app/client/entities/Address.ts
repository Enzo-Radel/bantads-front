enum AddressTypes {
    street = "Rua",
    avenue = "Avenida",
    other = "Outro",
};

export default class Address
{
    type: AddressTypes = AddressTypes.street;
    address: string = "";
    number: number = 0;
    complement: string = "";
    zipCode: string = "";
    city: string = "";
    state: string = "";
}