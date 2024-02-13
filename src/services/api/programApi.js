import axios from "axios";

export const programListDB = (program) => {
    return new Promise((resolve,reject)=>{
    try {
        console.log(program);
        const response = axios({
            method: "get",
            url: process.env.REACT_APP_SPRING_IP + "program/pgList",
            params: program
        });
        resolve(response);
    }catch (error){
    reject(error);
    }
    })
};

export const programDetailDB = async (program) => {
    try {
        console.log(program)
        const response = await axios({
            method: "get",
            url: process.env.REACT_APP_SPRING_IP + "program/pgDetail",
            params: program
        });
        return response.data; // 프로그램 상세 정보만 반환하도록 수정
    } catch (error) {
        throw error;
    }
};
export const ProgramDeleteDB = async (program) => {
    try {
        console.log(program) //42(눌린 pg_no값)
        // 수정 시작
        const response = await axios({
            method: "get",
            url: process.env.REACT_APP_SPRING_IP + "program/pgDelete",
            params: program
        });
        return response.data; // 프로그램 상세 정보만 반환하도록 수정
    } catch (error) {
        throw error;
    }
};

export const programInsertDB = (program) => {
    console.log(program); //
    return new Promise((resolve, reject) => {
        try {
            const response = axios({
                method: "post", //@RequestBody
                url: process.env.REACT_APP_SPRING_IP + "program/pgInsert",
                data: program,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

export const ProgramUpdateDB = (program) => {
    console.log(program); 
    console.log(JSON.stringify(program));//{"pg_no":26,"pg_name":"서예","pg_category":"교양\n","pg_teacher":"이지연","pg_daysofweek":"목요일","pg_start":"2024-02-02T14:00","pg_end":"2024-03-31T16:00","pg_content":"심신안정 및 스트레스 완화를 위한 서예 활동"}
    return new Promise((resolve, reject) => {
        axios({
            method: "put",
            url: process.env.REACT_APP_SPRING_IP + "program/pgUpdate",
            data: JSON.stringify(program), // JSON 문자열로 변환
            headers: {
                'Content-Type': 'application/json', // Content-Type 설정 추가
            },
        })
        .then(response => {
            console.log(response);
            resolve(response);
        })
        .catch(error => {
            console.error(error);
            reject(error);
        });
    });
};

export const scheduleListDB = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: 'get',
                url: process.env.REACT_APP_SPRING_IP + 'program/scheduleList',
                // 필요한 경우 params 추가
            });
            console.log(response);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

export const updateEventDB = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: 'get',
                url: process.env.REACT_APP_SPRING_IP + 'program/scheduleUpdate',
                // 필요한 경우 params 추가
            });
            console.log(response);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

    
};