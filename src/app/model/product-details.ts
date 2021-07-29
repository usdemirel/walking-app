export interface ProductDetails {
id : number;
title : string;
description : string;
image : string;
keyWords : string;
brand : string;
category : {
id : number;
category : string;
image : string;
active : boolean
};
rating : number;
reviewCount : number;
minPrice : number;
maxPrice : number;
}
