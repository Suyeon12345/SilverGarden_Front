import { faList, faPenNib, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { getNoticeList } from '../../services/api/noticeApi';

const Notice = () => {
  ///////sidebar 메뉴 start//////
  const sidebarList = [{
    label: '공지사항게시판',//서브메뉴가 없을 때는 다음과 같은 형식으로 입력
    icon: faPenNib,
    isOpen:true,
    subMenuItems: [
      { label: '전체공지', icon: faList},
      { label: '공지작성', icon: faPenToSquare },
    ],
  },
];
const handleMenu = (menuTitle) =>{//사이드바 메뉴를 조작하는 함수
  setPage(menuTitle)
}
///////sidebar 메뉴  end/////////////

const [noticePage, setPage] = useState("전체공지");//기본페이지는 noticeList
const [noticeNo, setNoticeNo] = useState({});
const [noticeList, setNoticeList] = useState([]);
const [fileList, setFileList] = useState([]);//공지상세에서 가져온 파일정보를 관리할 state

const getList = async (params)=>{//DB에서 리스트를 불러오는 함수
  const response = await getNoticeList(params)
  console.log(response.data);
  setNoticeList(response.data);
}

useEffect(() =>{//리스트는 페이지가 바뀌거나 시작시 한번만 불러옴
  getList();
},[noticePage])

const handlePage = (page, n_no) =>{//페이지를 조작하는 함수
  if(n_no){
    console.log(n_no);
    setNoticeNo(n_no)
  }
  setPage(page)
}

const handleFileList = (list) =>{//파일리스트를 변경하는 함수 선언, 프롭스로 넘김
  setFileList(list)
}

  return (
    <div>Notice</div>
  )
}

export default Notice