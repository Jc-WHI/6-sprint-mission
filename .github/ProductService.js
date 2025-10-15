const axios = require('axios');

export class Product{
    constructor(name,description,price,tags,images,favoriteCount=0){
        this.name = name;
        this.description = description;
        this.price = price;
        this.tags = tags;
        this.images = images;
        this.favoriteCount = favoriteCount;
    }
    favorite(){
        this.favoriteCount++;
    }


}

export class ElectricProduct extends Product{
    constructor(name,description,price,tags,images,favoriteCount=0,manufacturer){

                this.name = name;
        this.description = description;
        this.price = price;
        this.tags = tags;
        this.images = images;
        this.favoriteCount = favoriteCount;
        this.manufacturer = manufacturer;
    }


}

export async function getProductList(page=1,pageSize=10,orderBy=recent,keyword){
    const params = new URLSearchParams({page:page,pageSize:pageSize,orderBy:orderBy});
    const baseurl =`https://panda-market-api-crud.vercel.app/docs/#/Product/ListProducts${params}`;
        let result=await axios.get(baseurl,{
        method:"GET"
    }).then((response)=>{console.log('get response is sucessfully done')})
    .catch((error)=>{console.log(error)})
     
    

}

getProductList(1,10,recent,제품);