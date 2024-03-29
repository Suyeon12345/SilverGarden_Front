// export const crawlingListDB = (param) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             console.log("crawlingListDB");
//             console.log(param);
//             const response = await axios.get(process.env.REACT_APP_SPRING_IP + "crawling/dataList", {
//                 params: param
//             });
//             console.log(response); //{data: 'noData', status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}
//             resolve(response.data);
//         } catch (error) {
//             console.error(error);
//             reject(error);
//         }
//     });
// };

import apiInterceptor from "../auth/apiInterceptor";

export const crawlingListDB = async (params) => {
    try {
      const response = await apiInterceptor.get("crawling/dataList", {params});
      return response.data;
    } catch (error) {
      throw error;
    }
  };

// export const crawlingInsertDB = async (data) => {
//     try {
//         const response = await axios.post(process.env.REACT_APP_SPRING_IP + "crawling/dataInsert", data);
//         console.log(response);

//         return response.data;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// };
// =======
// export const crawlingListDB = (param) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             console.log("crawlingListDB");
//             const response = await axios.get(process.env.REACT_APP_SPRING_IP + "crawling/dataList", {
//                 params: param
//             });
//             resolve(response.data);
//         } catch (error) {
//             console.error(error);
//             reject(error);
//         }
//     });
// };
// >>>>>>> e4197850c0f4bdfd1558f047485a91b3d6f4710a

export const crawlingInsertDB = async (data) => {
    try {
      const response = await apiInterceptor.post("crawling/dataInsert", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };