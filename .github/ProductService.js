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
    const products = result.data.list.map(element =>{
        if(element["tags"].includes("전자제품")){
            
             return new ElectricProduct(element.name,element.description,element.price,element.tags,element.images);

        }else{
            return new Product(element.name,element.description,element.price,element.tags,element.images);
        }
        
        
        
    });
    return products;
}catch(error){
    console.error('GET request is failed',error.message);
}
     
    

}


export async function createProduct(name, description, price, tags, images){
    const baseurl =`https://panda-market-api-crud.vercel.app/products`;
    try{
        let request = await axios.post(baseurl,
            {
                name:name,
                description:description,
                price:price,
                tags:tags,
                images:images
            }
        )
        console.log("Post is suceed",request.data);
        return request.data;
    }catch(error){
        console.log("post failed:",error.response.data);

    }

    
}

export async function patchProduct(productid,userData){
    const baseurl =`https://panda-market-api-crud.vercel.app/products/${productid}`;
    try{
        let request = await axios.patch(baseurl,userData)
            return request.data
    }catch(error){
        console.log("post failed:",error.response.data);

    }

}


export async function deleteProduct(productid){
    const baseurl =`https://panda-market-api-crud.vercel.app/products/${productid}`;
    try{
        let request = await axios.delete(baseurl)
        return request.data;
    }catch(error){
        console.log("delete failed",error.response.data);
    }
}

