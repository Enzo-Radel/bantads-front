import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class IndexedDbService {
    public static openDatabase(): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('Bantads', 1);

            request.onupgradeneeded = (event) => {
                const db = (event.target as IDBRequest<IDBDatabase>).result;
                db.createObjectStore('clients', { keyPath: 'id', autoIncrement: true });
            };

            request.onsuccess = (event) => {
                resolve((event.target as IDBRequest<IDBDatabase>).result);
        };

            request.onerror = (event) => {
                reject(event);
            };
        });
    }

    addClient(client: any)
    {
        const request = indexedDB.open('Bantads', 1);
        request.onsuccess = function(event) {
            const db = (event.target as IDBOpenDBRequest).result;
            const transaction = db.transaction('clients', 'readwrite');
            const store = transaction.objectStore('client');
            
            const addRequest = store.add(client);
            addRequest.onsuccess = function(event) {
                console.log('Cliente adicionado com sucesso!');
            };
        };
    }

  // Implemente os métodos para inserir, atualizar, consultar e excluir dados no IndexedDB.
}
