import { contactURL } from "../../constant";
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
    const options: RequestInit = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(msg)
    };
    return fetch(contactURL, options)
      .then((res: Response) => res.json());
  }

}

export default ContactService;