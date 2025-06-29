import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (data) => {
  await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
};
