import { IQueryDto } from '@/types';
import { API_BASE_URL } from '@/utils/constants';
import axios from 'axios';

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const useAPI = () => {
   const fetchData = async (input: { method?: Method; ep: string; body?: any }) => {
      const { method, ep, body } = input;
      try {
         const config = {
            method: method ?? 'GET',
            url: `${API_BASE_URL}/api/${ep}`,
            headers: {
               'Content-Type': 'application/json'
            },
            data: body ?? {}
         };

         const res = await axios(config);

         return res.data;
      } catch (err) {}
   };

   const getSections = async () => {
      return fetchData({ ep: 'upload-data/sections', method: 'GET' });
   };

   const postQuery = async (data: IQueryDto) => {
      return fetchData({ ep: 'query', method: 'POST', body: data });
   };

   return {
      getSections,
      postQuery
   };
};

export default useAPI;
