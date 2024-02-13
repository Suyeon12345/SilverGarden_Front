import React from 'react';
import { Modal, Button } from 'react-bootstrap';


const CalendarModal = ({isOpen, selectedEvent, closeModal}) => {
    return (
        <Modal show={isOpen} onHide={closeModal}>
        <Modal.Header closeButton>
            <Modal.Title>{selectedEvent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {selectedEvent.start && <p>시작 시간: {selectedEvent.start.toLocaleString()}</p>}
            {selectedEvent.end && <p>종료 시간: {selectedEvent.end.toLocaleString()}</p>}
            <p>내용: {selectedEvent.extendedProps.content}</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
            닫기
            </Button>
        </Modal.Footer>
        </Modal>
    );
};

export default CalendarModal