import axios from 'axios';

export const postData = async (formData) => {
    
    try {
      const { data } = await axios.post('https://sheet.best/api/sheets/1044e63f-9c16-4243-b8af-6fdaae3f187f',formData);
      return data;
    } catch (error) {
      console.log(error);
    }
  };