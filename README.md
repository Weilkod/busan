# 부산 맛집 리서치

엑셀로 관리하는 부산 맛집 데이터를 모바일 친화 카드 UI로 공유하는 정적 페이지.

**🔗 라이브**: https://weilkod.github.io/busan/busan.html

---

## 업데이트 방법 (엑셀 → 웹)

```
로컬 엑셀 수정  →  python build_data.py  →  git push  →  끝
```

### 상세 단계

1. **로컬에서 엑셀 편집**
   - 파일: `C:\Users\YANG\Desktop\부산\부산_맛집_리서치_v*.xlsx`
   - 새 버전을 만들고 싶으면 `부산_맛집_리서치_v<timestamp>.xlsx` 형태로 저장 (파일명 기준 가장 최근 것이 자동 선택됨)
   - 시트: `식사`, `빵·디저트` 두 개
   - 컬럼: 지역 · 가게명 · 평점 · 평점출처 · 카카오평점 · 주소 · 대표메뉴(대표가격) · 웨이팅/예약 · 칭찬포인트 · 불만포인트 · 영업시간/휴무 · 원본메모 · 참고URL

2. **사진 추가(선택)**
   - `맛집_사진/` 폴더에 `NN_가게명.jpg` 형식으로 추가
   - `NN`은 전체 행 순서 — 식사는 `01~`, 빵·디저트는 식사 마지막 번호 +1 부터 (현재 `21~`)
   - 행을 추가·삭제하면 사진 번호도 맞춰서 재정렬 필요

3. **변환 스크립트 실행**
   ```bash
   cd C:\Users\YANG\Desktop\부산
   python build_data.py
   ```
   → `data.js`가 갱신됨

4. **GitHub에 push**
   ```bash
   # 변경된 파일: data.js (+사진 추가했으면 맛집_사진/*.jpg)
   git add data.js 맛집_사진/
   git commit -m "update: 자매국밥 영업시간 수정"
   git push
   ```
   → 1~2분 내 라이브 페이지 반영

---

## 파일 구조

```
busan/
├── README.md          # 이 문서
├── busan.html         # 페이지 UI + 렌더링 로직 (거의 수정할 일 없음)
├── data.js            # ★ 자동 생성 — 직접 편집 금지
├── build_data.py      # 엑셀 → data.js 변환 스크립트
├── 맛집_사진/         # 대표 사진 (NN_ 접두사로 행과 매칭)
│   ├── 01_자매국밥.jpg
│   ├── ...
│   └── 28_쿠루미과자점.jpg
└── template/          # 다른 프로젝트용 재사용 템플릿
    ├── index.html
    ├── data.js
    ├── data.example.busan.js
    ├── assets/
    └── README.md
```

### 각 파일 역할

| 파일 | 설명 | 수정 빈도 |
|---|---|---|
| `busan.html` | 렌더링·스타일·탭·검색·필터 | 거의 안 함 |
| `data.js` | 카드 데이터 (`MEAL`, `BAKERY` 배열) | 자동 생성 |
| `build_data.py` | 엑셀 읽어서 `data.js` 출력 | 컬럼 스키마 바뀔 때만 |
| `맛집_사진/` | 사진 | 매장 추가 시 |

---

## 데이터 스키마

`data.js`의 `MEAL` / `BAKERY` 배열 각 항목:

| 필드 | 타입 | 필수 | 설명 |
|---|---|---|---|
| `region` | string | O | 지역 — 필터 칩이 자동 생성됨. `/`로 구분하면 복수 지역 |
| `name` | string | O | 매장명 (카드 제목) |
| `rating` | number \| null | - | 대표 플랫폼 평점 |
| `src` | string | - | 평점 출처 |
| `kakao` | number \| null | - | 카카오맵 평점 |
| `addr` | string | - | 주소 |
| `menu` | string | - | 대표 메뉴 |
| `wait` | string | - | 웨이팅 정보 (키워드로 🔴/🟡 뱃지 자동) |
| `praise` | string | - | 칭찬 포인트 |
| `complaint` | string | - | 불만 (`"-"` 또는 빈 문자열이면 숨김) |
| `hours` | string | - | 영업시간 |
| `memo` | string | - | 추가 메모 |
| `url` | string | - | 네이버 지도 링크 |
| `photo` | string | - | 사진 경로 (스크립트가 자동 매칭) |

---

## 웨이팅 뱃지 규칙

- 🔴 **심함**: `wait` 텍스트에 "3시간", "2시간", "일평균", "오픈런", "800명" 등 포함
- 🟡 **중간**: "대기", "주말", "1시간", "만석", "예약" 등 포함
- 무표시: `-` 또는 빈 값

키워드는 `busan.html` 안의 `HEAVY` / `MODERATE` 배열에서 수정 가능.

## 🔵 미쉐린/블루리본 뱃지

`praise`·`src`·`memo`에 "미쉐린", "미슐랭", "블루리본", "빕구르망" 키워드가 있으면 자동 표시.

---

## 자주 하는 작업

### 매장 추가
1. 엑셀 해당 시트 맨 아래 행 추가
2. 사진을 `맛집_사진/`에 `NN_가게명.jpg`로 저장 (NN = 추가된 행 번호)
3. `python build_data.py` → push

### 매장 삭제
1. 엑셀에서 행 삭제
2. ⚠️ 이 행 뒤에 있던 사진들의 `NN`이 1씩 당겨져야 함 (파일 rename 필요)
3. `python build_data.py` → push

### 컬럼 추가
1. 엑셀에 컬럼 추가 (예: "인스타 URL")
2. `build_data.py`의 `COL_MAP`에 매핑 추가
3. `busan.html`의 `renderCard()`에서 해당 필드 표시 로직 추가
4. `python build_data.py` → push

---

## 재사용 템플릿 (`template/`)

같은 구조로 다른 리서치 페이지를 만들고 싶다면:

1. `template/` 폴더를 새 레포에 복사
2. `template/data.js`만 스키마에 맞게 채우기 (또는 `data.example.busan.js` 참고)
3. 사진은 `template/assets/`에 넣기
4. 새 레포 push + GitHub Pages 활성화

자세한 건 [`template/README.md`](template/README.md).
