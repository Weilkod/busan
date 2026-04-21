// 실제 채워진 예시 — 부산 맛집 리서치.
// 이 파일을 data.js로 복사(덮어쓰기)하고, 사진을 assets/로 옮기면 바로 동작합니다.

const PAGE = {
  title: "🍴 부산 맛집 리서치",
  subtitle: "평점·웨이팅·메뉴 한눈에 · 미쉐린/블루리본 표시",
  themeColor: "#2F5597",

  categories: [
    {
      id: "meal",
      label: "🍚 식사",
      items: [
        {"region":"광안리","name":"자매국밥","rating":5.0,"src":"식신(한줄평)","kakao":2.8,"addr":"부산 수영구 민락본동로27번길 56","menu":"돼지국밥, 순대국밥, 섞어국밥, 수육백반","wait":"주말 대기 / 평일 바로 입장","praise":"맑고 칼칼·롯데 선수 단골·주택개조","complaint":"-","hours":"월~토 10:00-21:00, 일 휴무","memo":"수영구 민락본동로27번길 56","photo":"assets/01_자매국밥.jpg","url":"https://map.naver.com/p/search/%EC%9E%90%EB%A7%A4%EA%B5%AD%EB%B0%A5%20%EB%AF%BC%EB%9D%BD"},
        {"region":"민락","name":"수변최고돼지국밥 민락본점","rating":4.8,"src":"다이닝코드(맛)","kakao":4.1,"addr":"부산 수영구 광안해변로370번길 9-32 1층","menu":"항정국밥 13,000 / 고기국밥 10,000 / 항정수백 15,000","wait":"2-3시간 / 테이블링 원격 20분","praise":"깔끔 인테리어·친절·항정 전용","complaint":"웨이팅 매우 심함","hours":"24시간 연중무휴","memo":"본점 기준","photo":"assets/02_수변최고돼지국밥_민락본점.jpg","url":"https://map.naver.com/p/search/%EC%88%98%EB%B3%80%EC%B5%9C%EA%B3%A0%EB%8F%BC%EC%A7%80%EA%B5%AD%EB%B0%A5%20%EB%AF%BC%EB%9D%BD%EB%B3%B8%EC%A0%90"}
        // ...필요한 만큼 추가
      ]
    },
    {
      id: "bakery",
      label: "🥐 빵·디저트",
      items: [
        {"region":"망미","name":"디저트시네마","rating":5.0,"src":"트립어드바이저","kakao":3.9,"addr":"부산 연제구 쌍미천로 32-1 1층","menu":"시네마페스츄리, 크루아상, 파이","wait":"현장등록만 / 오픈 10시부터 대기(12시 오픈)","praise":"페스츄리 블루리본 5개·인생크루아상·인테리어","complaint":"운영시간 짧음(토·일만 + 일부 수요일)","hours":"토·일 12:00-16:00 + 둘째/마지막주 수요일","memo":"연제구 쌍미천로 32-1","photo":"assets/21_디저트시네마.jpg","url":"https://map.naver.com/p/search/%EB%94%94%EC%A0%80%ED%8A%B8%EC%8B%9C%EB%84%A4%EB%A7%88%20%EB%A7%9D%EB%AF%B8"}
      ]
    }
  ],

  legendHtml: `
    <div style="font-size:14px;font-weight:700;color:#92400e;margin-bottom:8px;">📌 범례 / 주의사항</div>
    <p><b>[평점 출처]</b><br>대표 플랫폼(다이닝코드·미쉐린가이드·테이블링·망고플레이트·뽈레·식신)의 단일 평점을 기입.</p>
    <p><b>[보조 평점 = 카카오맵]</b><br>네이버는 별점 폐지·크롤링 차단으로 카카오맵 장소 평점을 수집.</p>
    <p><b>[웨이팅 뱃지]</b><br>🔴 심함: 수백명·2~3시간·오픈런<br>🟡 중간: 주말 대기·30분~1시간<br>무표시: 미확인/없음</p>
  `,

  waitHeavy: ["3시간","2시간","2-3시간","일평균","오픈런","오픈전부터","58팀","798명","988명","389명","334명","오픈 1시간"],
  waitModerate: ["대기","웨이팅","주말","1시간","만석","예약 필수","예약제","30분","줄"],
  featuredKeywords: ["미쉐린","미슐랭","블루리본","빕구르망"],
  featuredLabel: "🔵 미쉐린/블루리본"
};
