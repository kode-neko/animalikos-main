import { Contact } from "../../model";
import { IContactService } from "../contracts";

class ContactService implements IContactService {

  private static instance: ContactService;

  private constructor() {}

  public static getInstance(): ContactService {
    if(!ContactService.instance) {
      ContactService.instance = new ContactService();
    }
    return this.instance;
  }

  public sendMessage(msg: Contact): Promise<Contact> {
    return Promise.resolve(msg);
  }

}

export default ContactService;