# Research Page Template

리서치·리스트 데이터를 **단일 HTML + GitHub Pages**로 빠르게 공유하기 위한 템플릿.

모바일 최적화 · 탭 · 지역 필터 · 검색 · 평점 정렬 · 사진 확대 모달 기본 제공.

## 사용법

1. 이 폴더(`template/`)를 새 레포로 복사하거나, 원하는 위치로 옮긴다.
2. **`data.js`만** 수정한다. (제목·탭·카드 데이터·범례)
3. 사진을 `assets/` 폴더에 넣고, `data.js`의 `photo` 필드에 `"assets/파일명.jpg"` 경로로 지정한다.
4. GitHub에 push → **Settings → Pages → Branch: main / root** 활성화.
5. `https://<유저명>.github.io/<레포명>/` 에서 바로 공유.

## 파일 구조

```
template/
├── index.html   # 렌더링 로직 (수정할 필요 없음)
├── data.js      # 여기만 수정 — 제목·카테고리·카드·범례
├── assets/      # 사진 폴더 (파일명 자유)
└── README.md
```

## 데이터 스키마 (`data.js`의 `PAGE.categories[].items`)

| 필드 | 타입 | 설명 |
|---|---|---|
| `region` | string | 지역 (자동으로 필터 칩 생성. `/`로 구분하면 복수 지역) |
| `name` | string | 카드 제목 (필수) |
| `rating` | number \| null | 평점 (null이면 "N/A" 표시) |
| `src` | string | 평점 출처 |
| `kakao` | number \| null | 보조 평점 (선택) |
| `addr` | string | 주소 (상세에 표시) |
| `menu` | string | 대표메뉴/요약 |
| `wait` | string | 웨이팅·예약 텍스트 (키워드로 🔴/🟡 뱃지 자동) |
| `praise` | string | 칭찬 |
| `complaint` | string | 불만 ("-" 또는 빈 문자열이면 숨김) |
| `hours` | string | 영업시간 (상세) |
| `memo` | string | 메모 (상세) |
| `photo` | string | 사진 경로 (상세, 클릭 시 확대) |
| `url` | string | 외부 링크 |

## 커스터마이즈

- **테마색**: `PAGE.themeColor` (hex)
- **뱃지 규칙**: `PAGE.waitHeavy` / `waitModerate`에 키워드 추가
- **🔵 추천 뱃지**: `PAGE.featuredKeywords`에 키워드 (미쉐린·블루리본 등), `featuredLabel`로 뱃지 텍스트
- **탭 개수**: `PAGE.categories` 배열에 원하는 만큼 추가
- **범례 탭 숨기기**: `PAGE.legendHtml`을 빈 문자열로

## Claude에게 데이터 변환 시키기

엑셀/CSV/텍스트가 있다면 Claude에게 이렇게:

> `data.js`의 `PAGE.categories[].items` 스키마에 맞게 이 엑셀을 변환해줘.

그 후 결과를 `data.js`에 붙여넣으면 끝.
