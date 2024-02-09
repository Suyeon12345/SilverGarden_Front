import React, { useState } from 'react'
import styles from './programhome.module.css'
import SidebarCommon from '../../components/sidebar/SidebarCommon';
import {faCalendar, faComment, faCrosshairs, faMapMarker, faSolarPanel, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgramList from './ProgramList';


const Program = () => {
    const list = [//이 리스트를 props를 넣어주면 원하는 목록의 사이드바를 생성 가능
    {
    label: '프로그램 관리',//목록이름
    icon: faMapMarker,//fontAwsome 아이콘 명
    isOpen:true,
    subMenuItems: [//서브목록 정보
        { label: '현황', icon: faCrosshairs},//서브목록이름, 아이콘명, 클릭시넘어갈 url
        { label: '프로그램 정보', icon: faComment},
        { label: '일정', icon: faComment},
    ],
    },
    {
    label: '프로그램 기록',
    icon: faSolarPanel,
    isOpen:false, //열린 상태, 닫힌 상태
    subMenuItems: [
        { label: '기록물 관리', icon: faComment },
    ],
    },
    ];
    const handleMenu = (menuTitle) =>{
        setPage(menuTitle);
    }
    const [page, setPage] = useState("현황");
    console.log(page);
    return (
        <div className={styles.programWrap}>
            <div className={styles.programSidebarWrap}><SidebarCommon list={list} handleMenu={handleMenu}/></div>
            <div className={styles.programTitleBar}><FontAwesomeIcon icon={faCalendar}/> pgTitleBar!!!!!!</div>
            <div className={styles.programContentWrap}><ProgramList/></div>
            <div className={styles.programDetailWrap}>programDetail
                {/* 메뉴로 눌러서 들어갈 때 아래 방법으로!! 
                {page === "프로그램 상세" && "pgDetailContent"}
                {page === "프로그램 수정" && "pgUpdateContent"} */}
            </div>
        </div>
    )
}

export default Program