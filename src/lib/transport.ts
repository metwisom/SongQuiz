import ResponseData from '@/internal/ResponseData';
import {readFromLocalStorage} from '@/lib/localStorage';

type headers = {
  'Content-Type': string
  Authorization?: string
}

const Transport = (() => {


  return Object.freeze({
    async get<T>(url: string): Promise<T> {
      return new Promise(async (resolve, reject) => {
        const Authorization = readFromLocalStorage('token');
        const headers: headers = {
          'Content-Type': 'application/json',
        };
        if (Authorization) {
          headers.Authorization = 'Bearer ' + Authorization;
        }
        const response = await fetch(url, {
          method: 'GET',
          headers,
        });
        const responseData: ResponseData<T> = await response.json();
        if (response.ok) {
          resolve(responseData.data);
        } else {
          reject(responseData.error);
        }
      });
    },

    async post<T>(url: string, body: any): Promise<T> {
      return new Promise(async (resolve, reject) => {
        const Authorization = readFromLocalStorage('token');
        const headers: headers = {
          'Content-Type': 'application/json',
        };
        if (Authorization) {
          headers.Authorization = 'Bearer ' + Authorization;
        }
        const response = await fetch(url, {
          method: 'POST',
          headers,
          body: JSON.stringify(body),
        });
        const responseData: ResponseData<T> = await response.json();
        if (response.ok) {
          resolve(responseData.data);
        } else {
          reject(responseData.error);
        }
      });
    },
  });
})();


export {Transport};