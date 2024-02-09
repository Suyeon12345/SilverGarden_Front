
import React from 'react';

const ProgramDetail = ({ programDetail}) => {
    //프로그램 상세정보 추출
    const pgNo = programDetail? programDetail.PG_NO : '';
    const pgName = programDetail?programDetail.PG_NAME : '';
    const pgCategory = programDetail? programDetail.PG_CATEGORY : '';
    const pgTeacher = programDetail?programDetail.PG_TEACHER : '';
    const pgDays = programDetail?programDetail.PG_DAYSOFWEEK : '';
    const pgStart = programDetail?.PG_START ? new Date(programDetail.PG_START).toLocaleDateString() : '';
    const pgEnd = programDetail?.PG_END ? new Date(programDetail.PG_END).toLocaleDateString() : '';
    const pgContent = programDetail?programDetail.PG_CONTENT : '';

    return (
        <div>
            <table className="table table-bordered">
                <tbody className="fs-6">
                <tr>
                    <th style={{width: '30%'}}>프로그램 NO</th>
                    <td colSpan="5" style={{width: '80%'}}>{pgNo}</td>
                </tr>
                <tr>
                    <th style={{width: '25%'}}>프로그램명</th>
                    <td style={{width: '25%'}}>{pgName}</td>
                    <th style={{width: '25%'}}>분류</th>
                    <td style={{width: '25%'}}>{pgCategory}</td>
                </tr>
                <tr>
                    <th>강사</th>
                    <td>{pgTeacher}</td>
                    <th>요일</th>
                    <td>{pgDays}</td>
                </tr>
                <tr>
                    <th>시작일</th>
                    <td>{pgStart}</td>
                    <th>종료일</th>
                    <td>{pgEnd}</td>
                </tr>
                <tr>
                    <th colSpan="6">프로그램 내용</th>
                </tr>
                <tr>
                    <td colSpan="6">{pgContent}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProgramDetail;