import axios from 'axios';

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

    super(name, description, price, tags, images, favoriteCount);
    this.manufacturer = manufacturer;
    }


}

export async function getProductList(page=1,pageSize=10,orderBy="recent",keyword){
    const baseurl =`https://panda-market-api-crud.vercel.app/products?`;
    try{    
    let result=await axios.get(baseurl,{
        params:{
            page:page,
            pageSize:pageSize,
            orderBy:orderBy,
            keyword:keyword
        }
   
    })
    console.log('GET request is sucessfully done');
    return result.data;
}catch(error){
    console.error('GET request is failed',error.message);
}
     
    

}

let result = await getProductList(1,10,"recent","");
console.log(result);