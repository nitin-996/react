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

        return this.databases.createDocument(
conf.appwriteDatabaseId,
conf.appwriteCollectionId,
// instead of slug value we can also use ID.unique 
slug,
{title,content,featuredImage,status,userID
  
}
        )

    } catch (error){
console.log("create post:" , error);
    } 
    }

    async updatePost(slug , {title,content,featuredImage,status}){

      try{

        return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,content,featuredImage,status
        }
      )}
      catch(error){
        console.log("updatepost error:" , error);
      }
    }


    async deletePost(slug){

     try{ await this.databases.deleteDocument(
        
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
      return true;
    } catch(error){

        console.log("delete post:", error);
return false;
      }

    }

    async getPost(slug){
      try{
        return await this.databases.getDocument(
          conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
      slug)
      }catch(error){
        console.log("getpost error:" , error);

      }
    }

    async listPost(queries = [Query.equal("status","active")]){

    try {
      await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      )
      return true
    } catch (error) {
      console.log("list error:", error);
    }
    }

    // storage related functionality

    
    async uploadFile(file){

      try {
      return  await this.bucket.createFile(
          conf.appwriteBucketId,
          ID.unique(),
          file
          
      );
      } catch (error) {
        
        console.log("upload error:" , error);
      }
    }

    async deleteFIles(fileId){
      try {
        await this.bucket.deleteFIle(
          conf.appwriteBucketId,
          fileId
        )
        return true
      } catch (error) {
        console.log("storage deletefile error:" , error);
        return false
      }
    }

    getFilePreview(fieldId){
      return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fieldId
      )
    }

}


const service = new Service()

export default Service