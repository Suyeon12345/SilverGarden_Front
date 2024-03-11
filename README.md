# 👨🏻‍🦳 노인데이케어센터 그룹웨어 SilverGarden README

![스크린샷 2024-03-07 오후 7 40 28](https://github.com/Suyeon12345/SilverGarden_Front/assets/144109053/2377b4ad-0c7e-4066-a48a-22d99e45025f)

**아직 설치중입니다**

##실행방법

- **SilverGarden_back**에서 서버를 연다
- 그 후 SilverGarden_Front가 설치된 터미널에 **npm run silvergarden** 을 입력한다.

- 배포 URL : (배포 URL입력)
- Test ID : 202403_00000134
- Test PW : 1234

<br>

## 프로젝트 소개

- SilverGarden은 현장의 소리를 반영한 노인데이케어센터 맞춤형 그룹웨어입니다.
- 프로젝트 어필점 1
- 프로젝트 어필점 2
- 프로젝트 어필점 3

<br>

## 팀원 구성

<div align="center">

|                                                                **박정원**                                                                |                                                                **안수연**                                                                |                                                                **이지연**                                                                |                                                                **이슬기**                                                                |                                                                **고태규**                                                                |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/Suyeon12345/SilverGarden_Front/assets/144109053/388fde3e-1c74-4f93-8d49-887ef2698df3" height=150 width=150> | <img src="https://github.com/Suyeon12345/SilverGarden_Front/assets/144109053/0330a1c3-0f60-4569-814f-540401ab0346" height=150 width=150> | <img src="https://github.com/Suyeon12345/SilverGarden_Front/assets/144109053/0146902c-087f-48c9-a601-b4cb2fd9ebdd" height=150 width=150> | <img src="https://github.com/Suyeon12345/SilverGarden_Front/assets/144109053/ec35ce79-e1ce-42a1-88ea-4270fa3e1a87" height=150 width=150> | <img src="https://github.com/Suyeon12345/SilverGarden_Front/assets/144109053/f90f98f4-1dbf-42e5-bbb1-520a7dd36cc4" height=150 width=150> |

</div>






<br>

## 1. 개발 환경

![스크린샷 2024-03-11 오후 12 03 37](https://github.com/Suyeon12345/SilverGarden_Front/assets/144109053/50124ab8-5400-47e5-8d88-6af39d5272d7)



<br>

## 2. 채택한 개발 기술과 브랜치 전략

### React

- React
  - 컴포넌트 단위로 UI를 구성하여 통일감있게 개발할 수 있었습니다
  - Javascript 기반으로 상대적으로 낮은 러닝커브


### 브랜치 전략

- Git-flow 전략을 기반으로 main, develop 브랜치와 feature 보조 브랜치를 운용했습니다.
- main, develop, Feat 브랜치로 나누어 개발을 하였습니다.
  - **main** 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
  - **develop** 브랜치는 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
  - **Feat** 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제해주었습니다.

<br>

## 3. 프로젝트 구조

```
├── README.md
├── .server.js
├── .gitignore
├── package-lock.json
├── package.json
│
├── public
│    ├── client.js
│    ├── favicon.ico
│    ├── index.html
│    ├── logo192.png
│    ├── logo512.png
│    ├── manifest.json
│    ├── robots.txt
│    └──  talk.css
├── src
│     ├── App.jsx
│     ├── EntryPoint.jsx
│     ├── index.js
│     ├── app.module.css
│     │
│     ├── assets
│     │     ├── fonts
│     │     │      └── Roboto.jsx
│     │     └── images
│     │            ├── loding2.gif
│     │            ├── silvergarden.png
│     │            ├── silvergardenlogo.png
│     │            ├── 결재.png
│     │            ├── 반려.png
│     │            └── 합의.png
│     │
│     │
│     ├── components
│     │     ├── Quill
│     │     │     ├── QuillEditor.jsx
│     │     │     └── quillEditor.css
│     │     ├── carousel
│     │     │     └── MemberCarousel.jsx
│     │     ├── chatting
│     │     │     ├── ChattingBar.jsx
│     │     │     └── chatting.module.css
│     │     ├── footer
│     │     │     ├── FootBar.jsx
│     │     │     └── footbar.module.css
│     │     ├── fullcalendar
│     │     │     ├── CommonCalendar.jsx
│     │     │     ├── CommonCalendar2.jsx
│     │     │     ├── CommonCalendarLogic.jsx
│     │     │     ├── CommonCalendarModal.jsx
│     │     │     ├── FullCalendarContainer.css
│     │     │     ├── WeekendToggle.jsx
│     │     │     ├── Wfullcalendar.module.css
│     │     │     └── 공통캘린더사용.txt
│     │     ├── header
│     │     │     ├── NavigationBar.jsx
│     │     │     └── navigation.module.css
│     │     ├── include
│     │     │     └── BootInclude.jsx
│     │     ├── pagination
│     │     │     └── PaginationCommon.jsx
│     │     ├── print
│     │     │     ├── Print.jsx
│     │     │     └── print.module.css
│     │     ├── rourter
│     │     │     └── AppRouter.jsx
│     │     └── sidebar
│     │     │     └── SidebarCommon.jsx
│     ├── pages
│     │     ├── admin
│     │     │     ├── Admin.jsx
│     │     │     ├── AtCalendar.jsx
│     │     │     ├── AtCalendarHome.jsx
│     │     │     ├── EmpCerti.jsx
│     │     │     ├── EmpCertiInsert.jsx
│     │     │     ├── EmpCertiRow.jsx
│     │     │     ├── EmpCreateRow.jsx
│     │     │     ├── EmpCreateModal.jsx
│     │     │     ├── EmpDetail.jsx
│     │     │     ├── EmpDetailInputField.jsx
│     │     │     ├── EmpEdu.jsx
│     │     │     ├── EmpEduRow.jsx
│     │     │     ├── EmpExcelDownload.jsx
│     │     │     ├── EmpExp.jsx
│     │     │     ├── EmpExpInsert.jsx
│     │     │     ├── EmpExpRow.jsx
│     │     │     ├── EmpInfos.jsx
│     │     │     ├── EmpListAll.jsx
│     │     │     ├── EmpListPagination.jsx
│     │     │     ├── EmpRow.jsx
│     │     │     ├── EmpUploadImg.jsx
│     │     │     ├── ExcelDownload.jsx
│     │     │     ├── ExcelForm.jsx
│     │     │     ├── admin.module.css
│     │     │     ├── atCalendar.module.css
│     │     │     ├── empDetailInfo.module.css
│     │     │     ├── empInfo.moudule.css
│     │     │     └── modal.module.css
│     │     ├── approval
│     │     │       ├── approvaldetail
│     │     │       │      ├── ApprovalDetailLine.jsx
│     │     │       │      ├── ApprovalDetailTable.jsx
│     │     │       │      ├── ApprovalDocDetail.jsx
│     │     │       │      ├── CommentModal.jsx
│     │     │       │      ├── ExpenseReportDetail.jsx
│     │     │       │      ├── ResultCommentModal.jsx
│     │     │       │      ├── VacationRequestDetail.jsx
│     │     │       │      └── approvalDetail.module.css
│     │     │       │
│     │     │       ├── approvalupdate
│     │     │       │      └── ApprovalDocUpdate.jsx
│     │     │       ├── approvalwrite
│     │     │       │      ├── ApprovalDocWrite.jsx
│     │     │       │      ├── ApprovalFlieUpload.jsx
│     │     │       │      ├── ApprovalLineModal.jsx
│     │     │       │      ├── ApprovalWriteLine.jsx
│     │     │       │      ├── ApprovalWriteTable.jsx
│     │     │       │      ├── DeptView.jsx
│     │     │       │      ├── ExpenseReportForm.jsx
│     │     │       │      ├── LineSelectBar.jsx
│     │     │       │      ├── SelectedAgreementLine.jsx
│     │     │       │      ├── SelectedApprovalLine.jsx
│     │     │       │      ├── VacationRequestForm.jsx
│     │     │       │      └── approvalWrite.module.css
│     │     │       ├── Approval.jsx
│     │     │       ├── ApprovalCompleteList.jsx
│     │     │       ├── ApprovalDenyList.jsx
│     │     │       ├── ApprovalListHeader.jsx
│     │     │       ├── ApprovalProgList.jsx
│     │     │       ├── ApprovalTempList.jsx
│     │     │       ├── ApprovalUpList.jsx
│     │     │       ├── ApprovalWaitList.jsx
│     │     │       └── approval.module.css
│     │     ├── crawling
│     │     │       ├── CrawlingHome.jsx
│     │     │       └── CrawlingComponent.jsx
│     │     ├── dept
│     │     │     ├── DeleteModal.jsx
│     │     │     ├── Dept.jsx
│     │     │     ├── DeptCreateModal.jsx
│     │     │     ├── DeptDetail.jsx
│     │     │     ├── DeptList.jsx
│     │     │     ├── DeptSideInfo.jsx
│     │     │     ├── DeptUpdate.jsx
│     │     │     └── dept.module.css
│     │     ├── emplist
│     │     │     ├── EmpListAll.jsx
│     │     │     ├── EmpList.jsx
│     │     │     └── emplist.module.css
│     │     ├── error
│     │     │     └── ErrorPage.jsx
│     │     ├── home
│     │     │     ├── AtEnd.jsx
│     │     │     ├── AtStart.jsx
│     │     │     ├── Home.jsx
│     │     │     ├── HomeCalendar.jsx
│     │     │     ├── HomeCalendarInfo.jsx
│     │     │     ├── HomeProfile.jsx
│     │     │     ├── MemberChart.jsx
│     │     │     ├── ProgramChart.jsx
│     │     │     └── home.module.css
│     │     ├── login
│     │     │     ├── AuthProvider.jsx
│     │     │     ├── Loading.jsx
│     │     │     ├── LoginForm.jsx
│     │     │     └── loginform.module.css
│     │     ├── member
│     │     │       ├── car
│     │     │       │      ├── CarCalendar.jsx
│     │     │       │      ├── CarCalendarLogic.jsx
│     │     │       │      ├── CarCalendarModal.jsx
│     │     │       │      ├── CarDetail.jsx
│     │     │       │      ├── CarInfo.jsx
│     │     │       │      ├── CarInsert.jsx
│     │     │       │      ├── CarStatistic.jsx
│     │     │       │      ├── CarStatisticAll.jsx
│     │     │       │      ├── CarStatisticPass.jsx
│     │     │       │      ├── CarStatisticRecord.jsx
│     │     │       │      ├── CarTimeLine.jsx
│     │     │       │      └── FullCalendarContainer.css
│     │     │       ├── counsel
│     │     │       │      ├── Counsel.jsx
│     │     │       │      ├── CounselCreate.jsx
│     │     │       │      ├── CounselDetail.jsx
│     │     │       │      ├── CounselRow.jsx
│     │     │       │      ├── CounselUpdate.jsx
│     │     │       │      ├── MemberDetail2.jsx
│     │     │       │      └── MemberInfo2.jsx
│     │     │       ├── Member.jsx
│     │     │       ├── MemberDelete.jsx
│     │     │       ├── MemberDetail.jsx
│     │     │       ├── MemberInfo.jsx
│     │     │       ├── MemberInsert.jsx
│     │     │       └── member.module.css
│     │     ├── memberhome
│     │     │       ├── MemberHome.jsx
│     │     │       └── memberhome.module.css
│     │     ├── message
│     │     │       ├── Message.jsx
│     │     │       ├── MessageAddressBook.jsx
│     │     │       ├── MessageDeleted.jsx
│     │     │       ├── MessageDeletedDetail.jsx
│     │     │       ├── MessageListHeader.jsx
│     │     │       ├── MessageListTable.jsx
│     │     │       ├── MessageProfile.jsx
│     │     │       ├── MessageReceive.jsx
│     │     │       ├── MessageReceiveDetail.jsx
│     │     │       ├── MessageSend.jsx
│     │     │       ├── MessageSendDetail.jsx
│     │     │       ├── MessageStored.jsx
│     │     │       ├── MessageStoredDetail.jsx
│     │     │       ├── MessageWrite.jsx
│     │     │       └── message.module.css
│     │     ├── mypage
│     │     │       ├── ChangePwModal.jsx
│     │     │       ├── Mypage.jsx
│     │     │       ├── MypageEdu.jsx
│     │     │       ├── MypageExp.jsx
│     │     │       ├── MypageInfo.jsx
│     │     │       ├── MypageMainCon.jsx
│     │     │       ├── MypageSubCon1.jsx
│     │     │       ├── MypageSubCon2.jsx
│     │     │       └── mypage.module.css
│     │     ├── notice
│     │     │       ├── CrawlList.jsx
│     │     │       ├── Notice.jsx
│     │     │       ├── NoticeDetail.jsx
│     │     │       ├── NoticeDetailHeader.jsx
│     │     │       ├── NoticeFileUpload.jsx
│     │     │       ├── NoticeList.jsx
│     │     │       ├── NoticePagination.jsx
│     │     │       ├── NoticeSearchBar.jsx
│     │     │       ├── NoticeTable.jsx
│     │     │       ├── NoticeUpdate.jsx
│     │     │       ├── NoticeWrite.jsx
│     │     │       └── notice.module.css
│     │     ├── paymenet
│     │     │       ├── ClientSearchModal.jsx
│     │     │       ├── InputNumber.jsx
│     │     │       ├── Payment.jsx
│     │     │       ├── PaymentDetail.jsx
│     │     │       ├── PaymentInfo.jsx
│     │     │       ├── PaymentList.jsx
│     │     │       ├── PaymentPagination.jsx
│     │     │       ├── RefundModal.jsx
│     │     │       ├── SnsModal.jsx
│     │     │       ├── payment.module.css
│     │     │       ├── paymentInfo.module.css
│     │     │       └── snsModal.module.css
│     │     ├── program
│     │     │       ├── ExceltDown.jsx
│     │     │       ├── Program.jsx
│     │     │       ├── ProgramDetail.jsx
│     │     │       ├── ProgramInfo.jsx
│     │     │       ├── ProgramInsert.jsx
│     │     │       ├── ProgramList.jsx
│     │     │       ├── ProgramPagination.jsx
│     │     │       ├── RightContent.jsx
│     │     │       └── programhome.module.css
│     │     ├── programcalendar
│     │     │       ├── ProgramCalendar.jsx
│     │     │       ├── ProgramCalendarHome.jsx
│     │     │       ├── ProgramListCalendar.jsx
│     │     │       └── programcalendarhome.module.css
│     │     ├── programdashboard
│     │     │       ├── ProgramCalChart.jsx
│     │     │       ├── ProgramChart.jsx
│     │     │       ├── ProgramDashboardHome.jsx
│     │     │       ├── ProgramProgressChart.jsx
│     │     │       └── programboard.module.css
│     │     └── schedule
│     │     │       └── TestCalendar.jsx
│     ├── redux
│     │     ├── calendarAdminSlice.js
│     │     ├── calendarAtSlice.js
│     │     ├── calendarCarSlice.js
│     │     ├── calendarSlice.js
│     │     ├── carSlice.js
│     │     ├── chooseEmpSlice.js
│     │     ├── commoncalendarSlice.js
│     │     ├── crawlingSlice.js
│     │     ├── deptSlice.js
│     │     ├── empInfosSlice.js
│     │     ├── memberSlice.js
│     │     ├── paymentClientSlice.js
│     │     ├── paymentSlice.js
│     │     ├── programSlice.js
│     │     ├── store.js
│     │     └── userInfoSlice.js
│     └── services
│          ├── api
│          │    ├── approvalApi.js
│          │    ├── attendanceApi.js
│          │    ├── carApi.js
│          │    ├── crawlingApi.js
│          │    ├── deptApi.js
│          │    ├── empCreateApi.js
│          │    ├── empInfosApi.js
│          │    ├── empListApi.js
│          │    ├── memberApi.js
│          │    ├── messageApi.js
│          │    ├── mypagelApi.js
│          │    ├── noticelApi.js
│          │    ├── paymentApi.js
│          │    └── programApi.js
│          ├── auth
│          │    ├── AuthApi.js
│          │    ├── UserApi.js
│          │    └── apInterceptor.js
│          └── firebase
│               └── firebaseEmp.js
└── talk
      ├── views
      │     └── talk.html
      └── main.js
```

<br>

## 4. 역할 분담

### 👨‍✈️박정원

- **UI**
  - 페이지 : 홈, 검색, 게시글 작성, 게시글 수정, 게시글 상세, 채팅방
- **기능**
  - 유저 검색, 게시글 등록 및 수정, 게시글 상세 확인, 댓글 등록, 팔로워 게시글 불러오기, 좋아요 기능

<br>
    
### 🐰안수연

- **UI**
  - 페이지 : 프로필 설정, 프로필 수정, 팔로잉&팔로워 리스트, 상품 등록, 상품 수정, 채팅 목록, 404 페이지
- **기능**
  - 프로필 설정 및 수정 페이지 유저 아이디 유효성 및 중복 검사, 상품 등록 및 수정

<br>

### 🐿이지연

- **UI**
  - 페이지 : splash 페이지, sns 로그인 페이지, 로그인, 회원가입
- **기능**
  - 

<br>

### 👩‍🦱이슬기

- **UI**
  - 페이지 : 사용자 프로필 페이지
- **기능**
  - 

<br>

### 🦦고태규

- **UI**
  - 페이지 : 
- **기능**
  - 이용자관리 - 등록, 수정, 삭제, 상담관리 - 

<br>

## 5. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 :
- UI 구현 :
- 기능 구현 :

<br>

### 작업 관리

- GitHub Projects와 Issues를 사용하여 진행 상황을 공유했습니다.
- 주간회의를 진행하며 작업 순서와 방향성에 대한 고민을 나누고 Notion에 회의 내용을 기록했습니다.

<br>

## 6. 신경 쓴 부분

-
-

<br>

## 7. 페이지별 기능

### [초기화면]

- 로그인이 되어 있지 않은 경우 : 로그인 페이지
- 로그인이 되어 있는 경우 : README 홈 화면


| 초기화면 |
| -------- |

![로그인 화면](https://github.com/Suyeon12345/SilverGarden_Front/assets/144109053/a017fa5f-ba5b-4bf4-9be6-384520449c7b)

<br>

### [ 예시 로그인]

- 이메일 주소와 비밀번호를 입력하면 입력창에서 바로 유효성 검사가 진행되고 통과하지 못한 경우 각 경고 문구가 입력창 하단에 표시됩니다.
- 이메일 주소의 형식이 유효하지 않거나 비밀번호가 6자 미만일 경우에는 각 입력창 하단에 경구 문구가 나타납니다.
- 작성이 완료된 후, 유효성 검사가 통과된 경우 로그인 버튼이 활성화됩니다.
- 로그인 버튼 클릭 시 이메일 주소 또는 비밀번호가 일치하지 않을 경우에는 경고 문구가 나타나며, 로그인에 성공하면 홈 피드 화면으로 이동합니다.

| 로그인                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- |
| ![login](https://user-images.githubusercontent.com/112460466/210177956-c716414e-01c2-4c1e-b1f7-6562b9b7a857.gif) |

<br>

### [로그아웃]

- 상단 의 kebab menu를 클릭 후 나타나는 모달창의 로그아웃 버튼을 클릭하면 확인창이 뜹니다.
- 로그아웃시 로컬 저장소의 토큰 값과 사용자 정보를 삭제하고 초기화면으로 이동합니다.

| 로그아웃                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------- |
| ![logout](https://user-images.githubusercontent.com/112460466/210178009-11225733-7af5-4b8b-aa1c-fe264af01797.gif) |

<br>

## 8. 트러블 슈팅

-
-
-

<br>

## 9. 개선 목표

-
-
-
-

<br>

## 10. 프로젝트 후기

> > > > > > > 9e907cfdf06cbf830817c38068fc641f8ff80da3
