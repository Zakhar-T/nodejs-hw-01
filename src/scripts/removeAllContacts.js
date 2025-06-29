import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('The array of contacts is empty!');
    }
    await writeContacts([]);
  } catch (error) {
    console.log(error.message);
  }
};

removeAllContacts();
