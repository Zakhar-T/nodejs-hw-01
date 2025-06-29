import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('The array of contacts is empty!');
    }
    return contacts;
  } catch (error) {
    console.log(error.message);
  }
};

console.log(await getAllContacts());
