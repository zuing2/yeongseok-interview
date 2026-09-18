# 영석고 대입 면접 아카이브 - 초보자용 GitHub Pages 스타터

이 폴더는 별도의 설치나 빌드 없이 GitHub Pages에서 바로 작동하는 정적 웹사이트입니다.

## 폴더 구조
- `index.html` : 홈페이지 화면
- `styles.css` : 디자인
- `app.js` : 검색/필터 기능
- `data/resources.json` : 자료 데이터
- `assets/` : 학교 로고, 이미지 등을 넣는 폴더

## 가장 쉬운 배포 방법
1. GitHub에서 새 저장소를 만듭니다.
2. 이 ZIP의 압축을 풉니다.
3. 압축을 푼 모든 파일과 폴더를 GitHub 저장소에 업로드합니다.
4. GitHub 저장소의 `Settings` → `Pages`로 이동합니다.
5. `Build and deployment`에서 `Deploy from a branch`를 선택합니다.
6. Branch를 `main`, Folder를 `/(root)`로 선택한 뒤 Save합니다.
7. 잠시 기다리면 GitHub Pages 주소가 생성됩니다.

## 로고 넣기
`assets/logo.png` 파일을 업로드한 뒤 `index.html`의 `<div class="brand-mark">YS</div>`를 이미지 태그로 교체합니다.

## 자료 추가하기
`data/resources.json` 파일에서 기존 항목 하나를 복사하여 대학, 연도, 학과, 전형, 면접유형, 출처, 제목, 설명, 태그, 링크를 바꾸면 됩니다.
