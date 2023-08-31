import { Injectable } from '@angular/core';
import Client from 'src/app/entities/Client';

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
                console.log('Banco de dados aberto com sucesso!');
        };

            request.onerror = (event) => {
                reject(event);
            };
        });
    }

    static addClientInDb(client: any): void {
        const request = indexedDB.open('Bantads', 1);
        request.onsuccess = function(event) {
            const db = (event.target as IDBOpenDBRequest).result;
            const transaction = db.transaction('clients', 'readwrite');
            const store = transaction.objectStore('clients');

            const addRequest = store.add(client);
            addRequest.onsuccess = function(event) {
                console.log('Cliente adicionado com sucesso!');
            };
        };
    }

    static removeClientFromDb(client: any): void {
        const request = indexedDB.open('Bantads', 1);
        request.onsuccess = function(event) {
            const db = (event.target as IDBOpenDBRequest).result;
            const transaction = db.transaction('clients', 'readwrite');
            const store = transaction.objectStore('clients');

            const deleteRequest = store.delete(client.id);
            deleteRequest.onsuccess = function(event) {
                console.log('Cliente removido com sucesso!');
            };
        }
    }

    static async getAllClientsFromDB(): Promise<Client[]> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('Bantads', 1);
            request.onsuccess = function(event) {
                const db = (event.target as IDBOpenDBRequest).result;
                const transaction = db.transaction('clients', 'readonly');
                const store = transaction.objectStore('clients');
    
                const getRequest = store.getAll();
                getRequest.onsuccess = function(event) {
                    const clients = getRequest.result;
                    console.log('Clientes recuperados com sucesso!', clients);
                    resolve(clients);
                };
                getRequest.onerror = function(event) {
                    console.error('Erro ao recuperar clientes do banco de dados.', getRequest.error);
                    reject(getRequest.error);
                };
            };
            request.onerror = function(event) {
                console.error('Erro ao abrir o banco de dados.', request.error);
                reject(request.error);
            };
        });
    }



  // Implemente os métodos para inserir, atualizar, consultar e excluir dados no IndexedDB.
}
