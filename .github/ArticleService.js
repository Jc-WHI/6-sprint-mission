import axios from 'axios';

class Article{
    constructor(title,content,writer,likeCount = 0){
        

    }
    like(){
            this.likeCount++;
        }
}


export async function getArticleList(page=1,pageSize=10,orderBy="recent",keyword){
    let baseurl = "https://panda-market-api-crud.vercel.app/articles?"
    try{
    const request = await axios.get(baseurl,{params:{
        page : page,
        pageSize:pageSize,
        orderBy:orderBy,
        keyword:keyword

    }
    

    })
    console.log("request is succeed");
    return request.data;
    }catch(error){
        console.log("request is failed",error.message);
        

    }

}



export async function createArticle(article){
    const baseurl = "https://panda-market-api-crud.vercel.app/articles?"
    try{
        const request = await axios.post(baseurl,article);
        console.log("request is suceed");
        return request.data;

    }catch(error){
        console.log(error.response.data);
    }

}
let testarticle = {
    
    title:"먼산 언저리마다",
    content:"가시가되어",
    

}

export async function patchArticle(obj,id){
    const baseurl = `https://panda-market-api-crud.vercel.app/articles/${id}?`;
    try{
    let request = await axios.patch(baseurl,obj);
    console.log("request is succeed");
    return request.data;
    }
    catch(error){
        console.log("patch is failed",error.response.data);
    }

}



export async function deleteArticle(id){
     const baseurl = `https://panda-market-api-crud.vercel.app/articles/${id}?`;

    try{
        let request = await axios.delete(baseurl,id);
        console.log("request is suceed");

        return request.data;
       
    }catch(error){
        console.log(error.response.data);
        

    }
}
