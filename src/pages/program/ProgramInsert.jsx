import React, { useState } from 'react';
import styles from '../program/programhome.module.css';
import { programInsertDB } from '../../services/api/programApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function ProgramInsert({ componentRef, handleReset, getProgramList }) {
    const [newData, setNewData] = useState({
        PG_NAME: '',
        PG_CATEGORY: '',
        PG_TEACHER: '',
        PG_DAYSOFWEEK: '',
        PG_REPEAT_TYPE: '',
        PG_START: '',
        PG_END: '',
        PG_CONTENT: '',
    });

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const handleInsert = async () => {
        console.log('등록 버튼이 클릭되었습니다.');
        try {
        // ISO 문자열로 변환하기 전에 형식을 맞추기
        const formattedData = {
        ...newData,
        PG_START: formatDate(new Date(newData.PG_START)),
        PG_END: formatDate(new Date(newData.PG_END)),
        };
        // console.log(formattedData);
        const response = await programInsertDB(formattedData);
        // console.log(response);
        // 등록 성공 시 상태 초기화
        setNewData({
            PG_NAME: '',
            PG_CATEGORY: '',
            PG_TEACHER: '',
            PG_DAYSOFWEEK: '',
            PG_REPEAT_TYPE: '',
            PG_START: '',
            PG_END: '',
            PG_CONTENT: '',
        });
        getProgramList(); // 초기화 진행
        handleReset(); // 등록화면 이동
        } catch (error) {
        console.error('API 호출 에러:', error);
        }
    };

    const periodOptions = ['매주', '격주', '매월', '격월', '하루']; // 주기 옵션들
    const categoryOptions = ['신체', '교양', '문화', '교육', '여가']; // 분류 옵션들

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '3px' }}>
            <button className="btn btn-outline-warning" onClick={handleReset}>
            초기화
            </button>
            <button className="btn btn-outline-success" onClick={handleInsert}>
            등록
            </button>
        </div>
        <div ref={componentRef}>
            <div className={styles.littleTitleBar}>
                <FontAwesomeIcon icon={faDownload} className={styles.icon} style={{ marginRight: '5px' }} />
                신규 프로그램 등록
            </div>
            <table className="table table-bordered">
            <tbody className="fs-6">
                <tr>
                    <th style={{ width: '25%' }}>프로그램명</th>
                    <td style={{ width: '25%' }} colSpan="3">
                        <input type="text" name="PG_NAME" value={newData.PG_NAME} onChange={handleInputChange} />
                    </td>
                </tr>
                <tr>
                    <th style={{ width: '25%' }}>분류</th>
                    <td style={{ width: '25%' }}>
                        <select name="PG_CATEGORY" value={newData.PG_CATEGORY} onChange={handleInputChange}>
                        <option value="null">선택</option>
                        {categoryOptions.map((category, index) => (
                            <option key={index} value={category}>
                            {category}
                            </option>
                        ))}
                        </select>
                    </td>
                    <th style={{ width: '25%' }}>주기</th>
                    <td style={{ width: '25%' }}>
                        <select name="PG_REPEAT_TYPE" value={newData.PG_REPEAT_TYPE} onChange={handleInputChange}>
                        <option value="null">선택</option>
                        {periodOptions.map((period, index) => (
                            <option key={index} value={period}>
                            {period}
                            </option>
                        ))}
                        </select>
                    </td>
                </tr>
                <tr>
                    <th style={{ width: '30%' }}>강사</th>
                    <td style={{ width: '30%' }}>
                        <input type="text" name="PG_TEACHER" value={newData.PG_TEACHER} onChange={handleInputChange} />
                    </td>
                    <th style={{ width: '30%' }}>요일</th>
                    <td style={{ width: '30%' }}>
                        <input type="text" name="PG_DAYSOFWEEK" value={newData.PG_DAYSOFWEEK} onChange={handleInputChange} />
                    </td>
                </tr>
                <tr>
                    <th style={{ width: '30%' }}>시작일시</th>
                    <td style={{ width: '30%' }}>
                        <input type="datetime-local" name="PG_START" value={newData.PG_START} onChange={handleInputChange} />
                    </td>
                    <th style={{ width: '30%' }}>종료일시</th>
                    <td style={{ width: '30%' }}>
                        <input type="datetime-local" name="PG_END" value={newData.PG_END} onChange={handleInputChange} />
                    </td>
                </tr>
                <tr>
                    <th colSpan="6">프로그램 내용</th>
                </tr>
                <tr>
                    <td colSpan="6">
                        <textarea
                            style={{ width: '100%', height: '100px' }} // 원하는 높이로 조절 가능
                            name="PG_CONTENT"
                            value={newData.PG_CONTENT}
                            onChange={handleInputChange}
                        />
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
        </>
    );
}

export default ProgramInsert;
