// ProgramFulCalendar.js
import React, { useState, useEffect } from 'react';
import { CommonCalendar, getWeekdayNumber } from '../../components/calendar/CommonCalendar'; // 중괄호 추가
import { scheduleListDB } from '../../services/api/programApi';
import styles from './pgcalendar.module.css'

const ProgramFullCalendar = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await scheduleListDB();
            const data = response.data;
            const initialEvents = data.map((schedule) => {
                // 시작 날짜의 날짜 부분은 시작 주기로, 시간 부분은 캘린더에 자세하게 표시되는 시간으로 변환
                const start = new Date(schedule.PG_START);
                const end = new Date(schedule.PG_END);

                return {
                    title: schedule.PG_NAME,
                    start: formatDate(start), // 시작 날짜를 ISO 문자열로 변환
                    end: formatDate(end), // 종료 날짜를 ISO 문자열로 변환
                    content: schedule.PG_CONTENT,
                    rrule: {
                        freq: getFrequency(schedule.pg_repeat_type),
                        dtstart: start.toISOString(),
                        until: end.toISOString(),
                    },
                    pgCategory: schedule.PG_CATEGORY,
                };
            });
            setEvents(initialEvents);
        } catch (error) {
            console.error(error);
        }
    };

    // 날짜를 원하는 형식으로 포맷팅하는 함수
    const formatDate = (date) => {
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        };
        return date.toLocaleString('en-US', options);
    };
    //주기에 따른 표시 설정
    const getFrequency = (repeatType) => {
        switch (repeatType) {
            case '매주':
                return 'weekly';
            case '격주':
                return { freq: 'weekly', interval: 2 }; // 격주의 경우 주기를 2로 설정
            case '매월':
                return 'monthly';
            case '격월':
                return { freq: 'monthly', interval: 2 }; // 격월의 경우 주기를 2로 설정
            default:
                return 'weekly';
        }
    };

    return (
        <div className={styles['pg-calendar-main']}>
            <CommonCalendar
                events={events} // 프로그램 리스트를 CommonCalendar로 전달
            />
        </div>
    );
};
export default ProgramFullCalendar;
