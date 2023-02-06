export type User = {
    id: number,
    isIndividual: boolean,
    isCompany: boolean,
    isPetSitter: boolean,
    email: string,
    phoneNumber: string,
    city: string,
    postalCode: string,
    address: string,
    profilImage: string,
    geopos: number[],
    firstname: string,
    lastname: string,
    companyName: string,
    siretNumber: string,
    website: string,
    keepDogs: boolean,
    keepCats: boolean,
    price: number,
    description: string,
    acceptedWeight: string,
    imageLocation: string
}
