// CommonCalendar.js
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import rrulePlugin from '@fullcalendar/rrule';
import Modal from 'react-modal';
import listPlugin from '@fullcalendar/list';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import CalendarModal from './CalendarModal'
import CommonCalendarModal from './CommonCalendarModal';

// 한글로된 요일을 숫자로 전환하여 캘린더에 표시하는 함수
const getWeekdayNumber = (weekdayString) => {
  const weekdays = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  return weekdays.indexOf(weekdayString) - 1;
};

// 카테고리에 따라 배경색을 반환하는 함수
const getBackgroundColor = (category) => {
  const actualCategory = category || '기본값';
  const predefinedColors = ['#1abc9c', '#3498db', '#e74c3c', '#f0932b', '#6ab04c', '#3c40c6', '#e056fd', '#ff7979', '#82589F', '#6D214F'];
  const hash = actualCategory.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
  const colorIndex = hash % predefinedColors.length;
  return predefinedColors[colorIndex];
};

//사용하는 캘린더에서 가져온 값을 공통처리
const CommonCalendar = ({ events}) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [calendarEvents, setCalendarEvents] = useState(events);


  useEffect(() => {
    setCalendarEvents(events);
  }, [events]);

  //모달
  useEffect(() => {
    Modal.setAppElement('#app');
  }, []);

  //주말 표시, 미표시
  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  //이벤트 생성하기
  const createEventId = () => {
    return String(Math.random()).slice(2, 11);
  };
  //날짜 클릭 시
  const handleDayClick = (selectInfo) => {
    let title = prompt('새로운 일정 제목을 입력해주세요.');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      const newEvent = {
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      };
      calendarApi.addEvent(newEvent);
      setCurrentEvents([...currentEvents, newEvent]);
    }
  };
  const handleEventClick = () => {
    console.log('click');
  }

  const closeCalendarModal = () => {
    
  }

  const showModal = () => {
    
  }

  const handleCloseModal = () => {
    
  }


  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, rrulePlugin, listPlugin, bootstrap5Plugin]}
        themeSystem="bootstrap5"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        }}
        initialView="dayGridMonth"
        navLinks={true}
        editable={true}
        dayMaxEvents={true}
        events={events}
        nowIndicator={true}
        selectable={true}
        selectMirror={true}
        weekends={weekendsVisible} 
        locale={'ko'}
        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
        eventClick={(info) => handleEventClick(info)}
        eventContent={(eventInfo) => {
          return {
            html: `<div style="background-color: ${getBackgroundColor(eventInfo.event.extendedProps.pgCategory)}; color: white;">${eventInfo.event.title}</div>`,
          };
        }}
        select={(selectInfo) => handleDayClick(selectInfo)}
      />
      <button onClick={handleWeekendsToggle}>
        {weekendsVisible ? '주말 표시' : '주말 미표시'}
      </button>
      {selectedEvent && (
        <CalendarModal
        isOpen={!!selectedEvent}
        selectedEvent={selectedEvent}
        closeModal={closeCalendarModal}
        />  
      )}
        <CommonCalendarModal
          show={showModal}
          handleClose={handleCloseModal}
          event={selectedEvent ? selectedEvent.extendedProps : null}
      />
    </div>
  );
};

export { CommonCalendar, getWeekdayNumber };