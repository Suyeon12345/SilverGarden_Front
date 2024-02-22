import axios from "axios";

export const getEmpList = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "emplist/all",
        params: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

