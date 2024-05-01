import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class Authservice {
  client = new Client();
  account;

  // constructor will automatically called when new instance is created.
  constructor() {
    this.client
      .setEndpoint(conf.appwriteurl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client); // ek new instance create hoga for every new user
  }

  // destructure the arguments in this function
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method

        this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      const logauth = await this.account.createEmailSession;
      return logauth;
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null;
    
  }

  async logout(){
    try{
       return await this.account.deleteSessions();
    }catch(error){
        console.log("logout error :",  error);
    }
  }
}

const authservice = new Authservice();

export default authservice;
