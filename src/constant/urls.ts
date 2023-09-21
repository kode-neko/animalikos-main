const {
  PROTOCOL_CONTACT,
  HOST_CONTACT,
  PORT_CONTACT
} = import.meta.env;

const contactURL: string = `${PROTOCOL_CONTACT}${HOST_CONTACT}:${PORT_CONTACT}/contact`;

export {
  contactURL
};