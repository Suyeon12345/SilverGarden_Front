import React, { useRef } from 'react';
import styles from '../css/angel.module.css';
import { useReactToPrint } from 'react-to-print';
import ProgramInsert from "./ProgramInsert";
import ProgramDetail from './ProgramDetail';

const RightContent = ({ programDetail, onRowClick, getProgramList }) => {
    const programDetailExists = programDetail !== null;
    // console.log('RightContent');
    // console.log(programDetail);
    
    
    //프린트 관련
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "파일 다운로드 시 저장되는 이름 작성" ,
        onAfterPrint: () => alert("파일 다운로드 후 알림창 생성 가능")
    });
    
    const handleOutput = () => {
        if (programDetail === null) {
            const confirmOutput = window.confirm('출력값이 비어있습니다. 정말 출력하시겠습니까?');
            if (confirmOutput) {
                handlePrint();
            }
        } else {
            //리팩토링 하다가...엘스 뒤가 지워졌구나ㅠㅠ
            handlePrint(); // 여기에서 프린트 함수 호출 추가
        }
    };
    
    const handleInsertOrUpdate = () => {
        if (programDetailExists) {
            onRowClick(null);
            getProgramList();
        }
    };
    // programDet = programDetail?.PG_CONTENT || '';

    //프린트 관련
    /*https://www.npmjs.com/package/react-to-print*/
    //useRef는 함수형 컴포넌트에 값을 생성하고 관리
    const componentRef = useRef();


    return (
        <div ref={componentRef}>
            <div className={styles.box2}>
                <div>
                    <h5>프로그램 계획서</h5>
                </div>
                <div>
                <button className="btn btn-outline-danger" style={{ minWidth: '15%', marginRight: '0.5rem' }}>삭제</button>
                    <button
                        className="btn btn-outline-secondary"
                        style={{ minWidth: '15%', marginRight: '0.5rem' }}
                        onClick={handleOutput}
                    >
                        출력
                    </button>
                    <button
                        className="btn btn-outline-success"
                        style={{ minWidth: '15%', marginRight: '0.5rem' }}
                        onClick={handleInsertOrUpdate}
                    >
                        {programDetail ? '초기화' : '등록'}
                    </button>
                </div>
                {programDetail ? (
                    <ProgramDetail programDetail={programDetail} handleOutput={handleOutput} handleInsertOrUpdate={handleInsertOrUpdate} />
                ) : (
                    <div>
                    <ProgramInsert />
                    </div>
                )}
            </div>
        </div>
    );
}

export default RightContent;