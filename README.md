# 다양한 사이트 만들기

---

### 에러 해결(checkout하거나 깃에서 pull 받은 경우)

```
에러
npm run dev 하면
/sh: next: command not found 에러 해결 방법

이유는
-> next 설치가 안되어 있어서 그런것
-> node.modules이 install 안되어 있어서 그런것

해결
cd next-site -> npm install -> npm run dev

```

-

### 에러 해결

```
Error: Cannot find module 'autoprefixer'
-> npm install -D autoprefixer
```

---

### 설치 방법

```
1. node 설치
2. next.js 설치(뒤에는 하고 싶은 이름, 이름은 소문자만 가능) -> npx create-next-app@latest next-site

~~3. 순서대로 y -> no(타입스크립트 하려면 yes) -> yes(ESLint) -> yes(Tailwind CSS) -> yes(sef/ directory 폴더별로 라우팅 그거 맞나?) -> yes(App Router recommended니까) -> no(alias 잘 모르겠다)~~

3. 위에 뭔가 달라서 다시 수정(다 no로 설정)
순서대로 y(맨 처음할때만 나옴, 두번째는 안나오네) -> no(타입스크립트 하려면 yes) -> no(안함 ESLint) -> no(나중에 따로 함 Tailwind CSS) -> no(안함 src/ directory) -> no(안함 하면 pages 폴더 안생김 App Router recommended니까) -> no(alias 잘 모르겠다)
4. next-site 폴더로 이동(터미널 이용할때)
5. package.json 에서 실행 확인 -> npm run dev
6. pages -> index.js 가 http://localhost:3000 그리는 부분
7. http://localhost:3001 로 나오면 vsc 종료하고 다시 하면 3000 포트로 접속됨
8. url은 pages에서 만든 파일 이름으로 적용됨, 이름이 중요, 특히 이름 지을때 앞에 띄어쓰기 있는지도 확인
9. tailwind css 설치(next-site 폴더에서) -> npm install -D tailwindcss
10. tailwind.config.js 추가 -> npx tailwindcss init
11. tailwind.config.js 에서 content에 들어가는 값은 tailwind 및 next 에서 하는 가이드마다 값이 다르기 때문에 -> tailwind css nextjs pages 검색해서 나오는걸로 복붙 -> (Styling: Tailwind CSS - Next.js) 껄로 함
12. autoprefixer 설치 -> npm install -D autoprefixer
13. lottie-player 설치 -> npm install --save react-lottie-player
14. next-themes 설치 -> npm install next-themes
```

```
1. ./ -> 이거는 위치가 현재 폴더
2. ../ -> 이거는 상위 폴더 인데, @ 과 같은듯
../ == @/
3. npm list -> npm 설치 확인
4. npm remove 이름 -> npm 설치 삭제
5. npm install -> 기존꺼 다시 설치
6. 단어 더블 클릭 -> shift + command + L -> 선택 단어 전체 가져와짐
```
