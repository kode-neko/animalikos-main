import { SerType } from "../../model";
import { IContactService } from "../contracts";
import { ContactServiceLocal } from "../local";
import { ContactServiceRest } from "../rest";

const {
  SERVICE_TYPE
} = import.meta.env;

function getContact(): IContactService {
  switch(SERVICE_TYPE){
  case SerType.REST:
    return ContactServiceRest.getInstance();
  default:
    return ContactServiceLocal.getInstance();
  }
}

export default getContact;