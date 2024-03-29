
// export const messageReceiveList = (params) => {
//   return new Promise((resolve, reject) => {
//     try {
//       const response = axios({
//         method: "get",
//         url: process.env.REACT_APP_SPRING_IP + "message/messageReceiveList",
//         params: params,
//       });
//       resolve(response);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

import apiInterceptor from "../auth/apiInterceptor";

export const messageReceiveList = async (params) => {
  try {
    const response = await apiInterceptor.get("message/messageReceiveList", { params });
    return response;
  } catch (error) {
    throw error;
  }
};

// export const messageDeletedList = (params) => {
//   return new Promise((resolve, reject) => {
//     try {
//       const response = axios({
//         method: "get",
//         url: process.env.REACT_APP_SPRING_IP + "message/messageDeletedList",
//         params: params,
//       });
//       resolve(response);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

export const messageDeletedList = async (params) => {
  try {
    const response = await apiInterceptor.get("message/messageDeletedList", {params});
    return response;
  } catch (error) {
    throw error;
  }
};

// export const messageSendList = (params) => {
//   return new Promise((resolve, reject) => {
//     try {
//       const response = axios({
//         method: "get",
//         url: process.env.REACT_APP_SPRING_IP + "message/messageSendList",
//         params: params,
//       });
//       resolve(response);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

export const messageSendList = async (params) => {
  try {
    const response = await apiInterceptor.get("message/messageSendList", {params});
    return response;
  } catch (error) {
    throw error;
  }
};


// export const messageStoredList = (params) => {
//   return new Promise((resolve, reject) => {
//     try {
//       const response = axios({
//         method: "get",
//         url: process.env.REACT_APP_SPRING_IP + "message/messageStoredList",
//         params: params,
//       });
//       resolve(response);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

export const messageStoredList = async (params) => {
  try {
    const response = await apiInterceptor.get("message/messageStoredList", {params});
    return response;
  } catch (error) {
    throw error;
  }
};

// export const messageSend = (data) => {
//   return new Promise((resolve, reject) => {
//     try {
//       const response = axios({
//         method: "post",
//         url: process.env.REACT_APP_SPRING_IP + "message/messageSend",
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         processData: false,
//         contentType: false,
//         data: data,
//       });
//       resolve(response);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

export const messageSend = async (data) => {
  try {
    const response = await apiInterceptor.post("message/messageSend", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};


// export const messageRead = (params) => {
//   return new Promise((resolve, reject) => {
//     try {
//       const response = axios({
//         method: "get",
//         url: process.env.REACT_APP_SPRING_IP + "message/messageRead",
//         params: params
//       });
//       resolve(response);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

export const messageRead = async (params) => {
  try {
    const response = await apiInterceptor.get("message/messageRead", {params});
    return response;
  } catch (error) {
    throw error;
  }
};

// export const messageDelete = (params) => {
//   return new Promise((resolve, reject) => {
//     try {
//       const response = axios({
//         method: "get",
//         url: process.env.REACT_APP_SPRING_IP + "message/messageDelete",
//         params: params
//       });
//       resolve(response);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

export const messageDelete = async (params) => {
  try {
    const response = await apiInterceptor.get("message/messageDelete", {params});
    return response;
  } catch (error) {
    throw error;
  }
};

// export const messageCompleteDelete = (params) => {
//   return new Promise((resolve, reject) => {
//     try {
//       const response = axios({
//         method: "get",
//         url: process.env.REACT_APP_SPRING_IP + "message/messageCompleteDelete",
//         params: params
//       });
//       resolve(response);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

export const messageCompleteDelete = async (params) => {
  try {
    const response = await apiInterceptor.get("message/messageCompleteDelete", {params});
    return response;
  } catch (error) {
    throw error;
  }
};

// export const messageStore = (params) => {
//   return new Promise((resolve, reject) => {
//     try {
//       const response = axios({
//         method: "get",
//         url: process.env.REACT_APP_SPRING_IP + "message/messageStore",
//         params: params
//       });
//       resolve(response);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

export const messageStore = async (params) => {
  try {
    const response = await apiInterceptor.get("message/messageStore", {params});
    return response;
  } catch (error) {
    throw error;
  }
};

// export const messageFileDownload = (filename) => {
//   return new Promise((resolve, reject) => {
//     axios({
//       method: "get",
//       url: `${process.env.REACT_APP_SPRING_IP}message/messageFileDownload`,
//       params: {'filename': filename},
//       responseType: 'blob', // 파일 다운로드를 위해 responseType을 blob으로 설정
//     })
//     .then(response => {
//       // 파일 다운로드 처리
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', filename);
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       window.URL.revokeObjectURL(url);
//       resolve(response);
//     })
//     .catch(error => {
//       reject(error);
//     });
//   });
// };

export const messageFileDownload = async (filename) => {
  try {
    const response = await apiInterceptor.get("message/messageStore", { 
      params: {'filename': filename},
      responseType: 'blob',
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    return response;
  } catch (error) {
    throw error;
  }
};