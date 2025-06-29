import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('The array of contacts is empty!');
    }
    contacts.pop();
    writeContacts(contacts);
  } catch (error) {
    console.log(error.message);
  }
};

removeLastContact();
