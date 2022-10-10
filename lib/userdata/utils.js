import axios from 'axios';

export const postData = async (formData) => {
    
    try {
      const { data } = await axios.post('https://sheet.best/api/sheets/1044e63f-9c16-4243-b8af-6fdaae3f187f',formData);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
export const postComplaintData = async (formData) => {
    
    try {
      const { data } = await axios.post('https://sheet.best/api/sheets/3e481898-ee68-49c8-a860-955d49c96a27',formData);
      return data;
    } catch (error) {
      console.log(error);
    }
  };