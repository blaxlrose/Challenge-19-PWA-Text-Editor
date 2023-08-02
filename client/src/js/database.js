import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('UPDATE the database');

  // Creates connection to the database
  const contactDb = await openDB('jate', 1);
// Creates a new transaction and privileges
  const tx = contactDb.transaction('jate', 'readonly');

// Opens object to store
  const store = tx.objectStore('jate');

// Puts data in the database
  const request = store.put({ id: 1, value: content });

// Confirms the request
  const result = await request;
  console.log("🚀 - data saved to the database", result);

};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

  console.log('GET from the database');

  // Creates connection to the database
  const contactDb = await openDB('jate', 1);
  
// Creates a new transaction and privileges
  const tx = contactDb.transaction('jate', 'readonly');

// Opens object to store
  const store = tx.objectStore('jate');

// Gets all data in the database
  const request = store.get(1);

// Confirms the request
  const result = await request;
  console.log('result.value', result);
return result?.value
};

initdb();
