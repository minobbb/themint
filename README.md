# 더민트

---

## 목차

---

1. [웹 서비스 소개](#🙋‍♀️웹-서비스-소개)

2. [프로젝트 기획 배경](✏프로젝트-기획-배경)

3. [기술 스택](#🛠기술-스택)

4. [주요 기능](#💡주요기능)

5. [프로젝트 구성도](#📂프로젝트-구성도)

6. [UCC 영상](#🎥ucc-영상)

7. [개발 팀 소개](#👪개발-팀-소개)

8. [개발 기간](#📅개발-기간)

9. [실행 방법](#💻실행-방법)

## 🙋‍♀️웹 서비스 소개

---

**더민트**는 스트리밍을 통한 중고 경매 거래를 하는 웹 서비스 입니다. 더민트는 'mint condition'의 새것과 같은 상태라는 의미에 더(More)의 의미를 추가하여 '더욱더 새것과 같은 상태의 물품들을 거래한다'라는 의미의 합성어 입니다.

더민트를 통해 판매자는 스트리밍으로 중고거래를 진행하여 한 번의 스트리밍으로 여러 물품들을 빠르게 거래 할 수 있습니다. 경매 시스템을 통해서 판매자와 구매자가 모두 만족할 수 있는 가격에 거래를 진행할 수 있습니다. 구매자의 경우 스트리밍으로 판매자와 실시간으로 상품에 대한 정보를 확인하고 물건에 대한 신뢰성을 높일 수 있습니다.

- [더민트 웹 서비스 바로가기 Click! 👈](https://i7a308.p.ssafy.io/)



## ✏프로젝트 기획 배경

----------

- 현재 존재하는 중고 거래 플랫폼의 이용에 있어서 한번에 많은 수의 물건을 판매하고자 할때, 일일이 물건을 등록하고 물건의 사진과 정보를 입력하는 작업이 매우 피곤하다.

- 상품을 구매하고자 할 때, 판매자가 게시한 글의 사진과 글만으로는 상품에 대한 정확한 정보 판단이 어려우며, 내가 구매하고자 하는 상품이 정상 작동 되는지 확인하기 어렵다.

- 중고거래를 함에 있어서 상품의 가격을 측정하기 어렵고, 이에 따라서 상품의 가격에 대해서 가격협상(네고)를 하려는 사람들에게 시달리게 된다. 

- 상품을 판매하기 위해서 상품에 대한 정보를 요구하는 사람들이 동일한 정보를 요구함에도 매번 답장을 별도로 해주어야 한다. 





## 🛠기술 스택

---

#### Front-end

| ![HTML5.svg](/uploads/338128594a6c58476183bbcd1c0b9557/HTML5.svg) | ![CSS3.svg](/uploads/b1515c9303faf54e2eeccb980c3236bb/CSS3.svg) | ![JavaScript](/uploads/c23bdea86d76ad6d6086855893e94d6a/JavaScript.png) |
| ----------------------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------- |
| HTML5                                                             | CSS3                                                            | JS                                                                      |

| ![React.svg](/uploads/f736e784898b0c84f3e78f1805e583e9/React.svg) | ![recoil](/uploads/c9949797373b5dbbd5d77558dbdf79e2/recoil.png) | ![reactu-query](/uploads/60cf208876b81c98477dadaba88ec26c/reactu-query.png) | ![styled-components](/uploads/258dd18cd7a89b6cb3a3eb01b26fb687/styled-components.png) |
| ----------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| React                                                             | Recoil                                                          | React-Query                                                                 | Styled-components                                                                     |

| ![sockjs](/uploads/34dabafeb8e1c43c45c70a99bf5c0bac/sockjs.png) | ![axios](/uploads/a65ed9e296606d2422484a6071e528a2/axios.png) | ![Node.js_logo.svg](/uploads/a14ce8434713f8e81d8a891d70fe43e1/Node.js_logo.svg) | ![openvidu](/uploads/c1a233c419974a535b98fc61f6ff1f5e/openvidu.png) |
| --------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Sock.js                                                         | axios                                                         | Node.js                                                                         | OpenVidu                                                            |

#### Back-end

| ![spring-boot](/uploads/b45a7802ea5c3fb2e40a706f8d36c926/spring-boot.png) | ![spring-security](/uploads/4f4ba1e398891b559b5b18adb702b225/spring-security.png) | ![gradle](/uploads/b6db789ff4f01c74eb8ab6f5d2c7ad4f/gradle.png) | ![Hibernate.svg](/uploads/d98355305f6b31e28353f31230ca6a85/Hibernate.svg) |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Spring-Boot                                                               | Spring-Security                                                                   | Gradle                                                          | Hibernate                                                                 |

| ![Swagger](/uploads/7a642019e9e6d3a835f66e94ce81253b/Swagger.png) | ![MySQL.svg](/uploads/f0459c9c6e47705daff95499a43e9f18/MySQL.svg) | ![png-transparent-websocket-hd-logo](/uploads/629dbb7c84f8813b4e16676ecf0887a1/png-transparent-websocket-hd-logo.png) | ![redis.svg](/uploads/c674d5533141b74b155cc508e8ec7a19/redis.svg) |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Swagger                                                           | MySQL                                                             | Websockets                                                                                                            | redis                                                             |

#### DevOps

| ![docker.svg](/uploads/ce207d1e1afd579f9763516b30851367/docker.svg) | ![Jenkins](/uploads/fb6f61e245faefe649049a7525387f52/Jenkins.png) | ![NGiNX.svg](/uploads/badbcef0c8d13620d4e36a4890433081/NGiNX.svg) | ![EC2](/uploads/8f4b551a47e0d10a7f301cfb953f0373/EC2.png) | ![S3](/uploads/f2b03de109e24226e2d491199e6c5187/S3.png) |
| ------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------- |
| Docker                                                              | Jenkins                                                           | NGiNX                                                             | aws EC2                                                   | aws S3                                                  |

## 💡주요기능

---

| 기능            | 내용                                                                                                                                                                                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 실시간 스트리밍      | 판매자가 스트리밍을 통해 상품을 구매자들에게 보여주고 구매자들을 구매하고자 하는 상품에 응찰을 통해 구매의사를 표현합니다. 30초의 카운트 다운이 끝날 때까지 추가적인 응찰자가 나타나지 않는 경우 마지막으로 응찰한 사람이 낙찰받게되고 다음 상품에 대한 경매를 진행하게 됩니다.                                                    |
| 판매내역/ 구매내역 관리 | 판매자와 구매자는 각자 판매/구매한 상품에 대해서 확인과 관리를 할 수 있습니다. 입금확인, 배송지 입력, 배송확인 과 리뷰 작성을 통하여 상품의 거래 진행을 파악하고 배송 상태를 확인할 수 있습니다.                                                                                              |
| 실시간 채팅 서비스    | 스트리밍 내에서 스트리밍의 참여자 간 그룹 채팅을 구현하였습니다. 구매자는 상품에 대한 추가적이고 구체적인 정보를 채팅을 통하여 판매자에게 요구 할 수 있습니다.  <br/>판매자와 구매자간에 1대1 채팅을 통하여 이야기를 나눌 수 있습니다. 판매자와 구매자 간에 상품에 대해 혹은 상품의 거래 방법에 대해서 좀 더 구체적으로 상의하거나 정보를 교환 할 수 있습니다. |
| 웹 알림 기능       | Notification API를 활용하여 웹 알림 기능을 구현하였습니다. 사용자의 관심 키워드, 관심 카테고리, 관심 경매에 대하여 경매가 새로이 올라오는 경우 사용자에게 알림을 제공합니다.                                                                                                    |

## 📂프로젝트 구성도

---

- 아키텍처(Architecture)

![아키텍쳐](/uploads/d4e66e49e6b323f534e923ed42deee18/아키텍쳐.png)

- ERD

![ERD.PNG](/uploads/061557c0488fdf06b22a7fcf7b5a14ef/ERD.PNG.png)

- WireFrame

- 기능정의서

![기능정의서](/uploads/94527793415fbc02aa2abce9f8f452a4/기능정의서.gif)

## 🎥UCC 영상

---

UCC 소개 영상 바로가기 Click! 👈

## 👪개발 팀 소개

---

| 이름  | 역할           | 개발내용 |
| --- | ------------ | ---- |
| 강민서 | Front-end/팀장 |      |
| 김수환 | Front-end/서기 |      |
| 김혜성 | Back-end/팀원  |      |
| 남은열 | Front-end/팀원 |      |
| 정민호 | Back-end/팀원  |      |

## 📅개발 기간

---

2022.07.04 ~ 2022.08.19

## 💻실행 방법

---

Client 실행

1. 원격 저장소 복제

```git
$ git clone https://lab.ssafy.com/s07-webmobile1-sub2/S07P12A308.git
```

2. 프로젝트 폴더로 이동

```git
$ cd client
```

3. 필요한 node_modules 설치

```git
$ npm install
```

4. 개발 서버 실행

```git
$ npm start
```

Main Server 실행

1. 원격 저장소 복제

```git
$ git clone https://lab.ssafy.com/s07-webmobile1-sub2/S07P12A308.git
```

2. 프로젝트 폴더
