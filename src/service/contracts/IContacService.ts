import { Contact } from "../../model";

interface IContactService {
  sendMessage: (msg: Contact) => Promise<Contact>
}

export default IContactService;