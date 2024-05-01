import conf from "../conf/conf";
import { Client, ID, Databases,Storage,Query } from "appwrite";

export class Service{

    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteurl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);

    }

    async creatPost({title,slug,content,featuredImage,status,userID}){
       
       
       try{ 
        this.databases.createDocument()
    }catch(error){

    }
    }


}


const service = new Service()

export default Service