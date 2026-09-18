const educationResources = [
  {
    "region": "경기",
    "organization": "경기진학정보센터",
    "title": "경기진학정보센터",
    "kind": "교육청 진학센터",
    "year": "상시",
    "description": "경기도교육청 공식 진학정보센터. 수시 모집요강 검색기, 대학·학과 원클릭, 진학자료와 상담 서비스를 확인할 수 있습니다.",
    "url": "https://more.goe.go.kr/jinhak/index.do"
  },
  {
    "region": "경기",
    "organization": "경기도교육청 대입진학리더교사 콘텐츠팀",
    "title": "2026학년도 대학별 선행학습 영향평가 보고서 모음",
    "kind": "선행학습 영향평가",
    "year": "2026",
    "description": "194개 대학의 선행학습 영향평가 자료와 대학 입학처를 탐색할 수 있도록 정리한 경기도교육청 자료입니다.",
    "url": "https://ansan-h.goeas.kr/ansan-h/na/ntt/selectNttInfo.do?bbsId=851&mi=2612&nttSn=1504262"
  },
  {
    "region": "강원",
    "organization": "강원진학지원센터",
    "title": "2027학년도 대입 면접자료",
    "kind": "면접 가이드북",
    "year": "2027",
    "description": "셀프면접가이드북과 의학계열면접가이드북을 제공하는 강원진학지원센터 공식 대입정보 게시판입니다.",
    "url": "https://jinhak.gwe.go.kr/board.do?act=list&bbsid=041200"
  },
  {
    "region": "세종",
    "organization": "세종특별자치시교육청 진로교육원",
    "title": "2027학년도 대입 수시모집 면접 전형 자료집",
    "kind": "면접 자료집",
    "year": "2027",
    "description": "대학별 전형방법·면접방식·평가요소와 예시문항을 정리한 세종교육청 공식 자료입니다.",
    "url": "https://jinro.sje.go.kr/user/board/page_view.do?board_no=867&menu_cd=141&menu_kind=brd&pageIndex=1&pageUnit=10&searchCondition=&searchKeyword="
  },
  {
    "region": "울산",
    "organization": "울산진로진학지원센터",
    "title": "2026 대입 면접후기 자료집 1",
    "kind": "실제 면접 후기",
    "year": "2026",
    "description": "가천대부터 부산대까지 실제 응시 학생의 면접 경험을 수합한 울산교육청 공식 후기 자료입니다.",
    "url": "https://use.go.kr/jinhak/user/bbs/BD_selectBbs.do?q_bbsDocNo=20260810142937368&q_bbsSn=1095"
  },
  {
    "region": "울산",
    "organization": "울산진로진학지원센터",
    "title": "2026 대입 면접후기 자료집 2",
    "kind": "실제 면접 후기",
    "year": "2026",
    "description": "부산대부터 홍익대까지 실제 응시 학생의 면접 경험을 수합한 울산교육청 공식 후기 자료입니다.",
    "url": "https://use.go.kr/jinhak/user/bbs/BD_selectBbs.do?q_bbsDocNo=20260810142853413&q_bbsSn=1095"
  },
  {
    "region": "부산",
    "organization": "부산광역시교육청학력개발원",
    "title": "부산 진로진학지원센터",
    "kind": "교육청 진학센터",
    "year": "상시",
    "description": "부산광역시교육청학력개발원 진로진학지원센터. 대학별·전형별 진학자료와 상담자료를 제공합니다.",
    "url": "https://home.pen.go.kr/academicdi/main.do"
  },
  {
    "region": "인천",
    "organization": "인천광역시교육청",
    "title": "인천광역시교육청 대입·진로진학 정보",
    "kind": "교육청 진학정보",
    "year": "상시",
    "description": "인천교육청 진로진학직업교육 관련 공식 페이지와 대입 정보를 확인할 수 있습니다.",
    "url": "https://www.ice.go.kr/ice/main.do"
  },
  {
    "region": "서울",
    "organization": "서울특별시교육청",
    "title": "서울진로진학정보센터",
    "kind": "교육청 진학센터",
    "year": "상시",
    "description": "서울특별시교육청 진로진학정보센터. 대입자료, 전형 안내와 진학 콘텐츠를 확인할 수 있습니다.",
    "url": "https://jinhak.sen.go.kr/"
  }
];

const universityResources = [
  {
    "university": "서울대학교",
    "region": "서울",
    "year": "2026",
    "kind": "면접·구술 기출",
    "title": "2026학년도 면접 및 구술고사 문항",
    "description": "서울대학교 입학본부가 공개한 2026학년도 신입학 면접 및 구술고사 문항.",
    "url": "https://admission.snu.ac.kr/materials/downloads/samples?bbsidx=167141&md=v"
  },
  {
    "university": "서울대학교",
    "region": "서울",
    "year": "2026",
    "kind": "선행학습 영향평가",
    "title": "2026학년도 선행학습 영향평가",
    "description": "서울대학교 대학별고사 선행학습 영향평가 자체평가보고서.",
    "url": "https://admission.snu.ac.kr/materials/downloads/samples?bbsidx=167138&md=v"
  },
  {
    "university": "서울대학교",
    "region": "서울",
    "year": "상시",
    "kind": "면접 연구·가이드",
    "title": "학생부 기반 역량평가 면접 연구자료",
    "description": "SNU 학생부 기반 역량평가 면접 문항 개발·지도역량 강화 연구자료가 있는 입학자료실.",
    "url": "https://admission.snu.ac.kr/materials/downloads/others"
  },
  {
    "university": "연세대학교",
    "region": "서울",
    "year": "2026",
    "kind": "선행학습 영향평가",
    "title": "연세대학교 통합자료실 - 선행학습 영향평가",
    "description": "2026학년도 선행학습 영향평가와 대학별고사자료집, 전형 안내서를 확인할 수 있습니다.",
    "url": "https://admission.yonsei.ac.kr/seoul/admission/html/counsel/data.asp?s_type=TYPE0"
  },
  {
    "university": "고려대학교",
    "region": "서울",
    "year": "2026",
    "kind": "선행학습 영향평가",
    "title": "2026학년도 선행학습 영향평가 결과",
    "description": "고려대학교 입학처 기출문제 게시판에 공개된 2026학년도 선행학습 영향평가 보고서.",
    "url": "https://oku.korea.ac.kr/oku/cms/FR_BBS_CON/BoardView.do?BBS_SEQ=88&BOARD_SEQ=2&MENU_ID=720&SITE_NO=2&pageNo=1&pagePerCnt=10"
  },
  {
    "university": "성균관대학교",
    "region": "서울/경기",
    "year": "2026",
    "kind": "선행학습 영향평가",
    "title": "2026학년도 대학입학전형 선행학습 영향평가",
    "description": "성균관대학교 입학처가 공개한 2026학년도 선행학습 영향평가 자체평가보고서.",
    "url": "https://admission.skku.edu/admission/html/ipsi/noticeView.html?idx=59455"
  },
  {
    "university": "한양대학교",
    "region": "서울",
    "year": "2026",
    "kind": "선행학습 영향평가",
    "title": "2026학년도 선행학습 영향평가 자체평가보고서",
    "description": "한양대학교 대학별고사(논술 및 면접) 준비 참고용 공식 보고서.",
    "url": "https://go.hanyang.ac.kr/web/notice/notice_view.do?bn=20598&m_type=&nPage=1"
  },
  {
    "university": "경희대학교",
    "region": "서울/경기",
    "year": "2026",
    "kind": "선행학습 영향평가",
    "title": "2026학년도 대학별고사 선행학습 영향평가",
    "description": "경희대학교 대학별고사 선행학습 영향평가 자체평가 보고서 및 문항카드.",
    "url": "https://iphak.khu.ac.kr/detail.do?board_seq=16904&categoryid=0&menuurl=wvOt10B5et6zMa%2FM59G%2BxQ%3D%3D&pageNo=1"
  },
  {
    "university": "동국대학교",
    "region": "서울",
    "year": "2026",
    "kind": "선행학습 영향평가",
    "title": "2026학년도 선행학습 영향평가 자체평가 보고서",
    "description": "동국대학교 입학처 공식 선행학습 영향평가 보고서.",
    "url": "https://ipsi.dongguk.edu/admission/html/counsel/noticeView.asp?BOARD_IDX=37033"
  },
  {
    "university": "홍익대학교",
    "region": "서울",
    "year": "2026",
    "kind": "선행학습 영향평가",
    "title": "2026학년도 선행학습 영향평가 자체평가보고서",
    "description": "홍익대학교가 공개한 2026학년도 선행학습 영향평가 보고서.",
    "url": "https://www.hongik.ac.kr/kr/admission/notice-admission.do?articleNo=150273&mode=view"
  },
  {
    "university": "가천대학교",
    "region": "경기",
    "year": "2026",
    "kind": "선행학습 영향평가",
    "title": "2026학년도 대학별고사 선행학습 영향평가",
    "description": "가천대학교의 학생부교과·학생부종합 면접을 포함한 대학별고사 영향평가 공식자료.",
    "url": "https://admission.gachon.ac.kr/admission/html/counsel/noticeView.asp?BOARD_IDX=29874"
  },
  {
    "university": "명지대학교",
    "region": "서울/경기",
    "year": "2026",
    "kind": "선행학습 영향평가",
    "title": "명지대학교 선행학습 영향평가 자료실",
    "description": "2024~2026학년도 선행학습 영향평가 보고서를 연도별로 확인할 수 있습니다.",
    "url": "https://iphak.mju.ac.kr/pages/?b=B_1_1&cate=%EA%B8%B0%ED%83%80&p=9"
  },
  {
    "university": "광운대학교",
    "region": "서울",
    "year": "2026",
    "kind": "입학처 자료",
    "title": "광운대학교 입학처",
    "description": "2026학년도 대학별고사 선행학습 영향평가, 2027 수시모집요강과 학생부종합전형 가이드북을 확인할 수 있습니다.",
    "url": "https://iphak.kw.ac.kr/main.php"
  },
  {
    "university": "이화여자대학교",
    "region": "서울",
    "year": "2026",
    "kind": "선행학습 영향평가",
    "title": "이화여자대학교 발간자료",
    "description": "2022~2026학년도 선행학습 영향평가 결과를 연도별로 확인할 수 있습니다.",
    "url": "https://admission.ewha.ac.kr/admission/html/ewharo/publication4.asp"
  },
  {
    "university": "세종대학교",
    "region": "서울",
    "year": "2026",
    "kind": "선행학습 영향평가",
    "title": "세종대학교 선행학습 영향평가 결과보고서",
    "description": "2024~2026학년도 선행학습 영향평가 결과보고서를 확인할 수 있는 입학처 자료실.",
    "url": "https://ipsi.sejong.ac.kr/sub_page/sub5/0107_list.asp?B_CATEGORY=0&B_CODE=BOARD_1455878015&search_category=B_SUBJECT&searchstring=%EC%84%A0%ED%96%89&tab1=5"
  },
  {
    "university": "단국대학교",
    "region": "경기",
    "year": "2026",
    "kind": "선행학습 영향평가",
    "title": "단국대학교 선행학습영향평가",
    "description": "죽전캠퍼스 대학별고사 선행학습 영향평가 보고서를 연도별로 제공하는 공식 자료실.",
    "url": "https://ipsi.dankook.ac.kr/jukjeon/doumi/previous_list.html?bbsid=juk_sunhang&ctg_cd=&keyword=&mode=list&page=1&skey="
  },
  {
    "university": "경기대학교",
    "region": "경기",
    "year": "2026",
    "kind": "선행학습 영향평가",
    "title": "2026학년도 경기대학교 선행학습 영향평가",
    "description": "경기대학교 입학처 자료실 공식 보고서.",
    "url": "https://enter.kyonggi.ac.kr/cms/FR_BBS_CON/BoardView.do?BBS_SEQ=3961&BOARD_SEQ=6&CONTENTS_NO=3&MENU_ID=330&PWD=&P_BBS_SEQ=&SEARCH=&SEARCH_FLD=&SITE_NO=2&pageNo=1&pagePerCnt=10"
  },
  {
    "university": "신한대학교",
    "region": "경기",
    "year": "2027",
    "kind": "면접 기출",
    "title": "2027학년도 수시모집 모의면접 기출문제",
    "description": "신한대학교 입학처가 공개한 모의면접 기출 안내 페이지.",
    "url": "https://ipsi.shinhan.ac.kr/ihp/bbs/selectBoardArticle.do?bbsId=BBSMSTR_000000000000&cateId=1&nttId=1069&relateImagePath=svis_5"
  },
  {
    "university": "대진대학교",
    "region": "경기",
    "year": "상시",
    "kind": "면접 안내",
    "title": "대진대학교 전형안내·면접고사 자료",
    "description": "학생부종합전형·학생부교과전형 면접 안내 및 모집요강을 확인할 수 있는 공식 자료실.",
    "url": "https://admission.daejin.ac.kr/submenu.do?menuurl=NsMqiQIc%2BcJ6SdJtaz9HCg%3D%3D"
  },
  {
    "university": "상명대학교",
    "region": "서울",
    "year": "2026",
    "kind": "선행학습 영향평가",
    "title": "2026학년도 대학입학전형 선행학습 영향평가",
    "description": "상명대학교 서울캠퍼스 공식 선행학습 영향평가 자체평가보고서.",
    "url": "https://admission.smu.ac.kr/_seoul/board/bbs.html?bbsid=seoul_notice&ctg_cd=common"
  },
  {
    "university": "숭실대학교",
    "region": "서울",
    "year": "2026",
    "kind": "기출·선행학습 영향평가",
    "title": "숭실대학교 수시 기출문제",
    "description": "수시 기출문제 게시판에서 선행학습 영향평가 보고서와 논술 자료집을 확인할 수 있습니다.",
    "url": "https://admission.ssu.ac.kr/board/exam_view.asp?flag2=1&number=129&page=1&page_no=1_2_7"
  },
  {
    "university": "서울시립대학교",
    "region": "서울",
    "year": "2026",
    "kind": "입학처 자료",
    "title": "서울시립대학교 입학처",
    "description": "선행학습 영향평가 결과, 수시 자료실, 학생부종합 모의전형 자료를 확인할 수 있습니다.",
    "url": "https://admission.uos.ac.kr/admissionNew/main.do"
  },
  {
    "university": "아주대학교",
    "region": "경기",
    "year": "상시",
    "kind": "입학처 기출",
    "title": "아주대학교 입학처",
    "description": "수시 기출문제와 입학정보를 확인할 수 있습니다. 일부 면접 문항은 선행학습 영향평가 보고서에서 확인됩니다.",
    "url": "https://www.iajou.ac.kr/main/"
  },
  {
    "university": "중앙대학교",
    "region": "서울/경기",
    "year": "2027",
    "kind": "학생부전형 가이드",
    "title": "중앙대학교 2027 학생부전형 가이드북",
    "description": "중앙대 입학처 메인에서 2027학년도 학생부전형 가이드북과 수시모집요강을 확인할 수 있습니다.",
    "url": "https://admission.cau.ac.kr/main.do"
  }
];

const universityPortals = [
  {
    "university": "서울대학교",
    "region": "서울",
    "url": "https://admission.snu.ac.kr/index.html"
  },
  {
    "university": "연세대학교",
    "region": "서울",
    "url": "https://admission.yonsei.ac.kr/seoul/admission/html/main/main.asp"
  },
  {
    "university": "고려대학교",
    "region": "서울",
    "url": "https://oku.korea.ac.kr/oku/index.do"
  },
  {
    "university": "서강대학교",
    "region": "서울",
    "url": "https://admission3.sogang.ac.kr/"
  },
  {
    "university": "성균관대학교",
    "region": "서울/경기",
    "url": "https://admission.skku.edu/"
  },
  {
    "university": "한양대학교",
    "region": "서울",
    "url": "https://go.hanyang.ac.kr/main.do"
  },
  {
    "university": "중앙대학교",
    "region": "서울/경기",
    "url": "https://admission.cau.ac.kr/main.do"
  },
  {
    "university": "경희대학교",
    "region": "서울/경기",
    "url": "https://iphak.khu.ac.kr/main.do"
  },
  {
    "university": "한국외국어대학교",
    "region": "서울/경기",
    "url": "https://adms.hufs.ac.kr/"
  },
  {
    "university": "서울시립대학교",
    "region": "서울",
    "url": "https://admission.uos.ac.kr/admissionNew/main.do"
  },
  {
    "university": "동국대학교",
    "region": "서울",
    "url": "https://ipsi.dongguk.edu/"
  },
  {
    "university": "건국대학교",
    "region": "서울",
    "url": "https://enter.konkuk.ac.kr/"
  },
  {
    "university": "홍익대학교",
    "region": "서울",
    "url": "https://www.hongik.ac.kr/kr/admission/recruitment.do"
  },
  {
    "university": "광운대학교",
    "region": "서울",
    "url": "https://iphak.kw.ac.kr/main.php"
  },
  {
    "university": "명지대학교",
    "region": "서울/경기",
    "url": "https://iphak.mju.ac.kr/"
  },
  {
    "university": "상명대학교",
    "region": "서울",
    "url": "https://admission.smu.ac.kr/_seoul/"
  },
  {
    "university": "가천대학교",
    "region": "경기",
    "url": "https://admission.gachon.ac.kr/"
  },
  {
    "university": "가톨릭대학교",
    "region": "경기",
    "url": "https://ipsi.catholic.ac.kr/"
  },
  {
    "university": "국민대학교",
    "region": "서울",
    "url": "https://admission.kookmin.ac.kr/"
  },
  {
    "university": "숭실대학교",
    "region": "서울",
    "url": "https://admission.ssu.ac.kr/"
  },
  {
    "university": "세종대학교",
    "region": "서울",
    "url": "https://ipsi.sejong.ac.kr/"
  },
  {
    "university": "단국대학교",
    "region": "경기",
    "url": "https://ipsi.dankook.ac.kr/"
  },
  {
    "university": "인하대학교",
    "region": "인천",
    "url": "https://admission.inha.ac.kr/"
  },
  {
    "university": "한성대학교",
    "region": "서울",
    "url": "https://enter.hansung.ac.kr/"
  },
  {
    "university": "삼육대학교",
    "region": "서울",
    "url": "https://ipsi.syu.ac.kr/"
  },
  {
    "university": "서경대학교",
    "region": "서울",
    "url": "https://go.skuniv.ac.kr/"
  },
  {
    "university": "강남대학교",
    "region": "경기",
    "url": "https://admission.kangnam.ac.kr/"
  },
  {
    "university": "경기대학교",
    "region": "경기",
    "url": "https://enter.kyonggi.ac.kr/"
  },
  {
    "university": "대진대학교",
    "region": "경기",
    "url": "https://admission.daejin.ac.kr/main.do"
  },
  {
    "university": "신한대학교",
    "region": "경기",
    "url": "https://ipsi.shinhan.ac.kr/"
  },
  {
    "university": "동양대학교",
    "region": "경북/경기",
    "url": "https://ipsi.dyu.ac.kr/"
  },
  {
    "university": "중부대학교",
    "region": "충남/경기",
    "url": "https://ipsi.joongbu.ac.kr/"
  },
  {
    "university": "서울과학기술대학교",
    "region": "서울",
    "url": "https://admission.seoultech.ac.kr/"
  },
  {
    "university": "서울여자대학교",
    "region": "서울",
    "url": "https://admission.swu.ac.kr/"
  },
  {
    "university": "성신여자대학교",
    "region": "서울",
    "url": "https://ipsi.sungshin.ac.kr/"
  },
  {
    "university": "숙명여자대학교",
    "region": "서울",
    "url": "https://admission.sookmyung.ac.kr/"
  },
  {
    "university": "덕성여자대학교",
    "region": "서울",
    "url": "https://enter.duksung.ac.kr/"
  },
  {
    "university": "동덕여자대학교",
    "region": "서울",
    "url": "https://ipsi.dongduk.ac.kr/"
  },
  {
    "university": "아주대학교",
    "region": "경기",
    "url": "https://www.iajou.ac.kr/main/"
  },
  {
    "university": "이화여자대학교",
    "region": "서울",
    "url": "https://admission.ewha.ac.kr/"
  },
  {
    "university": "인천대학교",
    "region": "인천",
    "url": "https://admission.inu.ac.kr/"
  },
  {
    "university": "한국공학대학교",
    "region": "경기",
    "url": "https://iphak.tukorea.ac.kr/"
  },
  {
    "university": "한국항공대학교",
    "region": "경기",
    "url": "https://ibhak.kau.ac.kr/"
  },
  {
    "university": "수원대학교",
    "region": "경기",
    "url": "https://ipsi.suwon.ac.kr/"
  },
  {
    "university": "을지대학교",
    "region": "경기",
    "url": "https://admission.eulji.ac.kr/"
  },
  {
    "university": "한경국립대학교",
    "region": "경기",
    "url": "https://ipsi.hknu.ac.kr/"
  },
  {
    "university": "강원대학교",
    "region": "거점국립",
    "url": "https://admission.kangwon.ac.kr/admission/index.do"
  },
  {
    "university": "경북대학교",
    "region": "거점국립",
    "url": "https://ipsi1.knu.ac.kr/"
  },
  {
    "university": "경상국립대학교",
    "region": "거점국립",
    "url": "https://new.gnu.ac.kr/new/main.do"
  },
  {
    "university": "부산대학교",
    "region": "거점국립",
    "url": "https://go.pusan.ac.kr/college_2016/main/main.asp"
  },
  {
    "university": "전남대학교",
    "region": "거점국립",
    "url": "https://admission.jnu.ac.kr/"
  },
  {
    "university": "전북대학교",
    "region": "거점국립",
    "url": "https://enter.jbnu.ac.kr/"
  },
  {
    "university": "충남대학교",
    "region": "거점국립",
    "url": "https://ipsi.cnu.ac.kr/"
  },
  {
    "university": "충북대학교",
    "region": "거점국립",
    "url": "https://ipsi.chungbuk.ac.kr/"
  },
  {
    "university": "제주대학교",
    "region": "거점국립",
    "url": "https://apply.jeju.ac.kr/"
  }
];
