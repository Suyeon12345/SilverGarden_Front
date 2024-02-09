import React, {useState} from 'react';
import ProgramList from "./ProgramList";
import Fullcallendar from "./Fullcallendar"; 

const MainContent = ({ programList, getProgramList, onRowClick, setProgramDetail }) => {

    const [activeTab, setActiveTab] = useState('list'); // 'list' 또는 'calendar'

    const switchToTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div>
                <div>
                    <h5>프로그램 현황</h5>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <ul className="nav nav-tabs" style={{fontSize: '1rem'}}>
                    <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'list' ? 'active' : ''}`} href="#" onClick={() => switchToTab('list')}>목록</button>
                    </li>
                    <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'calendar' ? 'active' : ''}`} href="#" onClick={() => switchToTab('calendar')}>일정</button>
                    </li>
                </ul> 
            </div>
            {activeTab === 'calendar' ? (
                <Fullcallendar/>
            ) : (
                <ProgramList
                    programList={programList}
                    getProgramList={getProgramList}
                    onRowClick={(program) => {
                        onRowClick(program).then((detail) => setProgramDetail(program));
                    }}
                />
            )}
        </>
    );
};
export default MainContent;
