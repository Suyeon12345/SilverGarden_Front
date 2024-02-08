import React from 'react'
import styles from './programhome.module.css'
import SidebarCommon from '../../components/sidebar/SidebarCommon';
import { faComment, faCrosshairs, faSolarPanel } from '@fortawesome/free-solid-svg-icons';


const Program = () => {
    const list = [//이 리스트를 props를 넣어주면 원하는 목록의 사이드바를 생성 가능
    {
    label: '프로그램 관리',//목록이름
    icon: faSolarPanel,//fontAwsome 아이콘 명
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
    isOpen:true,
    subMenuItems: [
        { label: '기록물 관리', icon: faComment },
    ],
    },
    ];
    return (
        <div className={styles.programWrap}>
            <div className={styles.programSidebarWrap}><SidebarCommon list={list}/></div>
            <div className={styles.programContentWrap}>Content</div>
        </div>
    )
}

export default Program