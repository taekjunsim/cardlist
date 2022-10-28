## README 요구 사항
### 화면의 스크린샷 / gif
![qmit](https://user-images.githubusercontent.com/85026975/198749512-595bac2d-30f1-4440-a40c-a85b58424b62.gif)

* 스크린샷
<img width="366" alt="스크린샷 2022-10-29 오전 8 20 36" src="https://user-images.githubusercontent.com/85026975/198749903-b4d4119e-c89a-42a9-89a0-1f42bebd92bb.png">
<img width="361" alt="스크린샷 2022-10-29 오전 8 21 38" src="https://user-images.githubusercontent.com/85026975/198749910-039f2d34-5327-4c99-b168-e80a1ef3af9d.png">
<img width="371" alt="스크린샷 2022-10-29 오전 8 20 47" src="https://user-images.githubusercontent.com/85026975/198749906-45a65a2c-faeb-4cd5-ae90-eddbc55d2927.png">
<img width="317" alt="스크린샷 2022-10-29 오전 8 21 11" src="https://user-images.githubusercontent.com/85026975/198749909-7520dbfb-f3d8-4c80-8dbb-4e97cb04e504.png">

### 총 소요 시간 (4시간 30분)
* 설계
  * 1시간 (폴더 구조, 컴포넌트 별로 필요한 데이터 및 리소스 정리, 요구사항 정리 등)
* 개발
  * 3시간
* README 작성
  * 30분

### directory 구조 설명
```bash
public
├── mock
│   └── players.json
├── favicon.ico
├── index.html
│
src
├── assets
│   ├── svg
│   │   └── arrow.svg
├── containers
│   ├── card
│   │   └── index.tsx 
├── styles
│   └── color.ts
├── views
│   ├── base
│   │   └── Layout.tsx
│   ├── card
│   │   └── index.tsx
│   ├── common
│   │   └── Player.tsx 
│   └── pagination
│       └── index.tsx 
├── App.tsx
├── custom.d.ts
├── index.tsx
└── reset.css
``` 

* assets
  * font, 이미지 등 resource를 관리
* containers
  * api 호출 및 데이터 관련 로직 등 business 로직이 작성된 컴포넌트를 관리
* styles
  * color, size 등 공용 style 컴포넌트를 관리
* views
  * view 로직이 작성된 컴포넌트를 관리
* App.tsx
  * reset.css 등 전역 관리 컴포넌트

### 프로젝트를 이해하는데 필요한 내용이 있으면 작성해주세요.
- 필수 구현 사항 중 총 인원의 수는 리스트 내 모든 선수의 합계가 아닌 부상위험도의 기준에 부합하는 선수의 합계로 대체하였습니다.
- Typescript가 svg를 인식하지 못하는 에러를 해결하기 위해 custom.d.ts파일을 작성하였습니다.
- acwr 기준값과 화면에 보이는 선수의 숫자를 수정할 수 있습니다.

## 필수 구현 사항
- [x] 아바타는 pictureUrl 을 표시하며, pictureUrl 이 없을경우 유저 이름의 첫글자를 따옵니다.
- [x] 선수들은 acwr 을 기준으로 내림차순으로 보여집니다.
- [x] 1페이지당 5명의 선수가 보입니다.
- [x] 오른쪽 화살표를 눌렀을 경우, 다음 5명이 보입니다.
- [x] 총 몇 명의 선수가 있는지 보여줍니다.
- [x] 현재 페이지의 인덱스를 보여줍니다.

## 추가 구현 사항
- [x] 다음, 이전 선수를 보여줄때는 slide 효과를 준다. (애니메이션 시간은 0.5s) ( +1점 )
* 상상력을 담아서 추가로 구현해주셔도 좋습니다 ( +a 점)
  - [x] acwr 기준값 설정 기능
  - [x] 화면에 보이는 선수의 숫자 설정 기능

## 구현 시 고려사항
- 해당 컴포넌트는 추후 acwr 의 기준값을 코치님들께서 직접 설정하실수 있습니다. (확장성 고려)
- 화면에 따라 보여지는 선수의 숫자가 달라질수도 있습니다 (확장성 고려)
