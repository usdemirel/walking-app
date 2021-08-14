export class StockDto {

        productDescription : {
            id : number;
            title : string;
            description :  string;
            image : string;
            keyWords : string;
            brand :  string;
            category : {
                id : number;
                category :  string;
                image :  string;
                active : boolean;
           } ;
            rating : number;
            reviewCount : number;
            minPrice : number;
            maxPrice : number;
            active : boolean;
       } ;
        stockDetailsList : {
                id : number;
                price : number;
                quantity : number;
                branch : {
                    id : number;
                    branchName : string;
                    address : {
                        id : number;
                        addressee :  string;
                        civicAddress :  string;
                        municipality :  string;
                        province :  string;
                        postalCode : string;
                   };
                    active : boolean;
               } ;
                size : number;
                selected?: boolean;
                maxOrderQuantity : number;
           }[];
}
