# Inside-Out

## 목차

- [**개요**](#개요)
    - [기간](#기간)
    - [개발자](#개발자)
    - [기술 스택](#기술-스택)
    - [목표](#목표)
- [**주요 페이지**](#주요-페이지)
    - [MainPage](#MainPage)
    - [CreatePage](#CreatePage)
    - [DetailPage](#DetailPage)
    - [UpdatePage](#UpdatePage)
- [**DB 구성**](#DB-구성)
- [**팀 내 본인 역할**](#팀-내-본인-역할)
- [**이슈 사항**](#이슈-사항)

---

## 개요

### 기간 : 2024.07.18 ~ 2024.08.05

### 개발자 : [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FMinhyeokChoco&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com) <a href="https://www.notion.so/DB-671252724f1b4f4e98e6d1a705703e3a"><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"></a> MinHyeok 본인 외 3명

### 기술 스택 :
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)<br>
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

### 목표 :
자신이 알고 있는 맛있는 위스키와 여러 종류의 술, 자신만이 알고 있었던 제조법<br>위스키와 걸맞는 맛있는 안주의 정보 들을 공유하고 얻을 수 있는<br> 공유 게시판 사이트를 구현해보고자 했습니다.

## 주요 페이지

- 페이지 예시

<div align="center"><img src="https://github.com/user-attachments/assets/9dfb1de3-a959-499b-871a-6a12f81cce5f" alt="페이지예시" /> </div>
<div align="center"><img src="https://github.com/user-attachments/assets/3ee44f3e-f837-4315-8d79-406c5c48ae22" alt="InsideOut예시" /> </div>

- **MainPage**
    - 작성한 게시글들을 볼 수 있는 화면
    - 게시글의 상세 페이지로 이동할 수 있는 기능
    - 검색 기능으로 원하는 게시글 검색 가능
    - 페이지네이션으로 많은 게시글들을 편하게 볼 수 있게 구현

![MainPage](https://github.com/user-attachments/assets/83c4d1dd-c029-4535-bad3-dd457641e2e4)

- **CreatePage**
    - 게시글 작성 할 수 있는 화면 구현

![CreatePage](https://github.com/user-attachments/assets/5935a3a8-3f2c-4f2b-ae84-ea041ebe6278)

- **DetailPage**
    - 게시글의 상세 내용을 볼 수 있는 화면
    - 해당 게시글의 댓글을 작성, 수정 삭제 할 수 있는 댓글창 구현
    - 작성한 댓글에 추가적인 대댓글을 작성, 수정, 삭제 할 수 있는 기능 구현
    - 입력한 댓글과 대댓글들을 볼 수 있는 댓글 리스트 구현

![DetailPage](https://github.com/user-attachments/assets/724ce044-2af9-41a8-bae0-3d1d8109bc49)
![Comment](https://github.com/user-attachments/assets/7c22aa5c-cf38-4696-a0ce-41ea757a74e9)

- **UpdatePage**
    - 작성했던 게시글을 수정할 수 있는 화면

![UpdatePage](https://github.com/user-attachments/assets/685838e9-4aeb-4fa1-91aa-1b3ca04a0fba)

---

## DB 구성
![DB](https://github.com/user-attachments/assets/6654339a-2699-4e91-a02b-916cacf4962e)

- 테이블명 설명<br>
    테이블명 | 설명 |
    |:---:|:---:|
    userDB | 사용자의 정보 |
    QnAs | 사용자가 작성한 고객센터글
    Comments | 고객센터글에 대한 댓글
    Ccomments | 댓글에 대한 대댓글
    whiskyTip | 위스키 팁에 대한 게시글
    whiskyTipComment | 위스키 팁 게시글에 대한 댓글
    whiskyTipCcomment | 댓글에 대한 대댓글
    insideoutinfo | 위스키에 대한 정보

## 팀 내 본인 역할
- **고객센터 구현**
    - 고객센터 전체 페이지 구상 및 작성 페이지, 상세 페이지, 수정 페이지 구현
    - 로그인 했을 때만 게시글 작성 할 수 있게 구현
    - 로그인 후 본인 계정으로 작성한 게시글만 수정, 삭제 할 수 있게 구현
    - 댓글과 대댓글 작성, 수정, 삭제 기능 구현
    - 댓글도 로그인 데이터 비교 해서 본인 댓글만 수정, 삭제 할 수 있게 구현
    - 검색 기능 구현
    - 페이지네이션 기능 구현

## 이슈 사항
1. 토큰 값이 없어도 게시글을 작성할 수 있음
- 토큰 값이 없으면 작성 버튼을 없애고, 토큰 값이 있으면 작성 버튼이 생기게끔 구현
2. 다른 유저의 게시글도 수정, 삭제 할 수 있음
- 토큰 값을 비교해서 일치해야 접근 할 수 있게끔 구현
3. 원하는 댓글과 대댓글을 수정, 삭제 할 수 없음
- ID 값을 사용하여 원하는 댓글에 접근해서 수정, 삭제 할 수 있게 구현
