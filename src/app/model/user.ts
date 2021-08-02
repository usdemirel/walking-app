export class User {
    id: number;
    email: string;
    role: string;
    firstName: string;
    lastName: string;
    phone: string;
    address?: {
        id: number;
        addressee: string;
        civicAddress: string;
        municipality: string;
        province: string;
        postalCode: string;
    };
    branch?: {
        id: number;
        branchName: string;
        address?: {
            id: number;
            addressee: string;
            civicAddress: string;
            municipality: string;
            province: string;
            postalCode: string;
        };
        active: boolean;
    };
    active: boolean;
}
