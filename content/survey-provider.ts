import { Question } from '../SchemaDefinitions';

/**
 * [가이드] 아래 surveyData 배열의 대괄호 [] 사이에 가지고 계신 865개의 질문 데이터를 붙여넣으세요.
 * 데이터 형식이 [ { "id": 1, ... }, { "id": 2, ... } ] 와 같은 배열 형태여야 합니다.
 */
export const surveyData: Question[] =
[
  {
    "id": 1,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "상사가 업무 범위 밖의 부당한 지시를 내렸다. 당신의 반응은?",
    "options": [
      { "text": "\"이건 제 업무가 아닌 것 같습니다.\" 그 자리에서 확실하게 의사를 밝힌다.", "type": "D" },
      { "text": "일단 웃으며 알겠다고 한 뒤, 동료들에게 \"이거 실화냐?\"라며 하소연한다.", "type": "I" },
      { "text": "거절하면 관계가 껄끄러워질까 봐 참고 묵묵히 지시를 수행한다.", "type": "S" },
      { "text": "업무 분장표나 근로 계약 내용을 확인하고 이메일로 정중히 이의를 제기한다.", "type": "C" }
    ]
  },
  {
    "id": 2,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "팀 회식 메뉴를 당신이 정해야 한다. 선정 기준은?",
    "options": [
      { "text": "가장 비싸고 맛있는 곳, 혹은 내가 먹고 싶은 곳으로 빠르게 예약한다.", "type": "D" },
      { "text": "요즘 인스타에서 핫하고 분위기 힙한 곳! 사진 잘 나오는 곳이 최고다.", "type": "I" },
      { "text": "팀원들에게 알러지는 없는지, 선호하는 메뉴는 뭔지 투표를 돌린다.", "type": "S" },
      { "text": "회사와의 거리, 예산 범위, 주차 가능 여부를 고려해 가성비 좋은 곳을 찾는다.", "type": "C" }
    ]
  },
  {
    "id": 3,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "치명적인 업무 실수를 저질렀다. 상사에게 보고할 때 당신의 스타일은?",
    "options": [
      { "text": "결론부터 말한다. \"실수가 있었습니다. 하지만 이렇게 수습하겠습니다.\"", "type": "D" },
      { "text": "\"죄송합니다 부장님 ㅠㅠ\" 감정에 호소하며 최대한 불쌍해 보이려 노력한다.", "type": "I" },
      { "text": "너무 당황스럽고 죄송해서 말도 잘 안 나오고 식은땀만 흘린다.", "type": "S" },
      { "text": "실수 발생 시간, 원인, 파급 효과, 재발 방지 대책을 문서로 정리해 보고한다.", "type": "C" }
    ]
  },
  {
    "id": 4,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "연봉 협상 시즌이 다가왔다. 당신의 전략은?",
    "options": [
      { "text": "내 성과가 이만큼이니 이 정도는 받아야 한다고 강하게 요구한다.", "type": "D" },
      { "text": "평소 쌓아둔 사내 평판과 친화력을 무기로 부드럽게 어필한다.", "type": "I" },
      { "text": "회사가 제시하는 금액이 터무니없지 않다면 수용하고 좋게 넘어간다.", "type": "S" },
      { "text": "동종 업계 평균 연봉 테이블과 내 성과 데이터를 엑셀로 뽑아 제시한다.", "type": "C" }
    ]
  },
  {
    "id": 5,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "소개팅 첫 만남, 대화가 끊겼을 때 당신은?",
    "options": [
      { "text": "새로운 주제를 내가 먼저 던지며 대화를 주도한다.", "type": "D" },
      { "text": "아무 말 대잔치라도 해서 어색한 분위기를 없애고 웃게 만든다.", "type": "I" },
      { "text": "상대방이 말할 때까지 기다리거나 미소만 짓고 있는다.", "type": "S" },
      { "text": "상대방의 취미나 직업에 대해 구체적인 질문을 던져 정보를 얻는다.", "type": "C" }
    ]
  },
  {
    "id": 6,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "연인과 데이트 코스를 짤 때 당신의 역할은?",
    "options": [
      { "text": "\"이번 주는 호캉스 가자.\" 메인 이벤트를 결정하고 통보한다.", "type": "D" },
      { "text": "\"여기랑 여기 엄청 핫하대!\" 가고 싶은 곳 리스트를 잔뜩 보낸다.", "type": "I" },
      { "text": "\"자기 가고 싶은 데 있어? 난 다 좋아.\" 상대 의견에 전적으로 맞춘다.", "type": "S" },
      { "text": "맛집 브레이크 타임, 이동 동선, 영화 시간을 분 단위로 체크한다.", "type": "C" }
    ]
  },
  {
    "id": 7,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "연인이 연락이 잘 안 돼서 싸우게 되었다. 당신의 주장은?",
    "options": [
      { "text": "\"연락은 기본 예의 아니야? 안 될 거면 미리 말해.\" (규칙 강조)", "type": "D" },
      { "text": "\"어떻게 나한테 이럴 수 있어? 사랑이 식은 거야?\" (감정 호소)", "type": "I" },
      { "text": "\"바쁜 건 알겠는데... 기다리는 내가 너무 힘들어.\" (조용한 호소)", "type": "S" },
      { "text": "\"하루 평균 답장 텀이 3시간이야. 이건 비정상적이야.\" (데이터 제시)", "type": "C" }
    ]
  },
  {
    "id": 8,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "주말 여가 시간, 당신이 가장 선호하는 휴식은?",
    "options": [
      { "text": "크로스핏, 등산, 러닝 등 땀 흘리고 성취감을 느끼는 활동.", "type": "D" },
      { "text": "동호회 모임, 친구들과의 파티, 페스티벌 가기.", "type": "I" },
      { "text": "집에서 밀린 잠자기, 넷플릭스 정주행, 반려견 산책.", "type": "S" },
      { "text": "독서, 자격증 공부, 재테크 강의 수강 등 자기계발.", "type": "C" }
    ]
  },
  {
    "id": 9,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "운동(다이어트) 계획을 세울 때 당신의 스타일은?",
    "options": [
      { "text": "\"3달 안에 10kg 감량.\" 목표를 세우고 될 때까지 밀어붙인다.", "type": "D" },
      { "text": "친구랑 같이 헬스장 등록하거나, 예쁜 운동복부터 산다.", "type": "I" },
      { "text": "너무 힘든 건 싫고, 가벼운 산책이나 요가를 꾸준히 한다.", "type": "S" },
      { "text": "인바디를 측정하고 칼로리와 영양소 비율을 계산해서 식단을 짠다.", "type": "C" }
    ]
  },
  {
    "id": 10,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "보너스가 생겼다. 재테크 방식은?",
    "options": [
      { "text": "공격적 투자! 코인이나 급등주에 넣어 대박을 노린다.", "type": "D" },
      { "text": "일단 나를 위해 쓴다(명품, 여행). 남는 건 통장에 둔다.", "type": "I" },
      { "text": "원금 보장이 제일 중요해. 예적금이나 안전한 채권에 넣는다.", "type": "S" },
      { "text": "ETF 분산 투자, 포트폴리오 배분 등 철저히 분석해서 투자한다.", "type": "C" }
    ]
  },
  {
    "id": 11,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "배우자가 집안일을 깜빡하고 안 했다. 당신의 반응은?",
    "options": [
      { "text": "\"지금 당장 해.\" 안 한 것을 보자마자 바로 지적한다.", "type": "D" },
      { "text": "\"자기야~ 이거 안 했네? 빨리 하고 같이 놀자!\" 웃으며 넘긴다.", "type": "I" },
      { "text": "피곤해서 그렇겠지... 잔소리하기 싫어서 내가 대신 한다.", "type": "S" },
      { "text": "\"우리가 정한 당번 규칙은 이거잖아.\" 약속을 상기시킨다.", "type": "C" }
    ]
  },
  {
    "id": 12,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "아이 훈육 방식, 당신이 중요하게 생각하는 것은?",
    "options": [
      { "text": "엄격한 규칙과 예절. 아이가 내 권위에 도전하면 안 된다.", "type": "D" },
      { "text": "친구 같은 부모. 아이와 즐겁게 놀아주고 공감해 주는 것.", "type": "I" },
      { "text": "안정적인 정서. 아이가 스트레스받지 않게 기다려주는 것.", "type": "S" },
      { "text": "일관성. 기분에 따라 혼내지 않고 정해진 원칙대로 가르치는 것.", "type": "C" }
    ]
  },
  {
    "id": 13,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "회의 시간이 길어지고 결론이 안 난다. 이때 당신은?",
    "options": [
      { "text": "\"그래서 결론이 뭡니까? 오늘 여기까지 하죠.\" 회의를 끊는다.", "type": "D" },
      { "text": "지루함을 못 참고 옆 사람과 잡담하거나 딴짓을 한다.", "type": "I" },
      { "text": "힘들지만 끝날 때까지 묵묵히 자리를 지킨다.", "type": "S" },
      { "text": "지금까지 논의된 내용을 요약 정리하고 쟁점을 짚어준다.", "type": "C" }
    ]
  },
  {
    "id": 14,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "썸 타는 상대가 \"나 오늘 우울해\"라고 카톡을 보냈다.",
    "options": [
      { "text": "\"왜? 누가 그랬어? 내가 혼내줄게.\" (해결사 모드)", "type": "D" },
      { "text": "\"헐 ㅠㅠ 무슨 일이야? 내가 전화할까? 맛있는 거 먹자!\" (공감+제안)", "type": "I" },
      { "text": "\"저런... 많이 힘들었겠다. 푹 쉬는 게 좋겠어.\" (위로)", "type": "S" },
      { "text": "\"무슨 일 있었어? 비 와서 기분이 다운된 건가?\" (원인 분석)", "type": "C" }
    ]
  },
  {
    "id": 15,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "새로운 프로젝트 팀장이 되었다. 팀 운영 방식은?",
    "options": [
      { "text": "목표 달성이 최우선. 성과 못 내는 팀원은 강하게 질책한다.", "type": "D" },
      { "text": "팀 분위기가 좋아야 성과도 난다. 회식과 티타임을 자주 갖는다.", "type": "I" },
      { "text": "팀원들이 힘들지 않게 업무량을 조절해주고 배려한다.", "type": "S" },
      { "text": "R&R(역할과 책임)을 명확히 하고 주간 업무 보고를 체계화한다.", "type": "C" }
    ]
  },
  {
    "id": 16,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "아이가 공공장소에서 떼를 쓰며 드러누웠다.",
    "options": [
      { "text": "단호하게 \"일어나. 안 그치면 두고 간다.\"라고 엄포를 놓는다.", "type": "D" },
      { "text": "주변 시선이 너무 신경 쓰여서 일단 아이가 원하는 걸 들어준다.", "type": "I" },
      { "text": "아이가 진정될 때까지 안아주거나 달래준다.", "type": "S" },
      { "text": "왜 안 되는지 낮고 단호한 목소리로 논리적으로 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 17,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "이직을 고민하게 되는 가장 큰 이유는?",
    "options": [
      { "text": "승진이 막혀 있거나, 내 성과에 대한 보상이 확실하지 않아서.", "type": "D" },
      { "text": "회사 분위기가 너무 삭막하고 사람들이랑 안 맞아서.", "type": "I" },
      { "text": "회사가 불안정하거나 업무 강도가 너무 세서(워라밸 붕괴).", "type": "S" },
      { "text": "업무 체계가 없고 주먹구구식으로 일하는 게 답답해서.", "type": "C" }
    ]
  },
  {
    "id": 18,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "배우자와의 갈등 해결 방식은?",
    "options": [
      { "text": "싸우더라도 그 자리에서 끝장을 보고 바로 화해해야 한다.", "type": "D" },
      { "text": "냉전은 못 참는다. 내가 먼저 애교 부리거나 장난쳐서 푼다.", "type": "I" },
      { "text": "시간이 약이다. 배우자 화가 풀릴 때까지 조용히 기다린다.", "type": "S" },
      { "text": "감정을 배제하고 대화로 서로의 잘잘못을 따져본다.", "type": "C" }
    ]
  },
  {
    "id": 19,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "자기계발을 위해 학원을 등록했다. 수업 태도는?",
    "options": [
      { "text": "강사에게 적극적으로 질문하고, 제일 먼저 수료증을 따려 한다.", "type": "D" },
      { "text": "옆자리 수강생들과 친해져서 끝나고 밥 먹으러 간다.", "type": "I" },
      { "text": "결석하지 않고 꾸준히 맨 뒷자리에서 수업을 듣는다.", "type": "S" },
      { "text": "강의 내용을 꼼꼼히 필기하고 녹음해서 복습한다.", "type": "C" }
    ]
  },
  {
    "id": 20,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "결혼 준비 중 스드메(스튜디오/드레스/메이크업) 결정할 때?",
    "options": [
      { "text": "\"이게 제일 낫네. 이걸로 하자.\" 빠르게 결정한다.", "type": "D" },
      { "text": "화려하고 남들이 봤을 때 \"우와\" 할 만한 걸 고른다.", "type": "I" },
      { "text": "배우자가 원하는 걸로 맞추거나 플래너 추천을 따른다.", "type": "S" },
      { "text": "견적 비교 엑셀 파일을 만들어서 가성비와 구성을 따진다.", "type": "C" }
    ]
  },
  {
    "id": 21,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "동료가 내 뒷담화를 했다는 사실을 알게 되었다.",
    "options": [
      { "text": "바로 찾아가서 \"할 말 있으면 앞에서 하라\"고 따진다.", "type": "D" },
      { "text": "배신감에 친한 동료들을 모아 술 마시며 억울함을 토로한다.", "type": "I" },
      { "text": "상처받지만 겉으로 티 내지 않고 조용히 거리를 둔다.", "type": "S" },
      { "text": "증거를 확보하거나, 업무적으로 꼬투리 잡힐 일 없게 더 철저히 한다.", "type": "C" }
    ]
  },
  {
    "id": 22,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "육아 퇴근(아이 재우기) 후, 나만의 자유시간이 생겼다.",
    "options": [
      { "text": "짧고 굵게! 게임 한 판 하거나 맥주 한 잔 원샷.", "type": "D" },
      { "text": "SNS에 육아스타그램 올리고 댓글 확인하며 소통한다.", "type": "I" },
      { "text": "너무 지쳐서 그냥 멍때리거나 TV 틀어놓고 잠든다.", "type": "S" },
      { "text": "육아 일기를 쓰거나 내일 아이 스케줄을 점검한다.", "type": "C" }
    ]
  },
  {
    "id": 23,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "30대에 꼭 이루고 싶은 목표는?",
    "options": [
      { "text": "임원 승진 혹은 창업 성공. 남들이 인정하는 위치에 오르기.", "type": "D" },
      { "text": "넓은 인맥과 인기. 어디서든 환영받는 사람 되기.", "type": "I" },
      { "text": "내 집 마련과 안정적인 가정 꾸리기.", "type": "S" },
      { "text": "전문 분야 학위 취득 혹은 전문가로 인정받기.", "type": "C" }
    ]
  },
  {
    "id": 24,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "재택근무 중인데 메신저 답장이 늦는 동료가 있다.",
    "options": [
      { "text": "전화를 걸어 \"지금 뭐 하세요?\"라고 바로 확인한다.", "type": "D" },
      { "text": "혹시 무슨 일 있나? 딴짓하나? 궁금해하며 기다린다.", "type": "I" },
      { "text": "바쁜가 보다... 재촉하지 않고 답장 올 때까지 기다린다.", "type": "S" },
      { "text": "업무 지연이 예상되므로 메일로 다시 요청 기록을 남긴다.", "type": "C" }
    ]
  },
  {
    "id": 25,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "연인이 기념일을 깜빡했다. 당신의 반응은?",
    "options": [
      { "text": "\"어떻게 이걸 잊어?\" 화를 내고 당장 보상하라고 한다.", "type": "D" },
      { "text": "\"오늘 무슨 날인지 몰라? 힝...\" 서운함을 온몸으로 표현한다.", "type": "I" },
      { "text": "바빠서 그렇겠지... 섭섭하지만 그냥 넘어간다.", "type": "S" },
      { "text": "왜 잊었는지 물어보고, 다음 기념일은 캘린더에 공유한다.", "type": "C" }
    ]
  },
  {
    "id": 26,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "명절에 시댁/처가에 방문했다. 당신의 처세술은?",
    "options": [
      { "text": "주도적으로 대화를 이끌거나, 상황을 정리하고 빨리 일어선다.", "type": "D" },
      { "text": "분위기 메이커! 웃고 떠들며 어른들의 사랑을 독차지한다.", "type": "I" },
      { "text": "묵묵히 전 부치고 설거지하며 며느리/사위 노릇을 다한다.", "type": "S" },
      { "text": "예의 바르게 행동하되, 적당한 선을 지키며 실수하지 않는다.", "type": "C" }
    ]
  },
  {
    "id": 27,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "업무 중 동료가 감정적으로 힘들어하며 운다.",
    "options": [
      { "text": "\"일단 나가서 진정하고 와.\" 업무에 방해되니 격리시킨다.", "type": "D" },
      { "text": "\"무슨 일이야 ㅠㅠ\" 같이 휴지 들고 울어주거나 위로한다.", "type": "I" },
      { "text": "말없이 따뜻한 차를 타주거나 등을 토닥여준다.", "type": "S" },
      { "text": "왜 우는지 상황을 파악하고, 내가 도울 수 있는 일인지 판단한다.", "type": "C" }
    ]
  },
  {
    "id": 28,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "쇼핑몰에서 옷을 살 때 당신의 기준은?",
    "options": [
      { "text": "내가 입었을 때 핏이 살고 강렬해 보이는 옷.", "type": "D" },
      { "text": "요즘 유행하는 스타일이거나 색감이 화려한 옷.", "type": "I" },
      { "text": "유행 안 타고 오래 입을 수 있는 무난하고 편한 옷.", "type": "S" },
      { "text": "소재(원단) 혼용률과 세탁 방법을 꼼꼼히 확인한 옷.", "type": "C" }
    ]
  },
  {
    "id": 29,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "이별 후 전 연인에게 연락이 왔다. \"자니?\"",
    "options": [
      { "text": "읽고 씹거나 \"연락하지 마\"라고 단호하게 자른다.", "type": "D" },
      { "text": "마음이 흔들려서 \"왜?\"라고 답장하거나 통화한다.", "type": "I" },
      { "text": "차단은 못 하고 고민하다가 친구들에게 물어본다.", "type": "S" },
      { "text": "재회했을 때의 성공 확률을 계산해 보고 답장 여부를 정한다.", "type": "C" }
    ]
  },
  {
    "id": 30,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "자녀 교육비(학원비) 지출이 너무 커졌다. 대책은?",
    "options": [
      { "text": "성적 안 오르는 학원은 다 끊어. 결과 나오는 곳만 보낸다.", "type": "D" },
      { "text": "아이가 좋아하면 보내야지... 내 용돈을 줄인다.", "type": "I" },
      { "text": "다른 집들은 어떻게 하나? 평균에 맞춰서 유지한다.", "type": "S" },
      { "text": "가계부를 분석하고 교육비 상한선을 정해 구조조정한다.", "type": "C" }
    ]
  },
  {
    "id": 31,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "점심시간, 상사가 \"아무거나 먹자\"고 한다.",
    "options": [
      { "text": "\"그럼 중국집 가시죠.\" 내가 빠르게 메뉴를 정한다.", "type": "D" },
      { "text": "\"오늘 날씨 좋은데 쌀국수 어떠세요?\" 분위기 띄우며 제안한다.", "type": "I" },
      { "text": "상사가 진짜 먹고 싶은 게 뭘까? 눈치를 살핀다.", "type": "S" },
      { "text": "회사 근처 식당 리스트와 대기 시간을 머릿속으로 검색한다.", "type": "C" }
    ]
  },
  {
    "id": 32,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "연인이 내 패션을 지적했다. \"그 옷 좀 별로야.\"",
    "options": [
      { "text": "\"내 스타일이야. 신경 꺼.\" 기분 나빠하며 무시한다.", "type": "D" },
      { "text": "\"진짜? 이상해? 갈아입을까?\" 바로 위축된다.", "type": "I" },
      { "text": "웃어넘기지만 속으로는 상처받고 그 옷을 안 입는다.", "type": "S" },
      { "text": "\"어떤 점이 별로야? 색깔? 핏?\" 구체적인 이유를 묻는다.", "type": "C" }
    ]
  },
  {
    "id": 33,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "회사 워크숍에서 장기자랑을 시킨다.",
    "options": [
      { "text": "1등 상금이 크다면 목숨 걸고 준비해서 무대를 장악한다.", "type": "D" },
      { "text": "시키는 건 뭐든 한다! 분위기 띄우고 박수받는 게 좋다.", "type": "I" },
      { "text": "제발 나만 안 시켰으면... 구석에 숨어 있는다.", "type": "S" },
      { "text": "최소한의 노력으로 욕먹지 않을 정도만 준비한다.", "type": "C" }
    ]
  },
  {
    "id": 34,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "친구가 다단계나 사기성 짙은 투자를 권유한다.",
    "options": [
      { "text": "\"헛소리하지 마.\" 그 자리에서 면박을 주고 거절한다.", "type": "D" },
      { "text": "\"아 진짜? 그런 게 있어?\" 귀가 얇아 솔깃한다.", "type": "I" },
      { "text": "거절하기 미안해서 설명은 들어주지만 하지는 않는다.", "type": "S" },
      { "text": "수익 구조의 논리적 모순을 지적하며 팩트로 반박한다.", "type": "C" }
    ]
  },
  {
    "id": 35,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "배우자가 상의 없이 비싼 물건을 샀다.",
    "options": [
      { "text": "\"이거 얼마야? 당장 환불해.\" 불호령을 내린다.", "type": "D" },
      { "text": "\"우와 예쁘다! 근데 우리 돈은...?\" 일단 좋아하고 걱정은 나중.", "type": "I" },
      { "text": "속은 쓰리지만 이미 샀으니 잘 쓰라고 한다.", "type": "S" },
      { "text": "이번 달 생활비 지출 내역을 보여주며 재정 상태를 상기시킨다.", "type": "C" }
    ]
  },
  {
    "id": 36,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "PT(프레젠테이션) 발표 직전, 갑자기 자료 오류를 발견했다.",
    "options": [
      { "text": "당황하지 않고 말발로 커버하거나 해당 페이지를 넘겨버린다.", "type": "D" },
      { "text": "솔직하게 \"아 실수가 있네요 ㅎㅎ\" 웃으며 유머로 넘긴다.", "type": "I" },
      { "text": "얼굴이 빨개지고 목소리가 떨리기 시작한다.", "type": "S" },
      { "text": "발표 전에 빠르게 수정하거나, 수정된 수치를 구두로 정정한다.", "type": "C" }
    ]
  },
  {
    "id": 37,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "연인이 \"나 요즘 너무 살찐 것 같아\"라고 묻는다.",
    "options": [
      { "text": "\"응 좀 쪘네. 같이 헬스장 가자.\" (팩트+해결)", "type": "D" },
      { "text": "\"아니야! 넌 내 눈에 제일 예뻐/멋져!\" (무조건 칭찬)", "type": "I" },
      { "text": "\"음... 난 잘 모르겠는데? 스트레스받지 마.\" (회피+위로)", "type": "S" },
      { "text": "\"지난달보다 체중 늘었어? 야식 줄여야겠네.\" (분석)", "type": "C" }
    ]
  },
  {
    "id": 38,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "유튜브 채널을 시작한다면 어떤 콘텐츠?",
    "options": [
      { "text": "성공 비결, 동기 부여, 사업 노하우 강의.", "type": "D" },
      { "text": "브이로그, 먹방, 뷰티 등 나를 보여주는 방송.", "type": "I" },
      { "text": "ASMR, 힐링, 조용한 취미 생활 공유.", "type": "S" },
      { "text": "IT 기기 리뷰, 경제 시황 분석, 정보 전달.", "type": "C" }
    ]
  },
  {
    "id": 39,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "주말에 시댁/처가 식구들이 예고 없이 방문한다고 한다.",
    "options": [
      { "text": "\"다음엔 미리 연락 주세요.\" 불편한 기색을 드러낸다.", "type": "D" },
      { "text": "당황스럽지만 일단 반갑게 맞이하고 배달 음식을 시킨다.", "type": "I" },
      { "text": "거절 못 하고 부랴부랴 청소하고 맞이할 준비를 한다.", "type": "S" },
      { "text": "지금 집 상태와 내 스케줄을 고려해 정중히 다음으로 미룬다.", "type": "C" }
    ]
  },
  {
    "id": 40,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "회사 메신저(카톡)에 상사 뒷담화를 잘못 보냈다.",
    "options": [
      { "text": "이미 엎질러진 물. \"죄송합니다\" 한마디 하고 정면 돌파.", "type": "D" },
      { "text": "빛의 속도로 삭제하고 \"잘못 보냈습니다!\" 하며 식은땀 흘린다.", "type": "I" },
      { "text": "퇴사해야 하나... 하루 종일 괴로워하며 멘붕에 빠진다.", "type": "S" },
      { "text": "누가 봤는지 확인하고 수습할 수 있는 변명 거리를 만든다.", "type": "C" }
    ]
  },
  {
    "id": 41,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "동창회에 나갔을 때 나의 모습은?",
    "options": [
      { "text": "내가 제일 성공했다는 걸 은연중에 과시하고 싶다.", "type": "D" },
      { "text": "옛날이야기 주도하며 분위기 메이커 노릇을 한다.", "type": "I" },
      { "text": "친했던 친구들 옆에 앉아 조용히 이야기 나눈다.", "type": "S" },
      { "text": "애들 명함 챙기며 인맥 가치와 정보를 탐색한다.", "type": "C" }
    ]
  },
  {
    "id": 42,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "후배가 일을 너무 못해서 답답하다.",
    "options": [
      { "text": "불러서 따끔하게 혼내고 다시 해오라고 시킨다.", "type": "D" },
      { "text": "\"아이고... 힘들지?\" 위로는 해주지만 속은 터진다.", "type": "I" },
      { "text": "가르치는 것보다 내가 하는 게 빨라서 그냥 내가 한다.", "type": "S" },
      { "text": "업무 매뉴얼을 다시 숙지시키고 단계별로 체크한다.", "type": "C" }
    ]
  },
  {
    "id": 43,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "번아웃(Burnout)이 왔을 때 극복 방법은?",
    "options": [
      { "text": "새로운 목표를 세우거나 이직을 준비하며 돌파구를 찾는다.", "type": "D" },
      { "text": "친구들 만나 술 마시고 수다 떨며 푼다.", "type": "I" },
      { "text": "휴가를 내고 아무것도 안 하며 푹 쉰다.", "type": "S" },
      { "text": "원인을 분석하고 심리 상담이나 관련 서적을 읽는다.", "type": "C" }
    ]
  },
  {
    "id": 44,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "배우자가 내 취미 생활을 이해 못 하고 잔소리한다.",
    "options": [
      { "text": "\"이건 내 인생이야. 간섭하지 마.\" 싸운다.", "type": "D" },
      { "text": "\"같이 해볼래? 재밌어~\" 꼬드겨서 같이 하게 만든다.", "type": "I" },
      { "text": "눈치 보여서 몰래 하거나 줄인다.", "type": "S" },
      { "text": "취미에 쓰는 비용과 시간이 합리적임을 설득한다.", "type": "C" }
    ]
  },
  {
    "id": 45,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "회식 자리에서 건배사를 시킨다.",
    "options": [
      { "text": "\"우리의 성공을 위하여!\" 짧고 굵고 강렬하게.", "type": "D" },
      { "text": "유행어 섞어서 빵 터지게 만든다. \"청바지! (청춘은 바로 지금)\"", "type": "I" },
      { "text": "얼굴 빨개지며 \"건강하세요...\" 하고 빨리 앉는다.", "type": "S" },
      { "text": "무난하고 예의 바른 멘트로 정석대로 한다.", "type": "C" }
    ]
  },
  {
    "id": 46,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "연인과 넷플릭스 영화 고를 때 당신은?",
    "options": [
      { "text": "\"이거 재밌겠다. 이거 보자.\" 내가 보고 싶은 거 튼다.", "type": "D" },
      { "text": "예고편만 30분 보다가 결국 딴짓하고 떠든다.", "type": "I" },
      { "text": "연인이 고르는 거 아무거나 군말 없이 본다.", "type": "S" },
      { "text": "평점과 리뷰를 확인하고 실패 없는 작품을 고른다.", "type": "C" }
    ]
  },
  {
    "id": 47,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "월요병을 이겨내는 나만의 방법은?",
    "options": [
      { "text": "이번 주에 끝내야 할 중요 업무 리스트를 보며 전투력을 다진다.", "type": "D" },
      { "text": "점심시간에 맛집 갈 생각, 주말에 놀 생각으로 버틴다.", "type": "I" },
      { "text": "그냥... 영혼 없이 출근해서 시키는 일만 한다.", "type": "S" },
      { "text": "출근하자마자 이번 주 스케줄을 정리하며 마음을 잡는다.", "type": "C" }
    ]
  },
  {
    "id": 48,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "아이가 숙제를 안 하고 게임만 한다.",
    "options": [
      { "text": "컴퓨터 코드를 뽑거나 게임기를 뺏어버린다.", "type": "D" },
      { "text": "\"게임 재밌어? 엄마/아빠도 한 판만!\" 같이 놀아버린다.", "type": "I" },
      { "text": "\"숙제해야지...\" 말은 하는데 아이가 안 들어서 속상하다.", "type": "S" },
      { "text": "\"숙제 다 하면 1시간 게임 가능\" 규칙을 정하고 지키게 한다.", "type": "C" }
    ]
  },
  {
    "id": 49,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "회사에서 '워라밸(일과 삶의 균형)'에 대한 당신의 생각은?",
    "options": [
      { "text": "성공하려면 워라밸 좀 포기하고 일에 미쳐야 한다.", "type": "D" },
      { "text": "칼퇴 후 친구들 만나는 게 삶의 낙이다. 야근 절대 사절.", "type": "I" },
      { "text": "남들 다 야근하면 눈치 보여서 나도 남는다.", "type": "S" },
      { "text": "근무 시간에 집중해서 끝내고 정시에 퇴근하는 게 효율적이다.", "type": "C" }
    ]
  },
  {
    "id": 50,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "결혼을 앞두고 가장 걱정되는 것은?",
    "options": [
      { "text": "내 커리어가 끊기거나 내 맘대로 못 살까 봐.", "type": "D" },
      { "text": "결혼 생활이 지루해지고 친구들과 못 놀까 봐.", "type": "I" },
      { "text": "고부 갈등이나 장서 갈등처럼 가족 간 불화가 생길까 봐.", "type": "S" },
      { "text": "집값, 대출금, 육아 비용 등 현실적인 경제 문제.", "type": "C" }
    ]
  },
  {
    "id": 51,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "입사 동기가 나보다 먼저 승진했다. 솔직한 심정은?",
    "options": [
      { "text": "자존심 상하고 화가 난다. 내가 더 잘할 수 있다는 걸 보여주겠다.", "type": "D" },
      { "text": "겉으로는 축하해주지만, 속으로는 '나도 잘 보여야지' 생각한다.", "type": "I" },
      { "text": "부럽지만... 동기가 잘돼서 다행이다. 나도 언젠가 되겠지.", "type": "S" },
      { "text": "승진 기준이 무엇인지 분석하고 내가 부족했던 스펙을 점검한다.", "type": "C" }
    ]
  },
  {
    "id": 52,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "주말 아침, 배우자가 늦잠을 자고 일어나지 않는다.",
    "options": [
      { "text": "이불을 확 걷으며 \"해가 중천이다! 빨리 일어나!\" 깨운다.", "type": "D" },
      { "text": "옆에서 쿡쿡 찌르며 장난치거나 간지럽혀서 깨운다.", "type": "I" },
      { "text": "피곤한가 보다... 더 자게 두고 조용히 혼자 할 일을 한다.", "type": "S" },
      { "text": "\"어제 10시에 일어나기로 했잖아.\" 약속 시간을 상기시킨다.", "type": "C" }
    ]
  },
  {
    "id": 53,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "회의 중 내가 낸 아이디어가 반려되었다.",
    "options": [
      { "text": "\"왜요? 이유가 뭐죠?\" 즉각적으로 반박하고 설득하려 한다.", "type": "D" },
      { "text": "무안해서 웃어넘기지만, 끝나고 동료들에게 하소연한다.", "type": "I" },
      { "text": "얼굴이 빨개지고 위축되어 더 이상 의견을 내지 않는다.", "type": "S" },
      { "text": "반려 사유를 메모하고 다음엔 더 완벽한 자료를 준비한다.", "type": "C" }
    ]
  },
  {
    "id": 54,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "퇴근 후 자기계발을 위해 영어 학원을 등록했다. 수업 방식 선호도는?",
    "options": [
      { "text": "프리토킹 위주! 내가 말을 많이 하고 주도하는 수업.", "type": "D" },
      { "text": "그룹 스터디! 사람들과 어울리고 게임하며 배우는 수업.", "type": "I" },
      { "text": "청취 위주! 선생님 설명을 조용히 듣고 따라 하는 수업.", "type": "S" },
      { "text": "문법/독해 위주! 체계적인 커리큘럼과 교재가 있는 수업.", "type": "C" }
    ]
  },
  {
    "id": 55,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "소개팅 상대가 마음에 들지 않을 때 대처법은?",
    "options": [
      { "text": "시간 낭비하기 싫어서 밥만 먹고 빨리 일어난다.", "type": "D" },
      { "text": "상대방이 무안하지 않게 적당히 웃어주며 매너를 지킨다.", "type": "I" },
      { "text": "거절을 못 해서 애프터 신청까지 받아주거나 질질 끈다.", "type": "S" },
      { "text": "예의는 지키되, 연락처 교환은 정중히 거절하거나 선을 긋는다.", "type": "C" }
    ]
  },
  {
    "id": 56,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "아이가 친구를 때리고 왔다. 부모로서 첫 반응은?",
    "options": [
      { "text": "\"누가 먼저 그랬어?\" 아이를 다그치며 잘잘못부터 따진다.", "type": "D" },
      { "text": "\"어머 어떡해! 선생님이 뭐라셔?\" 주변 반응부터 살핀다.", "type": "I" },
      { "text": "\"많이 놀랐지?\" 아이 마음부터 달래주고 안아준다.", "type": "S" },
      { "text": "사건 경위를 선생님께 정확히 듣고 훈육 방침을 정한다.", "type": "C" }
    ]
  },
  {
    "id": 57,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "업무가 너무 많아 야근이 불가피하다.",
    "options": [
      { "text": "빡세게 집중해서 최대한 빨리 끝내고 칼퇴를 노린다.", "type": "D" },
      { "text": "저녁 메뉴 고민하고 동료들과 수다 떨며 천천히 한다.", "type": "I" },
      { "text": "군말 없이 남아서 묵묵히 내 할 일을 다 한다.", "type": "S" },
      { "text": "우선순위를 정해 급한 것부터 처리하고 효율성을 따진다.", "type": "C" }
    ]
  },
  {
    "id": 58,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "유튜브 알고리즘에 주로 뜨는 영상은?",
    "options": [
      { "text": "성공한 사업가 인터뷰, 동기부여, 스포츠 하이라이트.", "type": "D" },
      { "text": "인기 예능, 연예인 가십, 여행 브이로그, 먹방.", "type": "I" },
      { "text": "귀여운 동물 영상, 힐링 음악, 잔잔한 일상 브이로그.", "type": "S" },
      { "text": "재테크 강의, IT 기기 리뷰, 뉴스 및 시사 분석.", "type": "C" }
    ]
  },
  {
    "id": 59,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "연인과 여행 중 계획이 틀어졌다. (예: 식당 문 닫음)",
    "options": [
      { "text": "\"저기 문 열었네. 저기 가자.\" 바로 보이는 곳으로 직진.", "type": "D" },
      { "text": "\"오히려 좋아! 편의점에서 라면 먹을까?\" 긍정 회로 가동.", "type": "I" },
      { "text": "\"어떡하지...\" 당황하며 상대방의 처분만 기다린다.", "type": "S" },
      { "text": "스마트폰을 꺼내 근처 평점 4.0 이상 식당을 다시 검색한다.", "type": "C" }
    ]
  },
  {
    "id": 60,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "배우자가 가사 분담을 제대로 안 해서 화가 났다.",
    "options": [
      { "text": "\"내가 더 많이 하잖아!\" 따지며 즉각 시정을 요구한다.", "type": "D" },
      { "text": "\"자기야 나 너무 힘들어 ㅠㅠ\" 감정에 호소한다.", "type": "I" },
      { "text": "싸우기 싫어서 그냥 내가 참고 다 해버린다.", "type": "S" },
      { "text": "엑셀로 가사 분담표를 만들어 공평하게 나눈다.", "type": "C" }
    ]
  },
  {
    "id": 61,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "새로운 업무 툴(Tool)을 도입한다고 한다.",
    "options": [
      { "text": "이게 성과에 도움이 되나? 효과가 확실하면 찬성.", "type": "D" },
      { "text": "재밌어 보이네? 새로운 거 배우는 건 신나!", "type": "I" },
      { "text": "익숙한 게 좋은데... 적응하려면 또 스트레스받겠다.", "type": "S" },
      { "text": "기존 툴과 기능 비교, 호환성, 오류 가능성을 체크한다.", "type": "C" }
    ]
  },
  {
    "id": 62,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "결혼식 준비, 하객 리스트를 정리할 때?",
    "options": [
      { "text": "나한테 도움 되는 중요 인맥 위주로 확실하게 챙긴다.", "type": "D" },
      { "text": "아는 사람은 다 부른다! 파티처럼 북적이는 게 좋다.", "type": "I" },
      { "text": "진짜 친한 소수 정예만 초대해서 조용히 하고 싶다.", "type": "S" },
      { "text": "예산과 식장 수용 인원을 고려해 엑셀로 명단을 짠다.", "type": "C" }
    ]
  },
  {
    "id": 63,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "육아 중 아이가 밥을 안 먹고 투정 부린다.",
    "options": [
      { "text": "\"안 먹으면 치운다.\" 밥상을 진짜로 치워버린다.", "type": "D" },
      { "text": "비행기 놀이 하면서 \"아~\" 하고 한 입이라도 더 먹인다.", "type": "I" },
      { "text": "속상하지만 아이가 좋아하는 반찬을 다시 만들어준다.", "type": "S" },
      { "text": "영양 불균형이 올까 봐 걱정되어 식습관 교정 책을 읽는다.", "type": "C" }
    ]
  },
  {
    "id": 64,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "거래처 담당자가 무리한 요구를 해온다.",
    "options": [
      { "text": "\"그건 계약 위반입니다.\" 단호하게 선을 긋는다.", "type": "D" },
      { "text": "\"아이고 부장님~ 왜 그러세요~\" 능글맞게 넘긴다.", "type": "I" },
      { "text": "곤란하지만 거절하지 못하고 \"한번 알아볼게요...\" 한다.", "type": "S" },
      { "text": "요구 사항을 들어줬을 때의 손익을 계산해 보고 답한다.", "type": "C" }
    ]
  },
  {
    "id": 65,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "주식 투자를 시작했다. 종목 선정 기준은?",
    "options": [
      { "text": "급등주! 한 방에 수익 낼 수 있는 화끈한 종목.", "type": "D" },
      { "text": "친구가 좋다고 하는 거, 뉴스에 많이 나오는 핫한 종목.", "type": "I" },
      { "text": "망할 일 없는 대기업 우량주에 장기 투자.", "type": "S" },
      { "text": "재무제표와 차트를 분석해서 저평가된 가치주 발굴.", "type": "C" }
    ]
  },
  {
    "id": 66,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "시댁/처가 식구들과 여행을 가기로 했다.",
    "options": [
      { "text": "내가 총대를 메고 리드해서 일정을 다 짠다.", "type": "D" },
      { "text": "분위기 메이커! 가서 어른들 기분 맞춰드리고 재롱떤다.", "type": "I" },
      { "text": "불편하지만 티 안 내고 뒤에서 묵묵히 짐 챙기고 돕는다.", "type": "S" },
      { "text": "어른들 이동 동선과 입맛을 고려해 식당과 숙소를 예약한다.", "type": "C" }
    ]
  },
  {
    "id": 67,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "친구들과 모임 장소를 정하는데 의견이 안 모인다.",
    "options": [
      { "text": "\"야, 그냥 강남역에서 보자. 7시.\" 내가 정하고 통보한다.", "type": "D" },
      { "text": "\"어디가 핫해? 맛집 링크 좀 올려봐!\" 분위기만 띄운다.", "type": "I" },
      { "text": "\"난 다 좋아~ 너희 편한 데로 해.\" 결정권을 넘긴다.", "type": "S" },
      { "text": "중간 지점을 계산하고 투표 기능을 이용해 결정한다.", "type": "C" }
    ]
  },
  {
    "id": 68,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "상사가 \"이거 내일까지 다 해놔\"라고 퇴근 직전 업무를 던진다.",
    "options": [
      { "text": "\"내일까지는 물리적으로 불가능합니다.\"라고 들이받는다.", "type": "D" },
      { "text": "\"네에?! 부장님 저 오늘 약속 있는데 ㅠㅠ\" 징징댄다.", "type": "I" },
      { "text": "\"네 알겠습니다...\" 속으로 욕하며 야근한다.", "type": "S" },
      { "text": "업무량을 보고 \"내일 오전까지 초안은 가능합니다\"라고 협상한다.", "type": "C" }
    ]
  },
  {
    "id": 69,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "배우자가 내 말에 공감을 안 해주고 해결책만 제시한다. (T 성향)",
    "options": [
      { "text": "\"누가 몰라서 물어? 내 편을 들어달라고!\" 화낸다.", "type": "D" },
      { "text": "\"너무해... 나 마음 상했어.\" 토라진다.", "type": "I" },
      { "text": "서운하지만 싸우기 싫어서 입을 다문다.", "type": "S" },
      { "text": "해결책이 타당하면 감정은 접어두고 수용한다.", "type": "C" }
    ]
  },
  {
    "id": 70,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "혼자 카페에 갔다. 주로 하는 행동은?",
    "options": [
      { "text": "노트북 켜고 밀린 업무나 사업 구상을 하며 시간을 쓴다.", "type": "D" },
      { "text": "친구한테 영상통화 걸거나 SNS에 카페 사진 올린다.", "type": "I" },
      { "text": "이어폰 꽂고 멍때리거나 사람 구경하며 쉰다.", "type": "S" },
      { "text": "가져온 책을 읽거나 다이어리를 정리한다.", "type": "C" }
    ]
  },
  {
    "id": 71,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "회사 워크숍에서 장기자랑 1등 상품이 최신형 노트북이다.",
    "options": [
      { "text": "무조건 1등은 내 거다. 눈에 불을 켜고 참여한다.", "type": "D" },
      { "text": "무대에 나가서 춤추고 노래하며 분위기를 장악한다.", "type": "I" },
      { "text": "제발 나만 안 시켰으면... 박수만 열심히 친다.", "type": "S" },
      { "text": "노트북 사양이 뭔지 검색해 보고 참여할 가치가 있는지 따진다.", "type": "C" }
    ]
  },
  {
    "id": 72,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "연인이 늦은 밤 이성 친구(여사친/남사친)와 술을 마신다고 한다.",
    "options": [
      { "text": "\"절대 안 돼. 당장 나와.\" 강압적으로 막는다.", "type": "D" },
      { "text": "\"나도 껴줘! 같이 놀자!\" (쿨한 척하거나 진짜 같이 놈)", "type": "I" },
      { "text": "신경 쓰이지만... 쿨한 척하며 \"적당히 마시고 들어가\"라고 한다.", "type": "S" },
      { "text": "누구랑, 어디서, 몇 시까지 마시는지 육하원칙으로 묻는다.", "type": "C" }
    ]
  },
  {
    "id": 73,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "아이가 공공장소에서 크게 운다. 사람들의 시선이 느껴진다.",
    "options": [
      { "text": "\"뚝! 그만해!\" 아이를 엄하게 혼내서 상황을 통제한다.", "type": "D" },
      { "text": "사람들에게 \"죄송합니다 ㅠㅠ\" 연신 사과하며 당황해한다.", "type": "I" },
      { "text": "아이를 안고 황급히 밖으로 나가서 달래준다.", "type": "S" },
      { "text": "아이가 왜 우는지 원인을 파악하고 장난감이나 간식으로 해결한다.", "type": "C" }
    ]
  },
  {
    "id": 74,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "점심시간, 상사가 정치 이야기를 꺼내며 내 동의를 구한다.",
    "options": [
      { "text": "내 생각과 다르면 \"저는 다르게 생각합니다\"라고 반박한다.", "type": "D" },
      { "text": "\"아~ 그렇구나~\" 영혼 없이 맞장구치며 분위기 맞춘다.", "type": "I" },
      { "text": "불편해서 밥만 먹거나 화제를 다른 곳으로 돌린다.", "type": "S" },
      { "text": "중립적인 태도로 사실관계만 언급하며 논쟁을 피한다.", "type": "C" }
    ]
  },
  {
    "id": 75,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "큰맘 먹고 헬스장을 등록했다. 운동 스타일은?",
    "options": [
      { "text": "PT 쌤보다 더 독하게! 목표 무게를 칠 때까지 멈추지 않는다.", "type": "D" },
      { "text": "헬스장 가서 트레이너랑 수다 떨고 인증샷 찍는 시간이 더 많다.", "type": "I" },
      { "text": "러닝머신이나 사이클 같은 유산소 운동만 조용히 하고 온다.", "type": "S" },
      { "text": "운동 일지 앱을 켜고 세트 수와 휴식 시간을 정확히 지킨다.", "type": "C" }
    ]
  },
  {
    "id": 76,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "결혼 준비 중 예산이 초과되었다.",
    "options": [
      { "text": "일생에 한 번인데 그냥 질러! 돈은 또 벌면 돼.", "type": "D" },
      { "text": "부모님께 좀 도와달라고 할까? (낙관적)", "type": "I" },
      { "text": "불필요한 항목을 줄이거나 저렴한 옵션으로 바꾼다.", "type": "S" },
      { "text": "초과된 항목을 분석하고 자금 조달 계획을 다시 세운다.", "type": "C" }
    ]
  },
  {
    "id": 77,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "팀장이 업무 피드백을 주는데 너무 감정적으로 말한다.",
    "options": [
      { "text": "\"감정적으로 말씀하지 마시고 팩트만 말씀해 주세요.\" 받아친다.", "type": "D" },
      { "text": "기분이 상해서 표정 관리가 안 되고 하루 종일 우울하다.", "type": "I" },
      { "text": "\"죄송합니다...\" 하고 한 귀로 듣고 한 귀로 흘린다.", "type": "S" },
      { "text": "감정적인 말은 걸러듣고 업무적으로 수정할 부분만 체크한다.", "type": "C" }
    ]
  },
  {
    "id": 78,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "배우자가 내 물건을 마음대로 버렸다.",
    "options": [
      { "text": "불같이 화를 낸다. \"너 미쳤어? 그걸 왜 버려?\"", "type": "D" },
      { "text": "\"아 그거 내 추억인데 ㅠㅠ\" 징징대며 서운해한다.", "type": "I" },
      { "text": "이미 버린 거 어쩌겠어... 속상하지만 참는다.", "type": "S" },
      { "text": "그 물건의 가격과 가치를 설명하고 변상을 요구한다.", "type": "C" }
    ]
  },
  {
    "id": 79,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "회사에서 '재택근무' 제도를 폐지한다고 한다.",
    "options": [
      { "text": "효율성 떨어지는 결정이라고 경영진에 항의한다.", "type": "D" },
      { "text": "회사 가서 사람들 만나는 건 좋은데 출퇴근은 싫다 ㅠㅠ", "type": "I" },
      { "text": "아쉽지만 회사의 결정이니 따라야지 뭐...", "type": "S" },
      { "text": "재택근무와 출근의 생산성 데이터를 비교하며 불만을 갖는다.", "type": "C" }
    ]
  },
  {
    "id": 80,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "주말에 아무 약속이 없다. 당신의 선택은?",
    "options": [
      { "text": "밀린 집안일을 해치우거나 등산을 가는 등 몸을 쓴다.", "type": "D" },
      { "text": "심심한 건 못 참아! 친구들에게 전화 돌려서 약속을 잡는다.", "type": "I" },
      { "text": "하루 종일 잠옷 입고 넷플릭스 보며 뒹굴거린다.", "type": "S" },
      { "text": "서점에 가서 책을 읽거나 밀린 공부를 한다.", "type": "C" }
    ]
  },
  {
    "id": 81,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "연인과 싸우고 연락을 안 한 지 3일째다.",
    "options": [
      { "text": "내가 먼저 할까? 아니야, 이번엔 버릇을 고쳐놔야 해.", "type": "D" },
      { "text": "답답해서 미칠 것 같다. 아무 일 없던 척 먼저 연락한다.", "type": "I" },
      { "text": "연락 올 때까지 하염없이 기다리며 카톡 프사만 확인한다.", "type": "S" },
      { "text": "우리가 싸운 원인을 분석하고 헤어질지 말지 고민한다.", "type": "C" }
    ]
  },
  {
    "id": 82,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "점심 메뉴로 '평양냉면'이 나왔다. 나는 싫어한다.",
    "options": [
      { "text": "\"전 딴 거 먹을게요.\" 하고 혼자 다른 메뉴 시킨다.", "type": "D" },
      { "text": "\"와 평양냉면! 좋죠!\" (사실 싫지만 분위기 맞춤)", "type": "I" },
      { "text": "그냥 조용히 사이드 메뉴(만두) 위주로 먹는다.", "type": "S" },
      { "text": "못 먹는 이유(호불호)를 설명하고 다른 식당을 제안한다.", "type": "C" }
    ]
  },
  {
    "id": 83,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "배우자가 집안일을 대충 해놨다. (설거지에 거품이 남음)",
    "options": [
      { "text": "\"이럴 거면 하지 마.\" 다시 하라고 시키거나 내가 한다.", "type": "D" },
      { "text": "\"자기야~ 여기 거품 남았어 ㅋㅋㅋ\" 웃으며 넘긴다.", "type": "I" },
      { "text": "잔소리하면 싸울까 봐 몰래 내가 다시 헹군다.", "type": "S" },
      { "text": "설거지하는 올바른 방법을 차근차근 알려준다.", "type": "C" }
    ]
  },
  {
    "id": 84,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "회사에서 익명 설문조사를 한다. \"회사의 단점을 쓰시오.\"",
    "options": [
      { "text": "평소 불만이었던 점을 아주 적나라하고 직설적으로 쓴다.", "type": "D" },
      { "text": "좋은 게 좋은 거지... 적당히 좋게 쓴다.", "type": "I" },
      { "text": "누가 썼는지 알까 봐 무서워서 '없음'이라고 쓴다.", "type": "S" },
      { "text": "비효율적인 프로세스와 개선 방안을 논리적으로 작성한다.", "type": "C" }
    ]
  },
  {
    "id": 85,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "기념일 선물을 준비하지 못한 연인. 반응은?",
    "options": [
      { "text": "실망감을 감추지 않고 \"어떻게 그럴 수 있어?\" 따진다.", "type": "D" },
      { "text": "\"괜찮아! 우리 같이 맛있는 거 먹으러 가자!\" (쿨한 척)", "type": "I" },
      { "text": "바빴겠지... 이해하려 노력하지만 서운함은 남는다.", "type": "S" },
      { "text": "다음 주까지 늦더라도 준비해달라고 합리적인 기한을 준다.", "type": "C" }
    ]
  },
  {
    "id": 86,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "유명한 맛집 웨이팅이 1시간이다.",
    "options": [
      { "text": "시간 아까워. 바로 옆집 가거나 다른 데 간다.", "type": "D" },
      { "text": "기다리는 동안 사진 찍고 수다 떨면 시간 금방 가지!", "type": "I" },
      { "text": "일행이 기다리자고 하면 군말 없이 기다린다.", "type": "S" },
      { "text": "테이블 회전율을 보고 예상 대기 시간을 계산해 본다.", "type": "C" }
    ]
  },
  {
    "id": 87,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "아이 교육 문제로 배우자와 의견이 갈린다.",
    "options": [
      { "text": "\"내 방식이 맞아. 내 말대로 해.\" 강하게 주장한다.", "type": "D" },
      { "text": "\"애가 스트레스받지 않을까? 놀게 해주자~\" 유하게 간다.", "type": "I" },
      { "text": "배우자의 의견을 존중하며 갈등을 피한다.", "type": "S" },
      { "text": "관련 교육 서적이나 전문가 의견을 찾아보고 결정한다.", "type": "C" }
    ]
  },
  {
    "id": 88,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "퇴사하겠다고 결심했다. 상사에게 어떻게 말할까?",
    "options": [
      { "text": "\"저 그만두겠습니다. 이번 달까지만 할게요.\" 통보한다.", "type": "D" },
      { "text": "\"개인적인 사정 때문에... ㅠㅠ 너무 아쉬워요.\" 좋게 포장한다.", "type": "I" },
      { "text": "말할 타이밍을 못 잡아서 며칠 동안 끙끙 앓는다.", "type": "S" },
      { "text": "인수인계 계획서와 퇴사 사유를 정리해서 면담을 요청한다.", "type": "C" }
    ]
  },
  {
    "id": 89,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "소개팅 애프터 신청을 받았는데 상대가 별로다.",
    "options": [
      { "text": "\"죄송하지만 제 스타일이 아니네요.\" 솔직하게 거절한다.", "type": "D" },
      { "text": "\"제가 요즘 좀 바빠서요 ㅎㅎ\" 둘러대며 피한다.", "type": "I" },
      { "text": "답장을 안 하거나(읽씹), 아주 늦게 보낸다.", "type": "S" },
      { "text": "\"좋은 분 같지만 저와는 안 맞는 것 같습니다.\" 정중히 거절.", "type": "C" }
    ]
  },
  {
    "id": 90,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "중요한 프로젝트 발표 날, 너무 긴장된다.",
    "options": [
      { "text": "\"난 최고야. 다 죽었어.\" 마인드 컨트롤로 자신감을 올린다.", "type": "D" },
      { "text": "청심환을 먹거나 동료들과 농담하며 긴장을 푼다.", "type": "I" },
      { "text": "심호흡을 계속하며 실수만 하지 말자고 다짐한다.", "type": "S" },
      { "text": "발표 대본을 마지막까지 꼼꼼하게 읽으며 리허설한다.", "type": "C" }
    ]
  },
  {
    "id": 91,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "명절에 시댁/처가에 가기 싫다.",
    "options": [
      { "text": "\"이번엔 우리끼리 여행 가자.\" 배우자에게 직설적으로 말한다.", "type": "D" },
      { "text": "\"아프다고 할까?\" 꾀병 부릴 핑계를 찾는다.", "type": "I" },
      { "text": "싫어도 도리니까... 꾹 참고 가서 일한다.", "type": "S" },
      { "text": "이번에 가면 다음 명절엔 안 가는 걸로 협상한다.", "type": "C" }
    ]
  },
  {
    "id": 92,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "다이어트 중인데 친구들이 술 마시자고 부른다.",
    "options": [
      { "text": "\"나 다이어트해. 안 가.\" 유혹을 단칼에 자른다.", "type": "D" },
      { "text": "\"오늘만 먹고 내일부터 다시 하지 뭐!\" 나간다.", "type": "I" },
      { "text": "거절하기 미안해서 나가서 안주만 조금 먹는다.", "type": "S" },
      { "text": "칼로리 낮은 안주 파는 곳으로 장소를 변경하자고 한다.", "type": "C" }
    ]
  },
  {
    "id": 93,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "후배가 \"선배님 저 좀 도와주세요\"라며 징징댄다.",
    "options": [
      { "text": "\"네 일은 네가 알아서 해.\" 스스로 하게 만든다.", "type": "D" },
      { "text": "\"그래 가져와 봐!\" 오지랖 넓게 다 도와준다.", "type": "I" },
      { "text": "내 코가 석 자지만 거절 못 하고 도와준다.", "type": "S" },
      { "text": "어디까지 했는지 보고 막히는 부분만 알려준다.", "type": "C" }
    ]
  },
  {
    "id": 94,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "연인이 내 핸드폰 비밀번호를 알려달라고 한다.",
    "options": [
      { "text": "\"싫어. 사생활은 지켜줘.\" 단호하게 거절한다.", "type": "D" },
      { "text": "\"자 여기! 근데 볼 거 없어~\" 쿨하게 알려준다.", "type": "I" },
      { "text": "알려주기 싫은데... 싸우기 싫어서 알려준다.", "type": "S" },
      { "text": "왜 알려달라고 하는지 이유를 묻고 합당하면 알려준다.", "type": "C" }
    ]
  },
  {
    "id": 95,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "회사 워크숍으로 '등산'이 결정되었다.",
    "options": [
      { "text": "누구보다 빨리 정상에 올라가서 인증샷 찍는다.", "type": "D" },
      { "text": "올라가면서 동료들과 수다 떨고 간식 나눠 먹는다.", "type": "I" },
      { "text": "힘들지만 뒤처지지 않으려 묵묵히 따라간다.", "type": "S" },
      { "text": "등산 코스 난이도와 소요 시간을 미리 체크하고 준비한다.", "type": "C" }
    ]
  },
  {
    "id": 96,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "배우자가 퇴근 후 아무 말 없이 TV만 본다.",
    "options": [
      { "text": "\"나랑 대화 좀 해!\" TV를 끄고 대화를 시도한다.", "type": "D" },
      { "text": "옆에 찰싹 붙어서 \"재밌어? 무슨 내용이야?\" 말 건다.", "type": "I" },
      { "text": "피곤한가 보다... 간식 챙겨주고 조용히 둔다.", "type": "S" },
      { "text": "저녁 식사 시간만이라도 대화하자고 규칙을 정한다.", "type": "C" }
    ]
  },
  {
    "id": 97,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "갑자기 100만 원 꽁돈이 생겼다.",
    "options": [
      { "text": "사고 싶었던 명품이나 전자기기를 바로 결제한다.", "type": "D" },
      { "text": "친구들에게 \"내가 쏜다!\" 술 한잔 산다.", "type": "I" },
      { "text": "비상금 통장에 고이 넣어두고 안 쓴다.", "type": "S" },
      { "text": "주식이나 펀드에 투자하거나 대출금을 갚는다.", "type": "C" }
    ]
  },
  {
    "id": 98,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "거래처 미팅 중 상대방이 말도 안 되는 트집을 잡는다.",
    "options": [
      { "text": "표정이 굳어지고 \"그건 억지시네요\"라고 쏘아붙인다.", "type": "D" },
      { "text": "상황을 유머로 넘기며 분위기를 부드럽게 만든다.", "type": "I" },
      { "text": "당황해서 얼버무리거나 죄송하다고 한다.", "type": "S" },
      { "text": "계약서 조항을 들이밀며 팩트로 반박한다.", "type": "C" }
    ]
  },
  {
    "id": 99,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "소개팅 첫 만남, 상대방이 늦었다.",
    "options": [
      { "text": "기분이 확 상해서 표정 관리가 안 된다.", "type": "D" },
      { "text": "\"오시느라 고생하셨어요~\" 웃으며 반겨준다.", "type": "I" },
      { "text": "무슨 일 있었나 걱정하며 기다린다.", "type": "S" },
      { "text": "늦은 시간만큼 데이트 코스를 수정해야겠다고 생각한다.", "type": "C" }
    ]
  },
  {
    "id": 100,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "아이가 거짓말을 했다.",
    "options": [
      { "text": "엄하게 혼내서 다시는 거짓말 못 하게 한다.", "type": "D" },
      { "text": "\"엄마/아빠 속상해...\" 감정에 호소하며 타이른다.", "type": "I" },
      { "text": "왜 거짓말을 했는지 아이의 마음을 먼저 읽어준다.", "type": "S" },
      { "text": "거짓말을 하면 안 되는 이유를 논리적으로 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 101,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "아이가 식당에서 물을 쏟아 옷이 다 젖었다.",
    "options": [
      { "text": "\"조심하라고 했지!\" 아이를 따끔하게 혼내고 빠르게 수습한다.", "type": "D" },
      { "text": "\"어머 어떡해! 차라리 물놀이했다고 생각하자.\" 웃어넘긴다.", "type": "I" },
      { "text": "아이 놀라지 않게 \"괜찮아? 안 다쳤어?\" 먼저 챙긴다.", "type": "S" },
      { "text": "직원을 불러 걸레를 요청하고 여벌 옷이 있는지 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 102,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "상사가 명확한 지시 없이 \"알아서 잘 해봐\"라고 맡겼다.",
    "options": [
      { "text": "내 스타일대로 주도적으로 기획해서 밀어붙인다.", "type": "D" },
      { "text": "주변 동료들한테 \"이거 어떻게 해야 돼?\" 물어보며 도움을 구한다.", "type": "I" },
      { "text": "혹시 틀릴까 봐 불안해서 상사의 의도를 계속 살핀다.", "type": "S" },
      { "text": "과거 유사한 프로젝트 사례를 찾아보고 분석해서 방향을 잡는다.", "type": "C" }
    ]
  },
  {
    "id": 103,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "연인과 차를 타고 가다가 길을 잘못 들었다.",
    "options": [
      { "text": "\"아, 내비게이션 왜 이래!\" 기계 탓을 하며 짜증을 낸다.", "type": "D" },
      { "text": "\"드라이브 더 하고 좋지 뭐! 노래나 듣자.\" 긍정적으로 생각한다.", "type": "I" },
      { "text": "운전자 눈치를 보며 \"괜찮아, 천천히 가도 돼\"라고 안심시킨다.", "type": "S" },
      { "text": "도착 예정 시간이 얼마나 늦어지는지 다시 계산한다.", "type": "C" }
    ]
  },
  {
    "id": 104,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "내 집 마련을 위해 집을 보러 다닌다. 가장 중요한 기준은?",
    "options": [
      { "text": "투자가치. 나중에 비싸게 팔 수 있는 '똘똘한 한 채'인가?", "type": "D" },
      { "text": "뷰가 좋고 인테리어가 예뻐서 친구들 초대하기 좋은가?", "type": "I" },
      { "text": "동네가 조용하고 이웃들이 점잖으며 살기 편한가?", "type": "S" },
      { "text": "역세권 거리, 대출 금리, 관리비 등 조건을 꼼꼼히 따진다.", "type": "C" }
    ]
  },
  {
    "id": 105,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "팀 프로젝트 마감일이 내일인데 진도가 안 나간다.",
    "options": [
      { "text": "팀원들을 다 소집해서 \"오늘 밤새서라도 끝내자\"고 압박한다.", "type": "D" },
      { "text": "\"우리 간식 먹고 힘내서 하자!\" 분위기를 띄우며 독려한다.", "type": "I" },
      { "text": "내가 남아서 부족한 부분을 묵묵히 채워 넣는다.", "type": "S" },
      { "text": "남은 시간과 할 일을 계산해서 현실적으로 가능한 범위만 한다.", "type": "C" }
    ]
  },
  {
    "id": 106,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "육아용품(유모차, 카시트 등)을 구매할 때?",
    "options": [
      { "text": "가장 비싸고 유명한 브랜드. 남들 보기에 꿀리지 않는 것.", "type": "D" },
      { "text": "디자인이 예쁘고 요즘 인스타에서 유행하는 핫한 아이템.", "type": "I" },
      { "text": "주변 선배 엄마들이 추천해 주는 국민 아이템.", "type": "S" },
      { "text": "안전 테스트 결과와 가성비, 사용 기간을 비교 분석한 것.", "type": "C" }
    ]
  },
  {
    "id": 107,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "소개팅 주선자가 \"어떤 스타일 좋아해?\"라고 묻는다.",
    "options": [
      { "text": "\"능력 있고 자기 관리 잘하는 사람.\" (조건 명확)", "type": "D" },
      { "text": "\"티키타카 잘 되고 재밌는 사람! 외모도 좀 보고.\"", "type": "I" },
      { "text": "\"그냥 성격 착하고 나랑 잘 맞는 사람이면 돼.\"", "type": "S" },
      { "text": "\"구체적으로 어떤 직업이고, 종교나 흡연 여부는 어때?\"", "type": "C" }
    ]
  },
  {
    "id": 108,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "회사 엘리베이터에서 사장님과 단둘이 탔다.",
    "options": [
      { "text": "먼저 자기소개를 하고 내 성과를 짧게 어필한다.", "type": "D" },
      { "text": "\"사장님 오늘 넥타이 멋지십니다!\" 스몰토크를 시도한다.", "type": "I" },
      { "text": "어색하지만 가만히 있거나 눈인사만 하고 조용히 간다.", "type": "S" },
      { "text": "층수 버튼을 눌러드리거나 예의 바르게 행동한다.", "type": "C" }
    ]
  },
  {
    "id": 109,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "새해 목표(다짐)를 세울 때 당신은?",
    "options": [
      { "text": "\"연봉 1억 달성!\" 크고 야망 있는 목표를 세운다.", "type": "D" },
      { "text": "\"올해는 여행 많이 가고 행복하게 살기!\" 즐거운 목표.", "type": "I" },
      { "text": "\"가족 모두 건강하기...\" 소박하고 안정적인 소원.", "type": "S" },
      { "text": "월별, 주별로 쪼개서 구체적인 실행 계획을 짠다.", "type": "C" }
    ]
  },
  {
    "id": 110,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "배우자가 \"나 오늘 너무 힘든 일 있었어\"라고 말한다.",
    "options": [
      { "text": "\"그래서 어떻게 해결했는데? 그 사람 신고해.\" (해결 중심)", "type": "D" },
      { "text": "\"진짜? 완전 열받네! 술 한잔하자!\" (감정 공유+해소)", "type": "I" },
      { "text": "\"고생했어... 많이 힘들었지?\" (따뜻한 위로)", "type": "S" },
      { "text": "\"정확히 무슨 일이 있었던 거야? 자초지종을 말해봐.\" (상황 파악)", "type": "C" }
    ]
  },
  {
    "id": 111,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "점심시간에 메뉴 통일 압박이 들어온다. \"다 김치찌개지?\"",
    "options": [
      { "text": "\"전 뚝배기 불고기 먹겠습니다.\" 소신 있게 내 거 시킨다.", "type": "D" },
      { "text": "\"김치찌개 좋죠! 사리도 추가해요!\" 분위기 맞춘다.", "type": "I" },
      { "text": "다른 거 먹고 싶지만 튀기 싫어서 \"네...\" 하고 따른다.", "type": "S" },
      { "text": "왜 통일해야 하는지 이해 안 되지만 효율성 때문에 참는다.", "type": "C" }
    ]
  },
  {
    "id": 112,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "연인과 싸우다가 \"우리 헤어져\"라는 말이 나왔다.",
    "options": [
      { "text": "\"그래, 헤어져. 후회하지 마라.\" 자존심 세우며 끝낸다.", "type": "D" },
      { "text": "\"진심 아니지? 내가 잘못했어 ㅠㅠ\" 울면서 잡는다.", "type": "I" },
      { "text": "충격받아서 아무 말도 못 하고 멍하니 있는다.", "type": "S" },
      { "text": "이별의 원인이 해결될 수 있는 문제인지 이성적으로 판단한다.", "type": "C" }
    ]
  },
  {
    "id": 113,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "주말에 집안일을 몰아서 하기로 했다.",
    "options": [
      { "text": "내가 지시할 테니 넌 이거 해. 효율적으로 분배한다.", "type": "D" },
      { "text": "음악 크게 틀어놓고 춤추면서 신나게 청소한다.", "type": "I" },
      { "text": "배우자가 힘들어하면 내가 더 많이 하려고 한다.", "type": "S" },
      { "text": "구역별로 순서를 정해서 체계적으로 청소한다.", "type": "C" }
    ]
  },
  {
    "id": 114,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "승진 누락 소식을 들었다.",
    "options": [
      { "text": "바로 상사 면담 신청해서 이유를 따지고 어필한다.", "type": "D" },
      { "text": "술자리에서 \"내가 얼마나 고생했는데!\" 하며 푼다.", "type": "I" },
      { "text": "\"내가 부족했나 봐...\" 자책하며 더 열심히 하겠다고 다짐한다.", "type": "S" },
      { "text": "인사 고과표를 확인하고 다음 승진을 위한 전략을 짠다.", "type": "C" }
    ]
  },
  {
    "id": 115,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "한 달 동안 휴가가 생긴다면?",
    "options": [
      { "text": "오지 탐험이나 철인 3종 경기 등 도전적인 활동을 한다.", "type": "D" },
      { "text": "유럽 배낭여행 가서 파티하고 새로운 친구들을 사귄다.", "type": "I" },
      { "text": "집에서 푹 쉬거나 가족들과 조용히 힐링 여행을 간다.", "type": "S" },
      { "text": "자격증을 따거나 어학연수를 가는 등 알차게 쓴다.", "type": "C" }
    ]
  },
  {
    "id": 116,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "아이가 숙제를 안 하겠다고 버틴다.",
    "options": [
      { "text": "\"잔말 말고 해.\" 권위로 누른다.", "type": "D" },
      { "text": "\"이거 다 하면 엄마랑 게임 하자!\" 보상으로 꼬신다.", "type": "I" },
      { "text": "\"왜 하기 싫어?\" 아이 말을 끝까지 들어준다.", "type": "S" },
      { "text": "숙제를 안 했을 때의 불이익(성적 하락 등)을 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 117,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "회의 시간에 아무도 아이디어를 내지 않는다.",
    "options": [
      { "text": "\"없으면 제가 먼저 하겠습니다.\" 총대를 멘다.", "type": "D" },
      { "text": "\"다들 피곤하시죠? 커피 한잔할까요?\" 분위기를 푼다.", "type": "I" },
      { "text": "누군가 말할 때까지 어색해도 조용히 기다린다.", "type": "S" },
      { "text": "준비해 온 자료를 바탕으로 질문을 던져 의견을 유도한다.", "type": "C" }
    ]
  },
  {
    "id": 118,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "결혼기념일 식당을 예약해야 한다.",
    "options": [
      { "text": "최고급 호텔 뷔페나 미슐랭 식당. 확실한 곳으로.", "type": "D" },
      { "text": "이벤트 신청이 가능하고 야경이 끝내주는 로맨틱한 곳.", "type": "I" },
      { "text": "우리가 처음 만났던 곳이나 추억이 있는 단골집.", "type": "S" },
      { "text": "가성비, 맛, 거리, 주차 편의성을 모두 고려한 곳.", "type": "C" }
    ]
  },
  {
    "id": 119,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "동료가 내 공(성과)을 가로채려고 한다.",
    "options": [
      { "text": "공개적인 자리에서 \"그거 제가 한 겁니다\"라고 바로잡는다.", "type": "D" },
      { "text": "뒤에서 다른 동료들에게 \"쟤가 그랬어\"라고 알린다.", "type": "I" },
      { "text": "억울하지만 싸우기 싫어서 속으로만 삭힌다.", "type": "S" },
      { "text": "업무 기록과 이메일을 증거로 모아 상사에게 보고한다.", "type": "C" }
    ]
  },
  {
    "id": 120,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "배우자가 내 운전 습관을 지적한다. \"운전 좀 살살 해.\"",
    "options": [
      { "text": "\"그럼 네가 하든가.\" 차 키를 주거나 화낸다.", "type": "D" },
      { "text": "\"알았어 알았어~ 조심할게~\" (말만 하고 똑같이 함)", "type": "I" },
      { "text": "\"미안, 불안했어?\" 바로 속도를 줄인다.", "type": "S" },
      { "text": "\"내가 과속했어? 규정 속도 지키고 있는데?\" 계기판을 본다.", "type": "C" }
    ]
  },
  {
    "id": 121,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "모임에서 총무 역할을 맡게 되었다.",
    "options": [
      { "text": "\"회비 안 낸 사람 빨리 내.\" 수금과 독촉을 확실히 한다.", "type": "D" },
      { "text": "돈 걷는 건 대충 하고 뒤풀이 장소 섭외에 열을 올린다.", "type": "I" },
      { "text": "혹시 돈 안 낸 사람 있을까 봐 내 돈으로 먼저 메꾼다.", "type": "S" },
      { "text": "엑셀로 수입/지출 장부를 1원 단위까지 맞춰서 공유한다.", "type": "C" }
    ]
  },
  {
    "id": 122,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "재택근무 중 화상 회의(Zoom) 카메라를 켜야 한다.",
    "options": [
      { "text": "당당하게 켠다. 내 모습이나 배경에 신경 쓰지 않는다.", "type": "D" },
      { "text": "조명 잘 받는 각도 찾고, 배경 화면도 재밌는 걸로 바꾼다.", "type": "I" },
      { "text": "카메라 켜는 게 부담스러워서 마스크를 쓰거나 최소화한다.", "type": "S" },
      { "text": "뒤에 지저분한 게 안 보이게 정리하고 깔끔하게 켠다.", "type": "C" }
    ]
  },
  {
    "id": 123,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "연인이 \"나 뭐 달라진 거 없어?\"라고 묻는다.",
    "options": [
      { "text": "\"그냥 말해. 뭔데?\" 스무고개 하는 걸 싫어한다.", "type": "D" },
      { "text": "\"오늘따라 더 예쁜데/멋진데?\" 일단 칭찬부터 한다.", "type": "I" },
      { "text": "당황해서 동공 지진... \"어... 머리? 옷?\" 찍어본다.", "type": "S" },
      { "text": "머리 스타일, 화장, 옷차림을 스캔하고 분석한다.", "type": "C" }
    ]
  },
  {
    "id": 124,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "아이가 밤에 잠을 안 자고 운다. (수면 교육 중)",
    "options": [
      { "text": "원칙대로 방문 닫고 안 들어간다. 울다 지쳐 자게 둔다.", "type": "D" },
      { "text": "마음 아파서 바로 들어가서 안아주고 같이 잔다.", "type": "I" },
      { "text": "문밖에서 서성거리며 발만 동동 구른다.", "type": "S" },
      { "text": "수면 교육 매뉴얼에 따라 시간 간격을 두고 체크한다.", "type": "C" }
    ]
  },
  {
    "id": 125,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "회식 2차를 가자고 강요하는 분위기다.",
    "options": [
      { "text": "\"저는 먼저 가보겠습니다.\" 눈치 안 보고 일어난다.", "type": "D" },
      { "text": "\"2차는 노래방 콜?\" 신나서 내가 앞장선다.", "type": "I" },
      { "text": "가기 싫지만 다들 가니까 어쩔 수 없이 따라간다.", "type": "S" },
      { "text": "내일 업무에 지장 없는지 시간과 컨디션을 체크한다.", "type": "C" }
    ]
  },
  {
    "id": 126,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "쇼핑 중 점원이 너무 적극적으로 말을 건다.",
    "options": [
      { "text": "\"필요하면 부를게요.\" 딱 잘라 거절한다.", "type": "D" },
      { "text": "점원과 수다 떨다가 필요 없는 물건까지 산다.", "type": "I" },
      { "text": "거절 못 하고 설명을 다 들어주다가 조용히 나온다.", "type": "S" },
      { "text": "점원의 말은 참고만 하고 내가 알아본 정보와 비교한다.", "type": "C" }
    ]
  },
  {
    "id": 127,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "배우자의 친구들을 처음 만나는 자리.",
    "options": [
      { "text": "주눅 들지 않고 내 매력을 어필하며 대화를 주도한다.", "type": "D" },
      { "text": "분위기 메이커를 자처하며 금방 형/동생/언니 한다.", "type": "I" },
      { "text": "미소 지으며 주로 듣고 배우자를 챙겨준다.", "type": "S" },
      { "text": "실수하지 않으려 말수를 줄이고 예의를 차린다.", "type": "C" }
    ]
  },
  {
    "id": 128,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "업무 실수로 경위서를 써야 한다.",
    "options": [
      { "text": "핵심만 짧게 쓴다. \"앞으로 성과로 만회하겠습니다.\"", "type": "D" },
      { "text": "구구절절 쓴다. \"정말 죄송하고 열심히 하겠습니다 ㅠㅠ\"", "type": "I" },
      { "text": "양식에 맞춰 최대한 성실하고 정중하게 작성한다.", "type": "S" },
      { "text": "육하원칙에 의거해 사고 발생 원인과 대책을 기술한다.", "type": "C" }
    ]
  },
  {
    "id": 129,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "연인과 싸우는 중, 상대가 논리적으로 따지고 든다.",
    "options": [
      { "text": "\"말꼬리 잡지 마!\" 더 크게 화내며 제압한다.", "type": "D" },
      { "text": "\"너 지금 나 가르치려 들어?\" 감정이 상한다.", "type": "I" },
      { "text": "할 말이 없어서 입을 닫거나 눈물을 보인다.", "type": "S" },
      { "text": "상대의 논리에 맞서 나도 논리적으로 반박한다.", "type": "C" }
    ]
  },
  {
    "id": 130,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "주말에 집에서 쉬는데 배우자가 청소를 시작한다.",
    "options": [
      { "text": "신경 안 쓰고 내 할 일(휴식)을 계속한다.", "type": "D" },
      { "text": "\"고생하네~\" 말로만 응원하거나 돕는 시늉만 한다.", "type": "I" },
      { "text": "눈치 보여서 얼른 일어나 같이 돕는다.", "type": "S" },
      { "text": "\"지금 청소하는 시간이야?\" 정해진 룰인지 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 131,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "동료가 내 컴퓨터 화면을 훔쳐보는 것 같다.",
    "options": [
      { "text": "\"뭘 보세요?\" 대놓고 묻거나 화면을 확 끈다.", "type": "D" },
      { "text": "\"재밌는 거 있어?\" 농담처럼 말하며 넘긴다.", "type": "I" },
      { "text": "몸으로 화면을 가리거나 창을 조용히 내린다.", "type": "S" },
      { "text": "보안 필름을 붙이거나 비밀번호를 바꾼다.", "type": "C" }
    ]
  },
  {
    "id": 132,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "SNS에 내 사진을 올릴 때.",
    "options": [
      { "text": "내가 제일 잘 나오고 멋져 보이는 '인생샷' 한 장.", "type": "D" },
      { "text": "친구들과 즐겁게 노는 모습, 댓글 많이 달릴 사진.", "type": "I" },
      { "text": "얼굴보다는 풍경이나 감성적인 사진.", "type": "S" },
      { "text": "구도와 보정이 완벽한 사진, 정보 공유 목적의 사진.", "type": "C" }
    ]
  },
  {
    "id": 133,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "아이가 숙제는 안 하고 TV만 보고 있다.",
    "options": [
      { "text": "리모컨을 뺏거나 TV 코드를 뽑아버린다.", "type": "D" },
      { "text": "같이 앉아서 TV 보다가 \"이제 할까?\"라고 꼬신다.", "type": "I" },
      { "text": "\"숙제해야지...\" 말은 하는데 아이가 안 들어서 속상하다.", "type": "S" },
      { "text": "\"약속한 시간 지났어. 지금 끄고 책상에 앉아.\" 규칙 적용.", "type": "C" }
    ]
  },
  {
    "id": 134,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "회사 워크숍에서 장기자랑을 시킨다.",
    "options": [
      { "text": "1등 상금이 크다면 목숨 걸고 준비한다.", "type": "D" },
      { "text": "시키는 건 뭐든 한다! 무대 체질이다.", "type": "I" },
      { "text": "제발 나만 안 시켰으면... 구석에 숨어 있는다.", "type": "S" },
      { "text": "최소한의 노력으로 욕먹지 않을 정도만 준비한다.", "type": "C" }
    ]
  },
  {
    "id": 135,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "데이트 비용 문제로 고민이 생겼다.",
    "options": [
      { "text": "\"내가 더 많이 내니까 넌 다른 거 해.\" 시원하게 말한다.", "type": "D" },
      { "text": "\"요즘 돈이 좀 없네 헤헤\" 애교로 넘어가려 한다.", "type": "I" },
      { "text": "말은 못 하고 혼자 끙끙 앓으며 아껴 쓴다.", "type": "S" },
      { "text": "데이트 통장을 만들자고 제안하고 비율을 정한다.", "type": "C" }
    ]
  },
  {
    "id": 136,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "배우자가 상의 없이 비싼 취미 용품을 샀다.",
    "options": [
      { "text": "\"당장 환불해.\" 불같이 화낸다.", "type": "D" },
      { "text": "\"오~ 좋아 보이는데? 나도 사줘!\" 같이 지른다.", "type": "I" },
      { "text": "속은 쓰리지만 이미 샀으니 잘 쓰라고 한다.", "type": "S" },
      { "text": "이번 달 생활비 지출 내역을 보여주며 따진다.", "type": "C" }
    ]
  },
  {
    "id": 137,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "퇴근 10분 전, 상사가 일을 시킨다.",
    "options": [
      { "text": "\"내일 하겠습니다.\" 거절하고 칼퇴한다.", "type": "D" },
      { "text": "\"아 넵! (속으론 욕함)\" 하다가 대충 하고 간다.", "type": "I" },
      { "text": "거절 못 하고 남아서 야근한다.", "type": "S" },
      { "text": "급한 일인지 확인하고 내일 오전까지 가능한지 협상한다.", "type": "C" }
    ]
  },
  {
    "id": 138,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "운동을 시작하려고 한다. 어떤 운동?",
    "options": [
      { "text": "크로스핏, 복싱 등 승부욕을 자극하고 격한 운동.", "type": "D" },
      { "text": "댄스, 스피닝 등 음악 나오고 사람들과 어울리는 운동.", "type": "I" },
      { "text": "요가, 필라테스, 산책 등 조용하고 평화로운 운동.", "type": "S" },
      { "text": "PT를 받으며 정확한 자세와 근육 사용법을 배우는 운동.", "type": "C" }
    ]
  },
  {
    "id": 139,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "연인이 약속 시간에 매번 늦는다.",
    "options": [
      { "text": "\"너 시간 관념이 없어?\" 강하게 비판한다.", "type": "D" },
      { "text": "\"나 기다리다 목 빠지는 줄~\" 장난 반 진담 반.", "type": "I" },
      { "text": "화는 나지만 참는다. \"다음엔 일찍 와...\"", "type": "S" },
      { "text": "약속 시간을 30분 당겨서 말해준다.", "type": "C" }
    ]
  },
  {
    "id": 140,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "명절에 시댁/처가에 가기 싫다.",
    "options": [
      { "text": "\"이번엔 우리끼리 여행 가자.\" 배우자에게 통보한다.", "type": "D" },
      { "text": "\"나 아프다고 할까?\" 꾀병 부릴 핑계를 찾는다.", "type": "I" },
      { "text": "싫어도 도리니까... 꾹 참고 가서 일한다.", "type": "S" },
      { "text": "이번에 가면 다음 명절엔 안 가는 걸로 규칙을 정한다.", "type": "C" }
    ]
  },
  {
    "id": 141,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "친한 동료가 퇴사한다고 한다.",
    "options": [
      { "text": "\"어디로 가? 연봉은 얼마 올렸어?\" 정보부터 캔다.", "type": "D" },
      { "text": "\"가지 마 ㅠㅠ 송별회 거하게 하자!\" 아쉬워한다.", "type": "I" },
      { "text": "마음이 싱숭생숭하고 우울해서 일이 손에 안 잡힌다.", "type": "S" },
      { "text": "인수인계는 누구한테 하는지, 업무 공백은 없는지 챙긴다.", "type": "C" }
    ]
  },
  {
    "id": 142,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "주식(재테크) 투자를 할 때 나는?",
    "options": [
      { "text": "급등주, 코인 등 한 방에 수익 낼 수 있는 공격적 투자.", "type": "D" },
      { "text": "친구가 좋다고 하는 종목, 뉴스에 많이 나오는 핫한 거.", "type": "I" },
      { "text": "원금 보장되는 예적금이나 우량주 장기 투자.", "type": "S" },
      { "text": "재무제표와 차트를 분석하고 분산 투자한다.", "type": "C" }
    ]
  },
  {
    "id": 143,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "아이가 어린이집 가기 싫다고 떼쓴다.",
    "options": [
      { "text": "\"안 돼. 빨리 옷 입어.\" 단호하게 끌고 간다.", "type": "D" },
      { "text": "\"가서 친구들이랑 재밌게 놀자~\" 어르고 달랜다.", "type": "I" },
      { "text": "마음이 약해져서 \"오늘만 쉴까?\" 고민한다.", "type": "S" },
      { "text": "열이 있는지 확인하고 특별한 이유가 없으면 보낸다.", "type": "C" }
    ]
  },
  {
    "id": 144,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "회사에서 '워라밸'에 대한 나의 생각은?",
    "options": [
      { "text": "성공하려면 워라밸 좀 포기하고 일에 미쳐야 한다.", "type": "D" },
      { "text": "칼퇴 후 친구들 만나는 게 삶의 낙이다. 야근 사절.", "type": "I" },
      { "text": "남들 다 야근하면 눈치 보여서 나도 남는다.", "type": "S" },
      { "text": "근무 시간에 집중해서 끝내고 정시에 퇴근하는 게 효율적이다.", "type": "C" }
    ]
  },
  {
    "id": 145,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "썸 타는 사람이 카톡 답장이 너무 느리다.",
    "options": [
      { "text": "답답해서 내가 먼저 전화하거나 \"바빠?\"라고 묻는다.", "type": "D" },
      { "text": "\"나한테 관심 없나?\" 온갖 상상을 하며 친구들에게 묻는다.", "type": "I" },
      { "text": "바쁜가 보다... 올 때까지 묵묵히 기다린다.", "type": "S" },
      { "text": "평균 답장 시간을 계산해 보고 가망 없으면 정리한다.", "type": "C" }
    ]
  },
  {
    "id": 146,
    "category": "family_marriage",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "부부 싸움 후 화해하는 방식은?",
    "options": [
      { "text": "그 자리에서 끝장을 보고 바로 푼다. 뒤끝 없다.", "type": "D" },
      { "text": "냉전은 못 참는다. 애교 부리거나 장난쳐서 푼다.", "type": "I" },
      { "text": "시간이 약이다. 상대방 화가 풀릴 때까지 기다린다.", "type": "S" },
      { "text": "대화로 서로의 잘잘못을 따지고 재발 방지를 약속한다.", "type": "C" }
    ]
  },
  {
    "id": 147,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "점심시간, 메뉴 결정권이 나에게 있다면?",
    "options": [
      { "text": "\"오늘은 중식입니다. 가시죠.\" 내가 먹고 싶은 걸로 정한다.", "type": "D" },
      { "text": "\"요즘 여기가 핫하대요!\" 맛집 검색해서 데려간다.", "type": "I" },
      { "text": "\"뭐 드시고 싶으세요?\" 다수결을 따르거나 양보한다.", "type": "S" },
      { "text": "가깝고 빨리 나오고 맛도 보장된 가성비 식당을 고른다.", "type": "C" }
    ]
  },
  {
    "id": 148,
    "category": "self_development",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "주말에 아무 약속이 없다면?",
    "options": [
      { "text": "밀린 집안일을 해치우거나 등산을 가는 등 생산적으로 보낸다.", "type": "D" },
      { "text": "심심한 건 못 참아! 친구들에게 연락해서 약속을 잡는다.", "type": "I" },
      { "text": "하루 종일 잠옷 입고 넷플릭스 보며 뒹굴거린다.", "type": "S" },
      { "text": "서점에 가서 책을 읽거나 카페에서 다이어리를 정리한다.", "type": "C" }
    ]
  },
  {
    "id": 149,
    "category": "dating_social",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "결혼 준비 중 스드메(스튜디오/드레스/메이크업) 고를 때?",
    "options": [
      { "text": "\"이게 제일 낫네. 이걸로 하자.\" 빠르게 결정한다.", "type": "D" },
      { "text": "화려하고 남들이 봤을 때 \"우와\" 할 만한 걸 고른다.", "type": "I" },
      { "text": "배우자가 원하는 걸로 맞추거나 플래너 추천을 따른다.", "type": "S" },
      { "text": "견적 비교 엑셀 파일을 만들어서 가성비와 구성을 따진다.", "type": "C" }
    ]
  },
  {
    "id": 150,
    "category": "work_career",
    "target_age_min": 20,
    "target_age_max": 38,
    "question": "직장 후배가 일을 너무 못해서 답답하다.",
    "options": [
      { "text": "불러서 따끔하게 혼내고 다시 해오라고 시킨다.", "type": "D" },
      { "text": "\"아이고... 힘들지?\" 위로는 해주지만 속은 터진다.", "type": "I" },
      { "text": "가르치는 것보다 내가 하는 게 빨라서 그냥 내가 한다.", "type": "S" },
      { "text": "업무 매뉴얼을 다시 숙지시키고 단계별로 체크한다.", "type": "C" }
    ]
  },
  {
    "id": 151,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "자녀가 다니던 학원을 갑자기 그만두겠다고 한다.",
    "options": [
      { "text": "\"지금 그만두면 이도 저도 안 돼. 일단 이번 달은 채워.\" 강하게 설득한다.", "type": "D" },
      { "text": "\"왜? 재미가 없어? 친구랑 싸웠어?\" 아이 기분부터 살핀다.", "type": "I" },
      { "text": "\"너무 힘들었구나... 그래, 좀 쉬면서 생각해보자.\" 아이 의견을 수용한다.", "type": "S" },
      { "text": "그만두려는 구체적인 이유를 묻고, 환불 규정과 대안을 검토한다.", "type": "C" }
    ]
  },
  {
    "id": 152,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "팀원이 지시한 업무를 기한 내에 처리하지 못했다.",
    "options": [
      { "text": "불러서 강하게 질책하고, 언제까지 끝낼 건지 확답을 받는다.", "type": "D" },
      { "text": "\"무슨 일 있어? 요즘 힘들지?\" 개인적인 사정이 있는지 먼저 묻는다.", "type": "I" },
      { "text": "질책하기 껄끄러워 \"다음엔 늦지 마세요\"라고 하고 내가 수습한다.", "type": "S" },
      { "text": "업무 지연 사유서를 받고, 재발 방지를 위한 프로세스를 점검한다.", "type": "C" }
    ]
  },
  {
    "id": 153,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "동창회 모임 장소를 정해야 한다. 당신의 선택은?",
    "options": [
      { "text": "비싸더라도 폼 나고 서비스 확실한 호텔이나 고급 식당.", "type": "D" },
      { "text": "칸막이 없이 시끌벅적하고 2차 가기 좋은 번화가 술집.", "type": "I" },
      { "text": "조용하게 이야기 나눌 수 있는 단골 룸 식당이나 한정식집.", "type": "S" },
      { "text": "회비 예산에 맞춰 가성비와 주차 편의성이 검증된 곳.", "type": "C" }
    ]
  },
  {
    "id": 154,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "가족 해외여행 계획을 짤 때 당신의 스타일은?",
    "options": [
      { "text": "핵심 관광지 위주로 찍고 이동! 시간을 낭비하면 안 된다.", "type": "D" },
      { "text": "현지에서 즐길 수 있는 액티비티나 쇼핑 등 재미 위주로 짠다.", "type": "I" },
      { "text": "부모님이나 아이들이 힘들지 않게 여유로운 휴양 위주로 짠다.", "type": "S" },
      { "text": "최저가 항공권, 숙소 평점, 동선 엑셀 파일을 만들어 공유한다.", "type": "C" }
    ]
  },
  {
    "id": 155,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "회사가 조직 개편을 단행하여 팀이 어수선하다.",
    "options": [
      { "text": "위기는 기회다. 새로운 라인을 잡거나 내 입지를 넓힐 방법을 찾는다.", "type": "D" },
      { "text": "동료들과 술자리를 가지며 불안감을 해소하고 정보를 교환한다.", "type": "I" },
      { "text": "변화가 두렵다. 최대한 눈에 띄지 않고 현상 유지를 바란다.", "type": "S" },
      { "text": "변경된 조직도와 R&R(역할과 책임)을 분석하여 내 업무 범위를 파악한다.", "type": "C" }
    ]
  },
  {
    "id": 156,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "배우자가 집안일 분담에 불만을 표했다. \"나만 일해?\"",
    "options": [
      { "text": "\"내가 밖에서 얼마나 힘들게 일하는지 알아?\" 즉각 반박한다.", "type": "D" },
      { "text": "\"아이고 여보 미안해~ 오늘 맛있는 거 사갈게!\" 애교로 무마한다.", "type": "I" },
      { "text": "아무 말 없이 바로 고무장갑을 끼고 밀린 설거지를 한다.", "type": "S" },
      { "text": "서로의 가사 노동 시간을 계산해 보고 합리적인 분담안을 제시한다.", "type": "C" }
    ]
  },
  {
    "id": 157,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "회의를 주재할 때 당신이 가장 싫어하는 것은?",
    "options": [
      { "text": "결론 없이 빙빙 돌려 말하거나 변명만 하는 것.", "type": "D" },
      { "text": "분위기가 너무 무겁고 침묵이 흐르는 것.", "type": "I" },
      { "text": "서로 언성을 높이며 싸우거나 얼굴 붉히는 것.", "type": "S" },
      { "text": "준비된 자료가 부실하거나 수치가 틀리는 것.", "type": "C" }
    ]
  },
  {
    "id": 158,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "명절 선물(거래처/친척)을 고를 때 기준은?",
    "options": [
      { "text": "브랜드가 확실하고 포장이 고급스러운 것. (체면 중시)", "type": "D" },
      { "text": "요즘 유행하거나 받으면 기분 좋을 센스 있는 것.", "type": "I" },
      { "text": "호불호 없이 누구나 무난하게 쓸 수 있는 생필품이나 햄 세트.", "type": "S" },
      { "text": "가격 대비 구성비를 따지고, 인터넷 최저가를 비교해 대량 구매.", "type": "C" }
    ]
  },
  {
    "id": 159,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "자녀가 성적표를 숨기다 걸렸다.",
    "options": [
      { "text": "아이를 앉혀놓고 호되게 야단치고 휴대폰을 압수한다.", "type": "D" },
      { "text": "\"성적이 뭐가 중요해~ 근데 거짓말은 안 돼.\" 좋게 타이른다.", "type": "I" },
      { "text": "얼마나 혼날까 무서웠으면 그랬을까 싶어 모른 척 넘어간다.", "type": "S" },
      { "text": "왜 숨겼는지 원인을 묻고, 성적 향상을 위한 계획표를 짜게 한다.", "type": "C" }
    ]
  },
  {
    "id": 160,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "상사가 비효율적인 업무 방식을 고집한다.",
    "options": [
      { "text": "\"이 방식은 비효율적입니다.\" 직언을 하거나 내가 바꾼다.", "type": "D" },
      { "text": "앞에서는 알겠다고 하고 뒤에서는 내 방식대로 유도리 있게 한다.", "type": "I" },
      { "text": "상사의 심기를 건드리기 싫어 그냥 시키는 대로 한다.", "type": "S" },
      { "text": "기존 방식과 새로운 방식의 효율성 비교 데이터를 만들어 보고한다.", "type": "C" }
    ]
  },
  {
    "id": 161,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "노후 준비(투자)에 대한 당신의 생각은?",
    "options": [
      { "text": "부동산이나 사업 투자 등 공격적으로 자산을 불려야 한다.", "type": "D" },
      { "text": "지금 즐기는 것도 중요하다. 여행 다니며 경험에 투자한다.", "type": "I" },
      { "text": "연금 저축이나 보험 등 안전한 자산이 최고다.", "type": "S" },
      { "text": "포트폴리오를 다각화하고 세금 혜택까지 꼼꼼히 따져 투자한다.", "type": "C" }
    ]
  },
  {
    "id": 162,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "주말에 집에서 쉬고 싶은데 배우자가 나가자고 한다.",
    "options": [
      { "text": "\"피곤해. 나 쉴 거야. 갔다 와.\" 단호하게 거절한다.", "type": "D" },
      { "text": "\"그럴까? 어디 갈까?\" 피곤해도 나가서 기분 전환한다.", "type": "I" },
      { "text": "쉬고 싶지만 배우자가 실망할까 봐 말없이 따라나선다.", "type": "S" },
      { "text": "나가야 하는 목적과 소요 시간을 묻고 효율적인 동선을 제안한다.", "type": "C" }
    ]
  },
  {
    "id": 163,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "부하직원이 연봉 인상을 요구하며 면담을 요청했다.",
    "options": [
      { "text": "\"성과를 가져와 봐. 그만한 가치가 있는지 보자.\" (협상 모드)", "type": "D" },
      { "text": "\"나도 챙겨주고 싶은데 회사가 어렵네...\" 감정에 호소하며 달랜다.", "type": "I" },
      { "text": "직원의 불만 사항을 최대한 들어주고 윗선에 전달하겠다고 한다.", "type": "S" },
      { "text": "인사 고과 데이터와 회사 연봉 테이블을 기준으로 가능 여부를 말한다.", "type": "C" }
    ]
  },
  {
    "id": 164,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "지인의 결혼식에 참석했다. 나의 모습은?",
    "options": [
      { "text": "혼주와 짧고 굵게 인사하고 식권 받아 밥 먹고 빨리 간다.", "type": "D" },
      { "text": "오랜만에 만난 사람들과 인사하느라 식장 곳곳을 누빈다.", "type": "I" },
      { "text": "식장 구석에 앉아 조용히 예식을 지켜본다.", "type": "S" },
      { "text": "축의금 봉투에 이름을 정자로 쓰고 방명록을 꼼꼼히 작성한다.", "type": "C" }
    ]
  },
  {
    "id": 165,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "배우자가 고가의 가전제품을 상의 없이 샀다.",
    "options": [
      { "text": "\"이거 당장 반품해.\" 경제권을 쥔 사람으로서 화를 낸다.", "type": "D" },
      { "text": "\"우와 좋다! 근데 비싸지 않아?\" 일단 써보고 좋아한다.", "type": "I" },
      { "text": "속은 타지만 이미 뜯었으니 어쩔 수 없다고 체념한다.", "type": "S" },
      { "text": "제품 가격과 기능을 검색해 보고 합리적 소비였는지 따진다.", "type": "C" }
    ]
  },
  {
    "id": 166,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "새로운 프로젝트를 맡게 되었다. 가장 먼저 하는 일은?",
    "options": [
      { "text": "목표 설정과 마감 기한 확정. 누구에게 무엇을 시킬지 정한다.", "type": "D" },
      { "text": "팀원들을 모아 \"우리 잘해보자!\" 으쌰으쌰 회식부터 잡는다.", "type": "I" },
      { "text": "기존 업무에 지장이 없는지 살피고 팀원들의 의견을 듣는다.", "type": "S" },
      { "text": "과거 유사 프로젝트 데이터를 분석하고 리스크 관리 계획을 짠다.", "type": "C" }
    ]
  },
  {
    "id": 167,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "자녀 훈육 문제로 배우자와 의견이 대립된다.",
    "options": [
      { "text": "\"내 말이 맞아. 애들 기를 꺾으면 안 돼(혹은 잡아야 해).\" 강하게 주장.", "type": "D" },
      { "text": "말다툼하다가 감정이 상해서 \"당신 맘대로 해!\" 하고 토라진다.", "type": "I" },
      { "text": "배우자가 화가 난 것 같으면 일단 한발 물러서서 맞춘다.", "type": "S" },
      { "text": "교육 전문가의 서적이나 영상을 근거로 배우자를 설득한다.", "type": "C" }
    ]
  },
  {
    "id": 168,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "골프나 등산 등 모임에서 리더(회장/총무)를 맡으라고 한다.",
    "options": [
      { "text": "회장이라면 OK. 내 스타일대로 모임을 이끌어보고 싶다.", "type": "D" },
      { "text": "오락부장이라면 환영! 분위기 띄우는 건 자신 있다.", "type": "I" },
      { "text": "부담스럽다. 그냥 조용히 회비만 내는 회원으로 남고 싶다.", "type": "S" },
      { "text": "총무라면 고려해 본다. 회계 관리를 투명하게 할 자신이 있다.", "type": "C" }
    ]
  },
  {
    "id": 169,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "건강검진 결과가 좋지 않게 나왔다.",
    "options": [
      { "text": "\"당장 헬스장 등록해.\" 즉각적으로 생활 습관을 뜯어고친다.", "type": "D" },
      { "text": "주변에 \"나 아프대 ㅠㅠ\" 알리고 건강 보조제를 잔뜩 산다.", "type": "I" },
      { "text": "걱정은 되지만 습관을 바꾸기 힘들어 하던 대로 지낸다.", "type": "S" },
      { "text": "의사 소견을 바탕으로 식단과 운동 계획을 체계적으로 짠다.", "type": "C" }
    ]
  },
  {
    "id": 170,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "타 부서와 업무 협조가 잘 안 되어 갈등이 생겼다.",
    "options": [
      { "text": "해당 부서장을 찾아가 담판을 짓고 업무 협조를 요구한다.", "type": "D" },
      { "text": "타 부서 사람들과 커피 마시며 친분을 쌓아 부드럽게 해결한다.", "type": "I" },
      { "text": "공식적으로 요청하기보다 우리가 좀 더 고생하고 만다.", "type": "S" },
      { "text": "업무 분장 규정과 협조 요청 이메일 기록을 근거로 따진다.", "type": "C" }
    ]
  },
  {
    "id": 171,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "사춘기 자녀가 방문을 걸어 잠그고 대화를 거부한다.",
    "options": [
      { "text": "\"문 열어! 아빠/엄마가 말하잖아.\" 권위로 문을 열게 한다.", "type": "D" },
      { "text": "\"오늘 기분 별로야? 맛있는 거 먹을까?\" 문 밖에서 밝게 말을 건다.", "type": "I" },
      { "text": "아이가 나올 때까지 묵묵히 기다리며 평소처럼 밥상을 차린다.", "type": "S" },
      { "text": "최근 아이의 행동 변화와 학교 성적 등을 분석해 원인을 추론한다.", "type": "C" }
    ]
  },
  {
    "id": 172,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "CEO가 비현실적인 매출 목표를 할당했다.",
    "options": [
      { "text": "\"해봅시다. 대신 인센티브 확실히 주십시오.\" 딜을 하고 밀어붙인다.", "type": "D" },
      { "text": "\"할 수 있다!\" 팀원들에게 비전을 제시하며 으쌰으쌰 분위기를 만든다.", "type": "I" },
      { "text": "팀원들이 지치지 않을까 걱정되어 업무량을 조절하려 애쓴다.", "type": "S" },
      { "text": "과거 데이터와 시장 상황을 근거로 목표 수정이 필요함을 보고한다.", "type": "C" }
    ]
  },
  {
    "id": 173,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "아파트 입주자 대표 회의에서 층간 소음 문제가 안건으로 나왔다.",
    "options": [
      { "text": "\"규정 위반 시 벌금을 물리죠.\" 강력한 제재안을 주장한다.", "type": "D" },
      { "text": "\"이웃끼리 인사도 하고 친하게 지냅시다~\" 반상회나 이벤트를 제안한다.", "type": "I" },
      { "text": "다른 사람들의 의견을 경청하며 다수결에 따른다.", "type": "S" },
      { "text": "데시벨 기준과 법적 판례를 조사하여 합리적인 가이드라인을 만든다.", "type": "C" }
    ]
  },
  {
    "id": 174,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "은퇴 후를 대비해 자격증을 하나 딴다면?",
    "options": [
      { "text": "공인중개사, 경영지도사 등 개업해서 사장이 될 수 있는 것.", "type": "D" },
      { "text": "숲 해설가, 강사 등 사람들과 소통하고 이야기하는 것.", "type": "I" },
      { "text": "사회복지사, 조경 기능사 등 안정적이고 정서적인 것.", "type": "S" },
      { "text": "주택관리사, 법무사 등 꼼꼼한 업무 처리와 전문성이 필요한 것.", "type": "C" }
    ]
  },
  {
    "id": 175,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "배우자가 주식이나 코인 투자로 큰 손실을 봤다.",
    "options": [
      { "text": "\"얼마 날렸어? 앞으로 경제권은 내가 갖는다.\" 통제권을 가져온다.", "type": "D" },
      { "text": "\"아이고... 속상해서 어떡해. 술 한잔하자.\" 일단 위로한다.", "type": "I" },
      { "text": "이미 벌어진 일... 화내지 않고 묵묵히 생활비를 아낀다.", "type": "S" },
      { "text": "손실 내역과 남은 자산을 엑셀로 정리해 복구 계획을 짠다.", "type": "C" }
    ]
  },
  {
    "id": 176,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "MZ세대 신입 사원이 \"이건 제 업무가 아닌데요?\"라고 한다.",
    "options": [
      { "text": "\"회사가 학교야? 시키면 해.\" 조직의 위계질서를 강조한다.", "type": "D" },
      { "text": "\"요즘 친구들은 솔직하네~ 밥 먹으면서 얘기 좀 할까?\" 달랜다.", "type": "I" },
      { "text": "당황스럽지만 갈등 만들기 싫어서 \"그럼 내가 할게\"라고 한다.", "type": "S" },
      { "text": "업무 분장표를 가져와서 해당 업무가 왜 그 사람 몫인지 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 177,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "부모님 건강이 안 좋아지셨다. 요양 병원 문제를 논의할 때?",
    "options": [
      { "text": "\"내가 알아본 A 병원이 최고야. 거기로 모시자.\" 빠르게 결정.", "type": "D" },
      { "text": "형제들을 다 불러 모아 가족 회의를 열고 정서적 지지를 구한다.", "type": "I" },
      { "text": "\"집에서 내가 모실게...\" 시설로 보내는 것에 죄책감을 느낀다.", "type": "S" },
      { "text": "시설 등급, 비용, 의료진 수, 거리를 비교 분석한 표를 제시한다.", "type": "C" }
    ]
  },
  {
    "id": 178,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "중요한 프로젝트가 실패로 끝났다. 리더로서 당신은?",
    "options": [
      { "text": "\"내 책임이다. 하지만 실패 원인은 확실히 짚고 가자.\" (책임+분석)", "type": "D" },
      { "text": "\"다들 고생했어! 훌훌 털고 회식하러 가자!\" 분위기 전환.", "type": "I" },
      { "text": "침울해하는 팀원들을 하나하나 다독이며 위로한다.", "type": "S" },
      { "text": "실패 요인 분석 보고서를 작성하여 경영진에게 제출한다.", "type": "C" }
    ]
  },
  {
    "id": 179,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "골프나 등산 모임에서 룰을 어기는 회원이 있다.",
    "options": [
      { "text": "\"그렇게 하실 거면 빠지세요.\" 공개적으로 면박을 준다.", "type": "D" },
      { "text": "\"에이~ 사장님 봐주기 없기!\" 농담으로 유쾌하게 지적한다.", "type": "I" },
      { "text": "분위기 망칠까 봐 알면서도 모른 척 넘어간다.", "type": "S" },
      { "text": "경기 종료 후 규정집을 보여주며 점수를 정정한다.", "type": "C" }
    ]
  },
  {
    "id": 180,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "주말에 혼자만의 시간이 생겼다. 가장 하고 싶은 것은?",
    "options": [
      { "text": "사업 구상을 하거나 승진 시험 공부 등 생산적인 활동.", "type": "D" },
      { "text": "동호회 밴드 연습이나 친구들과 낮술 모임.", "type": "I" },
      { "text": "밀린 잠을 자거나 소파와 한 몸이 되어 TV 시청.", "type": "S" },
      { "text": "서재 정리를 하거나 관심 있던 분야의 전문 서적 탐독.", "type": "C" }
    ]
  },
  {
    "id": 181,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "자녀가 대학 진학 대신 창업이나 유튜버를 하겠다고 한다.",
    "options": [
      { "text": "\"성공할 자신 있어? 구체적인 사업 계획서 가져와 봐.\" (검증)", "type": "D" },
      { "text": "\"오 멋진데? 우리 아들/딸 끼가 있지!\" 일단 응원한다.", "type": "I" },
      { "text": "\"남들처럼 평범하게 대학 가면 안 될까...?\" 걱정이 앞선다.", "type": "S" },
      { "text": "해당 직업의 성공 확률과 소득 데이터를 보여주며 현실을 알린다.", "type": "C" }
    ]
  },
  {
    "id": 182,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "타 부서 팀장과 업무 영역 다툼이 생겼다.",
    "options": [
      { "text": "임원 회의에서 공론화하여 내 영역임을 확실히 못 박는다.", "type": "D" },
      { "text": "따로 술 한잔하며 \"형님, 아우\" 하면서 좋게 푼다.", "type": "I" },
      { "text": "분쟁이 싫어서 우리 팀이 조금 손해 보더라도 양보한다.", "type": "S" },
      { "text": "업무 분장 규정과 과거 진행 이력을 근거 메일로 보낸다.", "type": "C" }
    ]
  },
  {
    "id": 183,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "배우자가 아이들 교육 문제로 이사를 가자고 한다.",
    "options": [
      { "text": "내 출퇴근 거리와 집값 상승 여부를 판단해 내가 결정한다.", "type": "D" },
      { "text": "이사 가면 새로운 동네 맛집은 어디지? 인테리어는? (설렘)", "type": "I" },
      { "text": "지금 사는 동네가 편하고 익숙한데... 변화가 싫다.", "type": "S" },
      { "text": "대출 금리, 학군 분석, 이사 비용 견적을 꼼꼼히 따진다.", "type": "C" }
    ]
  },
  {
    "id": 184,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "오랫동안 같이 일한 부하직원을 해고해야 하는 상황이다.",
    "options": [
      { "text": "\"회사가 어렵네. 이번 달까지만 하게.\" 짧고 단호하게 통보.", "type": "D" },
      { "text": "차마 말을 못 꺼내고 밥 사주고 술 사주며 빙빙 돌린다.", "type": "I" },
      { "text": "내가 대신 나가고 싶을 정도로 괴로워하며 눈물을 보인다.", "type": "S" },
      { "text": "해고 사유와 퇴직금, 실업 급여 절차를 매뉴얼대로 안내한다.", "type": "C" }
    ]
  },
  {
    "id": 185,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "동창회 회비를 횡령했다는 의혹이 생겼다.",
    "options": [
      { "text": "\"누가 그랬어? 당장 잡아내.\" 즉각적인 색출과 처벌 요구.", "type": "D" },
      { "text": "\"에이 설마~ 오해가 있겠지.\" 분위기가 험악해지는 걸 막는다.", "type": "I" },
      { "text": "사실이 밝혀질 때까지 조용히 상황을 지켜본다.", "type": "S" },
      { "text": "통장 입출금 내역을 확보하고 감사를 진행한다.", "type": "C" }
    ]
  },
  {
    "id": 186,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "중년의 위기(무력감)가 찾아왔다고 느낄 때?",
    "options": [
      { "text": "더 큰 목표(창업, 임원)를 세워 스스로를 채찍질한다.", "type": "D" },
      { "text": "옛 친구들을 만나거나 새로운 취미 모임에 나간다.", "type": "I" },
      { "text": "가족과 시간을 보내며 안정감을 찾으려 노력한다.", "type": "S" },
      { "text": "심리학 책을 읽거나 상담을 받으며 내 상태를 분석한다.", "type": "C" }
    ]
  },
  {
    "id": 187,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "사내 정치 라인을 타야 할 상황이 왔다.",
    "options": [
      { "text": "가장 힘 있는 실세 라인에 줄을 서서 내 입지를 다진다.", "type": "D" },
      { "text": "양쪽 모두와 친하게 지내며 적을 만들지 않는다.", "type": "I" },
      { "text": "정치질은 싫다. 그냥 내 자리에서 묵묵히 일만 한다.", "type": "S" },
      { "text": "어느 쪽이 장기적으로 유리한지 득실을 계산한다.", "type": "C" }
    ]
  },
  {
    "id": 188,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "명절 음식 준비로 배우자가 스트레스를 받는다.",
    "options": [
      { "text": "\"이번엔 다 사서 가자. 내가 부모님께 말할게.\" (해결사)", "type": "D" },
      { "text": "\"자기야 힘들지? 끝나고 호캉스 가자!\" (보상 제안)", "type": "I" },
      { "text": "옆에서 같이 전 부치고 설거지하며 눈치를 살핀다.", "type": "S" },
      { "text": "음식 종류와 양을 최소화하여 합리적인 대안을 제시한다.", "type": "C" }
    ]
  },
  {
    "id": 189,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "회의 중 내가 모르는 전문 용어가 나왔다.",
    "options": [
      { "text": "\"그게 핵심입니까? 요점만 말하세요.\" 모르는 티 안 내고 넘긴다.", "type": "D" },
      { "text": "\"아~ 그게 뭐였더라? 하하\" 옆 사람에게 슬쩍 물어본다.", "type": "I" },
      { "text": "나중에 찾아봐야지 생각하고 조용히 메모만 한다.", "type": "S" },
      { "text": "\"잠시만요, 그 용어의 정확한 정의가 뭡니까?\" 확인하고 간다.", "type": "C" }
    ]
  },
  {
    "id": 190,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "친구에게 돈을 빌려달라는 부탁을 받았다.",
    "options": [
      { "text": "\"돈 거래는 안 해.\" 단칼에 거절한다.", "type": "D" },
      { "text": "마음이 약해서... 없어도 되는 셈 치고 빌려준다.", "type": "I" },
      { "text": "배우자 핑계를 대며 곤란하다고 돌려서 거절한다.", "type": "S" },
      { "text": "차용증 공증을 요구하거나 상환 계획을 묻는다.", "type": "C" }
    ]
  },
  {
    "id": 191,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "자녀의 성적표를 봤는데 기대 이하다.",
    "options": [
      { "text": "\"학원비가 얼만데 이래? 정신 안 차려?\" 호통친다.", "type": "D" },
      { "text": "\"다음에 잘하면 되지!\"라며 넘어가지만 속은 쓰리다.", "type": "I" },
      { "text": "아이가 기죽을까 봐 성적 얘기는 꺼내지 않는다.", "type": "S" },
      { "text": "과목별 점수 추이를 분석하고 부족한 과목의 대책을 논의한다.", "type": "C" }
    ]
  },
  {
    "id": 192,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "거래처 접대 자리(골프/술자리)가 잡혔다.",
    "options": [
      { "text": "좌중을 휘어잡고 계약을 성사시키는 기회로 삼는다.", "type": "D" },
      { "text": "분위기 메이커 역할을 하며 즐거운 시간을 만든다.", "type": "I" },
      { "text": "상대방의 비위를 맞추며 실수하지 않으려 노력한다.", "type": "S" },
      { "text": "접대 비용 한도와 청탁금지법 저촉 여부를 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 193,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "새로운 차를 뽑으려고 한다. 우선순위는?",
    "options": [
      { "text": "하차감. 남들이 봤을 때 성공했다고 느낄 만한 브랜드.", "type": "D" },
      { "text": "디자인과 색상. 내 개성을 표현할 수 있는 예쁜 차.", "type": "I" },
      { "text": "가족의 안전과 편안한 승차감 (세단이나 패밀리 SUV).", "type": "S" },
      { "text": "연비, 감가상각, 유지비, 옵션 가성비.", "type": "C" }
    ]
  },
  {
    "id": 194,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "임원 승진 심사를 앞두고 있다. 나의 전략은?",
    "options": [
      { "text": "나의 독보적인 성과를 강조하며 대체 불가능함을 어필한다.", "type": "D" },
      { "text": "평소 쌓아둔 인맥을 동원해 여론전을 펼친다.", "type": "I" },
      { "text": "겸손하게 행동하며 묵묵히 내 할 일을 한다.", "type": "S" },
      { "text": "평가 항목을 분석하고 부족한 스펙을 보완할 자료를 만든다.", "type": "C" }
    ]
  },
  {
    "id": 195,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "배우자와 노후 계획(귀농 vs 도시)이 다르다.",
    "options": [
      { "text": "\"내 뜻대로 해. 굶기진 않을 테니.\" 강하게 주장한다.", "type": "D" },
      { "text": "\"주말농장부터 해보면서 천천히 생각하자~\" 유예한다.", "type": "I" },
      { "text": "배우자가 원하는 대로 맞춰주며 산다.", "type": "S" },
      { "text": "각 지역의 병원 접근성, 생활비 등을 비교해 설득한다.", "type": "C" }
    ]
  },
  {
    "id": 196,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "동호회에서 내가 제안한 의견이 무시당했다.",
    "options": [
      { "text": "기분 나빠서 탈퇴하거나 모임에 나가지 않는다.", "type": "D" },
      { "text": "속상하지만 뒤풀이 자리에서 \"섭섭하다\"고 털어놓는다.", "type": "I" },
      { "text": "\"다른 분들 의견이 더 좋네요.\" 웃으며 수긍한다.", "type": "S" },
      { "text": "내 제안이 왜 거절당했는지 논리적으로 따져본다.", "type": "C" }
    ]
  },
  {
    "id": 197,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "팀 내에 파벌 싸움이 일어났다.",
    "options": [
      { "text": "양쪽 리더를 불러 호되게 질책하고 화해시킨다.", "type": "D" },
      { "text": "회식 자리를 만들어 술로 풀게 한다.", "type": "I" },
      { "text": "어느 편도 들지 못하고 전전긍긍하며 괴로워한다.", "type": "S" },
      { "text": "각자의 주장과 사실 관계를 파악해 잘잘못을 가린다.", "type": "C" }
    ]
  },
  {
    "id": 198,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "주말에 집안 대청소를 하기로 했다.",
    "options": [
      { "text": "가족들에게 업무를 배분하고 감독관처럼 지시한다.", "type": "D" },
      { "text": "노동요를 크게 틀고 춤추며 즐겁게 청소한다.", "type": "I" },
      { "text": "가족들이 힘들까 봐 내가 힘든 일을 도맡아 한다.", "type": "S" },
      { "text": "구역별로 순서를 정해 체계적으로 청소한다.", "type": "C" }
    ]
  },
  {
    "id": 199,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "보고서 결재를 올렸는데 반려당했다.",
    "options": [
      { "text": "반려 사유를 납득할 수 없다면 상사와 언쟁도 불사한다.", "type": "D" },
      { "text": "\"부장님~ 제가 좀 부족했죠?\" 애교로 넘기고 다시 한다.", "type": "I" },
      { "text": "자책하며 하루 종일 의기소침해진다.", "type": "S" },
      { "text": "지적받은 부분을 꼼꼼히 체크해 완벽하게 수정한다.", "type": "C" }
    ]
  },
  {
    "id": 200,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "건강을 위해 식단 관리를 시작했다.",
    "options": [
      { "text": "\"오늘부터 탄수화물 금지.\" 극단적이고 확실하게 끊는다.", "type": "D" },
      { "text": "다이어트는 내일부터! 맛있는 거 앞에서는 무너진다.", "type": "I" },
      { "text": "가족들이 먹는 메뉴에 맞춰 조금씩만 덜 먹는다.", "type": "S" },
      { "text": "칼로리와 영양 성분을 계산하며 철저하게 지킨다.", "type": "C" }
    ]
  },
  {
    "id": 201,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "배우자가 내 말에 공감 대신 해결책만 제시한다.",
    "options": [
      { "text": "\"누가 답을 몰라서 그래? 내 편 들어달라고!\" 화낸다.", "type": "D" },
      { "text": "\"너무해... 당신은 로봇이야?\" 서운함을 토로한다.", "type": "I" },
      { "text": "말해봤자 소용없구나 싶어 입을 다문다.", "type": "S" },
      { "text": "해결책이 타당하다면 감정을 배제하고 수용한다.", "type": "C" }
    ]
  },
  {
    "id": 202,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "회사의 방향성이 내 생각과 다르다.",
    "options": [
      { "text": "경영진에게 직접 메일을 보내거나 회의 때 반대 의견을 낸다.", "type": "D" },
      { "text": "동료들과 커피 마시며 회사를 성토한다.", "type": "I" },
      { "text": "불만은 있지만 월급쟁이가 별수 있나... 참는다.", "type": "S" },
      { "text": "이직 준비를 위해 경력 기술서를 업데이트한다.", "type": "C" }
    ]
  },
  {
    "id": 203,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "동창회 총무를 맡아달라는 부탁을 받았다.",
    "options": [
      { "text": "\"회장은 내가 할게. 총무는 딴 사람 시켜.\" (리더 선호)", "type": "D" },
      { "text": "\"총무는 골치 아픈데... 오락부장은 어때?\" (재미 선호)", "type": "I" },
      { "text": "거절 못 하고 떠밀려서 맡는다.", "type": "S" },
      { "text": "회비 관리의 투명성을 보장할 자신이 있다면 수락한다.", "type": "C" }
    ]
  },
  {
    "id": 204,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "자녀가 친구를 때려서 학교폭력 위원회가 열리게 되었다.",
    "options": [
      { "text": "학교에 찾아가서 상황을 장악하고 내 아이를 보호한다.", "type": "D" },
      { "text": "피해 학생 부모에게 전화해 눈물로 호소하며 사과한다.", "type": "I" },
      { "text": "너무 놀라고 당황해서 아무것도 못 하고 발만 동동 구른다.", "type": "S" },
      { "text": "사건 경위서와 목격자 진술을 확보해 팩트를 체크한다.", "type": "C" }
    ]
  },
  {
    "id": 205,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "신규 프로젝트 킥오프 미팅을 주재한다.",
    "options": [
      { "text": "목표와 마감 기한을 명확히 하고, 역할 분담을 지시한다.", "type": "D" },
      { "text": "아이스브레이킹으로 분위기를 풀고 자유로운 아이디어를 독려한다.", "type": "I" },
      { "text": "모두가 편안하게 참여할 수 있도록 배려하며 진행한다.", "type": "S" },
      { "text": "사전 배포한 자료를 바탕으로 세부 일정과 리스크를 점검한다.", "type": "C" }
    ]
  },
  {
    "id": 206,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "인테리어 공사를 하기로 했다. 업체 선정 기준은?",
    "options": [
      { "text": "알아서 잘해주는 곳. 내가 신경 쓸 필요 없이 결과가 좋아야 한다.", "type": "D" },
      { "text": "사장님이 센스 있고 말이 잘 통하는 곳.", "type": "I" },
      { "text": "지인이 추천해 준 믿을 수 있는 곳.", "type": "S" },
      { "text": "상세 견적서와 시방서를 꼼꼼히 제공하는 곳.", "type": "C" }
    ]
  },
  {
    "id": 207,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "거래처의 무리한 납기 단축 요구가 들어왔다.",
    "options": [
      { "text": "\"불가능합니다. 품질 포기하실 겁니까?\" 강하게 거절.", "type": "D" },
      { "text": "\"저희도 해드리고 싶은데... 이번만 봐주세요~\" 읍소.", "type": "I" },
      { "text": "야근해서라도 맞춰줘야지 어쩌겠어... 수용한다.", "type": "S" },
      { "text": "단축 시 발생할 추가 비용과 리스크를 문서로 통보한다.", "type": "C" }
    ]
  },
  {
    "id": 208,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "주말, 배우자는 쉬고 싶어 하고 나는 나가고 싶다.",
    "options": [
      { "text": "\"그럼 나 혼자 갔다 올게.\" 혼자서라도 나간다.", "type": "D" },
      { "text": "\"자기야 같이 가자~ 응?\" 끈질기게 조른다.", "type": "I" },
      { "text": "아쉽지만 배우자에 맞춰 집에서 같이 쉰다.", "type": "S" },
      { "text": "오전에 할 일을 다 끝내고 오후에 잠시 다녀오는 것으로 타협한다.", "type": "C" }
    ]
  },
  {
    "id": 209,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "모임 장소 예약이 잘못되어 자리가 없다.",
    "options": [
      { "text": "매니저를 불러 강력하게 항의하고 대안을 내놓으라고 한다.", "type": "D" },
      { "text": "\"어머 어떡해! 딴 데 가자!\" 웃으며 상황을 넘긴다.", "type": "I" },
      { "text": "일행들에게 미안해서 어쩔 줄 몰라 한다.", "type": "S" },
      { "text": "예약 확인 문자를 보여주며 귀책사유를 명확히 한다.", "type": "C" }
    ]
  },
  {
    "id": 210,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "성과급(보너스) 배분이 불공정하다고 느낀다.",
    "options": [
      { "text": "인사팀이나 상사에게 찾아가 내 성과를 근거로 이의 제기한다.", "type": "D" },
      { "text": "동료들과 술 마시며 회사를 욕한다.", "type": "I" },
      { "text": "속상하지만 찍힐까 봐 가만히 있는다.", "type": "S" },
      { "text": "평가 기준과 내 점수를 열람 신청하여 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 211,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "자녀가 용돈을 올려달라고 한다.",
    "options": [
      { "text": "\"성적 오르면 올려줄게.\" 조건을 건다.", "type": "D" },
      { "text": "\"그래! 요즘 물가가 비싸지?\" 기분 좋게 올려준다.", "type": "I" },
      { "text": "\"얼마나 필요해? 부족하게 줘서 미안해.\" 바로 올려준다.", "type": "S" },
      { "text": "용돈 기입장을 가져오게 해서 지출 내역을 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 212,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "팀원들이 회식 메뉴를 결정 못 하고 눈치만 본다.",
    "options": [
      { "text": "\"그냥 삼겹살 먹으러 가자. 예약해.\" 내가 정한다.", "type": "D" },
      { "text": "\"뭐 먹고 싶어? 투표할까?\" 분위기를 띄운다.", "type": "I" },
      { "text": "\"김 대리는 뭐 좋아해?\" 한 명 한 명 의견을 묻는다.", "type": "S" },
      { "text": "회사 근처 식당 리스트와 예산을 고려해 3가지 안을 제시한다.", "type": "C" }
    ]
  },
  {
    "id": 213,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "골프(또는 취미 운동) 실력이 늘지 않는다.",
    "options": [
      { "text": "유명한 프로에게 고액 레슨을 등록한다. (장비도 최고급으로)", "type": "D" },
      { "text": "실력보단 친목이지! 명랑 골프를 즐긴다.", "type": "I" },
      { "text": "꾸준히 연습장에 나가서 성실하게 연습한다.", "type": "S" },
      { "text": "내 스윙 영상을 찍어서 자세를 분석하고 교정한다.", "type": "C" }
    ]
  },
  {
    "id": 214,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "배우자가 친구 모임에 같이 가자고 한다. (낯선 사람들)",
    "options": [
      { "text": "가서 대화의 주도권을 잡고 배우자 기를 살려준다.", "type": "D" },
      { "text": "새로운 사람 만나는 건 언제나 환영! 신나게 따라간다.", "type": "I" },
      { "text": "어색하고 불편하지만 배우자를 위해 억지로 간다.", "type": "S" },
      { "text": "어떤 모임이고 누가 오는지 정보를 미리 파악한다.", "type": "C" }
    ]
  },
  {
    "id": 215,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "업무 실수로 회사에 금전적 손실을 입혔다.",
    "options": [
      { "text": "내 선에서 빠르게 메꿀 방법을 찾거나 책임지고 사표를 쓴다.", "type": "D" },
      { "text": "인맥을 동원해 수습하려고 백방으로 뛰어다닌다.", "type": "I" },
      { "text": "죄책감에 시달리며 잠을 못 이룬다.", "type": "S" },
      { "text": "손실액을 최소화할 법적/행정적 절차를 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 216,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "오랜만에 만난 친구가 다단계/보험 가입을 권유한다.",
    "options": [
      { "text": "\"친구끼리 이러지 말자. 안 해.\" 단호하게 자른다.", "type": "D" },
      { "text": "거절하기 힘들어서 하나 정도는 들어준다.", "type": "I" },
      { "text": "난처해서 우물쭈물하다가 설명을 계속 들어준다.", "type": "S" },
      { "text": "상품의 수익 구조와 약관을 보여달라고 한다.", "type": "C" }
    ]
  },
  {
    "id": 217,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "자녀가 게임하느라 학원 숙제를 안 했다.",
    "options": [
      { "text": "컴퓨터 전원 코드를 뽑아버리거나 게임 금지령을 내린다.", "type": "D" },
      { "text": "\"게임이 그렇게 재밌어?\" 같이 한 판 하고 숙제 시킨다.", "type": "I" },
      { "text": "\"숙제 다 하고 놀기로 했잖아...\" 속상해하며 타이른다.", "type": "S" },
      { "text": "\"약속을 어겼으니 일주일간 게임 시간 30분 차감이야.\" 규칙 적용.", "type": "C" }
    ]
  },
  {
    "id": 218,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "경쟁사에서 스카우트 제의가 왔다.",
    "options": [
      { "text": "연봉과 직급을 파격적으로 올려준다면 바로 간다.", "type": "D" },
      { "text": "지금 동료들과 헤어지기 아쉬워서 고민한다.", "type": "I" },
      { "text": "새로운 환경에 적응하는 게 두려워 거절한다.", "type": "S" },
      { "text": "이직 시 득실과 회사의 재무 건전성을 분석한다.", "type": "C" }
    ]
  },
  {
    "id": 219,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "휴가 계획을 세우는데 가족들 의견이 다 다르다.",
    "options": [
      { "text": "\"돈 내는 사람 맘대로야. 이번엔 여기로 간다.\" 통보.", "type": "D" },
      { "text": "\"다 같이 갈 수 있는 좋은 곳 없을까?\" 긍정적으로 조율.", "type": "I" },
      { "text": "내 의견을 접고 자녀나 배우자가 원하는 곳으로 간다.", "type": "S" },
      { "text": "각 여행지의 예산과 동선을 비교해 투표로 결정한다.", "type": "C" }
    ]
  },
  {
    "id": 220,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "부하직원이 개인 사정으로 휴직을 요청했다.",
    "options": [
      { "text": "업무 공백 대책이 없으면 반려하거나 퇴사를 권유한다.", "type": "D" },
      { "text": "\"많이 힘들었구나. 푹 쉬고 와.\" 흔쾌히 수락한다.", "type": "I" },
      { "text": "남은 팀원들이 힘들까 봐 걱정되지만 거절은 못 한다.", "type": "S" },
      { "text": "사규에 따른 휴직 가능 여부와 인력 운영 계획을 검토한다.", "type": "C" }
    ]
  },
  {
    "id": 221,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "고령의 부모님이 운전을 계속하겠다고 고집하신다. 위험해 보인다.",
    "options": [
      { "text": "\"사고 나면 큰일 납니다. 키 주세요.\" 강제로 운전을 막는다.", "type": "D" },
      { "text": "\"이제 제가 기사 노릇 해드릴게요!\" 기분 상하지 않게 설득한다.", "type": "I" },
      { "text": "부모님 자존심 상하실까 봐 차마 말 못 하고 불안해한다.", "type": "S" },
      { "text": "고령 운전자 사고 통계를 보여드리며 면허 반납 혜택을 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 222,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "부서에 AI(인공지능) 툴을 도입하자는 의견이 나왔다.",
    "options": [
      { "text": "생산성이 오른다면 당장 도입해서 성과를 내자.", "type": "D" },
      { "text": "재밌겠는데? 새로운 기술로 우리 팀 분위기를 바꿔보자.", "type": "I" },
      { "text": "기존 방식도 괜찮은데... 굳이 바꿔서 혼란을 줄 필요가 있을까?", "type": "S" },
      { "text": "보안 이슈와 비용 대비 효과(ROI)를 철저히 검증한 후 결정한다.", "type": "C" }
    ]
  },
  {
    "id": 223,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "대학생 자녀가 휴학하고 배낭여행을 가겠다고 한다.",
    "options": [
      { "text": "\"졸업하고 가. 지금은 때가 아니야.\" 부모로서 결정권을 행사한다.", "type": "D" },
      { "text": "\"멋지다! 어디로 갈 거야? 사진 많이 찍어와!\" 꿈을 응원한다.", "type": "I" },
      { "text": "험한 세상에 무슨 일 생길까 봐 걱정되어 반대하고 싶다.", "type": "S" },
      { "text": "구체적인 여행 계획과 예산, 복학 후 학업 계획을 가져오라고 한다.", "type": "C" }
    ]
  },
  {
    "id": 224,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "상사가 내 팀원을 건너뛰고 직접 업무 지시를 내렸다.",
    "options": [
      { "text": "상사에게 찾아가 \"지휘 체계를 지켜주십시오\"라고 항의한다.", "type": "D" },
      { "text": "기분 나쁘지만 상사와 농담하며 \"저한테 먼저 말씀주시죠~\" 하고 넘긴다.", "type": "I" },
      { "text": "팀원이 혼란스러울까 봐 내가 중간에서 조용히 조율한다.", "type": "S" },
      { "text": "업무 프로세스 매뉴얼을 재공지하여 보고 체계를 확립한다.", "type": "C" }
    ]
  },
  {
    "id": 225,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "지인이 고수익을 보장한다며 투자를 권유한다.",
    "options": [
      { "text": "\"세상에 공짜는 없어. 관심 없다.\" 딱 잘라 거절한다.", "type": "D" },
      { "text": "솔깃해서 \"진짜? 누가 돈 벌었대?\"라며 관심을 보인다.", "type": "I" },
      { "text": "의심스럽지만 거절하기 미안해서 설명은 들어준다.", "type": "S" },
      { "text": "사업자 등록증, 수익 구조, 리스크 요인을 꼼꼼히 따져본다.", "type": "C" }
    ]
  },
  {
    "id": 226,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "예기치 않게 목돈(상속/퇴직금)이 생겼다. 어떻게 할까?",
    "options": [
      { "text": "사업 확장이나 부동산 등 공격적인 투자로 자산을 불린다.", "type": "D" },
      { "text": "그동안 사고 싶었던 차를 바꾸거나 해외여행을 간다.", "type": "I" },
      { "text": "노후를 위해 안전한 예금이나 연금에 넣어둔다.", "type": "S" },
      { "text": "세무사와 상담하여 절세 방안을 찾고 포트폴리오를 분산한다.", "type": "C" }
    ]
  },
  {
    "id": 227,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "팀 내에 업무 능력이 현저히 떨어지는 '저성과자'가 있다.",
    "options": [
      { "text": "경고를 주고 개선되지 않으면 내보낼 준비를 한다.", "type": "D" },
      { "text": "따로 술 한잔하며 \"형/오빠가 도와줄게\"라며 동기 부여한다.", "type": "I" },
      { "text": "그 직원의 몫까지 내가 하거나 다른 팀원에게 부탁한다.", "type": "S" },
      { "text": "성과 데이터를 바탕으로 PIP(성과 향상 프로그램)를 가동한다.", "type": "C" }
    ]
  },
  {
    "id": 228,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "배우자가 상의 없이 다니던 직장을 그만두겠다고 한다.",
    "options": [
      { "text": "\"대책은 있어? 당장 생활비는 어쩔 거야?\" 현실을 지적한다.", "type": "D" },
      { "text": "\"그래! 그동안 고생했어. 좀 쉬면서 여행이나 가자.\"", "type": "I" },
      { "text": "많이 힘들었구나... 당장 생계가 걱정되지만 위로해준다.", "type": "S" },
      { "text": "가계부 지출 내역을 확인하고 몇 달 버틸 수 있는지 계산한다.", "type": "C" }
    ]
  },
  {
    "id": 229,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "모임에서 정치 이야기로 언성이 높아졌다.",
    "options": [
      { "text": "\"그만합시다. 여기 싸우러 왔습니까?\" 강하게 중재한다.", "type": "D" },
      { "text": "\"에이~ 우리 즐거운 얘기만 해요! 건배!\" 화제를 돌린다.", "type": "I" },
      { "text": "불편해서 조용히 자리를 피하거나 입을 다문다.", "type": "S" },
      { "text": "논쟁에 참여하지 않고 양쪽 주장의 논리적 허점을 관찰한다.", "type": "C" }
    ]
  },
  {
    "id": 230,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "다른 부서와 협업 중 공(Credit)을 뺏길 위기다.",
    "options": [
      { "text": "임원에게 직접 보고하여 내 성과임을 확실히 한다.", "type": "D" },
      { "text": "사내 여론을 통해 내가 한 일임을 은연중에 알린다.", "type": "I" },
      { "text": "억울하지만 얼굴 붉히기 싫어서 다음 기회를 노린다.", "type": "S" },
      { "text": "업무 진행 이메일과 회의록을 증거로 제출하여 정정한다.", "type": "C" }
    ]
  },
  {
    "id": 231,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "독립했던 자녀가 다시 집으로 들어오겠다고 한다(캥거루족).",
    "options": [
      { "text": "\"월세 내고 생활 규칙 지켜. 아니면 안 돼.\" 조건을 건다.", "type": "D" },
      { "text": "\"와! 다시 북적북적하겠네. 환영한다!\" 반긴다.", "type": "I" },
      { "text": "내 자유 시간은 줄겠지만 자녀를 챙겨줄 수 있어 다행이다.", "type": "S" },
      { "text": "언제까지 있을 건지, 생활비 분담은 어떻게 할지 계약서를 쓴다.", "type": "C" }
    ]
  },
  {
    "id": 232,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "건강 관리를 위해 운동을 시작하려 한다.",
    "options": [
      { "text": "단기간에 효과를 보는 고강도 PT나 크로스핏을 등록한다.", "type": "D" },
      { "text": "골프나 테니스 등 사람들과 어울릴 수 있는 운동을 한다.", "type": "I" },
      { "text": "매일 아침 꾸준히 걷기나 등산 등 혼자 하는 운동을 한다.", "type": "S" },
      { "text": "내 몸 상태에 맞는 운동 처방을 받고 스마트 워치로 기록한다.", "type": "C" }
    ]
  },
  {
    "id": 233,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "중요한 프레젠테이션 중 장비 고장으로 흐름이 끊겼다.",
    "options": [
      { "text": "\"장비 없이 진행하겠습니다.\" 당황하지 않고 목소리로 압도한다.", "type": "D" },
      { "text": "\"기계도 제 열기에 놀랐나 보네요 하하\" 유머로 넘긴다.", "type": "I" },
      { "text": "식은땀을 흘리며 담당자가 고쳐줄 때까지 기다린다.", "type": "S" },
      { "text": "미리 준비해 둔 유인물(핸드아웃)을 배포하고 진행한다.", "type": "C" }
    ]
  },
  {
    "id": 234,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "식당에서 주문한 음식이 잘못 나왔다.",
    "options": [
      { "text": "\"저기요, 이거 안 시켰는데요. 다시 주세요.\" 즉시 컴플레인.", "type": "D" },
      { "text": "\"어? 이것도 맛있어 보이네. 그냥 먹죠 뭐!\" 분위기 깰까 봐 먹는다.", "type": "I" },
      { "text": "종업원이 바빠 보여서 미안한 마음에 그냥 먹는다.", "type": "S" },
      { "text": "주문 내역서를 확인하고 계산서에 잘못 찍혔는지 체크한다.", "type": "C" }
    ]
  },
  {
    "id": 235,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "배우자가 내 외모나 체형 변화를 지적했다.",
    "options": [
      { "text": "\"당신은 거울 안 봐?\" 즉각 반격하며 자존심을 세운다.", "type": "D" },
      { "text": "\"나 요즘 늙었지? ㅠㅠ 운동 같이 할까?\" 애교로 받아친다.", "type": "I" },
      { "text": "속으로 상처받고 말없이 다이어트를 결심한다.", "type": "S" },
      { "text": "체지방률과 건강 검진 수치를 확인하고 관리 필요성을 판단한다.", "type": "C" }
    ]
  },
  {
    "id": 236,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "회사가 재택근무를 축소하고 전원 출근을 지시했다.",
    "options": [
      { "text": "효율성이 떨어진다면 강력하게 반대 의견을 피력한다.", "type": "D" },
      { "text": "오랜만에 동료들 얼굴 보고 좋네! 긍정적으로 생각한다.", "type": "I" },
      { "text": "출퇴근이 힘들겠지만 회사의 방침이니 따른다.", "type": "S" },
      { "text": "재택과 출근의 성과 데이터를 비교하며 합리성을 따진다.", "type": "C" }
    ]
  },
  {
    "id": 237,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "자녀가 학교에서 선생님께 혼났다고 억울해한다.",
    "options": [
      { "text": "학교에 전화해서 자초지종을 따지고 내 아이 편을 든다.", "type": "D" },
      { "text": "\"속상했겠다! 맛있는 거 먹고 털어버려!\" 아이 기분을 풀어준다.", "type": "I" },
      { "text": "\"선생님도 이유가 있으셨겠지...\" 아이를 달래며 중립을 지킨다.", "type": "S" },
      { "text": "아이의 말과 선생님의 입장을 객관적으로 비교해 사실을 파악한다.", "type": "C" }
    ]
  },
  {
    "id": 238,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "후배가 나보다 먼저 승진했다.",
    "options": [
      { "text": "인사팀에 찾아가 평가 기준을 묻고 내 성과를 어필한다.", "type": "D" },
      { "text": "겉으로는 축하해주지만 속으로는 '내가 더 인기 많은데'라며 아쉬워한다.", "type": "I" },
      { "text": "민망하지만 후배가 잘해서 된 거니 인정하고 축하해준다.", "type": "S" },
      { "text": "내가 부족했던 역량이 무엇인지 인사 고과표를 분석한다.", "type": "C" }
    ]
  },
  {
    "id": 239,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "친구들과 여행 중 일정이 꼬여 길을 잃었다.",
    "options": [
      { "text": "\"이쪽이야. 나만 믿고 따라와.\" 리더십을 발휘해 길을 찾는다.", "type": "D" },
      { "text": "\"야, 이것도 추억이다! 사진 찍자!\" 긍정 에너지를 뿜는다.", "type": "I" },
      { "text": "누군가 해결해 주길 기다리며 조용히 서 있는다.", "type": "S" },
      { "text": "지도를 펴고 현재 위치와 목적지를 정확히 계산한다.", "type": "C" }
    ]
  },
  {
    "id": 240,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "주말에 아무 약속 없이 혼자 있게 되었다.",
    "options": [
      { "text": "밀린 업무를 처리하거나 자기계발을 하며 생산적으로 보낸다.", "type": "D" },
      { "text": "심심해서 못 견딘다. 친구들에게 전화해 번개를 제안한다.", "type": "I" },
      { "text": "집에서 뒹굴거하며 밀린 잠을 자거나 TV를 본다.", "type": "S" },
      { "text": "서재를 정리하거나 독서를 하며 지적 충전을 한다.", "type": "C" }
    ]
  },
  {
    "id": 241,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "팀원들이 회의 시간에 아무 말도 안 한다.",
    "options": [
      { "text": "\"A대리부터 의견 말해봐.\" 한 명씩 지목하며 발언을 강요한다.", "type": "D" },
      { "text": "\"분위기가 왜 이래? 커피 한잔하고 할까?\" 분위기를 푼다.", "type": "I" },
      { "text": "누군가 말할 때까지 묵묵히 기다려준다.", "type": "S" },
      { "text": "사전에 배포한 어젠다에 대해 준비해 온 내용을 묻는다.", "type": "C" }
    ]
  },
  {
    "id": 242,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "배우자가 아이들 훈육 방식에 불만을 제기했다.",
    "options": [
      { "text": "\"내 방식이 맞아. 토 달지 마.\" 강하게 밀어붙인다.", "type": "D" },
      { "text": "\"알았어, 알았어~ 당신 말이 다 맞아.\" 싸우기 싫어 맞춰준다.", "type": "I" },
      { "text": "배우자의 의견을 존중하며 내 방식을 수정하려 노력한다.", "type": "S" },
      { "text": "육아 서적이나 전문가 조언을 근거로 내 방식의 타당성을 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 243,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "사내 윤리 규정에 어긋나는 관행을 목격했다.",
    "options": [
      { "text": "즉시 시정을 요구하거나 감사팀에 제보한다.", "type": "D" },
      { "text": "괜히 휘말리기 싫어서 모른 척하고 동료들과 수군댄다.", "type": "I" },
      { "text": "마음이 불편하지만 나설 용기가 없어 침묵한다.", "type": "S" },
      { "text": "규정 위반의 증거를 수집하고 익명 제보 절차를 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 244,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "동창회 회장이 되어달라는 부탁을 받았다.",
    "options": [
      { "text": "\"내가 한번 제대로 이끌어볼게.\" 흔쾌히 수락한다.", "type": "D" },
      { "text": "\"회장은 부담스럽고 오락부장 시켜줘!\" (주목받는 건 좋음)", "type": "I" },
      { "text": "\"나보다 더 잘할 사람이 있을 거야.\" 겸손하게 거절한다.", "type": "S" },
      { "text": "회장의 역할과 책임 범위, 시간적 부담을 따져보고 결정한다.", "type": "C" }
    ]
  },
  {
    "id": 245,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "자녀가 비싼 브랜드 운동화를 사달라고 조른다.",
    "options": [
      { "text": "\"안 돼. 쓸데없는 소리 마.\" 단호하게 거절한다.", "type": "D" },
      { "text": "\"그래? 요즘 그게 유행이야? 하나 사줄게!\" 기분파.", "type": "I" },
      { "text": "형편이 안 되는데 아이 기 죽을까 봐 무리해서 사준다.", "type": "S" },
      { "text": "기존 신발 상태와 가계 예산을 고려해 합리적인지 판단한다.", "type": "C" }
    ]
  },
  {
    "id": 246,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "고객이 말도 안 되는 요구를 하며 화를 낸다.",
    "options": [
      { "text": "\"규정상 안 됩니다.\" 단호하게 선을 긋고 제압한다.", "type": "D" },
      { "text": "\"고객님 많이 속상하셨죠~\" 감정에 호소하며 달랜다.", "type": "I" },
      { "text": "죄송하다는 말을 연발하며 어쩔 줄 몰라 한다.", "type": "S" },
      { "text": "요구 사항을 기록하고 해결 가능한 범위 내의 대안을 제시한다.", "type": "C" }
    ]
  },
  {
    "id": 247,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "은퇴 후 전원생활을 꿈꾸고 있다. 준비 방식은?",
    "options": [
      { "text": "땅부터 보러 다니고 집 지을 계획을 세운다. (실행력)", "type": "D" },
      { "text": "시골 가서 친구들 초대하고 파티할 생각에 설렌다.", "type": "I" },
      { "text": "가족들이 동의할지, 적응할 수 있을지 걱정부터 한다.", "type": "S" },
      { "text": "귀농 교육을 받고 지역별 지원 정책을 꼼꼼히 조사한다.", "type": "C" }
    ]
  },
  {
    "id": 248,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "팀원 간의 업무 분장이 불공평하다는 불만이 나왔다.",
    "options": [
      { "text": "\"내가 정한 대로 해. 불만 있으면 나가.\" 권위로 누른다.", "type": "D" },
      { "text": "전체 회의를 소집해 서로의 입장을 들어보고 조율한다.", "type": "I" },
      { "text": "불만 있는 직원의 일을 내가 좀 더 가져와서 해결한다.", "type": "S" },
      { "text": "팀원별 업무 시간과 난이도를 분석해 R&R을 재조정한다.", "type": "C" }
    ]
  },
  {
    "id": 249,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "배우자가 기념일을 잊어버렸다.",
    "options": [
      { "text": "\"어떻게 이럴 수 있어?\" 크게 화내고 보상을 요구한다.", "type": "D" },
      { "text": "\"나 삐졌어!\" 티 내면서 배우자가 풀어주길 기다린다.", "type": "I" },
      { "text": "바빠서 그랬겠지... 서운하지만 혼자 삭힌다.", "type": "S" },
      { "text": "다음부터는 캘린더 알람을 설정해두라고 건조하게 말한다.", "type": "C" }
    ]
  },
  {
    "id": 250,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "모임 장소로 예약한 식당이 맛이 없다.",
    "options": [
      { "text": "주방장을 불러 맛에 대해 항의한다.", "type": "D" },
      { "text": "\"여기 분위기는 좋잖아!\" 긍정적인 면을 부각한다.", "type": "I" },
      { "text": "초대한 사람 민망할까 봐 맛있는 척 먹는다.", "type": "S" },
      { "text": "다시는 오지 않기 위해 맛집 리스트에서 삭제한다.", "type": "C" }
    ]
  },
  {
    "id": 251,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "부하직원이 육아 휴직을 쓰겠다고 한다.",
    "options": [
      { "text": "업무 공백 대책을 가져오라고 하거나 눈치를 준다.", "type": "D" },
      { "text": "\"축하해! 애기 잘 키워야지.\" 흔쾌히 보내준다.", "type": "I" },
      { "text": "남은 직원들이 힘들까 봐 걱정되지만 거절은 못 한다.", "type": "S" },
      { "text": "법적 의무 사항과 대체 인력 운영 계획을 검토한다.", "type": "C" }
    ]
  },
  {
    "id": 252,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "자기계발을 위해 대학원 진학을 고민 중이다.",
    "options": [
      { "text": "학위가 승진이나 이직에 도움 된다면 바로 등록한다.", "type": "D" },
      { "text": "새로운 인맥을 쌓고 캠퍼스 라이프를 즐기고 싶다.", "type": "I" },
      { "text": "일과 학업을 병행할 수 있을지 체력과 시간이 걱정된다.", "type": "S" },
      { "text": "커리큘럼과 등록금, 졸업 요건을 꼼꼼히 비교한다.", "type": "C" }
    ]
  },
  {
    "id": 253,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "사춘기 자녀가 방문을 쾅 닫고 들어갔다.",
    "options": [
      { "text": "\"어디서 버르장머리 없이!\" 문을 열고 들어가 혼낸다.", "type": "D" },
      { "text": "문 밖에서 \"기분 안 좋아? 엄마/아빠랑 얘기할까?\" 달랜다.", "type": "I" },
      { "text": "놀랐지만 아이가 진정될 때까지 조용히 기다린다.", "type": "S" },
      { "text": "아이가 화난 원인을 분석하고 대화 타이밍을 잰다.", "type": "C" }
    ]
  },
  {
    "id": 254,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "회사 워크숍에서 장기자랑을 해야 한다.",
    "options": [
      { "text": "1등 상금을 노리고 팀원들을 독려해 연습시킨다.", "type": "D" },
      { "text": "무대 체질이다. 마이크 잡고 분위기를 주도한다.", "type": "I" },
      { "text": "박수만 치고 싶다. 제발 안 시켰으면 좋겠다.", "type": "S" },
      { "text": "적당히 참여하되 튀지 않게 무난한 역할을 맡는다.", "type": "C" }
    ]
  },
  {
    "id": 255,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "모임 회비를 걷는데 한 친구가 계속 안 낸다.",
    "options": [
      { "text": "단톡방에서 \"OO야, 회비 입금해\"라고 공개 지적한다.", "type": "D" },
      { "text": "개인 톡으로 \"까먹었지? ㅋㅋㅋ\" 좋게 돌려 말한다.", "type": "I" },
      { "text": "사정이 있겠지... 내가 일단 대신 내준다.", "type": "S" },
      { "text": "미납 내역을 정리해서 회칙에 따라 처리한다.", "type": "C" }
    ]
  },
  {
    "id": 256,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "업무상 실수로 회사에 손해를 끼쳤다.",
    "options": [
      { "text": "내 실수임을 인정하고 빠르게 수습책을 마련해 보고한다.", "type": "D" },
      { "text": "상사에게 \"한 번만 봐주세요\"라며 인간적으로 호소한다.", "type": "I" },
      { "text": "죄책감에 시달리며 주변 눈치를 본다.", "type": "S" },
      { "text": "사고 경위서를 작성하고 재발 방지 대책을 세운다.", "type": "C" }
    ]
  },
  {
    "id": 257,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "주말에 집에서 쉬고 싶은데 배우자가 대청소를 하자고 한다.",
    "options": [
      { "text": "\"사람 불러서 해. 난 쉴 거야.\" 돈으로 해결하거나 거절.", "type": "D" },
      { "text": "\"청소하고 맛있는 거 먹으러 가자!\" 보상을 제안한다.", "type": "I" },
      { "text": "피곤하지만 군말 없이 청소기를 든다.", "type": "S" },
      { "text": "효율적인 청소 동선과 역할 분담을 정해서 빠르게 끝낸다.", "type": "C" }
    ]
  },
  {
    "id": 258,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "새로운 취미를 배우려고 한다. 무엇을 선택할까?",
    "options": [
      { "text": "승마, 클레이 사격 등 도전적이고 성취감 있는 것.", "type": "D" },
      { "text": "살사 댄스, 와인 동호회 등 사교적인 활동.", "type": "I" },
      { "text": "가드닝, 도예 등 조용하고 정서적인 활동.", "type": "S" },
      { "text": "목공, 코딩 등 기술을 배우고 결과물이 남는 것.", "type": "C" }
    ]
  },
  {
    "id": 259,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "팀 회식 장소를 정해야 한다.",
    "options": [
      { "text": "내가 좋아하는 단골집으로 예약하고 통보한다.", "type": "D" },
      { "text": "요즘 핫한 곳 어디야? 직원들에게 물어보고 투표한다.", "type": "I" },
      { "text": "모두가 무난하게 먹을 수 있는 고깃집이나 뷔페를 잡는다.", "type": "S" },
      { "text": "예산, 거리, 주차, 룸 여부를 체크하여 최적의 장소를 섭외한다.", "type": "C" }
    ]
  },
  {
    "id": 260,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "자녀가 성적표를 숨기다 들켰다.",
    "options": [
      { "text": "\"거짓말하는 건 못 참아.\" 엄하게 혼낸다.", "type": "D" },
      { "text": "\"성적이 뭐가 중요해~ 근데 엄마/아빠한테 비밀은 안 돼.\"", "type": "I" },
      { "text": "얼마나 혼날까 무서웠으면 그랬을까 싶어 모른 척 넘어간다.", "type": "S" },
      { "text": "왜 숨겼는지 이유를 묻고 성적 향상 계획을 같이 짠다.", "type": "C" }
    ]
  },
  {
    "id": 261,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "친구들과 여행 가서 길을 잃었다.",
    "options": [
      { "text": "\"이쪽인 것 같아. 따라와.\" 감으로 리드한다.", "type": "D" },
      { "text": "\"지나가던 사람한테 물어보자!\" 넉살 좋게 말을 건다.", "type": "I" },
      { "text": "누군가 길을 찾을 때까지 조용히 기다린다.", "type": "S" },
      { "text": "지도 앱을 켜고 현재 위치와 방향을 정확히 파악한다.", "type": "C" }
    ]
  },
  {
    "id": 262,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "중요한 프로젝트 발표 날, 긴장된다.",
    "options": [
      { "text": "\"나는 최고다.\" 마인드 컨트롤로 자신감을 끌어올린다.", "type": "D" },
      { "text": "청심환을 먹거나 동료들과 농담 따먹기 하며 긴장을 푼다.", "type": "I" },
      { "text": "실수만 하지 말자고 다짐하며 심호흡한다.", "type": "S" },
      { "text": "발표 자료와 대본을 마지막까지 꼼꼼히 점검한다.", "type": "C" }
    ]
  },
  {
    "id": 263,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "배우자가 내 취미 생활(낚시/게임 등)을 반대한다.",
    "options": [
      { "text": "\"내 스트레스 해소법이야. 건드리지 마.\" 강하게 나간다.", "type": "D" },
      { "text": "\"자기야, 같이 해볼래? 재밌어!\" 꼬드긴다.", "type": "I" },
      { "text": "눈치 보여서 몰래 하거나 빈도를 줄인다.", "type": "S" },
      { "text": "취미에 드는 비용과 시간이 가정에 지장을 주지 않음을 증명한다.", "type": "C" }
    ]
  },
  {
    "id": 264,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "새해 목표를 세울 때 스타일은?",
    "options": [
      { "text": "\"임원 승진, 연봉 1억.\" 크고 야심 찬 목표를 세운다.", "type": "D" },
      { "text": "\"행복하게 살기, 여행 많이 가기.\" 즐거운 목표 위주.", "type": "I" },
      { "text": "\"가족 건강, 무탈한 한 해.\" 안정적인 소원.", "type": "S" },
      { "text": "월별, 분기별 세부 실행 계획을 엑셀로 정리한다.", "type": "C" }
    ]
  },
  {
    "id": 265,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "경쟁사에서 스카우트 제의가 왔다.",
    "options": [
      { "text": "연봉과 직급을 파격적으로 올려준다면 뒤도 안 돌아보고 간다.", "type": "D" },
      { "text": "지금 동료들과 정들어서 떠나기 아쉬워 고민한다.", "type": "I" },
      { "text": "새로운 환경에 적응하는 게 두려워 거절한다.", "type": "S" },
      { "text": "이직 시 득실과 회사의 재무 건전성, 비전을 분석한다.", "type": "C" }
    ]
  },
  {
    "id": 266,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "모임에서 내 의견이 묵살당했다.",
    "options": [
      { "text": "기분 나빠서 탈퇴하거나 다시는 안 나간다.", "type": "D" },
      { "text": "뒤풀이 자리에서 \"나 좀 서운해~\"라고 털어놓는다.", "type": "I" },
      { "text": "\"다수결이 그렇다면 따라야지.\" 웃으며 수긍한다.", "type": "S" },
      { "text": "내 제안이 왜 거절당했는지 논리적으로 복기해 본다.", "type": "C" }
    ]
  },
  {
    "id": 267,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "자녀가 게임 중독 증세를 보인다.",
    "options": [
      { "text": "컴퓨터와 게임기를 압수하거나 부숴버린다.", "type": "D" },
      { "text": "\"게임이 그렇게 재밌어? 아빠/엄마도 한 판만!\" 눈높이를 맞춘다.", "type": "I" },
      { "text": "\"적당히 해야지...\" 걱정만 하고 강하게 제지하지 못한다.", "type": "S" },
      { "text": "하루 이용 시간을 정하고 어길 시 페널티를 적용하는 규칙을 만든다.", "type": "C" }
    ]
  },
  {
    "id": 268,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "회사 워크숍으로 등산을 간다.",
    "options": [
      { "text": "누구보다 빨리 정상에 올라가 리더십을 과시한다.", "type": "D" },
      { "text": "올라가면서 동료들과 수다 떨고 간식 나눠 먹는 재미로 간다.", "type": "I" },
      { "text": "힘들지만 뒤처지지 않으려 묵묵히 따라간다.", "type": "S" },
      { "text": "등산 코스 난이도와 소요 시간을 미리 체크하고 준비물을 챙긴다.", "type": "C" }
    ]
  },
  {
    "id": 269,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "중년의 위기(무력감)가 찾아온 것 같다.",
    "options": [
      { "text": "더 큰 목표(창업, 승진)를 세워 스스로를 채찍질한다.", "type": "D" },
      { "text": "옛 친구들을 만나거나 동호회 활동으로 활력을 찾는다.", "type": "I" },
      { "text": "가족과 시간을 보내며 정서적 안정을 취한다.", "type": "S" },
      { "text": "심리학 책을 읽거나 상담을 받으며 내 상태를 분석한다.", "type": "C" }
    ]
  },
  {
    "id": 270,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "명절 선물 준비로 배우자와 의견이 갈린다.",
    "options": [
      { "text": "\"이번엔 이걸로 해. 내 말 들어.\" 독단적으로 결정한다.", "type": "D" },
      { "text": "\"양가 부모님이 좋아하실 만한 거 없을까?\" 의논한다.", "type": "I" },
      { "text": "배우자가 하자는 대로 따르는 게 가정의 평화다.", "type": "S" },
      { "text": "예산 범위 내에서 가성비 좋은 선물 리스트를 뽑아 비교한다.", "type": "C" }
    ]
  },
  {
    "id": 271,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "잘난 척하는 신입 사원을 멘토링 해야 한다.",
    "options": [
      { "text": "\"자네가 뭘 안다고 그래?\" 초반에 기를 꺾어 놓는다.", "type": "D" },
      { "text": "\"열정이 대단하네!\" 칭찬하며 친밀감을 형성한다.", "type": "I" },
      { "text": "불편하지만 꾹 참고 최대한 도와주려 노력한다.", "type": "S" },
      { "text": "업무 지식 테스트를 통해 부족한 부분을 객관적으로 보여준다.", "type": "C" }
    ]
  },
  {
    "id": 272,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "자녀의 대학 등록금 부담이 크다. 어떻게 할까?",
    "options": [
      { "text": "\"네 학비는 네가 벌어라.\" 자립심을 강조하며 대출을 권한다.", "type": "D" },
      { "text": "\"어떻게든 되겠지!\" 긍정적으로 생각하며 일단 보낸다.", "type": "I" },
      { "text": "내 노후 자금을 깨서라도 자녀를 지원한다.", "type": "S" },
      { "text": "장학금 조건과 학자금 대출 이자율을 비교해 최적안을 찾는다.", "type": "C" }
    ]
  },
  {
    "id": 273,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "회사가 다른 기업에 인수 합병(M&A) 된다고 한다.",
    "options": [
      { "text": "새 경영진에게 나를 어필하여 더 높은 자리로 올라갈 기회를 엿본다.", "type": "D" },
      { "text": "회사 분위기가 어떻게 바뀔지 동료들과 소문을 공유한다.", "type": "I" },
      { "text": "구조조정 당할까 봐 불안해하며 최대한 몸을 사린다.", "type": "S" },
      { "text": "합병 후 조직도 변화와 퇴직금 정산 규정을 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 274,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "노안이 와서 돋보기를 써야 할 때가 왔다.",
    "options": [
      { "text": "기능 좋고 비싼 걸로 바로 맞춘다. 불편한 건 딱 질색이다.", "type": "D" },
      { "text": "세련되고 어려 보이는 안경테를 고르는 데 집중한다.", "type": "I" },
      { "text": "나이 듦을 인정하기 싫어 최대한 안 쓰고 버틴다.", "type": "S" },
      { "text": "검안 후 렌즈 도수와 종류별 가격을 비교한다.", "type": "C" }
    ]
  },
  {
    "id": 275,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "관리자로서 직원들의 원격 근무를 어떻게 감독할까?",
    "options": [
      { "text": "수시로 업무 진행 상황을 보고하게 하고 성과로만 평가한다.", "type": "D" },
      { "text": "화상 회의를 자주 열어 얼굴 보고 소통하는 시간을 갖는다.", "type": "I" },
      { "text": "직원들을 믿고 맡기며 자율성을 최대한 존중한다.", "type": "S" },
      { "text": "업무 시간 로그 기록과 메신저 응답 시간을 모니터링한다.", "type": "C" }
    ]
  },
  {
    "id": 276,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "봉사 단체나 비영리 모임에 가입했다.",
    "options": [
      { "text": "운영위원회에 들어가 조직을 이끌고 싶다.", "type": "D" },
      { "text": "자선 행사나 파티를 기획하고 홍보하는 역할을 맡는다.", "type": "I" },
      { "text": "눈에 띄지 않게 뒤에서 궂은일을 도맡아 한다.", "type": "S" },
      { "text": "단체의 회계 장부를 감사하거나 정관을 검토한다.", "type": "C" }
    ]
  },
  {
    "id": 277,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "집수리(리모델링)가 필요하다. 어떻게 할까?",
    "options": [
      { "text": "전문 업체에 맡겨서 빠르고 확실하게 끝낸다.", "type": "D" },
      { "text": "친구들을 불러서 셀프로 하고 고기 구워 먹는다.", "type": "I" },
      { "text": "큰 공사는 부담스러우니 불편해도 참고 산다.", "type": "S" },
      { "text": "유튜브로 시공 방법을 완벽히 숙지한 후 직접 하거나 감독한다.", "type": "C" }
    ]
  },
  {
    "id": 278,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "배우자가 나보다 훨씬 높은 연봉을 받게 되었다.",
    "options": [
      { "text": "자존심 상한다. 나도 더 벌어서 따라잡겠다고 다짐한다.", "type": "D" },
      { "text": "\"우리 집 부자 됐네! 한턱 쏴!\" 진심으로 기뻐하며 자랑한다.", "type": "I" },
      { "text": "배우자가 고생해서 번 돈이니 내가 내조/외조를 더 잘해야겠다.", "type": "S" },
      { "text": "늘어난 소득에 따른 세율 구간 변경과 저축 계획을 수정한다.", "type": "C" }
    ]
  },
  {
    "id": 279,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "스마트폰 사용 시간을 줄이기로 결심했다.",
    "options": [
      { "text": "눈에 안 보이는 곳에 폰을 치워두거나 피처폰으로 바꾼다.", "type": "D" },
      { "text": "SNS 알림이 올 때마다 참지 못하고 확인한다.", "type": "I" },
      { "text": "가족들이 하라고 하니까 억지로 줄이는 척한다.", "type": "S" },
      { "text": "스크린 타임 통계를 매일 확인하며 목표 달성률을 체크한다.", "type": "C" }
    ]
  },
  {
    "id": 280,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "유언장이나 상속 계획을 미리 작성하려고 한다.",
    "options": [
      { "text": "내 재산은 내 뜻대로. 누구에게 얼마 줄지 명확히 지시한다.", "type": "D" },
      { "text": "아직 건강한데 벌써? 기분 나빠서 생각하기 싫다.", "type": "I" },
      { "text": "자식들 간에 싸움 나지 않게 똑같이 나눠준다.", "type": "S" },
      { "text": "변호사와 상담하여 법적 효력이 있는 공증 문서를 만든다.", "type": "C" }
    ]
  },
  {
    "id": 281,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "이웃집 개가 밤마다 짖어서 잠을 못 잔다.",
    "options": [
      { "text": "당장 찾아가서 조용히 시키라고 따진다.", "type": "D" },
      { "text": "엘리베이터에서 만나면 \"강아지가 에너지가 넘치네요\"라고 돌려 말한다.", "type": "I" },
      { "text": "싸우기 싫어서 귀마개를 하고 꾹 참는다.", "type": "S" },
      { "text": "소음 발생 시간과 빈도를 기록해 관리실에 민원을 넣는다.", "type": "C" }
    ]
  },
  {
    "id": 282,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "중요한 업무 미팅 중 배탈이 났다.",
    "options": [
      { "text": "\"잠깐 쉬었다 하시죠.\" 회의를 중단시키고 화장실로 뛴다.", "type": "D" },
      { "text": "식은땀을 흘리면서도 농담하며 분위기를 유지하려 애쓴다.", "type": "I" },
      { "text": "다른 사람들에게 방해될까 봐 끝까지 참는다.", "type": "S" },
      { "text": "가장 자연스럽게 나갈 수 있는 타이밍을 계산한다.", "type": "C" }
    ]
  },
  {
    "id": 283,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "네트워크 파티에서 명함 교환 시간이 되었다.",
    "options": [
      { "text": "가장 영향력 있는 사람에게 직진해서 내 명함을 건넨다.", "type": "D" },
      { "text": "이 사람 저 사람 붙잡고 웃으며 이야기하느라 명함이 모자란다.", "type": "I" },
      { "text": "누군가 먼저 다가와 주길 기다리며 구석에 있는다.", "type": "S" },
      { "text": "받은 명함에 상대방의 특징과 대화 내용을 메모한다.", "type": "C" }
    ]
  },
  {
    "id": 284,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "퇴사했던 직원이 다시 입사하고 싶다고 연락 왔다(부메랑 직원).",
    "options": [
      { "text": "능력이 확실하면 OK. 바로 현입 투입이다.", "type": "D" },
      { "text": "\"반갑다! 술 한잔하자!\" 일단 만나서 회포를 푼다.", "type": "I" },
      { "text": "기존 팀원들이 불편해하지 않을까 걱정한다.", "type": "S" },
      { "text": "퇴사 사유와 재입사 시 예상되는 성과를 분석한다.", "type": "C" }
    ]
  },
  {
    "id": 285,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "프랜차이즈 창업 설명회에 갔다.",
    "options": [
      { "text": "본사 대표에게 수익률 보장에 대해 집요하게 묻는다.", "type": "D" },
      { "text": "성공 사례를 들으며 나도 대박 사장이 된 상상을 한다.", "type": "I" },
      { "text": "망하면 어떡하지... 불안해서 설명만 듣고 온다.", "type": "S" },
      { "text": "정보공개서를 요청하고 폐점률과 평균 매출을 분석한다.", "type": "C" }
    ]
  },
  {
    "id": 286,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "피부 시술이나 성형을 고민 중이다.",
    "options": [
      { "text": "효과가 확실하고 회복 빠른 걸로 제일 비싼 거 받는다.", "type": "D" },
      { "text": "주변에 \"나 뭐 할까?\" 물어보고 추천받은 병원으로 간다.", "type": "I" },
      { "text": "부작용이 무서워서 상담만 받고 그냥 온다.", "type": "S" },
      { "text": "병원별 후기와 의사 경력을 꼼꼼히 검색한다.", "type": "C" }
    ]
  },
  {
    "id": 287,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "가계 예산이 빠듯한데 배우자가 여행을 가자고 한다.",
    "options": [
      { "text": "\"돈 없어. 안 돼.\" 현실적인 이유로 딱 자른다.", "type": "D" },
      { "text": "\"일단 카드 긁고 나중에 갚자! 욜로!\" 간다.", "type": "I" },
      { "text": "걱정되지만 배우자가 원하니까 저렴한 곳으로 알아본다.", "type": "S" },
      { "text": "비상금 통장 잔고와 다음 달 카드 값을 계산해 본다.", "type": "C" }
    ]
  },
  {
    "id": 288,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "자녀가 친구와 창업하겠다며 투자를 부탁한다.",
    "options": [
      { "text": "\"사업 계획서 가져와. 투자 가치 있으면 준다.\" 냉정하게 평가.", "type": "D" },
      { "text": "\"우리 아들/딸 믿어! 대박 나면 엄마/아빠 차 바꿔줘!\" 지원한다.", "type": "I" },
      { "text": "사업하다 빚질까 봐 무조건 말린다.", "type": "S" },
      { "text": "동업 계약서 작성 여부와 시장성을 꼼꼼히 따진다.", "type": "C" }
    ]
  },
  {
    "id": 289,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "홀로 되신 부모님을 모시는 문제로 형제간 회의를 한다.",
    "options": [
      { "text": "\"내가 모실 테니 유산은 내가 더 받겠다.\" 주도권을 잡는다.", "type": "D" },
      { "text": "\"우리 다 같이 힘을 합쳐보자!\" 감정에 호소한다.", "type": "I" },
      { "text": "형제들 의견에 따르겠다며 조용히 있는다.", "type": "S" },
      { "text": "각자의 소득 수준과 거주 환경을 고려해 분담금을 계산한다.", "type": "C" }
    ]
  },
  {
    "id": 290,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "동창회에 나가는데 외모가 예전 같지 않아 신경 쓰인다.",
    "options": [
      { "text": "명품이나 좋은 차로 내 성공을 과시해서 커버한다.", "type": "D" },
      { "text": "입담과 유머로 분위기를 휘어잡아 외모 따위 잊게 만든다.", "type": "I" },
      { "text": "구석자리에 앉아 눈에 띄지 않게 조용히 있는다.", "type": "S" },
      { "text": "가장 날씬해 보이고 단정한 옷을 골라 입고 간다.", "type": "C" }
    ]
  },
  {
    "id": 291,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "번아웃이 와서 안식월(장기 휴가)을 쓰고 싶다.",
    "options": [
      { "text": "상사에게 당당하게 휴가를 요구하고 안 되면 그만둔다.", "type": "D" },
      { "text": "동료들에게 \"나 진짜 쓰러질 것 같아\"라며 소문낸다.", "type": "I" },
      { "text": "눈치 보여서 말도 못 꺼내고 병만 키운다.", "type": "S" },
      { "text": "회사 내규의 휴직 규정을 찾아보고 신청서를 작성한다.", "type": "C" }
    ]
  },
  {
    "id": 292,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "오랫동안 쓰던 브랜드가 단종되어 바꿀 때가 되었다.",
    "options": [
      { "text": "가장 유명하고 잘 팔리는 1위 브랜드로 갈아탄다.", "type": "D" },
      { "text": "광고 모델이 마음에 들거나 디자인이 예쁜 걸 산다.", "type": "I" },
      { "text": "익숙한 게 좋은데... 비슷한 걸 찾을 때까지 헤맨다.", "type": "S" },
      { "text": "성분과 가격을 비교 분석해 가성비 최고의 대체품을 찾는다.", "type": "C" }
    ]
  },
  {
    "id": 293,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "집안에 쌓인 물건들을 정리(미니멀 라이프)하려고 한다.",
    "options": [
      { "text": "1년 안 쓴 건 다 갖다 버린다. 과감하게 정리.", "type": "D" },
      { "text": "추억이 깃든 물건이라 보면서 옛날 생각하느라 정리 못 한다.", "type": "I" },
      { "text": "버렸다가 나중에 필요할까 봐 다시 넣어둔다.", "type": "S" },
      { "text": "중고 거래 시세가 있는 물건은 팔고 나머지는 분류해 버린다.", "type": "C" }
    ]
  },
  {
    "id": 294,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "입사 동기가 나의 상사가 되었다.",
    "options": [
      { "text": "능력으로 인정받아 나도 빨리 승진하겠다고 자극받는다.", "type": "D" },
      { "text": "\"팀장님~\" 하면서 공적인 자리 외엔 친구로 지낸다.", "type": "I" },
      { "text": "불편해질까 봐 거리를 두고 깍뜻하게 대한다.", "type": "S" },
      { "text": "감정을 배제하고 철저하게 직급에 맞춰 업무적으로 대한다.", "type": "C" }
    ]
  },
  {
    "id": 295,
    "category": "self_development",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "최신 유행하는 IT 기기나 앱을 배워야 한다.",
    "options": [
      { "text": "이게 내 업무에 도움 되나? 도움 되면 배우고 아니면 만다.", "type": "D" },
      { "text": "남들 다 하니까 나도 뒤처지기 싫어서 일단 깔아본다.", "type": "I" },
      { "text": "자녀나 젊은 직원에게 대신 해달라고 부탁한다.", "type": "S" },
      { "text": "매뉴얼이나 사용법 영상을 정독하고 기능을 익힌다.", "type": "C" }
    ]
  },
  {
    "id": 296,
    "category": "work_career",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "대중 앞에서 연설이나 강의를 하게 되었다.",
    "options": [
      { "text": "청중을 장악하고 카리스마 있게 내 주장을 펼친다.", "type": "D" },
      { "text": "적절한 유머와 제스처로 청중을 웃게 만든다.", "type": "I" },
      { "text": "너무 떨려서 원고만 보고 읽는다.", "type": "S" },
      { "text": "준비한 자료와 통계 수치를 정확하게 전달하는 데 집중한다.", "type": "C" }
    ]
  },
  {
    "id": 297,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "자동차 접촉 사고가 났다. 상대방 과실이 커 보인다.",
    "options": [
      { "text": "\"운전 똑바로 안 해요?\" 목소리 높여 기선 제압한다.", "type": "D" },
      { "text": "당황해서 어쩔 줄 몰라 하며 주변에 도움을 청한다.", "type": "I" },
      { "text": "상대방이 화내면 무서워서 보험사 올 때까지 차 안에 있는다.", "type": "S" },
      { "text": "사진 찍고 블랙박스 확보하고 보험사에 사고 접수한다.", "type": "C" }
    ]
  },
  {
    "id": 298,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "부모님이 돌아가시고 유품을 정리해야 한다.",
    "options": [
      { "text": "슬프지만 빨리 처리하고 일상으로 복귀한다.", "type": "D" },
      { "text": "물건 하나하나에 담긴 추억 때문에 울다가 정리를 못 한다.", "type": "I" },
      { "text": "마음의 준비가 안 돼서 그대로 둔다.", "type": "S" },
      { "text": "유품 목록을 작성하고 보관할 것과 처분할 것을 분류한다.", "type": "C" }
    ]
  },
  {
    "id": 299,
    "category": "family_marriage",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "반려동물을 키우기로 했는데 훈련이 안 되어 말썽이다.",
    "options": [
      { "text": "엄격하게 혼내서 서열 정리를 확실히 한다.", "type": "D" },
      { "text": "\"아구 귀여워~ 그럴 수도 있지.\" 오냐오냐 키운다.", "type": "I" },
      { "text": "이웃에게 피해 줄까 봐 전전긍긍하며 스트레스받는다.", "type": "S" },
      { "text": "전문 훈련 영상을 보며 반복 학습을 시킨다.", "type": "C" }
    ]
  },
  {
    "id": 300,
    "category": "social_gathering",
    "target_age_min": 39,
    "target_age_max": 49,
    "question": "은퇴하는 선배의 송별회를 준비해야 한다.",
    "options": [
      { "text": "화려하고 성대한 파티를 기획해 선배의 기를 살려준다.", "type": "D" },
      { "text": "롤링페이퍼나 영상 편지를 준비해 감동을 준다.", "type": "I" },
      { "text": "조촐하게 친한 사람들끼리 식사 자리를 마련한다.", "type": "S" },
      { "text": "참석 인원과 예산을 확인하고 선물과 식당을 예약한다.", "type": "C" }
    ]
  },
  {
    "id": 301,
    "category": "work_career",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "은퇴 후 '제2의 인생'을 계획할 때, 당신이 가장 선호하는 방향은?",
    "options": [
      { "text": "내 사업이나 창업을 통해 CEO로서 주도적인 삶을 이어간다.", "type": "D" },
      { "text": "그동안 못 만났던 사람들과 교류하며 강연이나 멘토링을 한다.", "type": "I" },
      { "text": "가족과 함께 전원주택이나 귀농을 하여 평화로운 여생을 보낸다.", "type": "S" },
      { "text": "전문 지식을 활용할 수 있는 자문역이나 컨설턴트로 활동한다.", "type": "C" }
    ]
  },
  {
    "id": 302,
    "category": "work_career",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "재취업 면접에서 면접관이 나보다 훨씬 어린 팀장이다. 당신의 태도는?",
    "options": [
      { "text": "나의 과거 성과와 리더십 경험을 강조하며 능력을 입증한다.", "type": "D" },
      { "text": "편안한 분위기를 만들며 친화력과 소통 능력을 어필한다.", "type": "I" },
      { "text": "조직에 융화되어 서포터 역할을 잘할 수 있음을 겸손하게 말한다.", "type": "S" },
      { "text": "업무 전문성과 노하우를 구체적인 사례를 들어 논리적으로 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 303,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀가 결혼 자금 지원을 요청했다. 나의 입장은?",
    "options": [
      { "text": "\"내가 정한 한도 내에서만 지원한다.\" 경제적 주도권을 쥔다.", "type": "D" },
      { "text": "\"경사인데 당연히 도와줘야지!\" 주변에 자랑하며 기쁘게 지원한다.", "type": "I" },
      { "text": "내 노후가 걱정되지만 자식이 원하니 무리해서라도 해준다.", "type": "S" },
      { "text": "증여세 문제와 나의 노후 자금 흐름을 계산해 보고 결정한다.", "type": "C" }
    ]
  },
  {
    "id": 304,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "동창회나 모임에서 '건배사'를 제안받았다.",
    "options": [
      { "text": "짧고 강렬하게, 좌중을 압도하는 구호를 외친다.", "type": "D" },
      { "text": "유행어나 재치 있는 멘트로 분위기를 띄우며 길게 덕담한다.", "type": "I" },
      { "text": "남들이 다 하는 무난하고 점잖은 멘트로 마무리한다.", "type": "S" },
      { "text": "미리 준비해 둔 품격 있는 명언이나 사자성어를 인용한다.", "type": "C" }
    ]
  },
  {
    "id": 305,
    "category": "self_development",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "퇴직금이나 목돈을 투자해야 할 때, 당신의 스타일은?",
    "options": [
      { "text": "부동산 개발이나 비상장 주식 등 고수익을 노리는 공격적 투자.", "type": "D" },
      { "text": "지인들이 좋다고 추천하는 곳이나 요즘 뜨는 분야에 투자.", "type": "I" },
      { "text": "원금이 보장되는 예금이나 연금 위주의 안전한 관리.", "type": "S" },
      { "text": "포트폴리오를 분산하고 세금 혜택과 수수료를 꼼꼼히 따진다.", "type": "C" }
    ]
  },
  {
    "id": 306,
    "category": "work_career",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "회사에서 명예퇴직 신청을 받고 있다. 분위기가 어수선하다.",
    "options": [
      { "text": "더 좋은 조건으로 협상하거나 창업할 기회로 삼는다.", "type": "D" },
      { "text": "동료들과 정보를 교환하며 서로의 거취를 걱정하고 위로한다.", "type": "I" },
      { "text": "최대한 버티며 정년까지 조용히 다니기를 희망한다.", "type": "S" },
      { "text": "퇴직금 규모와 실업 급여, 재취업 가능성을 냉정하게 분석한다.", "type": "C" }
    ]
  },
  {
    "id": 307,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "배우자가 갱년기로 인해 감정 기복이 심해졌다.",
    "options": [
      { "text": "\"병원에 가보든가 운동을 해.\" 해결책을 제시하며 답답해한다.", "type": "D" },
      { "text": "\"우리 여보 힘들지? 여행 갈까?\" 기분을 풀어주려 노력한다.", "type": "I" },
      { "text": "묵묵히 옆에서 맞춰주며 힘든 시기가 지나가길 기다린다.", "type": "S" },
      { "text": "갱년기 증상에 좋은 영양제와 식단을 검색해서 챙겨준다.", "type": "C" }
    ]
  },
  {
    "id": 308,
    "category": "work_career",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "과거 부하직원이었던 사람이 거래처 갑(甲)으로 나타났다.",
    "options": [
      { "text": "과거의 관계는 잊고 비즈니스 파트너로서 당당하게 요구한다.", "type": "D" },
      { "text": "\"아이고 김 팀장! 반갑네!\" 옛 정을 과시하며 친근하게 다가간다.", "type": "I" },
      { "text": "자존심이 상하지만 티 내지 않고 깍뜻하게 대우해 준다.", "type": "S" },
      { "text": "공적인 관계임을 인지하고 업무 매뉴얼대로 실수 없이 응대한다.", "type": "C" }
    ]
  },
  {
    "id": 309,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "지인의 자녀 결혼식에 참석했다. 축의금은 얼마나 할까?",
    "options": [
      { "text": "나의 사회적 지위에 걸맞게 남들보다 넉넉하게 낸다.", "type": "D" },
      { "text": "나중에 우리 아이 결혼식에 올 사람이니 섭섭지 않게 낸다.", "type": "I" },
      { "text": "남들 하는 만큼, 평균적인 금액에 맞춰서 낸다.", "type": "S" },
      { "text": "장부(받은 내역)를 확인하고 그쪽에서 했던 만큼 정확히 낸다.", "type": "C" }
    ]
  },
  {
    "id": 310,
    "category": "self_development",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "건강을 위해 운동을 시작하려고 한다. 어떤 종목을 선택할까?",
    "options": [
      { "text": "골프나 등산 등 성취감이 있고 경쟁도 가능한 운동.", "type": "D" },
      { "text": "댄스 스포츠나 동호회 활동 등 사람들과 어울리는 운동.", "type": "I" },
      { "text": "걷기나 맨손 체조 등 무리 가지 않고 꾸준히 할 수 있는 것.", "type": "S" },
      { "text": "내 몸 상태에 맞는 운동 처방을 받아 체계적으로 관리한다.", "type": "C" }
    ]
  },
  {
    "id": 311,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "주말에 집에서 쉬고 싶은데, 다 커버린 자녀들이 손주를 맡기고 갔다.",
    "options": [
      { "text": "\"힘들어. 다음부턴 미리 말해.\" 확실하게 의사 표현을 한다.", "type": "D" },
      { "text": "\"아이고 내 새끼들 왔어?\" 힘들어도 아이들과 신나게 놀아준다.", "type": "I" },
      { "text": "쉬고 싶지만 자식들이 힘들까 봐 군말 없이 봐준다.", "type": "S" },
      { "text": "돌보는 시간과 규칙을 정하고, 필요한 육아 용품을 요구한다.", "type": "C" }
    ]
  },
  {
    "id": 312,
    "category": "work_career",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "새로운 디지털 업무 도구(AI, 협업 툴) 도입이 결정되었다.",
    "options": [
      { "text": "생산성이 오른다면 내가 먼저 배워서 직원들을 독려한다.", "type": "D" },
      { "text": "젊은 직원들에게 \"이거 어떻게 하는 거야?\" 물으며 배운다.", "type": "I" },
      { "text": "익숙한 방식이 편한데... 변화에 적응하는 것이 부담스럽다.", "type": "S" },
      { "text": "매뉴얼을 정독하고 기능과 보안성, 효율성을 검토한다.", "type": "C" }
    ]
  },
  {
    "id": 313,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "은퇴 후 거주지를 결정해야 한다. 당신의 우선순위는?",
    "options": [
      { "text": "내가 활동하기 편하고 사회적 인프라가 잘 갖춰진 도심.", "type": "D" },
      { "text": "친구들이 가깝고 문화생활을 즐길 수 있는 곳.", "type": "I" },
      { "text": "자녀들 집 근처나 익숙한 동네에서 계속 산다.", "type": "S" },
      { "text": "병원 접근성, 관리비, 집값 추이를 분석하여 결정한다.", "type": "C" }
    ]
  },
  {
    "id": 314,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "오랜만에 만난 동창이 다단계나 보험 가입을 권유한다.",
    "options": [
      { "text": "\"친구끼리 이런 거 하지 말자.\" 단호하게 거절한다.", "type": "D" },
      { "text": "거절하기 미안해서 \"생각해 볼게\"라며 여지를 남긴다.", "type": "I" },
      { "text": "난처하지만 친구 사정을 들어주며 하나 정도는 해준다.", "type": "S" },
      { "text": "상품의 수익 구조와 약관을 꼼꼼히 따져보고 판단한다.", "type": "C" }
    ]
  },
  {
    "id": 315,
    "category": "work_career",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "임원 승진에서 누락되었다. 당신의 반응은?",
    "options": [
      { "text": "납득할 수 없다. 인사권자를 찾아가 이유를 묻고 따진다.", "type": "D" },
      { "text": "술자리에서 지인들에게 섭섭함을 토로하며 푼다.", "type": "I" },
      { "text": "속상하지만 내 운명이려니 하고 받아들인다.", "type": "S" },
      { "text": "나의 성과 데이터와 평가 기준을 비교 분석해 본다.", "type": "C" }
    ]
  },
  {
    "id": 316,
    "category": "self_development",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "노화로 인해 체력이 예전 같지 않음을 느낀다.",
    "options": [
      { "text": "\"나이는 숫자에 불과해.\" 고강도 운동으로 체력을 키운다.", "type": "D" },
      { "text": "좋다는 영양제는 다 사 먹고, 주변에 건강 정보를 공유한다.", "type": "I" },
      { "text": "무리하지 않고 산책이나 명상으로 안정을 취한다.", "type": "S" },
      { "text": "건강검진 수치를 바탕으로 식단과 운동 계획을 수정한다.", "type": "C" }
    ]
  },
  {
    "id": 317,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "배우자와 은퇴 후 생활비 문제로 의견이 갈린다.",
    "options": [
      { "text": "\"내가 알아서 할 테니 당신은 따르기만 해.\" 주도권 고수.", "type": "D" },
      { "text": "\"어떻게든 되겠지! 즐겁게 살자.\" 낙관적으로 설득한다.", "type": "I" },
      { "text": "배우자의 불안함을 이해하고 지출을 줄이기로 합의한다.", "type": "S" },
      { "text": "예상 연금 수령액과 지출 내역을 엑셀로 정리해 보여준다.", "type": "C" }
    ]
  },
  {
    "id": 318,
    "category": "work_career",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "재취업한 직장에서 단순 반복 업무만 시킨다.",
    "options": [
      { "text": "상사에게 내 경력에 맞는 더 중요한 업무를 달라고 요구한다.", "type": "D" },
      { "text": "동료들과 어울리며 일의 지루함을 달랜다.", "type": "I" },
      { "text": "주어진 일에 감사하며 묵묵히 수행한다.", "type": "S" },
      { "text": "업무 프로세스를 분석하여 효율적으로 개선할 방법을 제안한다.", "type": "C" }
    ]
  },
  {
    "id": 319,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "모임 장소를 정해야 하는데 의견이 통일되지 않는다.",
    "options": [
      { "text": "\"그럼 이번엔 여기로 합시다.\" 내가 결정하고 통보한다.", "type": "D" },
      { "text": "\"다들 뭐 먹고 싶어? 투표할까?\" 분위기를 띄운다.", "type": "I" },
      { "text": "다수의 의견이나 목소리 큰 사람의 의견을 따른다.", "type": "S" },
      { "text": "회비 예산과 위치, 주차 여부를 고려해 3곳을 추려 제안한다.", "type": "C" }
    ]
  },
  {
    "id": 320,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "성인이 된 자녀가 독립하지 않고 얹혀살겠다고 한다 (캥거루족).",
    "options": [
      { "text": "\"생활비 내고 규칙 지켜. 아니면 나가.\" 단호하게 말한다.", "type": "D" },
      { "text": "\"그래, 같이 살면 좋지 뭐.\" 반기며 친구처럼 지낸다.", "type": "I" },
      { "text": "내 자유 시간은 줄겠지만 자식 챙겨주는 게 마음 편하다.", "type": "S" },
      { "text": "독립 계획과 저축 목표를 세우게 하고 기한을 정한다.", "type": "C" }
    ]
  },
  {
    "id": 321,
    "category": "work_career",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "후배가 리더인 팀에서 일하게 되었다. 후배가 지시를 내린다.",
    "options": [
      { "text": "지시가 합리적이지 않으면 \"이건 아니지\"라며 직언한다.", "type": "D" },
      { "text": "\"팀장님, 잘 부탁해!\" 농담하며 어색한 분위기를 푼다.", "type": "I" },
      { "text": "조직의 위계질서를 존중하여 깍뜻하게 지시를 따른다.", "type": "S" },
      { "text": "업무 지시의 내용과 기한을 명확히 확인하고 수행한다.", "type": "C" }
    ]
  },
  {
    "id": 322,
    "category": "self_development",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자격증 취득을 목표로 공부를 시작했다.",
    "options": [
      { "text": "최단기간 합격을 목표로 스파르타식으로 몰아붙인다.", "type": "D" },
      { "text": "학원이나 스터디 모임에 나가 사람들과 어울리며 공부한다.", "type": "I" },
      { "text": "천천히 꾸준하게, 포기하지 않고 매일 조금씩 한다.", "type": "S" },
      { "text": "기출문제를 분석하고 오답 노트를 만들며 체계적으로 한다.", "type": "C" }
    ]
  },
  {
    "id": 323,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "부모님 부양 문제로 형제들과 회의를 하게 되었다.",
    "options": [
      { "text": "\"내가 모실 테니 유산 상속은 이렇게 하자.\" 주도적으로 정리.", "type": "D" },
      { "text": "\"우리가 서로 조금씩만 더 신경 쓰자.\" 감정에 호소한다.", "type": "I" },
      { "text": "다른 형제들의 의견을 경청하고 대세에 따른다.", "type": "S" },
      { "text": "각자의 소득과 상황을 고려해 병원비 분담 비율을 계산한다.", "type": "C" }
    ]
  },
  {
    "id": 324,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "모임 회비를 관리하는 총무를 맡아달라는 부탁을 받았다.",
    "options": [
      { "text": "\"총무는 시키지 마. 회장이라면 몰라도.\" 거절한다.", "type": "D" },
      { "text": "\"내가 하면 적자 날 텐데? 하하.\" 농담하며 피한다.", "type": "I" },
      { "text": "아무도 할 사람이 없다면 내가 희생해서 맡는다.", "type": "S" },
      { "text": "엑셀로 투명하게 관리할 자신이 있으니 수락한다.", "type": "C" }
    ]
  },
  {
    "id": 325,
    "category": "work_career",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "과거의 성공 방식이 더 이상 통하지 않는다는 것을 깨달았다.",
    "options": [
      { "text": "새로운 방식을 빠르게 찾아내어 다시 도전한다.", "type": "D" },
      { "text": "주변의 젊은 친구들에게 조언을 구하고 도움을 요청한다.", "type": "I" },
      { "text": "자신감이 떨어지고 위축되어 현상 유지만 하려 한다.", "type": "S" },
      { "text": "실패 원인을 분석하고 데이터를 기반으로 전략을 수정한다.", "type": "C" }
    ]
  },
  {
    "id": 326,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "배우자가 황혼 이혼이나 졸혼 이야기를 꺼냈다.",
    "options": [
      { "text": "\"무슨 소리야? 절대 안 돼.\" 강하게 반대하며 화를 낸다.", "type": "D" },
      { "text": "\"내가 더 잘할게. 우리 좋았잖아~\" 대화로 풀려 한다.", "type": "I" },
      { "text": "큰 충격을 받지만 배우자의 뜻을 존중해야 하나 고민한다.", "type": "S" },
      { "text": "재산 분할과 이후의 삶에 대한 현실적인 문제를 따져본다.", "type": "C" }
    ]
  },
  {
    "id": 327,
    "category": "self_development",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "은퇴 후 취미 생활을 하나 시작한다면?",
    "options": [
      { "text": "마라톤, 철인 3종 등 나의 한계에 도전하는 것.", "type": "D" },
      { "text": "악기 연주나 노래 교실 등 무대에 서거나 즐기는 것.", "type": "I" },
      { "text": "서예, 독서, 원예 등 혼자서 조용히 즐길 수 있는 것.", "type": "S" },
      { "text": "목공, 도예 등 기술을 배우고 결과물을 남기는 것.", "type": "C" }
    ]
  },
  {
    "id": 328,
    "category": "work_career",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "재취업한 곳의 업무 시스템이 비효율적이다.",
    "options": [
      { "text": "사장에게 직접 건의하여 시스템 개편을 주도한다.", "type": "D" },
      { "text": "불편함을 토로하며 동료들의 공감을 얻는다.", "type": "I" },
      { "text": "신입의 입장이니 불평 없이 기존 방식에 맞춘다.", "type": "S" },
      { "text": "기존 방식과 개선안의 시간/비용 차이를 문서로 정리한다.", "type": "C" }
    ]
  },
  {
    "id": 329,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "친구들과 여행 중 길을 잘못 들어 헤매게 되었다.",
    "options": [
      { "text": "\"이쪽인 것 같아. 날 따라와.\" 감을 믿고 리드한다.", "type": "D" },
      { "text": "\"지나가던 사람한테 물어보자!\" 넉살 좋게 말을 건다.", "type": "I" },
      { "text": "누군가 해결책을 낼 때까지 조용히 기다린다.", "type": "S" },
      { "text": "지도 앱을 켜고 현재 위치와 목적지를 정확히 파악한다.", "type": "C" }
    ]
  },
  {
    "id": 330,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀가 취업난으로 힘들어하고 있다. 당신의 조언은?",
    "options": [
      { "text": "\"눈높이를 낮춰서 어디든 들어가서 경력부터 쌓아.\"", "type": "D" },
      { "text": "\"괜찮아, 다 잘 될 거야! 아빠/엄마 친구한테 물어볼까?\"", "type": "I" },
      { "text": "\"조급해하지 마. 집에서 쉬면서 천천히 준비해.\"", "type": "S" },
      { "text": "지원하려는 직무의 전망과 자녀의 스펙을 객관적으로 분석해 준다.", "type": "C" }
    ]
  },
  {
    "id": 331,
    "category": "work_career",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "동년배들보다 내가 더 젊고 능력 있다고 느낄 때?",
    "options": [
      { "text": "아직 현역에서 중요한 프로젝트를 리딩하고 있을 때.", "type": "D" },
      { "text": "주변에서 \"역시 아직 살아있네!\"라고 칭찬해 줄 때.", "type": "I" },
      { "text": "큰 병 없이 가족들과 건강하게 지내고 있을 때.", "type": "S" },
      { "text": "새로운 기술이나 트렌드를 놓치지 않고 따라가고 있을 때.", "type": "C" }
    ]
  },
  {
    "id": 332,
    "category": "self_development",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "과거를 돌아보며 자서전이나 회고록을 쓴다면?",
    "options": [
      { "text": "나의 성취와 도전, 성공 스토리를 중심으로 쓴다.", "type": "D" },
      { "text": "재미있었던 에피소드와 사람들과의 추억을 쓴다.", "type": "I" },
      { "text": "가족에 대한 사랑과 감사함을 담아 쓴다.", "type": "S" },
      { "text": "연대기별 사실 관계와 교훈을 정리하여 쓴다.", "type": "C" }
    ]
  },
  {
    "id": 333,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "모임에서 정치 이야기로 논쟁이 붙었다.",
    "options": [
      { "text": "\"내 말이 맞아.\" 목소리를 높여 상대방을 제압하려 한다.", "type": "D" },
      { "text": "\"좋은 게 좋은 거지~ 딴 얘기 하자.\" 화제를 돌린다.", "type": "I" },
      { "text": "불편해서 슬그머니 자리를 피하거나 입을 다문다.", "type": "S" },
      { "text": "상대방 논리의 모순점을 팩트 기반으로 지적한다.", "type": "C" }
    ]
  },
  {
    "id": 334,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "은퇴 후 부부가 24시간 붙어 있게 되었다.",
    "options": [
      { "text": "각자의 방이나 공간을 정해 서로 간섭하지 않기로 한다.", "type": "D" },
      { "text": "함께 취미 생활을 하거나 여행을 다니며 시간을 보낸다.", "type": "I" },
      { "text": "배우자가 불편해할까 봐 눈치를 보며 맞추려 한다.", "type": "S" },
      { "text": "가사 분담표와 하루 일과표를 짜서 규칙적으로 생활한다.", "type": "C" }
    ]
  },
  {
    "id": 335,
    "category": "work_career",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "후배가 창업을 한다며 조언을 구한다.",
    "options": [
      { "text": "\"할 거면 제대로 해. 어설프게 하면 망해.\" 강하게 충고.", "type": "D" },
      { "text": "\"자네라면 잘할 거야! 내가 응원할게.\" 용기를 준다.", "type": "I" },
      { "text": "\"요즘 경기가 안 좋은데... 신중하게 생각해 봐.\" 걱정한다.", "type": "S" },
      { "text": "사업 계획서의 수익 모델과 리스크 요인을 분석해 준다.", "type": "C" }
    ]
  },
  {
    "id": 336,
    "category": "self_development",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "나의 유산 상속 계획을 세운다면?",
    "options": [
      { "text": "내 뜻을 잘 따르는 자녀에게 더 많이 주겠다고 공표한다.", "type": "D" },
      { "text": "아직 건강한데 벌써? 나중에 생각하기로 미룬다.", "type": "I" },
      { "text": "자녀들 간에 불화가 없도록 똑같이 나눠준다.", "type": "S" },
      { "text": "법적 효력이 있는 유언장을 작성하고 공증을 받아둔다.", "type": "C" }
    ]
  },
  {
    "id": 337,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "동호회 회장이 독단적으로 운영하여 불만이 많다.",
    "options": [
      { "text": "총회에서 공개적으로 문제를 제기하고 회장 교체를 요구한다.", "type": "D" },
      { "text": "뒤풀이 자리에서 회원들과 뒷담화를 하며 불만을 푼다.", "type": "I" },
      { "text": "시끄러워지는 게 싫어서 조용히 탈퇴한다.", "type": "S" },
      { "text": "회칙 위반 사항을 정리하여 운영위원회에 제출한다.", "type": "C" }
    ]
  },
  {
    "id": 338,
    "category": "work_career",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "예전 직장 동료들이 모인 단톡방에서 나의 역할은?",
    "options": [
      { "text": "모임 날짜를 정하고 회비를 걷는 등 주도적으로 이끈다.", "type": "D" },
      { "text": "재미있는 글이나 사진을 올리며 분위기 메이커 역할을 한다.", "type": "I" },
      { "text": "다른 사람들의 글에 리액션만 열심히 해준다.", "type": "S" },
      { "text": "필요한 정보만 확인하고 글은 잘 쓰지 않는다.", "type": "C" }
    ]
  },
  {
    "id": 339,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "명절에 자녀들이 바빠서 못 온다고 한다.",
    "options": [
      { "text": "\"알았다. 일이나 열심히 해라.\" 쿨하게 넘긴다.", "type": "D" },
      { "text": "서운함을 감추지 못하고 \"그래도 얼굴은 봐야지\"라고 한다.", "type": "I" },
      { "text": "\"괜찮아, 너희끼리 잘 쉬어.\" 말은 그렇게 해도 속은 쓰리다.", "type": "S" },
      { "text": "용돈이나 선물만 보내라고 계좌번호를 알려준다.", "type": "C" }
    ]
  },
  {
    "id": 340,
    "category": "self_development",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "갑자기 큰 병에 걸렸다는 진단을 받았다.",
    "options": [
      { "text": "\"반드시 이겨낸다.\" 강한 의지로 투병 생활에 돌입한다.", "type": "D" },
      { "text": "지인들에게 알리고 위로와 응원을 받으며 힘을 얻는다.", "type": "I" },
      { "text": "가족들에게 짐이 될까 봐 걱정부터 앞선다.", "type": "S" },
      { "text": "최고의 전문의와 치료법을 검색하고 생존율을 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 341,
    "category": "work_career",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "재취업을 위해 이력서를 다시 써야 한다.",
    "options": [
      { "text": "나의 화려한 성과와 리더십 경험을 굵직하게 강조한다.", "type": "D" },
      { "text": "인맥과 평판, 대인관계 능력을 부각해서 쓴다.", "type": "I" },
      { "text": "성실함과 조직 적응력을 중심으로 겸손하게 쓴다.", "type": "S" },
      { "text": "경력 기술서를 연대기 순으로 상세하고 정확하게 작성한다.", "type": "C" }
    ]
  },
  {
    "id": 342,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "식당에서 종업원의 서비스가 불친절하다.",
    "options": [
      { "text": "매니저를 불러 즉시 시정을 요구하고 사과를 받는다.", "type": "D" },
      { "text": "기분 나쁘지만 동행한 사람들을 위해 웃으며 넘긴다.", "type": "I" },
      { "text": "종업원이 바빠서 그랬겠지 하고 이해하려 한다.", "type": "S" },
      { "text": "해당 식당의 리뷰에 구체적인 사실을 남겨 평가한다.", "type": "C" }
    ]
  },
  {
    "id": 343,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀가 손주 교육 문제로 조언을 구한다.",
    "options": [
      { "text": "\"내가 키워봐서 아는데, 이렇게 해야 해.\" 내 방식을 고집.", "type": "D" },
      { "text": "\"요즘 애들은 뭘 좋아해?\" 아이가 원하는 대로 해주라 한다.", "type": "I" },
      { "text": "\"너희가 알아서 잘 하겠지.\" 자녀의 교육관을 존중한다.", "type": "S" },
      { "text": "관련 육아 서적이나 전문가 칼럼을 찾아서 보내준다.", "type": "C" }
    ]
  },
  {
    "id": 344,
    "category": "work_career",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "은퇴식을 앞두고 있다. 어떤 은퇴식을 원하는가?",
    "options": [
      { "text": "나의 업적을 기리는 성대하고 화려한 행사.", "type": "D" },
      { "text": "많은 동료들이 모여 웃고 즐기는 파티 같은 행사.", "type": "I" },
      { "text": "가까운 동료들과 조촐하게 식사하며 마무리하는 자리.", "type": "S" },
      { "text": "형식적인 행사보다는 조용히 짐을 싸서 나가고 싶다.", "type": "C" }
    ]
  },
  {
    "id": 345,
    "category": "self_development",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "유튜브 채널을 운영해 볼까 생각 중이다.",
    "options": [
      { "text": "전문 지식이나 정치 논평 등 내 주장을 펼치는 채널.", "type": "D" },
      { "text": "일상 브이로그나 여행 등 소통하고 즐기는 채널.", "type": "I" },
      { "text": "자신이 없어 망설이다가 남들이 하는 거 구경만 한다.", "type": "S" },
      { "text": "채널 주제와 타겟층, 편집 기술을 먼저 공부한다.", "type": "C" }
    ]
  },
  {
    "id": 346,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "동창회에서 누군가 자신의 성공을 지나치게 자랑한다.",
    "options": [
      { "text": "\"그래서 결론이 뭐야?\" 말을 자르거나 더 큰 성공으로 누른다.", "type": "D" },
      { "text": "\"와~ 대단하다! 한턱 쏴!\" 맞장구치며 분위기를 띄운다.", "type": "I" },
      { "text": "부럽기도 하고 배도 아프지만 겉으로는 축하해 준다.", "type": "S" },
      { "text": "그 친구의 말이 사실인지 속으로 따져본다.", "type": "C" }
    ]
  },
  {
    "id": 347,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "집안의 대소사(제사, 행사) 방식을 바꾸고 싶다.",
    "options": [
      { "text": "\"이제부터 이렇게 합시다.\" 내가 총대를 메고 바꾼다.", "type": "D" },
      { "text": "가족들을 설득하여 다 같이 여행을 가는 쪽으로 유도한다.", "type": "I" },
      { "text": "불만은 있지만 관습을 깨는 게 두려워 하던 대로 한다.", "type": "S" },
      { "text": "간소화했을 때의 장점을 논리적으로 설명하여 동의를 구한다.", "type": "C" }
    ]
  },
  {
    "id": 348,
    "category": "work_career",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "재취업 면접에서 \"나이가 많으신데 괜찮으시겠어요?\"라는 질문을 받았다.",
    "options": [
      { "text": "\"나이는 숫자일 뿐, 성과로 보여드리겠습니다.\" 자신감.", "type": "D" },
      { "text": "\"허허, 그만큼 연륜이 있어 사람들과 잘 지냅니다.\"", "type": "I" },
      { "text": "\"젊은 분들 불편하지 않게 잘 맞추겠습니다.\" 배려.", "type": "S" },
      { "text": "건강 관리 상태와 업무 수행에 지장이 없음을 팩트로 전달.", "type": "C" }
    ]
  },
  {
    "id": 349,
    "category": "self_development",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "새로운 디지털 기기(키오스크, 스마트폰) 사용이 어렵다.",
    "options": [
      { "text": "직원에게 해달라고 당당하게 요구하거나 안 쓴다.", "type": "D" },
      { "text": "주변 젊은이에게 \"이거 좀 도와줘~\" 웃으며 부탁한다.", "type": "I" },
      { "text": "뒤에 기다리는 사람 눈치가 보여서 사용을 포기한다.", "type": "S" },
      { "text": "사용법을 천천히 읽어보거나 인터넷으로 검색해 배운다.", "type": "C" }
    ]
  },
  {
    "id": 350,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "은퇴한 친구가 우울해하며 연락을 끊었다.",
    "options": [
      { "text": "찾아가서 \"정신 차려! 나오라고!\" 끌어낸다.", "type": "D" },
      { "text": "계속 전화를 걸어 \"술 한잔하자!\" 귀찮게 한다.", "type": "I" },
      { "text": "마음이 정리될 때까지 조용히 기다려준다.", "type": "S" },
      { "text": "우울증 관련 정보를 찾아보거나 조용히 선물을 보낸다.", "type": "C" }
    ]
  },
  {
    "id": 351,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀가 결혼식 비용으로 노후 자금까지 지원해달라고 요청한다.",
    "options": [
      { "text": "\"안 된다. 내 노후는 내가 지켜야 해.\" 단호하게 선을 긋는다.", "type": "D" },
      { "text": "\"그래, 네가 행복하면 됐지. 어떻게든 되겠지.\" 기분 좋게 지원한다.", "type": "I" },
      { "text": "불안하지만 자식이 기죽을까 봐 무리해서라도 마련해 준다.", "type": "S" },
      { "text": "지원 가능한 상한선을 정하고, 상환 계획 여부를 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 352,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "갱년기인 배우자가 사소한 말 한마디에 폭발하며 화를 낸다.",
    "options": [
      { "text": "\"왜 별것도 아닌 걸로 난리야?\" 즉각 맞대응하여 제압하려 한다.", "type": "D" },
      { "text": "\"여보, 기분 전환하러 나갈까?\" 분위기를 바꾸려 노력한다.", "type": "I" },
      { "text": "화가 가라앉을 때까지 묵묵히 참고 자리를 피한다.", "type": "S" },
      { "text": "감정 기복의 패턴을 분석하고 호르몬 치료 필요성을 권한다.", "type": "C" }
    ]
  },
  {
    "id": 353,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "상견례 자리에서 사돈 댁과 예식 장소 문제로 의견이 엇갈린다.",
    "options": [
      { "text": "\"저희 쪽 하객이 많으니 이쪽에서 하겠습니다.\" 주도권을 잡는다.", "type": "D" },
      { "text": "\"좋은 게 좋은 거죠. 사돈 편하신 대로 하시죠~\" 웃으며 양보한다.", "type": "I" },
      { "text": "불편한 기류가 생길까 봐 내 의견을 접고 상대방을 따른다.", "type": "S" },
      { "text": "교통편, 식대, 수용 인원을 비교한 객관적 자료로 설득한다.", "type": "C" }
    ]
  },
  {
    "id": 354,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "배우자가 갱년기 우울감을 호소하며 하루 종일 누워만 있다.",
    "options": [
      { "text": "\"운동이라도 나가서 움직여야 낫지.\" 강하게 활동을 독려한다.", "type": "D" },
      { "text": "친구들을 초대하거나 재미있는 이야기로 웃음을 주려 한다.", "type": "I" },
      { "text": "따뜻한 차를 끓여주고 말없이 옆을 지켜준다.", "type": "S" },
      { "text": "증상 체크리스트를 확인하고 전문의 상담 예약을 잡는다.", "type": "C" }
    ]
  },
  {
    "id": 355,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀가 데려온 결혼 상대가 내 기준(직업/배경)에 미치지 못한다.",
    "options": [
      { "text": "\"이 결혼 다시 생각해 봐라.\" 직설적으로 반대 의사를 표한다.", "type": "D" },
      { "text": "겉으로는 반기지만, 속으로는 자녀를 설득할 타이밍을 본다.", "type": "I" },
      { "text": "자식이 좋다니 어쩔 수 없지... 걱정되지만 허락한다.", "type": "S" },
      { "text": "상대방의 경제력과 장래성을 꼼꼼히 따져보고 판단한다.", "type": "C" }
    ]
  },
  {
    "id": 356,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "신혼집 마련 문제로 자녀가 대출 보증을 부탁한다.",
    "options": [
      { "text": "\"보증은 절대 안 돼. 네 능력껏 시작해.\" 원칙을 고수한다.", "type": "D" },
      { "text": "\"그래, 아빠/엄마가 믿어줄게!\" 자녀를 믿고 서명한다.", "type": "I" },
      { "text": "혹시 잘못될까 봐 불안하지만 거절하지 못해 해준다.", "type": "S" },
      { "text": "대출 이율과 상환 기간, 리스크를 철저히 계산해 본다.", "type": "C" }
    ]
  },
  {
    "id": 357,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "갱년기 불면증인 배우자가 각방 쓰기를 제안했다.",
    "options": [
      { "text": "\"부부는 한 침대 써야 해. 안 돼.\" 강하게 거부한다.", "type": "D" },
      { "text": "\"섭섭한데... 주말에는 같이 자는 거지?\" 애교 섞인 협상을 한다.", "type": "I" },
      { "text": "배우자가 편하다면 그렇게 하자고 수용한다.", "type": "S" },
      { "text": "수면의 질 향상을 위해 각방이 합리적이라면 규칙을 정해 동의한다.", "type": "C" }
    ]
  },
  {
    "id": 358,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀가 결혼 준비 중 파혼을 고민하며 운다.",
    "options": [
      { "text": "\"해결 가능한 문제면 하고, 아니면 지금 끝내.\" 결론부터 낸다.", "type": "D" },
      { "text": "\"아이고 어떡하니...\" 같이 울어주며 감정을 쏟아내게 한다.", "type": "I" },
      { "text": "\"네가 어떤 결정을 하든 우린 네 편이야.\" 묵묵히 지지한다.", "type": "S" },
      { "text": "갈등 원인을 파악하고 현실적인 득실을 따져보라고 조언한다.", "type": "C" }
    ]
  },
  {
    "id": 359,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "청첩장 발송 범위를 두고 배우자와 의견 차이가 있다.",
    "options": [
      { "text": "\"내 손님은 내가 정해. 당신은 신경 꺼.\" 영역을 확실히 나눈다.", "type": "D" },
      { "text": "\"경사인데 다 부르자! 연락 안 하던 친구도 부르고!\" (확대)", "type": "I" },
      { "text": "배우자가 부르고 싶은 사람은 다 부르라고 양보한다.", "type": "S" },
      { "text": "식장 수용 인원과 식대를 고려해 하객 리스트를 엑셀로 정리한다.", "type": "C" }
    ]
  },
  {
    "id": 360,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "은퇴 후 집에 있는 시간이 늘자 배우자가 눈치를 준다.",
    "options": [
      { "text": "\"내가 내 집에도 못 있어?\" 가장으로서의 권위를 내세운다.", "type": "D" },
      { "text": "\"그럼 나갔다 올게! 친구 만나러 가야지.\" 밖으로 나돈다.", "type": "I" },
      { "text": "배우자 눈치 보며 방에 조용히 있거나 집안일을 돕는다.", "type": "S" },
      { "text": "서로의 개인 시간을 존중하기 위해 하루 일과표를 조정한다.", "type": "C" }
    ]
  },
  {
    "id": 361,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "예단/예물 문제로 사돈 댁과 미묘한 신경전이 벌어졌다.",
    "options": [
      { "text": "내가 직접 사돈에게 전화해서 허심탄회하게 담판을 짓는다.", "type": "D" },
      { "text": "중간에서 말을 예쁘게 포장해서 좋게 해결하려고 한다.", "type": "I" },
      { "text": "사돈 댁 심기 건드릴까 봐 자녀에게 우리가 참자고 한다.", "type": "S" },
      { "text": "요즘 통용되는 예단 관례와 평균 비용을 조사해 대응한다.", "type": "C" }
    ]
  },
  {
    "id": 362,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "배우자가 갱년기 건망증으로 중요한 약속을 잊었다.",
    "options": [
      { "text": "\"정신 좀 차려. 벌써 몇 번째야?\" 호되게 지적한다.", "type": "D" },
      { "text": "\"나도 그래! 우리 같이 늙어가나 봐~\" 웃으며 넘긴다.", "type": "I" },
      { "text": "민망해할까 봐 모른 척하고 내가 조용히 뒷수습을 한다.", "type": "S" },
      { "text": "스마트폰 캘린더 알람 설정을 생활화하도록 시스템을 잡아준다.", "type": "C" }
    ]
  },
  {
    "id": 363,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀 부부가 결혼 후 분가하지 않고 같이 살겠다고 한다.",
    "options": [
      { "text": "\"절대 안 돼. 너희끼리 독립해서 살아.\" 단호히 거절.", "type": "D" },
      { "text": "\"와! 북적북적하고 좋겠네. 환영한다!\" (재미 추구)", "type": "I" },
      { "text": "불편하겠지만 자식 내외가 원하니 받아준다.", "type": "S" },
      { "text": "생활비 분담과 가사 노동 규칙을 명확히 정하고 합가한다.", "type": "C" }
    ]
  },
  {
    "id": 364,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "배우자가 \"이제 밥 차려주는 거 지겨워\"라고 선언했다.",
    "options": [
      { "text": "\"당신이 안 하면 누가 해?\" 역할 분담을 강조하며 따진다.", "type": "D" },
      { "text": "\"그럼 우리 맛집 투어 다닐까?\" 외식을 제안한다.", "type": "I" },
      { "text": "\"알았어... 내가 알아서 챙겨 먹을게.\" 섭섭하지만 수용.", "type": "S" },
      { "text": "반찬 배달 서비스를 알아보거나 요리 학원 등록을 고려한다.", "type": "C" }
    ]
  },
  {
    "id": 365,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "결혼을 앞둔 자녀가 다니던 직장을 그만두겠다고 한다.",
    "options": [
      { "text": "\"대책 없는 소리 마. 결혼이 장난이야?\" 혼낸다.", "type": "D" },
      { "text": "\"그래, 결혼 준비에 집중하고 싶구나?\" 일단 공감해 준다.", "type": "I" },
      { "text": "경제적으로 힘들까 봐 걱정되지만 자녀의 뜻을 존중한다.", "type": "S" },
      { "text": "퇴사 시 경력 단절 리스크와 가정 경제의 손실을 계산해 준다.", "type": "C" }
    ]
  },
  {
    "id": 366,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "갱년기 열감으로 배우자가 한겨울에도 에어컨/창문을 연다.",
    "options": [
      { "text": "\"추워 죽겠어. 적당히 좀 해.\" 문을 닫아버린다.", "type": "D" },
      { "text": "\"자기야 열나? 내가 부채질해줄게!\" 스킨십으로 무마.", "type": "I" },
      { "text": "아무 말 없이 내가 두꺼운 옷을 껴입고 참는다.", "type": "S" },
      { "text": "실내 적정 온도를 협의하고 개인용 선풍기를 사준다.", "type": "C" }
    ]
  },
  {
    "id": 367,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀 결혼식 축사를 직접 하게 되었다.",
    "options": [
      { "text": "짧고 굵게, 부모로서의 위엄과 인생의 교훈을 전달한다.", "type": "D" },
      { "text": "유머와 에피소드를 섞어 하객들을 웃기고 울린다.", "type": "I" },
      { "text": "자녀에 대한 사랑과 고마움을 담아 차분하게 읽는다.", "type": "S" },
      { "text": "미리 작성한 원고를 토대로 실수 없이 정돈된 말을 한다.", "type": "C" }
    ]
  },
  {
    "id": 368,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "명절에 자녀 부부가 회사 일로 못 온다고 통보했다.",
    "options": [
      { "text": "\"알았다. 일이나 열심히 해라.\" 쿨하게 넘긴다.", "type": "D" },
      { "text": "서운함을 감추지 못하고 \"그래도 얼굴은 봐야지\"라고 한다.", "type": "I" },
      { "text": "\"괜찮아, 너희끼리 푹 쉬어라.\" 말은 그렇게 해도 속은 쓰리다.", "type": "S" },
      { "text": "오지 못하는 타당한 사유를 확인하고 다음 방문 일정을 잡는다.", "type": "C" }
    ]
  },
  {
    "id": 369,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "배우자가 갱년기 탈출을 위해 비싼 취미 장비를 사려 한다.",
    "options": [
      { "text": "\"집안 경제 생각 안 해? 안 돼.\" 통제한다.", "type": "D" },
      { "text": "\"나도 같이 하자! 재밌어 보이네.\" 함께 즐기려 한다.", "type": "I" },
      { "text": "한때 지나가는 바람이겠거니 하고 묵묵히 기다린다.", "type": "S" },
      { "text": "취미 비용이 가계 예산에서 차지하는 비중을 따져본다.", "type": "C" }
    ]
  },
  {
    "id": 370,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀가 '스몰 웨딩'을 하겠다고 고집한다.",
    "options": [
      { "text": "\"내가 뿌린 축의금이 얼만데? 절대 안 돼.\" 체면 중시.", "type": "D" },
      { "text": "\"색다르고 좋네! 파티처럼 해보자!\" 흥미 위주.", "type": "I" },
      { "text": "지인들을 못 불러 아쉽지만 자녀 의견을 존중한다.", "type": "S" },
      { "text": "일반 예식과 스몰 웨딩의 비용 차이 및 장단점을 비교한다.", "type": "C" }
    ]
  },
  {
    "id": 371,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "갱년기 배우자가 \"내 인생은 헛살았다\"며 한탄한다.",
    "options": [
      { "text": "\"배부른 소리 하고 있네. 내가 얼마나 고생했는데.\" 반박한다.", "type": "D" },
      { "text": "\"무슨 소리야~ 당신이 최고야!\" 과장된 칭찬으로 위로한다.", "type": "I" },
      { "text": "손을 잡아주며 묵묵히 그 이야기를 다 들어준다.", "type": "S" },
      { "text": "그런 생각이 드는 구체적인 원인이 무엇인지 물어본다.", "type": "C" }
    ]
  },
  {
    "id": 372,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "혼수 가전 제품을 고르는데 자녀가 너무 비싼 걸 고른다.",
    "options": [
      { "text": "\"예산 초과야. 딴 거 골라.\" 단호하게 자른다.", "type": "D" },
      { "text": "\"좋아 보이네! 엄마/아빠가 쏜다!\" 기분파.", "type": "I" },
      { "text": "부담스럽지만 자녀가 갖고 싶어 하니 사준다.", "type": "S" },
      { "text": "기능과 가격을 비교해 가성비 좋은 모델을 추천한다.", "type": "C" }
    ]
  },
  {
    "id": 373,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "배우자가 갑자기 성형수술이나 시술을 하고 싶다고 한다.",
    "options": [
      { "text": "\"쓸데없는 짓 하지 마. 그 돈으로 딴 거 해.\" 반대.", "type": "D" },
      { "text": "\"오! 예뻐지겠는데? 어디가 잘해?\" 적극 찬성.", "type": "I" },
      { "text": "부작용 생길까 봐 걱정하며 말린다.", "type": "S" },
      { "text": "병원 평판과 시술 부작용, 비용을 꼼꼼히 검색한다.", "type": "C" }
    ]
  },
  {
    "id": 374,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "결혼식 당일, 예식장 측 실수로 문제가 생겼다.",
    "options": [
      { "text": "지배인을 불러 강력하게 항의하고 즉각 보상을 요구한다.", "type": "D" },
      { "text": "하객들이 눈치채지 못하게 분위기를 띄우며 수습한다.", "type": "I" },
      { "text": "좋은 날 얼굴 붉히기 싫어서 그냥 넘어간다.", "type": "S" },
      { "text": "계약서 약관을 확인하고 위약금 청구 절차를 밟는다.", "type": "C" }
    ]
  },
  {
    "id": 375,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "배우자가 황혼 이혼(졸혼) 이야기를 꺼냈다.",
    "options": [
      { "text": "\"절대 안 돼. 내 눈에 흙이 들어가기 전엔 어림없어.\" 강경 대응.", "type": "D" },
      { "text": "\"내가 더 잘할게~ 우리 좋았잖아.\" 대화로 풀려고 한다.", "type": "I" },
      { "text": "큰 충격을 받고 식음을 전폐하며 앓아눕는다.", "type": "S" },
      { "text": "재산 분할과 향후 생활 방식에 대해 현실적으로 따져본다.", "type": "C" }
    ]
  },
  {
    "id": 376,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀가 결혼 후 딩크족(아이 없이)으로 살겠다고 한다.",
    "options": [
      { "text": "\"대를 끊을 셈이야? 낳으라고 할 때 낳아.\" 강요한다.", "type": "D" },
      { "text": "\"애가 있어야 집안이 밝아지는데~\" 아쉬움을 표현한다.", "type": "I" },
      { "text": "\"너희 생각이 그렇다면 존중해 줘야지.\" 속은 타지만 이해한다.", "type": "S" },
      { "text": "출산 여부에 따른 노후 계획과 경제적 차이를 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 377,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "배우자가 건강 검진 결과가 안 좋은데도 술/담배를 못 끊는다.",
    "options": [
      { "text": "술병과 담배를 다 갖다 버리고 강제로 끊게 한다.", "type": "D" },
      { "text": "\"자기야, 우리 오래오래 같이 살아야지~\" 애원한다.", "type": "I" },
      { "text": "잔소리하면 싫어할까 봐 걱정만 하고 지켜본다.", "type": "S" },
      { "text": "검진 수치와 합병증 위험 데이터를 보여주며 경고한다.", "type": "C" }
    ]
  },
  {
    "id": 378,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "사위/며느리가 우리 집 풍습을 따르지 않으려 한다.",
    "options": [
      { "text": "\"로마에 가면 로마법을 따라야지.\" 훈계한다.", "type": "D" },
      { "text": "\"요즘 애들은 그렇다네~\" 좋게 웃어넘긴다.", "type": "I" },
      { "text": "며느리/사위 눈치 보느라 내가 더 조심한다.", "type": "S" },
      { "text": "왜 그 풍습이 지켜져야 하는지 논리적으로 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 379,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "배우자가 퇴직금을 털어 사업을 하겠다고 한다.",
    "options": [
      { "text": "\"성공할 자신 있어? 내가 검토해 보고 결정할게.\" (통제)", "type": "D" },
      { "text": "\"당신은 뭘 해도 잘할 거야!\" 무한 긍정으로 응원한다.", "type": "I" },
      { "text": "실패하면 노후가 막막해지니 제발 하지 말라고 말린다.", "type": "S" },
      { "text": "사업 계획서의 수익성과 리스크를 철저히 분석한다.", "type": "C" }
    ]
  },
  {
    "id": 380,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀 결혼식 청첩장 문구를 정해야 한다.",
    "options": [
      { "text": "가장 격식 있고 권위 있어 보이는 문구로 정한다.", "type": "D" },
      { "text": "감성적이고 따뜻한 시 구절이나 유머를 넣는다.", "type": "I" },
      { "text": "남들이 가장 많이 쓰는 무난한 문구로 선택한다.", "type": "S" },
      { "text": "오탈자가 없는지, 약도는 정확한지 꼼꼼히 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 381,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "배우자가 갱년기로 잠을 못 자서 예민하다.",
    "options": [
      { "text": "\"잠 안 오면 낮에 운동을 더 해.\" 행동 지침을 준다.", "type": "D" },
      { "text": "자기 전 따뜻한 우유를 챙겨주며 대화를 시도한다.", "type": "I" },
      { "text": "배우자가 깰까 봐 숨소리도 조심하며 배려한다.", "type": "S" },
      { "text": "숙면에 좋은 침구류나 암막 커튼, 영양제를 검색한다.", "type": "C" }
    ]
  },
  {
    "id": 382,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀가 결혼 준비 스트레스로 파혼 이야기를 꺼냈다.",
    "options": [
      { "text": "\"약한 소리 하지 마. 다들 그렇게 결혼해.\" 묵살한다.", "type": "D" },
      { "text": "\"기분 전환 겸 쇼핑 갈까?\" 분위기를 띄워준다.", "type": "I" },
      { "text": "많이 힘들었구나... 등을 토닥이며 위로한다.", "type": "S" },
      { "text": "스트레스의 구체적 원인을 파악하고 해결책을 제시한다.", "type": "C" }
    ]
  },
  {
    "id": 383,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "노후를 위해 시골로 귀농하자는 의견에 배우자가 반대한다.",
    "options": [
      { "text": "\"내 뜻대로 해. 가면 다 적응하게 돼 있어.\" 밀어붙인다.", "type": "D" },
      { "text": "\"거기 가면 텃밭 가꾸고 친구들 초대하고 재밌을 거야!\" 설득한다.", "type": "I" },
      { "text": "배우자가 싫다면 어쩔 수 없지... 포기한다.", "type": "S" },
      { "text": "시골 생활의 장단점과 생활비 절감 효과를 수치로 제시한다.", "type": "C" }
    ]
  },
  {
    "id": 384,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "결혼한 자녀가 명절에 친가/처가 중 어디를 먼저 갈지 싸운다.",
    "options": [
      { "text": "\"당연히 우리 집부터 와야지.\" 위계질서를 강조한다.", "type": "D" },
      { "text": "\"너희 편한 대로 해~ 싸우지 말고.\" 유연하게 대처한다.", "type": "I" },
      { "text": "사돈 댁 먼저 가라고 양보하여 자녀의 부담을 줄여준다.", "type": "S" },
      { "text": "매년 번갈아 가며 방문하는 원칙을 정해준다.", "type": "C" }
    ]
  },
  {
    "id": 385,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "배우자가 갱년기 증상으로 부부 동반 모임에 가기 싫어한다.",
    "options": [
      { "text": "\"남들 다 오는데 나만 혼자 가? 빨리 준비해.\" 재촉한다.", "type": "D" },
      { "text": "\"자기 없으면 무슨 재미야~ 같이 가자 응?\" 조른다.", "type": "I" },
      { "text": "\"힘들면 쉬어. 나 혼자 다녀올게.\" 배려한다.", "type": "S" },
      { "text": "불참 사유를 지인들에게 적절히 둘러댈 멘트를 준비한다.", "type": "C" }
    ]
  },
  {
    "id": 386,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀가 결혼 후 경제적 지원을 계속 요구한다.",
    "options": [
      { "text": "\"이제 너희가 알아서 살아. 지원 끝이야.\" 단호하게 끊는다.", "type": "D" },
      { "text": "마음이 약해서 몰래 용돈을 챙겨준다.", "type": "I" },
      { "text": "우리 노후도 걱정되지만 자식 힘든 건 못 보겠다.", "type": "S" },
      { "text": "언제까지 얼마를 지원할지 상환 계획을 포함한 계약을 맺는다.", "type": "C" }
    ]
  },
  {
    "id": 387,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "배우자가 옛날 일을 들추며 화를 낸다 (갱년기 감정 기복).",
    "options": [
      { "text": "\"언제 적 얘기를 또 해? 그만 좀 해!\" 지지 않고 화낸다.", "type": "D" },
      { "text": "\"내가 그때 잘못했어~ 미안해 여보.\" 애교로 상황을 넘긴다.", "type": "I" },
      { "text": "묵묵히 들어주며 화가 풀릴 때까지 기다린다.", "type": "S" },
      { "text": "과거 일의 사실 관계를 따지며 오해를 바로잡으려 한다.", "type": "C" }
    ]
  },
  {
    "id": 388,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "결혼 준비 중 자녀가 무리한 다이어트를 한다.",
    "options": [
      { "text": "\"쓰러지겠다. 밥 먹어.\" 강제로 밥을 먹인다.", "type": "D" },
      { "text": "\"지금도 예쁜데! 드레스 입으면 최고일 거야.\" 칭찬한다.", "type": "I" },
      { "text": "안쓰러워서 건강식이나 보약을 챙겨준다.", "type": "S" },
      { "text": "영양 불균형이 올 수 있으니 식단을 점검해 준다.", "type": "C" }
    ]
  },
  {
    "id": 389,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "은퇴 자금 관리에 대해 배우자와 의견이 다르다.",
    "options": [
      { "text": "내가 경제 주도권을 쥐고 공격적으로 투자한다.", "type": "D" },
      { "text": "지인이 추천해 준 투자처가 좋다는데 귀가 솔깃하다.", "type": "I" },
      { "text": "원금 보장이 제일 중요하니 안전한 예금에 둔다.", "type": "S" },
      { "text": "포트폴리오를 분산하고 세금 혜택까지 꼼꼼히 따진다.", "type": "C" }
    ]
  },
  {
    "id": 390,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀의 결혼식 당일, 너무 긴장된다.",
    "options": [
      { "text": "당당하고 의연한 모습으로 하객들을 맞이한다.", "type": "D" },
      { "text": "여기저기 다니며 하객들과 웃고 떠드느라 긴장을 잊는다.", "type": "I" },
      { "text": "자꾸 눈물이 날 것 같아 마음을 진정시킨다.", "type": "S" },
      { "text": "예식 순서와 체크리스트를 다시 한번 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 391,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "배우자가 갱년기로 인해 외모 자신감을 잃었다.",
    "options": [
      { "text": "\"운동해서 관리하면 되지. 게을러서 그래.\" 팩트 폭격.", "type": "D" },
      { "text": "\"당신은 늙어도 멋져/예뻐!\" 빈말이라도 칭찬한다.", "type": "I" },
      { "text": "안타까운 마음에 피부과 시술이나 좋은 옷을 권한다.", "type": "S" },
      { "text": "노화 방지에 좋은 음식과 생활 습관 정보를 찾아준다.", "type": "C" }
    ]
  },
  {
    "id": 392,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "예비 사위/며느리가 싹싹하지 않고 무뚝뚝하다.",
    "options": [
      { "text": "\"어른을 봤으면 인사를 제대로 해야지.\" 따끔하게 가르친다.", "type": "D" },
      { "text": "내가 먼저 말을 걸고 농담하며 분위기를 푼다.", "type": "I" },
      { "text": "성격이려니 하고 내가 이해하고 넘어간다.", "type": "S" },
      { "text": "예의범절이 부족한 건지 성격 탓인지 관찰한다.", "type": "C" }
    ]
  },
  {
    "id": 393,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "결혼 후 자녀 방을 어떻게 할지 고민이다.",
    "options": [
      { "text": "싹 다 치우고 내 서재나 취미 방으로 개조한다.", "type": "D" },
      { "text": "게스트 룸으로 꾸며서 친구들을 초대한다.", "type": "I" },
      { "text": "자녀가 언제든 와서 쉴 수 있게 그대로 둔다.", "type": "S" },
      { "text": "공간 활용도를 분석해 가장 효율적인 용도로 변경한다.", "type": "C" }
    ]
  },
  {
    "id": 394,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "배우자가 나와 상의 없이 큰돈을 친정에 빌려줬다.",
    "options": [
      { "text": "\"누구 맘대로? 당장 받아와.\" 불같이 화낸다.", "type": "D" },
      { "text": "\"어휴, 말을 하지 그랬어.\" 서운해하며 넘어간다.", "type": "I" },
      { "text": "이미 벌어진 일, 부부 싸움 하기 싫어 참는다.", "type": "S" },
      { "text": "정확한 금액과 상환 날짜를 확인하고 기록해 둔다.", "type": "C" }
    ]
  },
  {
    "id": 395,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀 결혼식 뷔페 시식 후 음식이 마음에 안 든다.",
    "options": [
      { "text": "매니저를 불러 메뉴 교체를 강력히 요구한다.", "type": "D" },
      { "text": "\"그래도 국수는 맛있네!\" 긍정적인 면을 보려 한다.", "type": "I" },
      { "text": "하객들에게 미안해서 어쩌나 걱정만 한다.", "type": "S" },
      { "text": "항목별로 점수를 매겨 개선 요청 리스트를 작성한다.", "type": "C" }
    ]
  },
  {
    "id": 396,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "갱년기 배우자가 혼자 여행을 다녀오겠다고 한다.",
    "options": [
      { "text": "\"위험하게 혼자 어딜 가? 가지 마.\" 통제한다.", "type": "D" },
      { "text": "\"좋겠다! 사진 많이 찍어서 보내줘!\" 쿨하게 보낸다.", "type": "I" },
      { "text": "밥은 잘 챙겨 먹을지, 무슨 일 없을지 걱정된다.", "type": "S" },
      { "text": "여행 일정과 숙소 정보를 공유해 달라고 한다.", "type": "C" }
    ]
  },
  {
    "id": 397,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀가 결혼식 주례 없는 예식을 하겠다고 한다.",
    "options": [
      { "text": "\"격식 떨어지게 그게 뭐냐? 주례 모셔라.\" 반대.", "type": "D" },
      { "text": "\"재밌겠네! 아빠/엄마가 덕담 한마디 할까?\" 찬성.", "type": "I" },
      { "text": "어른들이 안 좋게 보실까 봐 걱정된다.", "type": "S" },
      { "text": "식순이 어떻게 진행되는지 큐시트를 가져오라고 한다.", "type": "C" }
    ]
  },
  {
    "id": 398,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "배우자가 은퇴 후 매일 삼시 세끼를 집에서 먹는다 (삼식이).",
    "options": [
      { "text": "\"점심은 알아서 챙겨 먹어. 나도 내 시간 필요해.\" 선언.", "type": "D" },
      { "text": "\"여보, 우리 나가서 브런치 먹을까?\" 밖으로 유도.", "type": "I" },
      { "text": "힘들지만 군말 없이 꼬박꼬박 밥상을 차린다.", "type": "S" },
      { "text": "식단표를 짜서 냉장고에 붙여두고 규칙을 정한다.", "type": "C" }
    ]
  },
  {
    "id": 399,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀가 결혼 후 명절 제사를 지내지 않겠다고 한다.",
    "options": [
      { "text": "\"조상을 모셔야지! 절대 안 돼.\" 전통 고수.", "type": "D" },
      { "text": "\"그래, 우리끼리 여행이나 가자!\" 간소화 찬성.", "type": "I" },
      { "text": "친척들 보기에 민망하고 조상님께 죄송해한다.", "type": "S" },
      { "text": "제사 간소화의 합리적인 이유와 대안을 논의한다.", "type": "C" }
    ]
  },
  {
    "id": 400,
    "category": "family_marriage",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "갱년기 배우자가 밤마다 잠꼬대를 하거나 뒤척여서 나도 깬다.",
    "options": [
      { "text": "\"시끄러워 죽겠네. 저리 가서 자.\" 짜증을 낸다.", "type": "D" },
      { "text": "\"어디 불편해? 악몽 꿨어?\" 깨워서 챙겨준다.", "type": "I" },
      { "text": "내가 참으면 되지 하고 귀마개를 하고 다시 잔다.", "type": "S" },
      { "text": "수면 장애 클리닉 정보를 알아보고 예약을 잡는다.", "type": "C" }
    ]
  },
  {
    "id": 401,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "건강검진에서 '고혈압/당뇨 주의' 판정을 받았다. 당신의 첫 반응은?",
    "options": [
      { "text": "\"내가 이걸 이겨내지 못할 것 같아?\" 오기가 생겨 당장 운동을 시작한다.", "type": "D" },
      { "text": "친구들에게 \"나 이제 큰일 났다\"고 알리며 위로와 조언을 구한다.", "type": "I" },
      { "text": "가족들에게 짐이 될까 봐 걱정부터 앞서며 조용히 식단을 바꾼다.", "type": "S" },
      { "text": "수치 변화 추이를 엑셀로 정리하고 관련 의학 서적을 탐독한다.", "type": "C" }
    ]
  },
  {
    "id": 402,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임에서 산행 코스를 정해야 한다. 당신의 스타일은?",
    "options": [
      { "text": "\"오늘은 정상 정복이다. 이 코스로 가자.\" 목표 지향적으로 리드한다.", "type": "D" },
      { "text": "\"경치 좋고 사진 잘 나오는 데로 가자!\" 즐거움을 우선순위에 둔다.", "type": "I" },
      { "text": "\"다들 힘들어하지 않을 무난한 코스가 좋겠네요.\" 전체의 체력을 고려한다.", "type": "S" },
      { "text": "소요 시간, 경사도, 날씨 변수를 계산하여 가장 안전한 코스를 짠다.", "type": "C" }
    ]
  },
  {
    "id": 403,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "의사가 술과 담배를 끊으라고 강력히 권고했다.",
    "options": [
      { "text": "그 자리에서 라이터를 쓰레기통에 버린다. 결단력 있게 끊는다.", "type": "D" },
      { "text": "술자리 분위기를 못 맞춰서 어쩌지? 사람 만나는 게 걱정된다.", "type": "I" },
      { "text": "습관을 바꾸는 게 힘들지만 가족을 생각해서 서서히 줄인다.", "type": "S" },
      { "text": "금연/금주 시 신체 변화 데이터를 찾아보고 체계적인 계획을 세운다.", "type": "C" }
    ]
  },
  {
    "id": 404,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 중 동료가 발목을 삐끗했다. 당신의 대처는?",
    "options": [
      { "text": "빠르게 상황을 판단하고 하산 여부를 결정해 지시한다.", "type": "D" },
      { "text": "\"괜찮아? 많이 아프지?\" 계속 말을 걸며 긴장을 풀어준다.", "type": "I" },
      { "text": "동료가 걷기 편하도록 내 어깨를 빌려주고 짐을 들어준다.", "type": "S" },
      { "text": "구급상자에서 파스를 꺼내 처치하고 최단 하산 경로를 찾는다.", "type": "C" }
    ]
  },
  {
    "id": 405,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "몸에 좋은 건강기능식품(보약)을 고를 때 기준은?",
    "options": [
      { "text": "가장 효과가 빠르고 강력하다고 소문난 프리미엄 제품.", "type": "D" },
      { "text": "친구가 먹어보고 좋다고 강력 추천한 제품.", "type": "I" },
      { "text": "부작용 없고 오랫동안 사람들이 애용해 온 검증된 제품.", "type": "S" },
      { "text": "성분표와 함량을 꼼꼼히 비교하고 식약처 인증 여부를 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 406,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 후 뒤풀이 회식 장소를 정해야 한다.",
    "options": [
      { "text": "\"내가 아는 맛집 있어. 거기로 가.\" 내 단골집으로 데려간다.", "type": "D" },
      { "text": "\"분위기 띄우기 좋은 노래방 있는 식당 어때?\" 흥을 돋운다.", "type": "I" },
      { "text": "회원들이 가장 선호하는 메뉴로 의견을 모아 결정한다.", "type": "S" },
      { "text": "인원수, 예산, 주차 가능 여부를 확인하고 예약한다.", "type": "C" }
    ]
  },
  {
    "id": 407,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "나이가 들면서 체력이 예전 같지 않음을 느낀다.",
    "options": [
      { "text": "인정할 수 없다. 더 강도 높은 운동으로 체력을 끌어올린다.", "type": "D" },
      { "text": "\"나도 이제 늙었나 봐~\" 농담하며 주변의 위로를 받는다.", "type": "I" },
      { "text": "무리가 가지 않게 활동량을 조절하며 현실에 순응한다.", "type": "S" },
      { "text": "노화의 원인을 분석하고 연령에 맞는 운동 처방을 받는다.", "type": "C" }
    ]
  },
  {
    "id": 408,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "산행 중 갈림길이 나왔는데 의견이 분분하다.",
    "options": [
      { "text": "\"내 감을 믿어. 이쪽이야.\" 자신 있게 방향을 잡는다.", "type": "D" },
      { "text": "\"지나가는 사람한테 물어보자!\" 넉살 좋게 해결한다.", "type": "I" },
      { "text": "다수가 원하는 쪽으로 조용히 따라간다.", "type": "S" },
      { "text": "지도 앱과 나침반을 꺼내 정확한 방위를 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 409,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "매일 먹어야 하는 약이 늘어났다. 관리 방법은?",
    "options": [
      { "text": "약 먹는 것도 일이다. 귀찮지만 살기 위해 한 번에 털어 넣는다.", "type": "D" },
      { "text": "자꾸 깜빡해서 배우자가 챙겨주거나 눈에 띄는 곳에 둔다.", "type": "I" },
      { "text": "알람을 맞춰두고 정해진 시간에 꼬박꼬박 챙겨 먹는다.", "type": "S" },
      { "text": "약물 상호작용과 부작용 설명서를 정독하고 복용 일지를 쓴다.", "type": "C" }
    ]
  },
  {
    "id": 410,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임 회장이 독단적으로 운영하여 불만이 생겼다.",
    "options": [
      { "text": "총회에서 공개적으로 문제를 제기하고 시정을 요구한다.", "type": "D" },
      { "text": "친한 회원들과 술 한잔하며 뒷담화로 스트레스를 푼다.", "type": "I" },
      { "text": "시끄러워지는 게 싫어서 회비만 내고 참석을 줄인다.", "type": "S" },
      { "text": "회칙 위반 사항을 정리하여 운영진에게 서면으로 전달한다.", "type": "C" }
    ]
  },
  {
    "id": 411,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "다이어트를 위해 식단 관리를 시작해야 한다.",
    "options": [
      { "text": "\"오늘부터 탄수화물 금지.\" 목표 달성을 위해 극단적으로 끊는다.", "type": "D" },
      { "text": "맛있는 모임 자리가 많아서 식단 지키기가 너무 힘들다.", "type": "I" },
      { "text": "가족들과 함께 먹는 밥상에서 밥 양만 조금 줄인다.", "type": "S" },
      { "text": "칼로리와 영양 성분을 계산하여 철저하게 식단을 짠다.", "type": "C" }
    ]
  },
  {
    "id": 412,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 장비를 새로 장만하려고 한다.",
    "options": [
      { "text": "전문가용 최고급 스펙의 신상 장비를 산다. (장비빨)", "type": "D" },
      { "text": "동호회 사람들이 많이 쓰고 디자인이 예쁜 걸로 산다.", "type": "I" },
      { "text": "튼튼하고 오래 쓸 수 있는 무난한 브랜드를 고른다.", "type": "S" },
      { "text": "기능성 소재와 가성비를 비교 분석하여 최적의 제품을 구매한다.", "type": "C" }
    ]
  },
  {
    "id": 413,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "큰 병은 아니지만 수술이 필요하다는 진단을 받았다.",
    "options": [
      { "text": "가장 실력 있는 의사를 찾아가서 빨리 수술 날짜를 잡는다.", "type": "D" },
      { "text": "무섭고 두려운 마음을 지인들에게 털어놓으며 위로받는다.", "type": "I" },
      { "text": "가족들이 걱정할까 봐 최대한 담담한 척한다.", "type": "S" },
      { "text": "수술 방법, 회복 기간, 후유증에 대해 상세히 질문하고 공부한다.", "type": "C" }
    ]
  },
  {
    "id": 414,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 중 낯선 사람이 길을 물어본다.",
    "options": [
      { "text": "\"이리로 쭉 가시면 됩니다.\" 짧고 명확하게 알려준다.", "type": "D" },
      { "text": "\"어디서 오셨어요? 힘드시죠?\" 스몰토크를 하며 친절히 알려준다.", "type": "I" },
      { "text": "내가 아는 길이 맞나 확신이 없어서 우물쭈물한다.", "type": "S" },
      { "text": "지도를 펴서 현재 위치와 목적지를 정확하게 짚어준다.", "type": "C" }
    ]
  },
  {
    "id": 415,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "갱년기 증상(불면증, 열감 등)으로 일상생활이 힘들다.",
    "options": [
      { "text": "\"정신력으로 버틴다.\" 약에 의존하지 않고 운동으로 푼다.", "type": "D" },
      { "text": "\"나 요즘 너무 힘들어 ㅠㅠ\" 주변에 하소연하며 스트레스를 푼다.", "type": "I" },
      { "text": "가족들에게 짜증 내기 싫어서 혼자 꾹 참는다.", "type": "S" },
      { "text": "갱년기 호르몬 수치를 검사하고 의학적 치료를 받는다.", "type": "C" }
    ]
  },
  {
    "id": 416,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임에서 단체 사진을 찍으려 한다.",
    "options": [
      { "text": "\"자, 빨리 모이세요! 찍습니다!\" 대열을 정비하고 지휘한다.", "type": "D" },
      { "text": "정중앙이나 가장 눈에 띄는 포즈로 사진에 찍힌다.", "type": "I" },
      { "text": "뒤편이나 구석에 서서 조용히 미소 짓는다.", "type": "S" },
      { "text": "사진 찍어주는 역할을 자처하거나 구도가 맞는지 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 417,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "건강을 위해 헬스장(PT)을 등록했다.",
    "options": [
      { "text": "트레이너에게 \"최단기간에 몸을 만들어달라\"고 요구한다.", "type": "D" },
      { "text": "헬스장에서 사람들과 인사하고 친해지는 게 더 재밌다.", "type": "I" },
      { "text": "트레이너가 시키는 대로 묵묵히 성실하게 운동한다.", "type": "S" },
      { "text": "운동 횟수와 세트, 변화된 인바디 수치를 기록하며 분석한다.", "type": "C" }
    ]
  },
  {
    "id": 418,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 중 쓰레기를 아무데나 버리는 사람을 목격했다.",
    "options": [
      { "text": "\"이봐요! 쓰레기 주우세요.\" 즉시 큰 소리로 지적한다.", "type": "D" },
      { "text": "\"아이구, 산이 아파하겠네~\" 들으라는 듯이 돌려 말한다.", "type": "I" },
      { "text": "싸움 날까 봐 무섭지만, 그 사람이 가고 나면 내가 줍는다.", "type": "S" },
      { "text": "산림보호법 위반 과태료가 얼마인지 생각하며 눈살을 찌푸린다.", "type": "C" }
    ]
  },
  {
    "id": 419,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "건강 검진 결과를 배우자에게 알려야 한다.",
    "options": [
      { "text": "\"별거 아냐. 내가 알아서 관리할게.\" 걱정시키지 않게 축소해서 말한다.", "type": "D" },
      { "text": "\"여보 나 아프대... 잘 챙겨줘야 해?\" 어리광 부리며 알린다.", "type": "I" },
      { "text": "배우자가 놀랄까 봐 조심스럽게 꺼내며 안심시킨다.", "type": "S" },
      { "text": "검진 결과지를 보여주며 의사의 소견을 정확히 전달한다.", "type": "C" }
    ]
  },
  {
    "id": 420,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임 총무를 맡아달라는 부탁을 받았다.",
    "options": [
      { "text": "\"회장이라면 몰라도 총무는 귀찮아.\" 거절하거나 조건을 건다.", "type": "D" },
      { "text": "\"돈 계산은 쥐약인데... 오락부장은 어때?\" 웃으며 피한다.", "type": "I" },
      { "text": "아무도 할 사람이 없다면 내가 희생해서 맡는다.", "type": "S" },
      { "text": "회비 내역을 1원 단위까지 엑셀로 관리할 자신이 있어 수락한다.", "type": "C" }
    ]
  },
  {
    "id": 421,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "스트레스로 인해 불면증이 생겼다.",
    "options": [
      { "text": "잠이 안 와도 억지로 누워 있는다. 내 의지로 잔다.", "type": "D" },
      { "text": "밤늦게까지 친구와 통화하거나 TV를 보며 시간을 보낸다.", "type": "I" },
      { "text": "따뜻한 우유를 마시거나 명상을 하며 안정을 취한다.", "type": "S" },
      { "text": "수면 패턴을 기록하고 수면 유도에 좋은 환경을 조성한다.", "type": "C" }
    ]
  },
  {
    "id": 422,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "산행 속도가 느린 회원이 있어 전체 일정이 지체된다.",
    "options": [
      { "text": "\"좀 더 속도 냅시다! 해 지기 전에 내려가야죠.\" 재촉한다.", "type": "D" },
      { "text": "\"천천히 가요~ 경치도 보고 좋네!\" 분위기를 띄운다.", "type": "I" },
      { "text": "뒤처진 회원 옆에서 발맞춰주며 말벗이 되어준다.", "type": "S" },
      { "text": "예상 도착 시간이 얼마나 늦어질지 계산하고 휴식 시간을 조정한다.", "type": "C" }
    ]
  },
  {
    "id": 423,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "갑작스러운 치통이 생겼다.",
    "options": [
      { "text": "참을 만큼 참다가 도저히 안 되면 병원에 간다.", "type": "D" },
      { "text": "\"아파 죽겠어\"라며 엄살을 부리고 바로 병원에 간다.", "type": "I" },
      { "text": "병원비 걱정과 치료의 두려움 때문에 진통제로 버틴다.", "type": "S" },
      { "text": "치과 후기를 검색하고 과잉 진료 없는 곳을 예약한다.", "type": "C" }
    ]
  },
  {
    "id": 424,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 도시락을 준비해야 한다.",
    "options": [
      { "text": "김밥이나 햄버거 등 간편하고 먹기 편한 것으로 사 간다.", "type": "D" },
      { "text": "동료들과 나눠 먹을 과일, 간식, 막걸리 등을 잔뜩 챙긴다.", "type": "I" },
      { "text": "직접 싼 밥과 반찬으로 정성스럽게 도시락을 준비한다.", "type": "S" },
      { "text": "상하지 않는 메뉴와 개인 수저, 물티슈까지 꼼꼼히 챙긴다.", "type": "C" }
    ]
  },
  {
    "id": 425,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "유행하는 '간헐적 단식'을 시도해 보려 한다.",
    "options": [
      { "text": "\"무조건 16시간 공복.\" 목표를 정하면 칼같이 지킨다.", "type": "D" },
      { "text": "배고픔을 못 참고 \"오늘만 먹고 내일부터!\"라며 실패한다.", "type": "I" },
      { "text": "가족들 식사 시간과 맞지 않아 흐지부지된다.", "type": "S" },
      { "text": "단식 시간과 섭취 칼로리를 앱에 기록하며 철저히 관리한다.", "type": "C" }
    ]
  },
  {
    "id": 426,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임 회비가 부족하다는 공지가 떴다.",
    "options": [
      { "text": "\"이번엔 내가 낼게.\" 혹은 \"회비 인상해.\" 쿨하게 해결.", "type": "D" },
      { "text": "\"우리 갹출할까?\" 분위기에 휩쓸려 기분 좋게 낸다.", "type": "I" },
      { "text": "부담스럽지만 남들이 내는 만큼 조용히 입금한다.", "type": "S" },
      { "text": "지출 내역서를 공개해 달라고 요청하여 원인을 파악한다.", "type": "C" }
    ]
  },
  {
    "id": 427,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "지인에게 중병 소식을 들었다. 병문안을 갈 때?",
    "options": [
      { "text": "\"힘내라. 이겨낼 수 있다.\" 강한 긍정의 메시지를 전한다.", "type": "D" },
      { "text": "손을 잡고 같이 울며 감정적으로 위로한다.", "type": "I" },
      { "text": "환자가 필요한 것이 무엇인지 조용히 살피고 챙겨준다.", "type": "S" },
      { "text": "병에 좋은 음식이나 치료 정보를 찾아 프린트해 간다.", "type": "C" }
    ]
  },
  {
    "id": 428,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "비가 올 것 같은 날씨에 등산 약속이 잡혀있다.",
    "options": [
      { "text": "\"이 정도 비는 맞아도 돼. 그냥 진행해.\" 강행한다.", "type": "D" },
      { "text": "\"비 오면 파전에 막걸리나 먹으러 가자!\" 변경을 제안한다.", "type": "I" },
      { "text": "운영진의 결정이 내려질 때까지 기다린다.", "type": "S" },
      { "text": "강수 확률을 시간대별로 확인하고 취소 여부를 판단한다.", "type": "C" }
    ]
  },
  {
    "id": 429,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "새로운 운동 기구를 샀는데 조립이 복잡하다.",
    "options": [
      { "text": "설명서 없이 대충 감으로 조립하다가 안 되면 화낸다.", "type": "D" },
      { "text": "배우자나 자녀에게 \"이것 좀 해줘~\" 부탁한다.", "type": "I" },
      { "text": "시간이 걸리더라도 차근차근 맞는지 확인하며 조립한다.", "type": "S" },
      { "text": "설명서를 1번부터 끝까지 정독한 후 순서대로 조립한다.", "type": "C" }
    ]
  },
  {
    "id": 430,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 중 정치 이야기로 회원 간에 말다툼이 생겼다.",
    "options": [
      { "text": "\"그만합시다! 산에 와서 무슨 짓입니까!\" 강하게 제지한다.", "type": "D" },
      { "text": "\"에이~ 우리 즐거운 얘기만 해요~\" 화제를 돌린다.", "type": "I" },
      { "text": "불편해서 슬그머니 자리를 피하거나 묵묵부답한다.", "type": "S" },
      { "text": "양쪽 주장의 논리적 오류를 속으로 분석하며 관망한다.", "type": "C" }
    ]
  },
  {
    "id": 431,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "노안이 와서 작은 글씨가 잘 안 보인다.",
    "options": [
      { "text": "불편함을 참지 못하고 당장 비싸고 좋은 다초점 렌즈를 맞춘다.", "type": "D" },
      { "text": "돋보기 쓰는 모습을 보이기 싫어서 안 보이는 척 넘긴다.", "type": "I" },
      { "text": "노화의 자연스러운 현상이라 생각하고 돋보기를 쓴다.", "type": "S" },
      { "text": "시력 검사를 다시 하고 렌즈 도수와 종류를 꼼꼼히 고른다.", "type": "C" }
    ]
  },
  {
    "id": 432,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임에서 새로운 회원이 들어왔다.",
    "options": [
      { "text": "\"어떤 일 하세요?\" 직업이나 사회적 위치부터 묻는다.", "type": "D" },
      { "text": "\"반가워요! 우리 모임 진짜 재밌어요!\" 환대한다.", "type": "I" },
      { "text": "어색하지 않게 옆에서 조용히 챙겨준다.", "type": "S" },
      { "text": "회칙과 모임 일정을 정확하게 안내해 준다.", "type": "C" }
    ]
  },
  {
    "id": 433,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "건강 검진 전날, 금식을 해야 한다.",
    "options": [
      { "text": "물 한 모금도 안 마시고 철저하게 지킨다. (규칙 준수)", "type": "D" },
      { "text": "배고픔을 못 참고 \"이 정도는 괜찮겠지\" 하며 조금 먹는다.", "type": "I" },
      { "text": "가족들이 먹는 걸 보면 힘들지만 꾹 참는다.", "type": "S" },
      { "text": "정확한 검사 결과를 위해 금식 시간과 주의사항을 완벽히 지킨다.", "type": "C" }
    ]
  },
  {
    "id": 434,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 코스가 예상보다 너무 험난하다.",
    "options": [
      { "text": "\"이까짓 거! 가자!\" 도전 의식을 불태운다.", "type": "D" },
      { "text": "\"아이고 죽겠다~\" 엄살을 부리며 동료들과 웃는다.", "type": "I" },
      { "text": "힘들어도 내색하지 않고 묵묵히 끝까지 따라간다.", "type": "S" },
      { "text": "현재 체력과 남은 거리를 계산해 완주 가능성을 판단한다.", "type": "C" }
    ]
  },
  {
    "id": 435,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "유명한 명의(名醫)에게 진료받기 위해 대기가 길다.",
    "options": [
      { "text": "인맥을 동원해 순서를 앞당길 방법이 없는지 알아본다.", "type": "D" },
      { "text": "대기실 옆 사람들과 수다를 떨며 지루함을 달랜다.", "type": "I" },
      { "text": "유명한 분이니 어쩔 수 없지... 하염없이 기다린다.", "type": "S" },
      { "text": "책을 읽거나 업무를 보며 대기 시간을 효율적으로 쓴다.", "type": "C" }
    ]
  },
  {
    "id": 436,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임에서 1박 2일 워크숍을 가자고 한다.",
    "options": [
      { "text": "\"좋아. 일정 내가 짤게.\" 리더십을 발휘한다.", "type": "D" },
      { "text": "\"밤새 마시고 놀자!\" 장기자랑 준비에 신이 난다.", "type": "I" },
      { "text": "집을 비우는 게 부담스럽지만 다들 간다면 간다.", "type": "S" },
      { "text": "숙소 상태, 비용, 교통편을 꼼꼼히 따져보고 결정한다.", "type": "C" }
    ]
  },
  {
    "id": 437,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "건강을 위해 걷기 운동을 하는데 지루하다.",
    "options": [
      { "text": "목표 걸음 수나 시간을 정해놓고 기록을 경신하며 걷는다.", "type": "D" },
      { "text": "친구와 통화하거나 같이 걸을 파트너를 구한다.", "type": "I" },
      { "text": "생각을 정리하거나 풍경을 보며 꾸준히 걷는다.", "type": "S" },
      { "text": "팟캐스트나 오디오북을 들으며 시간을 알차게 쓴다.", "type": "C" }
    ]
  },
  {
    "id": 438,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "하산 후 식사 메뉴를 고르는데 의견이 안 모인다.",
    "options": [
      { "text": "\"오늘은 오리고기. 예약해.\" 메뉴를 통보한다.", "type": "D" },
      { "text": "\"뭐가 맛있을까? 다 좋아!\" 결정은 못 하고 분위기만 맞춘다.", "type": "I" },
      { "text": "\"아무거나 괜찮아요.\" 남들이 결정하길 기다린다.", "type": "S" },
      { "text": "근처 식당 평점과 리뷰를 검색해 3곳을 추려 제안한다.", "type": "C" }
    ]
  },
  {
    "id": 439,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "몸이 아파서 병원에 갔는데 의사가 불친절하다.",
    "options": [
      { "text": "\"환자한테 태도가 그게 뭡니까?\" 따끔하게 항의한다.", "type": "D" },
      { "text": "기분 나쁘지만 참고 나와서 간호사나 지인에게 하소연한다.", "type": "I" },
      { "text": "의사가 바빠서 그렇겠지... 이해하고 넘어간다.", "type": "S" },
      { "text": "진료 내용을 녹음하거나 메모하고, 병원을 바꿀지 고려한다.", "type": "C" }
    ]
  },
  {
    "id": 440,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임에서 누군가 규칙을 어기고 위험한 행동을 한다.",
    "options": [
      { "text": "\"당장 내려와요! 위험합니다.\" 즉시 제지한다.", "type": "D" },
      { "text": "\"어머, 그러다 다쳐요~ 조심하세요.\" 걱정스레 말한다.", "type": "I" },
      { "text": "사고 날까 봐 조마조마하지만 직접 말은 못 한다.", "type": "S" },
      { "text": "안전 수칙 위반임을 인지하고 사고 시 책임 소재를 생각한다.", "type": "C" }
    ]
  },
  {
    "id": 441,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "건강 검진 결과, 재검사가 필요하다고 한다.",
    "options": [
      { "text": "당장 가장 큰 병원으로 예약해. 결과를 빨리 알아야겠다.", "type": "D" },
      { "text": "큰 병이면 어떡하지? 불안해서 일이 손에 안 잡힌다.", "type": "I" },
      { "text": "별일 없을 거라고 스스로 위로하며 차분히 기다린다.", "type": "S" },
      { "text": "의심되는 질환의 증상과 검사 방법을 미리 찾아본다.", "type": "C" }
    ]
  },
  {
    "id": 442,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임 회원이 내 장비를 보고 훈수를 둔다.",
    "options": [
      { "text": "\"내가 알아서 샀어. 신경 꺼.\" 불쾌함을 표현한다.", "type": "D" },
      { "text": "\"그래요? 다음엔 그걸로 사야겠네!\" 웃으며 넘긴다.", "type": "I" },
      { "text": "기분 나쁘지만 \"조언 감사합니다\"라고 예의를 갖춘다.", "type": "S" },
      { "text": "내 장비의 스펙과 장점을 설명하며 내 선택의 이유를 말한다.", "type": "C" }
    ]
  },
  {
    "id": 443,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀가 내 건강을 걱정하며 운동을 잔소리한다.",
    "options": [
      { "text": "\"내 몸은 내가 챙겨. 잔소리 마라.\" 권위적으로 대응.", "type": "D" },
      { "text": "\"알았어~ 우리 딸/아들이 최고네!\" 말로만 알겠다고 한다.", "type": "I" },
      { "text": "자녀가 걱정하는 게 미안해서 운동하는 척이라도 한다.", "type": "S" },
      { "text": "운동 계획표를 보여주며 실천하고 있음을 증명한다.", "type": "C" }
    ]
  },
  {
    "id": 444,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 중 멋진 풍경을 만났다.",
    "options": [
      { "text": "정상 정복이 우선이다. 눈으로만 보고 지나간다.", "type": "D" },
      { "text": "\"여기 봐! 사진 찍자!\" 포즈를 취하고 인증샷을 남긴다.", "type": "I" },
      { "text": "잠시 멈춰서 경치를 감상하며 휴식을 취한다.", "type": "S" },
      { "text": "풍경 사진을 잘 찍기 위해 구도와 조명을 맞춘다.", "type": "C" }
    ]
  },
  {
    "id": 445,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "스트레스 해소용으로 '명상'을 권유받았다.",
    "options": [
      { "text": "가만히 앉아있는 건 적성에 안 맞는다. 활동적인 게 좋다.", "type": "D" },
      { "text": "여럿이 같이 하는 요가나 명상 교실이면 가보겠다.", "type": "I" },
      { "text": "마음의 안정을 위해 혼자 조용히 시도해 본다.", "type": "S" },
      { "text": "명상의 의학적 효능과 뇌파 변화에 대한 자료를 본다.", "type": "C" }
    ]
  },
  {
    "id": 446,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임 회비를 걷는데 미납자가 많다.",
    "options": [
      { "text": "단톡방에 미납자 명단을 공개하고 입금을 독촉한다.", "type": "D" },
      { "text": "개인 톡으로 \"바쁘시죠? 까먹으신 것 같아서~\" 좋게 말한다.", "type": "I" },
      { "text": "사정이 있겠지... 기다리다가 내가 대신 내기도 한다.", "type": "S" },
      { "text": "회칙에 의거하여 미납 시 불이익을 공지한다.", "type": "C" }
    ]
  },
  {
    "id": 447,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "탈모나 피부 노화가 신경 쓰이기 시작했다.",
    "options": [
      { "text": "가장 비싸고 효과 좋다는 시술을 바로 결제한다.", "type": "D" },
      { "text": "주변에 \"나 늙었지?\" 물어보며 \"아냐 젊어\" 소리를 듣고 싶다.", "type": "I" },
      { "text": "자연스러운 현상이라 생각하고 받아들인다.", "type": "S" },
      { "text": "탈모 샴푸와 화장품 성분을 분석하고 가성비를 따진다.", "type": "C" }
    ]
  },
  {
    "id": 448,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "산 정상에서 먹을 간식을 챙겨야 한다.",
    "options": [
      { "text": "에너지 바나 초콜릿 등 열량 보충용으로 간단히 챙긴다.", "type": "D" },
      { "text": "다 같이 나눠 먹을 족발이나 치킨을 싸 간다.", "type": "I" },
      { "text": "과일을 깎아오거나 보온병에 따뜻한 커피를 챙긴다.", "type": "S" },
      { "text": "쓰레기가 나오지 않고 부피가 작은 건조 과일 등을 챙긴다.", "type": "C" }
    ]
  },
  {
    "id": 449,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "건강을 위해 금연을 결심했다. 가장 큰 유혹은?",
    "options": [
      { "text": "일이 안 풀리고 스트레스받을 때.", "type": "D" },
      { "text": "술자리에서 친구들이 권할 때.", "type": "I" },
      { "text": "습관적으로 피우던 식후 시간.", "type": "S" },
      { "text": "금단 증상으로 집중력이 떨어질 때.", "type": "C" }
    ]
  },
  {
    "id": 450,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임이 끝나고 집에 가려는데 2차를 가자고 붙잡는다.",
    "options": [
      { "text": "\"난 바빠서 간다. 재밌게 놀아.\" 뒤도 안 돌아보고 간다.", "type": "D" },
      { "text": "\"그래? 딱 한 잔만 더 할까?\" 분위기에 휩쓸린다.", "type": "I" },
      { "text": "거절하기 미안해서 억지로 끌려간다.", "type": "S" },
      { "text": "내일 일정을 고려해 정해진 귀가 시간을 지킨다.", "type": "C" }
    ]
  },
  {
    "id": 451,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "건강검진에서 '고혈압/당뇨 주의' 판정을 받았다. 당신의 첫 반응은?",
    "options": [
      { "text": "\"내가 이걸 이겨내지 못할 것 같아?\" 오기가 생겨 당장 운동을 시작한다.", "type": "D" },
      { "text": "친구들에게 \"나 이제 큰일 났다\"고 알리며 위로와 조언을 구한다.", "type": "I" },
      { "text": "가족들에게 짐이 될까 봐 걱정부터 앞서며 조용히 식단을 바꾼다.", "type": "S" },
      { "text": "수치 변화 추이를 엑셀로 정리하고 관련 의학 서적을 탐독한다.", "type": "C" }
    ]
  },
  {
    "id": 452,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임에서 산행 코스를 정해야 한다. 당신의 스타일은?",
    "options": [
      { "text": "\"오늘은 정상 정복이다. 이 코스로 가자.\" 목표 지향적으로 리드한다.", "type": "D" },
      { "text": "\"경치 좋고 사진 잘 나오는 데로 가자!\" 즐거움을 우선순위에 둔다.", "type": "I" },
      { "text": "\"다들 힘들어하지 않을 무난한 코스가 좋겠네요.\" 전체의 체력을 고려한다.", "type": "S" },
      { "text": "소요 시간, 경사도, 날씨 변수를 계산하여 가장 안전한 코스를 짠다.", "type": "C" }
    ]
  },
  {
    "id": 453,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "의사가 술과 담배를 끊으라고 강력히 권고했다.",
    "options": [
      { "text": "그 자리에서 라이터를 쓰레기통에 버린다. 결단력 있게 끊는다.", "type": "D" },
      { "text": "술자리 분위기를 못 맞춰서 어쩌지? 사람 만나는 게 걱정된다.", "type": "I" },
      { "text": "습관을 바꾸는 게 힘들지만 가족을 생각해서 서서히 줄인다.", "type": "S" },
      { "text": "금연/금주 시 신체 변화 데이터를 찾아보고 체계적인 계획을 세운다.", "type": "C" }
    ]
  },
  {
    "id": 454,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 중 동료가 발목을 삐끗했다. 당신의 대처는?",
    "options": [
      { "text": "빠르게 상황을 판단하고 하산 여부를 결정해 지시한다.", "type": "D" },
      { "text": "\"괜찮아? 많이 아프지?\" 계속 말을 걸며 긴장을 풀어준다.", "type": "I" },
      { "text": "동료가 걷기 편하도록 내 어깨를 빌려주고 짐을 들어준다.", "type": "S" },
      { "text": "구급상자에서 파스를 꺼내 처치하고 최단 하산 경로를 찾는다.", "type": "C" }
    ]
  },
  {
    "id": 455,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "몸에 좋은 건강기능식품(보약)을 고를 때 기준은?",
    "options": [
      { "text": "가장 효과가 빠르고 강력하다고 소문난 프리미엄 제품.", "type": "D" },
      { "text": "친구가 먹어보고 좋다고 강력 추천한 제품.", "type": "I" },
      { "text": "부작용 없고 오랫동안 사람들이 애용해 온 검증된 제품.", "type": "S" },
      { "text": "성분표와 함량을 꼼꼼히 비교하고 식약처 인증 여부를 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 456,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 후 뒤풀이 회식 장소를 정해야 한다.",
    "options": [
      { "text": "\"내가 아는 맛집 있어. 거기로 가.\" 내 단골집으로 데려간다.", "type": "D" },
      { "text": "\"분위기 띄우기 좋은 노래방 있는 식당 어때?\" 흥을 돋운다.", "type": "I" },
      { "text": "회원들이 가장 선호하는 메뉴로 의견을 모아 결정한다.", "type": "S" },
      { "text": "인원수, 예산, 주차 가능 여부를 확인하고 예약한다.", "type": "C" }
    ]
  },
  {
    "id": 457,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "나이가 들면서 체력이 예전 같지 않음을 느낀다.",
    "options": [
      { "text": "인정할 수 없다. 더 강도 높은 운동으로 체력을 끌어올린다.", "type": "D" },
      { "text": "\"나도 이제 늙었나 봐~\" 농담하며 주변의 위로를 받는다.", "type": "I" },
      { "text": "무리가 가지 않게 활동량을 조절하며 현실에 순응한다.", "type": "S" },
      { "text": "노화의 원인을 분석하고 연령에 맞는 운동 처방을 받는다.", "type": "C" }
    ]
  },
  {
    "id": 458,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "산행 중 갈림길이 나왔는데 의견이 분분하다.",
    "options": [
      { "text": "\"내 감을 믿어. 이쪽이야.\" 자신 있게 방향을 잡는다.", "type": "D" },
      { "text": "\"지나가던 사람한테 물어보자!\" 넉살 좋게 해결한다.", "type": "I" },
      { "text": "다수가 원하는 쪽으로 조용히 따라간다.", "type": "S" },
      { "text": "지도 앱과 나침반을 꺼내 정확한 방위를 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 459,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "매일 먹어야 하는 약이 늘어났다. 관리 방법은?",
    "options": [
      { "text": "약 먹는 것도 일이다. 귀찮지만 살기 위해 한 번에 털어 넣는다.", "type": "D" },
      { "text": "자꾸 깜빡해서 배우자가 챙겨주거나 눈에 띄는 곳에 둔다.", "type": "I" },
      { "text": "알람을 맞춰두고 정해진 시간에 꼬박꼬박 챙겨 먹는다.", "type": "S" },
      { "text": "약물 상호작용과 부작용 설명서를 정독하고 복용 일지를 쓴다.", "type": "C" }
    ]
  },
  {
    "id": 460,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임 회장이 독단적으로 운영하여 불만이 생겼다.",
    "options": [
      { "text": "총회에서 공개적으로 문제를 제기하고 시정을 요구한다.", "type": "D" },
      { "text": "친한 회원들과 술 한잔하며 뒷담화로 스트레스를 푼다.", "type": "I" },
      { "text": "시끄러워지는 게 싫어서 회비만 내고 참석을 줄인다.", "type": "S" },
      { "text": "회칙 위반 사항을 정리하여 운영진에게 서면으로 전달한다.", "type": "C" }
    ]
  },
  {
    "id": 461,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "다이어트를 위해 식단 관리를 시작해야 한다.",
    "options": [
      { "text": "\"오늘부터 탄수화물 금지.\" 목표 달성을 위해 극단적으로 끊는다.", "type": "D" },
      { "text": "맛있는 모임 자리가 많아서 식단 지키기가 너무 힘들다.", "type": "I" },
      { "text": "가족들과 함께 먹는 밥상에서 밥 양만 조금 줄인다.", "type": "S" },
      { "text": "칼로리와 영양 성분을 계산하여 철저하게 식단을 짠다.", "type": "C" }
    ]
  },
  {
    "id": 462,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 장비를 새로 장만하려고 한다.",
    "options": [
      { "text": "전문가용 최고급 스펙의 신상 장비를 산다. (장비빨)", "type": "D" },
      { "text": "동호회 사람들이 많이 쓰고 디자인이 예쁜 걸로 산다.", "type": "I" },
      { "text": "튼튼하고 오래 쓸 수 있는 무난한 브랜드를 고른다.", "type": "S" },
      { "text": "기능성 소재와 가성비를 비교 분석하여 최적의 제품을 구매한다.", "type": "C" }
    ]
  },
  {
    "id": 463,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "큰 병은 아니지만 수술이 필요하다는 진단을 받았다.",
    "options": [
      { "text": "가장 실력 있는 의사를 찾아가서 빨리 수술 날짜를 잡는다.", "type": "D" },
      { "text": "무섭고 두려운 마음을 지인들에게 털어놓으며 위로받는다.", "type": "I" },
      { "text": "가족들이 걱정할까 봐 최대한 담담한 척한다.", "type": "S" },
      { "text": "수술 방법, 회복 기간, 후유증에 대해 상세히 질문하고 공부한다.", "type": "C" }
    ]
  },
  {
    "id": 464,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 중 낯선 사람이 길을 물어본다.",
    "options": [
      { "text": "\"이리로 쭉 가시면 됩니다.\" 짧고 명확하게 알려준다.", "type": "D" },
      { "text": "\"어디서 오셨어요? 힘드시죠?\" 스몰토크를 하며 친절히 알려준다.", "type": "I" },
      { "text": "내가 아는 길이 맞나 확신이 없어서 우물쭈물한다.", "type": "S" },
      { "text": "지도를 펴서 현재 위치와 목적지를 정확하게 짚어준다.", "type": "C" }
    ]
  },
  {
    "id": 465,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "갱년기 증상(불면증, 열감 등)으로 일상생활이 힘들다.",
    "options": [
      { "text": "\"정신력으로 버틴다.\" 약에 의존하지 않고 운동으로 푼다.", "type": "D" },
      { "text": "\"나 요즘 너무 힘들어 ㅠㅠ\" 주변에 하소연하며 스트레스를 푼다.", "type": "I" },
      { "text": "가족들에게 짜증 내기 싫어서 혼자 꾹 참는다.", "type": "S" },
      { "text": "갱년기 호르몬 수치를 검사하고 의학적 치료를 받는다.", "type": "C" }
    ]
  },
  {
    "id": 466,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임에서 단체 사진을 찍으려 한다.",
    "options": [
      { "text": "\"자, 빨리 모이세요! 찍습니다!\" 대열을 정비하고 지휘한다.", "type": "D" },
      { "text": "정중앙이나 가장 눈에 띄는 포즈로 사진에 찍힌다.", "type": "I" },
      { "text": "뒤편이나 구석에 서서 조용히 미소 짓는다.", "type": "S" },
      { "text": "사진 찍어주는 역할을 자처하거나 구도가 맞는지 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 467,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "건강을 위해 헬스장(PT)을 등록했다.",
    "options": [
      { "text": "트레이너에게 \"최단기간에 몸을 만들어달라\"고 요구한다.", "type": "D" },
      { "text": "헬스장에서 사람들과 인사하고 친해지는 게 더 재밌다.", "type": "I" },
      { "text": "트레이너가 시키는 대로 묵묵히 성실하게 운동한다.", "type": "S" },
      { "text": "운동 횟수와 세트, 변화된 인바디 수치를 기록하며 분석한다.", "type": "C" }
    ]
  },
  {
    "id": 468,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 중 쓰레기를 아무데나 버리는 사람을 목격했다.",
    "options": [
      { "text": "\"이봐요! 쓰레기 주우세요.\" 즉시 큰 소리로 지적한다.", "type": "D" },
      { "text": "\"아이구, 산이 아파하겠네~\" 들으라는 듯이 돌려 말한다.", "type": "I" },
      { "text": "싸움 날까 봐 무섭지만, 그 사람이 가고 나면 내가 줍는다.", "type": "S" },
      { "text": "산림보호법 위반 과태료가 얼마인지 생각하며 눈살을 찌푸린다.", "type": "C" }
    ]
  },
  {
    "id": 469,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "건강 검진 결과를 배우자에게 알려야 한다.",
    "options": [
      { "text": "\"별거 아냐. 내가 알아서 관리할게.\" 걱정시키지 않게 축소해서 말한다.", "type": "D" },
      { "text": "\"여보 나 아프대... 잘 챙겨줘야 해?\" 어리광 부리며 알린다.", "type": "I" },
      { "text": "배우자가 놀랄까 봐 조심스럽게 꺼내며 안심시킨다.", "type": "S" },
      { "text": "검진 결과지를 보여주며 의사의 소견을 정확히 전달한다.", "type": "C" }
    ]
  },
  {
    "id": 470,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임 총무를 맡아달라는 부탁을 받았다.",
    "options": [
      { "text": "\"회장이라면 몰라도 총무는 귀찮아.\" 거절하거나 조건을 건다.", "type": "D" },
      { "text": "\"돈 계산은 쥐약인데... 오락부장은 어때?\" 웃으며 피한다.", "type": "I" },
      { "text": "아무도 할 사람이 없다면 내가 희생해서 맡는다.", "type": "S" },
      { "text": "회비 내역을 1원 단위까지 엑셀로 관리할 자신이 있어 수락한다.", "type": "C" }
    ]
  },
  {
    "id": 471,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "스트레스로 인해 불면증이 생겼다.",
    "options": [
      { "text": "잠이 안 와도 억지로 누워 있는다. 내 의지로 잔다.", "type": "D" },
      { "text": "밤늦게까지 친구와 통화하거나 TV를 보며 시간을 보낸다.", "type": "I" },
      { "text": "따뜻한 우유를 마시거나 명상을 하며 안정을 취한다.", "type": "S" },
      { "text": "수면 패턴을 기록하고 수면 유도에 좋은 환경을 조성한다.", "type": "C" }
    ]
  },
  {
    "id": 472,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "산행 속도가 느린 회원이 있어 전체 일정이 지체된다.",
    "options": [
      { "text": "\"좀 더 속도 냅시다! 해 지기 전에 내려가야죠.\" 재촉한다.", "type": "D" },
      { "text": "\"천천히 가요~ 경치도 보고 좋네!\" 분위기를 띄운다.", "type": "I" },
      { "text": "뒤처진 회원 옆에서 발맞춰주며 말벗이 되어준다.", "type": "S" },
      { "text": "예상 도착 시간이 얼마나 늦어질지 계산하고 휴식 시간을 조정한다.", "type": "C" }
    ]
  },
  {
    "id": 473,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "갑작스러운 치통이 생겼다.",
    "options": [
      { "text": "참을 만큼 참다가 도저히 안 되면 병원에 간다.", "type": "D" },
      { "text": "\"아파 죽겠어\"라며 엄살을 부리고 바로 병원에 간다.", "type": "I" },
      { "text": "병원비 걱정과 치료의 두려움 때문에 진통제로 버틴다.", "type": "S" },
      { "text": "치과 후기를 검색하고 과잉 진료 없는 곳을 예약한다.", "type": "C" }
    ]
  },
  {
    "id": 474,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 도시락을 준비해야 한다.",
    "options": [
      { "text": "김밥이나 햄버거 등 간편하고 먹기 편한 것으로 사 간다.", "type": "D" },
      { "text": "동료들과 나눠 먹을 과일, 간식, 막걸리 등을 잔뜩 챙긴다.", "type": "I" },
      { "text": "직접 싼 밥과 반찬으로 정성스럽게 도시락을 준비한다.", "type": "S" },
      { "text": "상하지 않는 메뉴와 개인 수저, 물티슈까지 꼼꼼히 챙긴다.", "type": "C" }
    ]
  },
  {
    "id": 475,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "유행하는 '간헐적 단식'을 시도해 보려 한다.",
    "options": [
      { "text": "\"무조건 16시간 공복.\" 목표 달성을 위해 극단적으로 끊는다.", "type": "D" },
      { "text": "배고픔을 못 참고 \"오늘만 먹고 내일부터!\"라며 실패한다.", "type": "I" },
      { "text": "가족들 식사 시간과 맞지 않아 흐지부지된다.", "type": "S" },
      { "text": "단식 시간과 섭취 칼로리를 앱에 기록하며 철저히 관리한다.", "type": "C" }
    ]
  },
  {
    "id": 476,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임 회비가 부족하다는 공지가 떴다.",
    "options": [
      { "text": "\"이번엔 내가 낼게.\" 혹은 \"회비 인상해.\" 쿨하게 해결.", "type": "D" },
      { "text": "\"우리 갹출할까?\" 분위기에 휩쓸려 기분 좋게 낸다.", "type": "I" },
      { "text": "부담스럽지만 남들이 내는 만큼 조용히 입금한다.", "type": "S" },
      { "text": "지출 내역서를 공개해 달라고 요청하여 원인을 파악한다.", "type": "C" }
    ]
  },
  {
    "id": 477,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "지인에게 중병 소식을 들었다. 병문안을 갈 때?",
    "options": [
      { "text": "\"힘내라. 이겨낼 수 있다.\" 강한 긍정의 메시지를 전한다.", "type": "D" },
      { "text": "손을 잡고 같이 울며 감정적으로 위로한다.", "type": "I" },
      { "text": "환자가 필요한 것이 무엇인지 조용히 살피고 챙겨준다.", "type": "S" },
      { "text": "병에 좋은 음식이나 치료 정보를 찾아 프린트해 간다.", "type": "C" }
    ]
  },
  {
    "id": 478,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "비가 올 것 같은 날씨에 등산 약속이 잡혀있다.",
    "options": [
      { "text": "\"이 정도 비는 맞아도 돼. 그냥 진행해.\" 강행한다.", "type": "D" },
      { "text": "\"비 오면 파전에 막걸리나 먹으러 가자!\" 변경을 제안한다.", "type": "I" },
      { "text": "운영진의 결정이 내려질 때까지 기다린다.", "type": "S" },
      { "text": "강수 확률을 시간대별로 확인하고 취소 여부를 판단한다.", "type": "C" }
    ]
  },
  {
    "id": 479,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "새로운 운동 기구를 샀는데 조립이 복잡하다.",
    "options": [
      { "text": "설명서 없이 대충 감으로 조립하다가 안 되면 화낸다.", "type": "D" },
      { "text": "배우자나 자녀에게 \"이것 좀 해줘~\" 부탁한다.", "type": "I" },
      { "text": "시간이 걸리더라도 차근차근 맞는지 확인하며 조립한다.", "type": "S" },
      { "text": "설명서를 1번부터 끝까지 정독한 후 순서대로 조립한다.", "type": "C" }
    ]
  },
  {
    "id": 480,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 중 정치 이야기로 회원 간에 말다툼이 생겼다.",
    "options": [
      { "text": "\"그만합시다! 산에 와서 무슨 짓입니까!\" 강하게 제지한다.", "type": "D" },
      { "text": "\"에이~ 우리 즐거운 얘기만 해요~\" 화제를 돌린다.", "type": "I" },
      { "text": "불편해서 슬그머니 자리를 피하거나 묵묵부답한다.", "type": "S" },
      { "text": "양쪽 주장의 논리적 오류를 속으로 분석하며 관망한다.", "type": "C" }
    ]
  },
  {
    "id": 481,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "노안이 와서 작은 글씨가 잘 안 보인다.",
    "options": [
      { "text": "불편함을 참지 못하고 당장 비싸고 좋은 다초점 렌즈를 맞춘다.", "type": "D" },
      { "text": "돋보기 쓰는 모습을 보이기 싫어서 안 보이는 척 넘긴다.", "type": "I" },
      { "text": "노화의 자연스러운 현상이라 생각하고 돋보기를 쓴다.", "type": "S" },
      { "text": "시력 검사를 다시 하고 렌즈 도수와 종류를 꼼꼼히 고른다.", "type": "C" }
    ]
  },
  {
    "id": 482,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임에서 새로운 회원이 들어왔다.",
    "options": [
      { "text": "\"어떤 일 하세요?\" 직업이나 사회적 위치부터 묻는다.", "type": "D" },
      { "text": "\"반가워요! 우리 모임 진짜 재밌어요!\" 환대한다.", "type": "I" },
      { "text": "어색하지 않게 옆에서 조용히 챙겨준다.", "type": "S" },
      { "text": "회칙과 모임 일정을 정확하게 안내해 준다.", "type": "C" }
    ]
  },
  {
    "id": 483,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "건강 검진 전날, 금식을 해야 한다.",
    "options": [
      { "text": "물 한 모금도 안 마시고 철저하게 지킨다. (규칙 준수)", "type": "D" },
      { "text": "배고픔을 못 참고 \"이 정도는 괜찮겠지\" 하며 조금 먹는다.", "type": "I" },
      { "text": "가족들이 먹는 걸 보면 힘들지만 꾹 참는다.", "type": "S" },
      { "text": "정확한 검사 결과를 위해 금식 시간과 주의사항을 완벽히 지킨다.", "type": "C" }
    ]
  },
  {
    "id": 484,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 코스가 예상보다 너무 험난하다.",
    "options": [
      { "text": "\"이까짓 거! 가자!\" 도전 의식을 불태운다.", "type": "D" },
      { "text": "\"아이고 죽겠다~\" 엄살을 부리며 동료들과 웃는다.", "type": "I" },
      { "text": "힘들어도 내색하지 않고 묵묵히 끝까지 따라간다.", "type": "S" },
      { "text": "현재 체력과 남은 거리를 계산해 완주 가능성을 판단한다.", "type": "C" }
    ]
  },
  {
    "id": 485,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "유명한 명의(名醫)에게 진료받기 위해 대기가 길다.",
    "options": [
      { "text": "인맥을 동원해 순서를 앞당길 방법이 없는지 알아본다.", "type": "D" },
      { "text": "대기실 옆 사람들과 수다를 떨며 지루함을 달랜다.", "type": "I" },
      { "text": "유명한 분이니 어쩔 수 없지... 하염없이 기다린다.", "type": "S" },
      { "text": "책을 읽거나 업무를 보며 대기 시간을 효율적으로 쓴다.", "type": "C" }
    ]
  },
  {
    "id": 486,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임에서 1박 2일 워크숍을 가자고 한다.",
    "options": [
      { "text": "\"좋아. 일정 내가 짤게.\" 리더십을 발휘한다.", "type": "D" },
      { "text": "\"밤새 마시고 놀자!\" 장기자랑 준비에 신이 난다.", "type": "I" },
      { "text": "집을 비우는 게 부담스럽지만 다들 간다면 간다.", "type": "S" },
      { "text": "숙소 상태, 비용, 교통편을 꼼꼼히 따져보고 결정한다.", "type": "C" }
    ]
  },
  {
    "id": 487,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "건강을 위해 걷기 운동을 하는데 지루하다.",
    "options": [
      { "text": "목표 걸음 수나 시간을 정해놓고 기록을 경신하며 걷는다.", "type": "D" },
      { "text": "친구와 통화하거나 같이 걸을 파트너를 구한다.", "type": "I" },
      { "text": "생각을 정리하거나 풍경을 보며 꾸준히 걷는다.", "type": "S" },
      { "text": "팟캐스트나 오디오북을 들으며 시간을 알차게 쓴다.", "type": "C" }
    ]
  },
  {
    "id": 488,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "하산 후 식사 메뉴를 고르는데 의견이 안 모인다.",
    "options": [
      { "text": "\"오늘은 오리고기. 예약해.\" 메뉴를 통보한다.", "type": "D" },
      { "text": "\"뭐가 맛있을까? 다 좋아!\" 결정은 못 하고 분위기만 맞춘다.", "type": "I" },
      { "text": "\"아무거나 괜찮아요.\" 남들이 결정하길 기다린다.", "type": "S" },
      { "text": "근처 식당 평점과 리뷰를 검색해 3곳을 추려 제안한다.", "type": "C" }
    ]
  },
  {
    "id": 489,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "몸이 아파서 병원에 갔는데 의사가 불친절하다.",
    "options": [
      { "text": "\"환자한테 태도가 그게 뭡니까?\" 따끔하게 항의한다.", "type": "D" },
      { "text": "기분 나쁘지만 참고 나와서 간호사나 지인에게 하소연한다.", "type": "I" },
      { "text": "의사가 바빠서 그렇겠지... 이해하고 넘어간다.", "type": "S" },
      { "text": "진료 내용을 녹음하거나 메모하고, 병원을 바꿀지 고려한다.", "type": "C" }
    ]
  },
  {
    "id": 490,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임에서 누군가 규칙을 어기고 위험한 행동을 한다.",
    "options": [
      { "text": "\"당장 내려와요! 위험합니다.\" 즉시 제지한다.", "type": "D" },
      { "text": "\"어머, 그러다 다쳐요~ 조심하세요.\" 걱정스레 말한다.", "type": "I" },
      { "text": "사고 날까 봐 조마조마하지만 직접 말은 못 한다.", "type": "S" },
      { "text": "안전 수칙 위반임을 인지하고 사고 시 책임 소재를 생각한다.", "type": "C" }
    ]
  },
  {
    "id": 491,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "건강 검진 결과, 재검사가 필요하다고 한다.",
    "options": [
      { "text": "당장 가장 큰 병원으로 예약해. 결과를 빨리 알아야겠다.", "type": "D" },
      { "text": "큰 병이면 어떡하지? 불안해서 일이 손에 안 잡힌다.", "type": "I" },
      { "text": "별일 없을 거라고 스스로 위로하며 차분히 기다린다.", "type": "S" },
      { "text": "의심되는 질환의 증상과 검사 방법을 미리 찾아본다.", "type": "C" }
    ]
  },
  {
    "id": 492,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임 회원이 내 장비를 보고 훈수를 둔다.",
    "options": [
      { "text": "\"내가 알아서 샀어. 신경 꺼.\" 불쾌함을 표현한다.", "type": "D" },
      { "text": "\"그래요? 다음엔 그걸로 사야겠네!\" 웃으며 넘긴다.", "type": "I" },
      { "text": "기분 나쁘지만 \"조언 감사합니다\"라고 예의를 갖춘다.", "type": "S" },
      { "text": "내 장비의 스펙과 장점을 설명하며 내 선택의 이유를 말한다.", "type": "C" }
    ]
  },
  {
    "id": 493,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀가 내 건강을 걱정하며 운동을 잔소리한다.",
    "options": [
      { "text": "\"내 몸은 내가 챙겨. 잔소리 마라.\" 권위적으로 대응.", "type": "D" },
      { "text": "\"알았어~ 우리 딸/아들이 최고네!\" 말로만 알겠다고 한다.", "type": "I" },
      { "text": "자녀가 걱정하는 게 미안해서 운동하는 척이라도 한다.", "type": "S" },
      { "text": "운동 계획표를 보여주며 실천하고 있음을 증명한다.", "type": "C" }
    ]
  },
  {
    "id": 494,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 중 멋진 풍경을 만났다.",
    "options": [
      { "text": "정상 정복이 우선이다. 눈으로만 보고 지나간다.", "type": "D" },
      { "text": "\"여기 봐! 사진 찍자!\" 포즈를 취하고 인증샷을 남긴다.", "type": "I" },
      { "text": "잠시 멈춰서 경치를 감상하며 휴식을 취한다.", "type": "S" },
      { "text": "풍경 사진을 잘 찍기 위해 구도와 조명을 맞춘다.", "type": "C" }
    ]
  },
  {
    "id": 495,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "스트레스 해소용으로 '명상'을 권유받았다.",
    "options": [
      { "text": "가만히 앉아있는 건 적성에 안 맞는다. 활동적인 게 좋다.", "type": "D" },
      { "text": "여럿이 같이 하는 요가나 명상 교실이면 가보겠다.", "type": "I" },
      { "text": "마음의 안정을 위해 혼자 조용히 시도해 본다.", "type": "S" },
      { "text": "명상의 의학적 효능과 뇌파 변화에 대한 자료를 본다.", "type": "C" }
    ]
  },
  {
    "id": 496,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임 회비를 걷는데 미납자가 많다.",
    "options": [
      { "text": "단톡방에 미납자 명단을 공개하고 입금을 독촉한다.", "type": "D" },
      { "text": "개인 톡으로 \"바쁘시죠? 까먹으신 것 같아서~\" 좋게 말한다.", "type": "I" },
      { "text": "사정이 있겠지... 기다리다가 내가 대신 내기도 한다.", "type": "S" },
      { "text": "회칙에 의거하여 미납 시 불이익을 공지한다.", "type": "C" }
    ]
  },
  {
    "id": 497,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "탈모나 피부 노화가 신경 쓰이기 시작했다.",
    "options": [
      { "text": "가장 비싸고 효과 좋다는 시술을 바로 결제한다.", "type": "D" },
      { "text": "주변에 \"나 늙었지?\" 물어보며 \"아냐 젊어\" 소리를 듣고 싶다.", "type": "I" },
      { "text": "자연스러운 현상이라 생각하고 받아들인다.", "type": "S" },
      { "text": "탈모 샴푸와 화장품 성분을 분석하고 가성비를 따진다.", "type": "C" }
    ]
  },
  {
    "id": 498,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "산 정상에서 먹을 간식을 챙겨야 한다.",
    "options": [
      { "text": "에너지 바나 초콜릿 등 열량 보충용으로 간단히 챙긴다.", "type": "D" },
      { "text": "다 같이 나눠 먹을 족발이나 치킨을 싸 간다.", "type": "I" },
      { "text": "과일을 깎아오거나 보온병에 따뜻한 커피를 챙긴다.", "type": "S" },
      { "text": "쓰레기가 나오지 않고 부피가 작은 건조 과일 등을 챙긴다.", "type": "C" }
    ]
  },
  {
    "id": 499,
    "category": "health_lifestyle",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "건강을 위해 금연을 결심했다. 가장 큰 유혹은?",
    "options": [
      { "text": "일이 안 풀리고 스트레스받을 때.", "type": "D" },
      { "text": "술자리에서 친구들이 권할 때.", "type": "I" },
      { "text": "습관적으로 피우던 식후 시간.", "type": "S" },
      { "text": "금단 증상으로 집중력이 떨어질 때.", "type": "C" }
    ]
  },
  {
    "id": 500,
    "category": "social_gathering",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "등산 모임이 끝나고 집에 가려는데 2차를 가자고 붙잡는다.",
    "options": [
      { "text": "\"난 바빠서 간다. 재밌게 놀아.\" 뒤도 안 돌아보고 간다.", "type": "D" },
      { "text": "\"그래? 딱 한 잔만 더 할까?\" 분위기에 휩쓸린다.", "type": "I" },
      { "text": "거절하기 미안해서 억지로 끌려간다.", "type": "S" },
      { "text": "내일 일정을 고려해 정해진 귀가 시간을 지킨다.", "type": "C" }
    ]
  },
  {
    "id": 501,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "은퇴까지 10년 남았다. 현재 보유한 여유 자금을 어떻게 운용할 것인가?",
    "options": [
      { "text": "아직 늦지 않았다. 고수익을 목표로 주식 비중을 공격적으로 늘린다.", "type": "D" },
      { "text": "요즘 뜨는 테마주나 지인이 추천해 준 성장 가능성 높은 종목에 투자한다.", "type": "I" },
      { "text": "원금 손실은 절대 안 된다. 이자가 낮더라도 예금이나 채권에 묶어둔다.", "type": "S" },
      { "text": "자산 배분 이론에 따라 주식, 채권, 원자재로 포트폴리오를 정밀하게 짠다.", "type": "C" }
    ]
  },
  {
    "id": 502,
    "category": "real_estate",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀들이 출가한 후, 지금 살고 있는 넓은 아파트를 처분할지 고민 중이다.",
    "options": [
      { "text": "즉시 처분하여 현금화하고, 그 돈으로 수익형 부동산에 재투자한다.", "type": "D" },
      { "text": "집을 줄여서 남는 돈으로 부부 동반 여행이나 취미 생활을 즐긴다.", "type": "I" },
      { "text": "자녀들이 언제든 올 수 있도록, 힘들어도 지금 집을 계속 유지한다.", "type": "S" },
      { "text": "양도세와 향후 집값 전망, 이사 비용을 엑셀로 비교 분석해 결정한다.", "type": "C" }
    ]
  },
  {
    "id": 503,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "주식 시장이 폭락하여 계좌가 마이너스가 되었다. 당신의 대처는?",
    "options": [
      { "text": "위기는 기회다. 과감하게 추가 매수(물타기)하여 반등 시 큰 이익을 노린다.", "type": "D" },
      { "text": "\"언젠간 오르겠지!\" 긍정적으로 생각하며 주식창을 덮고 잊어버린다.", "type": "I" },
      { "text": "너무 불안해서 잠이 안 온다. 더 큰 손해를 보기 전에 지금이라도 다 판다.", "type": "S" },
      { "text": "기업 가치와 거시 경제 지표를 재점검하여 손절매 라인을 지킨다.", "type": "C" }
    ]
  },
  {
    "id": 504,
    "category": "real_estate",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "노후 대비용으로 상가 투자를 권유받았다. 무엇을 가장 먼저 확인할까?",
    "options": [
      { "text": "\"수익률이 확실합니까?\" 보장된 수익과 내가 통제할 수 있는 권한을 묻는다.", "type": "D" },
      { "text": "\"거기 상권이 활발한가요?\" 사람들이 많이 모이는 핫플레이스인지 본다.", "type": "I" },
      { "text": "\"공실 나면 어떡하죠?\" 리스크가 없는지, 안전한지부터 걱정한다.", "type": "S" },
      { "text": "등기부 등본, 주변 시세, 유동 인구 데이터를 직접 확인하고 분석한다.", "type": "C" }
    ]
  },
  {
    "id": 505,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자산 관리사(PB)를 선택해야 한다. 어떤 스타일의 전문가를 선호하는가?",
    "options": [
      { "text": "내 목표를 달성해 줄 수 있는, 실적 좋고 능력 있는 전문가.", "type": "D" },
      { "text": "대화가 잘 통하고 사교적이며 인간적인 매력이 있는 전문가.", "type": "I" },
      { "text": "내 이야기를 잘 들어주고 무리한 투자를 권하지 않는 성실한 전문가.", "type": "S" },
      { "text": "객관적인 데이터와 차트로 논리적인 설명을 해주는 꼼꼼한 전문가.", "type": "C" }
    ]
  },
  {
    "id": 506,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "친구 모임에서 누군가 '대박 투자 정보'라며 솔깃한 이야기를 한다.",
    "options": [
      { "text": "그 자리에서 핵심 정보를 캐내어 내가 직접 투자 결정을 내린다.", "type": "D" },
      { "text": "\"진짜? 나도 좀 끼워줘!\" 분위기에 휩쓸려 함께 투자하고 싶어진다.", "type": "I" },
      { "text": "혹시 사기는 아닐까? 의심스럽지만 친구가 무안할까 봐 듣고만 있는다.", "type": "S" },
      { "text": "집에 와서 해당 정보의 사실 여부와 관련 기사를 철저히 검증한다.", "type": "C" }
    ]
  },
  {
    "id": 507,
    "category": "real_estate",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "은퇴 후 전원주택을 짓고 살고 싶은 꿈이 있다.",
    "options": [
      { "text": "내가 직접 설계하고 시공 과정을 지휘하여 나만의 왕국을 짓는다.", "type": "D" },
      { "text": "친구들을 초대해서 바비큐 파티를 할 수 있는 넓은 마당이 필수다.", "type": "I" },
      { "text": "이웃들과 사이좋게 지낼 수 있는 기존 전원 마을 단지에 입주한다.", "type": "S" },
      { "text": "건축법규, 난방비 효율, 병원과의 거리를 따져서 부지를 선정한다.", "type": "C" }
    ]
  },
  {
    "id": 508,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "노후 생활비를 위해 국민연금을 조기 수령할지 고민이다.",
    "options": [
      { "text": "지금 당장 사업 자금이나 투자금이 필요하니 손해 보더라도 당겨 받는다.", "type": "D" },
      { "text": "지금 즐기는 게 중요하지! 미리 받아서 여행도 가고 여유 있게 쓴다.", "type": "I" },
      { "text": "나중에 돈 떨어지면 어떡해. 정해진 시기까지 꼬박꼬박 기다린다.", "type": "S" },
      { "text": "조기 수령 시 감액률과 기대 수명을 계산해 총 수령액을 비교한다.", "type": "C" }
    ]
  },
  {
    "id": 509,
    "category": "real_estate",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "보유 중인 부동산 세금이 너무 많이 나왔다.",
    "options": [
      { "text": "세금 내느니 차라리 판다. 빠른 매도를 위해 부동산에 독촉한다.", "type": "D" },
      { "text": "세금 낼 돈 없는데 어쩌지? 주변 사람들에게 하소연한다.", "type": "I" },
      { "text": "아깝지만 국민의 의무니 어쩔 수 없지. 적금 깨서 납부한다.", "type": "S" },
      { "text": "절세할 수 있는 방법(증여, 공동명의 등)을 세무사와 상담한다.", "type": "C" }
    ]
  },
  {
    "id": 510,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "퇴직금을 받았다. 이 목돈을 어떻게 관리할 것인가?",
    "options": [
      { "text": "창업이나 직접 투자를 통해 자산을 두 배로 불릴 계획을 세운다.", "type": "D" },
      { "text": "그동안 고생한 나를 위해 차를 바꾸거나 명품을 사는 데 일부 쓴다.", "type": "I" },
      { "text": "절대 잃으면 안 되는 생명줄이다. 원금 보장형 연금에 넣는다.", "type": "S" },
      { "text": "물가 상승률을 고려하여 예금, 펀드, 보험으로 분산 배치한다.", "type": "C" }
    ]
  },
  {
    "id": 511,
    "category": "real_estate",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "세입자가 월세를 자꾸 밀린다.",
    "options": [
      { "text": "당장 전화해서 \"이번 달까지 안 내면 방 빼세요\"라고 통보한다.", "type": "D" },
      { "text": "사정이 있겠지 하고 좋게 넘어가 주다가 속만 끓인다.", "type": "I" },
      { "text": "독촉하기 미안해서 기다리다가 보증금에서 차감한다.", "type": "S" },
      { "text": "내용증명을 발송하고 명도 소송 절차를 알아본다.", "type": "C" }
    ]
  },
  {
    "id": 512,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀가 결혼 자금으로 내 노후 자금의 일부를 지원해달라고 한다.",
    "options": [
      { "text": "\"내 노후가 우선이다. 지원은 여기까지다.\" 단호하게 거절한다.", "type": "D" },
      { "text": "\"그래, 우리 딸/아들 기죽으면 안 되지.\" 기분 좋게 지원해 준다.", "type": "I" },
      { "text": "내 노후가 걱정되지만 자식 부탁을 거절 못 해 무리해서 준다.", "type": "S" },
      { "text": "차용증을 쓰고 이자는 어떻게 할지 명확한 상환 계획을 요구한다.", "type": "C" }
    ]
  },
  {
    "id": 513,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "가상화폐(코인) 투자 열풍이 불 때 당신의 태도는?",
    "options": [
      { "text": "높은 변동성은 곧 기회다. 단타 매매로 수익을 노린다.", "type": "D" },
      { "text": "남들이 다 돈 벌었다고 하니 나도 소외되기 싫어서 따라 산다.", "type": "I" },
      { "text": "실체가 없는 것에 돈을 쓸 수 없다. 쳐다도 보지 않는다.", "type": "S" },
      { "text": "블록체인 기술과 코인의 가치를 공부한 뒤 확신이 서면 소액 투자한다.", "type": "C" }
    ]
  },
  {
    "id": 514,
    "category": "real_estate",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "재개발 지역 투자를 고려 중이다. 조합원 총회에 참석했다.",
    "options": [
      { "text": "진행이 답답하면 내가 조합장이나 임원을 맡아 추진한다.", "type": "D" },
      { "text": "이웃 조합원들과 인사하고 정보를 교환하며 친목을 다진다.", "type": "I" },
      { "text": "갈등이나 소송에 휘말릴까 봐 조용히 뒷자리에 앉아 있는다.", "type": "S" },
      { "text": "추가 분담금 내역과 사업 진행표를 꼼꼼히 메모하며 듣는다.", "type": "C" }
    ]
  },
  {
    "id": 515,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "은퇴 후 창업을 한다면 어떤 업종을 선택할까?",
    "options": [
      { "text": "내가 리더십을 발휘할 수 있는 컨설팅 회사나 프랜차이즈 본사.", "type": "D" },
      { "text": "사람들을 많이 만나고 즐거움을 주는 카페나 게스트하우스.", "type": "I" },
      { "text": "리스크가 적고 안정적인 소규모 무인 점포나 편의점.", "type": "S" },
      { "text": "전문 기술이나 지식을 활용하는 1인 지식 기업.", "type": "C" }
    ]
  },
  {
    "id": 516,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "금융 상품 가입 시 약관 설명서가 너무 두껍다.",
    "options": [
      { "text": "\"중요한 것만 요약해 주세요. 사인은 어디 하면 됩니까?\"", "type": "D" },
      { "text": "설명하는 직원과 사적인 대화를 나누느라 내용은 대충 듣는다.", "type": "I" },
      { "text": "이해 안 가도 계속 물어보기 미안해서 그냥 사인한다.", "type": "S" },
      { "text": "집에 가져가서 돋보기를 쓰고라도 작은 글씨까지 정독한다.", "type": "C" }
    ]
  },
  {
    "id": 517,
    "category": "real_estate",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "살고 있는 집의 리모델링을 계획하고 있다.",
    "options": [
      { "text": "최신 유행하는 고급 자재로 화려하고 웅장하게 고친다.", "type": "D" },
      { "text": "파티하기 좋게 거실을 넓히고 조명에 신경 쓴다.", "type": "I" },
      { "text": "오래 질리지 않는 무난하고 편안한 스타일을 고수한다.", "type": "S" },
      { "text": "단열, 방수, 수납 효율성 등 기능적인 면을 최우선으로 한다.", "type": "C" }
    ]
  },
  {
    "id": 518,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "주식 투자 리딩방(유료 자문) 가입 문자가 왔다.",
    "options": [
      { "text": "수익률 500% 보장? 혹해서 클릭해 보거나 전화해서 따져 묻는다.", "type": "D" },
      { "text": "무료 체험방에 들어가서 사람들의 반응을 구경한다.", "type": "I" },
      { "text": "모르는 번호는 무조건 차단하고 삭제한다.", "type": "S" },
      { "text": "해당 업체의 사업자 등록 여부와 과거 실적을 조회해 본다.", "type": "C" }
    ]
  },
  {
    "id": 519,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "배우자가 상의 없이 큰돈을 투자했다가 손실을 봤다.",
    "options": [
      { "text": "\"도대체 생각이 있는 거야?\" 불같이 화내며 경제권을 박탈한다.", "type": "D" },
      { "text": "\"아이고 어떡해... 속상해서 술이나 한잔하자.\" 같이 한탄한다.", "type": "I" },
      { "text": "속은 타들어가지만 이미 벌어진 일, 배우자를 위로한다.", "type": "S" },
      { "text": "남은 자산이 얼마인지 확인하고 복구 계획을 수립한다.", "type": "C" }
    ]
  },
  {
    "id": 520,
    "category": "real_estate",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "부동산 하락기라 집이 안 팔린다. 가격을 낮춰야 할까?",
    "options": [
      { "text": "과감하게 가격을 깎아서라도 빨리 팔고 현금을 쥔다.", "type": "D" },
      { "text": "부동산 사장님에게 \"잘 좀 부탁해요~\" 하며 인간적으로 호소한다.", "type": "I" },
      { "text": "손해 보고 팔 수는 없다. 다시 오를 때까지 무기한 버틴다.", "type": "S" },
      { "text": "주변 실거래가 추이를 분석하여 적정 매도 가격을 산출한다.", "type": "C" }
    ]
  },
  {
    "id": 521,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "은퇴 후 소일거리를 찾고 있다. 어떤 일이 좋을까?",
    "options": [
      { "text": "작더라도 내 권한이 확실한 자영업 사장님.", "type": "D" },
      { "text": "문화 해설사나 강사처럼 남들 앞에서 이야기하는 일.", "type": "I" },
      { "text": "도서관 사서나 공원 관리처럼 조용하고 반복적인 일.", "type": "S" },
      { "text": "번역이나 데이터 입력처럼 정확성을 요하는 재택근무.", "type": "C" }
    ]
  },
  {
    "id": 522,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "경제 뉴스를 볼 때 어떤 정보에 집중하는가?",
    "options": [
      { "text": "성공한 CEO 인터뷰나 대박 난 기업 스토리.", "type": "D" },
      { "text": "요즘 유행하는 트렌드나 인기 상품 뉴스.", "type": "I" },
      { "text": "물가 상승, 금리 인상 등 생활에 직결된 불안한 뉴스.", "type": "S" },
      { "text": "GDP 성장률, 환율 차트 등 거시 경제 지표와 통계.", "type": "C" }
    ]
  },
  {
    "id": 523,
    "category": "real_estate",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "제주도나 해외에서 '한 달 살기'를 해보고 싶다.",
    "options": [
      { "text": "일단 비행기 표부터 끊고 가서 부딪혀 본다.", "type": "D" },
      { "text": "가서 새로운 친구도 사귀고 맛집 투어 할 생각에 설렌다.", "type": "I" },
      { "text": "집 비우면 화분은 누가 주지? 걱정돼서 포기한다.", "type": "S" },
      { "text": "숙소 비용, 생활비, 교통편을 엑셀로 정리해 예산을 짠다.", "type": "C" }
    ]
  },
  {
    "id": 524,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "연금 저축 펀드의 수익률이 저조하다.",
    "options": [
      { "text": "운용사를 당장 교체하거나 직접 운용으로 바꾼다.", "type": "D" },
      { "text": "담당자에게 전화해서 \"수익 좀 잘 내봐요~\"라고 부탁한다.", "type": "I" },
      { "text": "해지하면 손해니까 울며 겨자 먹기로 유지한다.", "type": "S" },
      { "text": "수수료와 과거 5년 수익률을 타 상품과 비교해 갈아탄다.", "type": "C" }
    ]
  },
  {
    "id": 525,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "상속세/증여세 문제가 걱정되기 시작했다.",
    "options": [
      { "text": "\"내가 번 돈 내가 다 쓰고 갈 거야.\" 호탕하게 말한다.", "type": "D" },
      { "text": "자식들에게 \"나중에 다 너희 줄게\"라며 생색낸다.", "type": "I" },
      { "text": "자식들끼리 싸움 날까 봐 미리 공평하게 나눠준다.", "type": "S" },
      { "text": "세무 전문가를 찾아가 절세 플랜을 컨설팅 받는다.", "type": "C" }
    ]
  },
  {
    "id": 526,
    "category": "real_estate",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "부동산 계약서 쓸 때 당신의 모습은?",
    "options": [
      { "text": "특약 사항에 나에게 유리한 조건을 강력하게 요구한다.", "type": "D" },
      { "text": "중개사와 농담 따먹기 하며 좋은 분위기를 만든다.", "type": "I" },
      { "text": "상대방이 기분 상할까 봐 별말 없이 도장 찍는다.", "type": "S" },
      { "text": "토씨 하나하나 읽어보고 오타나 불리한 조항을 찾아낸다.", "type": "C" }
    ]
  },
  {
    "id": 527,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "은퇴 후 수입이 줄어들어 지출을 통제해야 한다.",
    "options": [
      { "text": "쓸데없는 지출 항목을 과감하게 삭제하고 긴축 재정에 돌입한다.", "type": "D" },
      { "text": "돈 없으면 안 만나면 되지. 근데 모임은 가고 싶다.", "type": "I" },
      { "text": "식비나 생필품 비용을 아끼며 허리띠를 졸라맨다.", "type": "S" },
      { "text": "가계부를 분석하여 고정 지출과 변동 지출을 비율별로 줄인다.", "type": "C" }
    ]
  },
  {
    "id": 528,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "노후 자금 마련을 위해 '주택 연금' 가입을 고려 중이다.",
    "options": [
      { "text": "집 한 채 남겨주느니 내가 당당하게 쓰고 죽겠다. 가입한다.", "type": "D" },
      { "text": "자식들이 싫어하지 않을까? 눈치를 살핀다.", "type": "I" },
      { "text": "내 집이 은행에 넘어가는 것 같아 불안해서 망설인다.", "type": "S" },
      { "text": "월 수령액과 집값 상승률을 비교해 가입 시기를 저울질한다.", "type": "C" }
    ]
  },
  {
    "id": 529,
    "category": "real_estate",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "새 아파트 분양 모델하우스에 방문했다.",
    "options": [
      { "text": "\"프리미엄(P) 얼마나 붙겠소?\" 투자가치부터 묻는다.", "type": "D" },
      { "text": "인테리어가 너무 예뻐서 당장 계약하고 싶어 한다.", "type": "I" },
      { "text": "지금 사는 집이 편한데... 낯선 곳으로 이사 가기 두렵다.", "type": "S" },
      { "text": "전용 면적, 대지 지분, 옵션 비용을 꼼꼼히 체크한다.", "type": "C" }
    ]
  },
  {
    "id": 530,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "투자 실패로 우울해하는 친구를 위로해야 한다.",
    "options": [
      { "text": "\"수업료 냈다 셈 쳐. 다시 벌면 되지!\" 강하게 격려한다.", "type": "D" },
      { "text": "\"오늘 술은 내가 쏜다! 잊어버려!\" 분위기를 띄운다.", "type": "I" },
      { "text": "아무 말 없이 손을 잡아주며 묵묵히 들어준다.", "type": "S" },
      { "text": "실패 원인이 무엇인지 같이 분석해 보자고 한다.", "type": "C" }
    ]
  },
  {
    "id": 531,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "달러 환율이 급등하고 있다. 외화 투자를 할까?",
    "options": [
      { "text": "환차익을 노리고 지금 당장 달러를 대량 매수한다.", "type": "D" },
      { "text": "해외여행 갈 때 쓰면 되지 뭐. 조금 환전해 둔다.", "type": "I" },
      { "text": "환율 변동은 무서우니 원화 자산만 지킨다.", "type": "S" },
      { "text": "환율 추이 그래프와 미국의 금리 정책을 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 532,
    "category": "real_estate",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "부모님께 물려받은 시골 땅(임야)을 처분하려 한다.",
    "options": [
      { "text": "헐값이라도 좋으니 골치 아픈 땅 빨리 팔아버린다.", "type": "D" },
      { "text": "나중에 거기다 별장 짓고 살까? 행복한 상상을 한다.", "type": "I" },
      { "text": "조상님 땅을 파는 게 마음에 걸려 계속 보유한다.", "type": "S" },
      { "text": "개발 호재와 도로 계획을 확인해 미래 가치를 판단한다.", "type": "C" }
    ]
  },
  {
    "id": 533,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "노후 준비 등급을 매긴다면 당신은?",
    "options": [
      { "text": "나는 내 운명을 개척했다. 준비는 완벽하다.", "type": "D" },
      { "text": "어떻게든 되겠지. 긍정적인 마음이 나의 자산이다.", "type": "I" },
      { "text": "남들만큼은 했다. 평범하게 사는 게 목표다.", "type": "S" },
      { "text": "목표액 대비 85% 달성. 부족분은 절약으로 메꾼다.", "type": "C" }
    ]
  },
  {
    "id": 534,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "보험 리모델링 제안을 받았다.",
    "options": [
      { "text": "필요 없는 건 다 해지하고 보장 큰 걸로 하나 새로 든다.", "type": "D" },
      { "text": "설계사가 좋다고 하니 믿고 맡긴다.", "type": "I" },
      { "text": "오래 부은 게 아까워서 리모델링을 거절한다.", "type": "S" },
      { "text": "기존 증권과 제안서를 펼쳐놓고 보장 범위를 비교한다.", "type": "C" }
    ]
  },
  {
    "id": 535,
    "category": "real_estate",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "이웃집에서 층간소음이 심하다. 어떻게 할까?",
    "options": [
      { "text": "당장 올라가서 따지고 재발 방지를 약속받는다.", "type": "D" },
      { "text": "엘리베이터에서 만나면 \"요즘 운동하시나 봐요?\" 웃으며 돌려 말한다.", "type": "I" },
      { "text": "싸우기 싫어서 귀마개를 하고 참는다.", "type": "S" },
      { "text": "소음 발생 일지와 데시벨 측정 기록을 남겨 관리실에 신고한다.", "type": "C" }
    ]
  },
  {
    "id": 536,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "금리가 올라 대출 이자 부담이 커졌다.",
    "options": [
      { "text": "자산을 일부 매각해서라도 빚부터 다 갚아버린다.", "type": "D" },
      { "text": "\"이 또한 지나가리라.\" 은행 욕을 하며 버틴다.", "type": "I" },
      { "text": "생활비를 줄여서라도 이자는 밀리지 않고 낸다.", "type": "S" },
      { "text": "금리 인하 요구권을 신청하거나 대환 대출 조건을 알아본다.", "type": "C" }
    ]
  },
  {
    "id": 537,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "퇴직 후 재취업이 안 되면 자영업을 할 생각인가?",
    "options": [
      { "text": "그렇다. 내 사업을 해서 남은 인생 멋지게 승부 본다.", "type": "D" },
      { "text": "동업자가 있다면 고려해 본다. 혼자는 심심하고 무섭다.", "type": "I" },
      { "text": "망하면 노후가 끝장이다. 절대 안 한다.", "type": "S" },
      { "text": "상권 분석과 손익분기점을 철저히 계산해 보고 결정한다.", "type": "C" }
    ]
  },
  {
    "id": 538,
    "category": "real_estate",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "부동산 경매에 관심이 생겼다.",
    "options": [
      { "text": "경매 법정에 가서 분위기를 보고 바로 입찰에 참여한다.", "type": "D" },
      { "text": "경매 학원 동기들과 어울리며 정보 공유하는 게 재밌다.", "type": "I" },
      { "text": "권리 분석 잘못했다가 돈 날릴까 봐 공부만 한다.", "type": "S" },
      { "text": "등기부 등본의 말소기준권리와 대항력을 완벽히 분석한다.", "type": "C" }
    ]
  },
  {
    "id": 539,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "자녀에게 재산을 미리 증여할까 고민이다.",
    "options": [
      { "text": "내가 쥐고 있다가 말 잘 듣는 자식에게 주겠다.", "type": "D" },
      { "text": "미리 주고 자식들이 고마워하는 모습을 보고 싶다.", "type": "I" },
      { "text": "미리 줬다가 나중에 나를 안 돌볼까 봐 겁난다.", "type": "S" },
      { "text": "지금 증여할 때의 세금과 상속 시 세금을 비교한다.", "type": "C" }
    ]
  },
  {
    "id": 540,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "투자 포트폴리오를 점검하는 주기는?",
    "options": [
      { "text": "수시로 확인하고 마음에 안 들면 즉시 갈아엎는다.", "type": "D" },
      { "text": "생각날 때 가끔 본다. 수익 나면 기분 좋고 아니면 만다.", "type": "I" },
      { "text": "가입할 때 그대로 둔다. 건드리는 게 무섭다.", "type": "S" },
      { "text": "매달 말일이나 분기별로 정해진 날짜에 리밸런싱한다.", "type": "C" }
    ]
  },
  {
    "id": 541,
    "category": "real_estate",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "은퇴 후 실버타운 입주에 대한 생각은?",
    "options": [
      { "text": "최고급 시설과 서비스가 갖춰진 곳이라면 찬성.", "type": "D" },
      { "text": "또래 친구들이 많고 프로그램이 다양한 곳이라면 OK.", "type": "I" },
      { "text": "내 집이 최고다. 낯선 시설에 들어가는 건 싫다.", "type": "S" },
      { "text": "입주 보증금, 월 생활비, 의료 연계 서비스를 따져본다.", "type": "C" }
    ]
  },
  {
    "id": 542,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "보이스피싱 의심 전화를 받았다.",
    "options": [
      { "text": "\"어디서 수작이야!\" 호통치고 바로 끊는다.", "type": "D" },
      { "text": "당황해서 \"정말요? 어떡해요?\" 하며 대화를 이어간다.", "type": "I" },
      { "text": "너무 놀라서 심장이 벌렁거리고 자식에게 전화한다.", "type": "S" },
      { "text": "상대방의 소속과 이름을 묻고 녹음 버튼을 누른다.", "type": "C" }
    ]
  },
  {
    "id": 543,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "50대 이후의 자기 계발(공부) 목적은?",
    "options": [
      { "text": "더 높은 지위나 수익 창출을 위한 자격증 취득.", "type": "D" },
      { "text": "인문학, 노래 교실 등 삶을 즐기고 교양을 쌓기 위함.", "type": "I" },
      { "text": "치매 예방과 정신 건강을 위해 소소하게 배운다.", "type": "S" },
      { "text": "변화하는 시대에 뒤처지지 않기 위해 신기술을 익힌다.", "type": "C" }
    ]
  },
  {
    "id": 544,
    "category": "real_estate",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "부동산 중개 수수료(복비)를 협상할 때?",
    "options": [
      { "text": "\"법정 한도 내에서 최대한 깎아주시오.\" 강력 요구.", "type": "D" },
      { "text": "\"사장님~ 잘 좀 부탁드려요~\" 애교 섞인 부탁.", "type": "I" },
      { "text": "달라는 대로 다 준다. 깎는 말은 못 한다.", "type": "S" },
      { "text": "요율표를 미리 확인하고 정확한 금액만 입금한다.", "type": "C" }
    ]
  },
  {
    "id": 545,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "갑자기 목돈이 필요해 대출을 받아야 한다.",
    "options": [
      { "text": "아는 지점장이나 은행원에게 전화해 해결한다.", "type": "D" },
      { "text": "주변에 돈 빌릴 곳이 없는지 지인들에게 연락한다.", "type": "I" },
      { "text": "대출받는 것 자체가 빚지는 것 같아 꺼려진다.", "type": "S" },
      { "text": "금융권별 금리와 한도를 비교 사이트에서 검색한다.", "type": "C" }
    ]
  },
  {
    "id": 546,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "유언장을 미리 작성해 볼 생각이 있는가?",
    "options": [
      { "text": "내 재산 분배는 내 뜻대로 해야 하니 작성한다.", "type": "D" },
      { "text": "아직 건강한데 무슨 유언장? 나중에 생각한다.", "type": "I" },
      { "text": "죽음을 생각하는 게 무섭고 슬퍼서 피하고 싶다.", "type": "S" },
      { "text": "법적 효력이 있는 공증 유언장을 미리 준비한다.", "type": "C" }
    ]
  },
  {
    "id": 547,
    "category": "real_estate",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "집안에 누수나 하자가 발생했다.",
    "options": [
      { "text": "관리실이나 시공사에 전화해 당장 고치라고 소리친다.", "type": "D" },
      { "text": "수리 기사님 오시면 음료수 드리며 말동무를 한다.", "type": "I" },
      { "text": "불편해도 참으며 산다. 큰 공사 벌이기 싫다.", "type": "S" },
      { "text": "하자 부위를 사진 찍고 수리 견적을 3군데서 받는다.", "type": "C" }
    ]
  },
  {
    "id": 548,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "골동품이나 예술품 투자(아트테크)에 대한 생각은?",
    "options": [
      { "text": "가치가 오르면 되판다. 수익성만 본다.", "type": "D" },
      { "text": "집에 걸어두고 사람들한테 자랑할 수 있어 좋다.", "type": "I" },
      { "text": "잘 모르는 분야에는 절대 돈 쓰지 않는다.", "type": "S" },
      { "text": "작가 인지도와 경매 낙찰 기록을 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 549,
    "category": "investment_retirement",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "지인이 돈을 빌려달라고 부탁한다.",
    "options": [
      { "text": "\"돈 거래는 안 합니다.\" 칼같이 자른다.", "type": "D" },
      { "text": "거절하기 미안해서 없는 돈 쪼개서 빌려준다.", "type": "I" },
      { "text": "못 받으면 어쩌지 끙끙 앓으면서도 빌려준다.", "type": "S" },
      { "text": "상환 능력과 용도를 묻고 차용증 공증을 요구한다.", "type": "C" }
    ]
  },
  {
    "id": 550,
    "category": "real_estate",
    "target_age_min": 50,
    "target_age_max": 59,
    "question": "부동산 정책이 수시로 바뀐다. 어떻게 대응하나?",
    "options": [
      { "text": "정책이 뭐든 내가 갈 길은 내가 정한다.", "type": "D" },
      { "text": "부동산 카페나 모임에서 사람들 반응을 살핀다.", "type": "I" },
      { "text": "정책이 안정될 때까지 아무것도 안 하고 기다린다.", "type": "S" },
      { "text": "국토부 보도자료 원문을 찾아보고 변경 사항을 숙지한다.", "type": "C" }
    ]
  },
  {
    "id": 551,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "카페에서 무인 주문기(키오스크)로 주문해야 하는데 글씨가 작고 복잡합니다. 당신의 반응은?",
    "options": [
      { "text": "\"아니, 왜 이렇게 복잡하게 만들었어!\" 답답해서 직원에게 가서 직접 말한다.", "type": "D" },
      { "text": "\"젊은이, 이거 어떻게 하는 거야?\" 옆 사람에게 웃으며 도움을 청한다.", "type": "I" },
      { "text": "뒤에 사람들이 기다릴까 봐 불안해서 일단 줄에서 비켜선다.", "type": "S" },
      { "text": "돋보기를 쓰더라도 사용법을 처음부터 차근차근 읽어본다.", "type": "C" }
    ]
  },
  {
    "id": 552,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀들이 최신형 스마트폰을 선물해 주었습니다. 기분이 어떠신가요?",
    "options": [
      { "text": "최신형이라니 좋네! 기능이 뭐가 있는지 이것저것 눌러본다.", "type": "D" },
      { "text": "친구들한테 \"우리 애들이 사줬어~\" 하고 자랑부터 한다.", "type": "I" },
      { "text": "고맙긴 한데... 쓰던 게 손에 익어서 바꾸는 게 부담스럽다.", "type": "S" },
      { "text": "설명서를 달라고 하거나 인터넷으로 사용법 영상을 찾아본다.", "type": "C" }
    ]
  },
  {
    "id": 553,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "식당 로봇이 서빙을 하러 왔습니다. 어떻게 하실 건가요?",
    "options": [
      { "text": "\"거기 서 있어.\" 로봇을 내 맘대로 조작해서 음식을 빨리 내린다.", "type": "D" },
      { "text": "\"아유, 너 참 똑똑하다!\" 로봇에게 말을 걸거나 사진을 찍는다.", "type": "I" },
      { "text": "로봇이 부딪힐까 봐 조심조심 피해주거나 가만히 있는다.", "type": "S" },
      { "text": "로봇이 어떤 원리로 움직이는지 바퀴나 센서를 유심히 본다.", "type": "C" }
    ]
  },
  {
    "id": 554,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "스마트폰으로 은행 업무(모바일 뱅킹)를 보라고 합니다.",
    "options": [
      { "text": "은행 갈 시간이 아까우니, 빨리 배워서 내가 직접 처리한다.", "type": "D" },
      { "text": "은행 직원 얼굴 보고 이야기하는 게 더 재밌고 좋다.", "type": "I" },
      { "text": "혹시나 돈을 잘못 보낼까 봐 무서워서 자녀에게 부탁한다.", "type": "S" },
      { "text": "보안 카드는 안전한지, 수수료는 얼마인지 꼼꼼히 따져본다.", "type": "C" }
    ]
  },
  {
    "id": 555,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "가족 단체 채팅방(카톡방)에서 알림이 계속 울립니다.",
    "options": [
      { "text": "\"용건만 간단히 해라.\" 필요한 말만 하고 답장은 짧게 한다.", "type": "D" },
      { "text": "이모티콘도 보내고 사진도 올리며 신나게 대화에 참여한다.", "type": "I" },
      { "text": "자녀들이 대화하는 걸 흐뭇하게 지켜보며 읽기만 한다.", "type": "S" },
      { "text": "지난 대화 내용을 올려보며 무슨 일이 있었는지 정확히 파악한다.", "type": "C" }
    ]
  },
  {
    "id": 556,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "유튜브에서 '건강 비법' 영상을 보게 되었습니다.",
    "options": [
      { "text": "좋다는 운동법이 나오면 당장 일어나서 따라 해본다.", "type": "D" },
      { "text": "\"이거 진짜 좋다더라!\" 친구들에게 영상을 공유해 준다.", "type": "I" },
      { "text": "꾸준히 하면 좋다니까 매일 같은 시간에 챙겨 본다.", "type": "S" },
      { "text": "의사가 하는 말이 맞는지 다른 정보와 비교하며 검증한다.", "type": "C" }
    ]
  },
  {
    "id": 557,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 새로운 스마트폰 게임을 같이 하자고 합니다.",
    "options": [
      { "text": "\"할아비/할미가 이겨주마!\" 승부욕을 불태우며 열심히 한다.", "type": "D" },
      { "text": "게임 내용은 몰라도 손주랑 같이 웃고 떠드는 게 즐겁다.", "type": "I" },
      { "text": "손주가 하자고 하니까 못해도 그냥 맞춰준다.", "type": "S" },
      { "text": "게임 규칙이 뭔지 먼저 설명해달라고 하고 이해한 뒤에 한다.", "type": "C" }
    ]
  },
  {
    "id": 558,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "무인 주문기 뒤에 기다리는 줄이 길어졌습니다. 내 차례인데...",
    "options": [
      { "text": "뒷사람 눈치 안 본다. 내 주문을 끝내는 게 우선이다.", "type": "D" },
      { "text": "\"아이고, 제가 좀 늦네요. 미안해요~\" 웃으며 양해를 구한다.", "type": "I" },
      { "text": "너무 미안하고 식은땀이 나서 그냥 주문을 포기하고 비켜준다.", "type": "S" },
      { "text": "실수하지 않으려고 화면의 안내 문구에만 집중한다.", "type": "C" }
    ]
  },
  {
    "id": 559,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "스마트폰 비밀번호(패턴)가 기억나지 않습니다.",
    "options": [
      { "text": "이것저것 막 눌러보다가 안 되면 서비스센터로 당장 간다.", "type": "D" },
      { "text": "가족에게 전화해서 \"이거 안 열리는데 어떡하냐?\" 하소연한다.", "type": "I" },
      { "text": "열릴 때까지 차분하게 기다리거나 자녀가 올 때까지 둔다.", "type": "S" },
      { "text": "수첩에 적어둔 게 있는지 찾아보고 정확하게 입력한다.", "type": "C" }
    ]
  },
  {
    "id": 560,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "기차표를 스마트폰 앱으로 예매해야 합니다.",
    "options": [
      { "text": "복잡하면 그냥 역에 가서 역무원한테 달라고 한다.", "type": "D" },
      { "text": "자녀에게 전화해서 \"네가 좀 끊어줘라~\" 부탁한다.", "type": "I" },
      { "text": "앱으로 하라는데 못하면 폐 끼칠까 봐 한참을 끙끙댄다.", "type": "S" },
      { "text": "출발 시간과 좌석 번호를 확인하며 천천히 예매를 시도한다.", "type": "C" }
    ]
  },
  {
    "id": 561,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "보이스피싱(사기) 문자가 왔습니다.",
    "options": [
      { "text": "\"어디서 수작이야!\" 화를 내며 즉시 삭제하거나 차단한다.", "type": "D" },
      { "text": "깜짝 놀라서 \"이거 진짜니?\" 하고 주변 사람들에게 물어본다.", "type": "I" },
      { "text": "혹시 자녀에게 무슨 일이 생긴 건 아닐까 가슴이 덜컥한다.", "type": "S" },
      { "text": "발신 번호를 확인하고 인터넷에 검색해 본 뒤 신고한다.", "type": "C" }
    ]
  },
  {
    "id": 562,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "복지관에서 스마트폰 교육을 해준다고 합니다.",
    "options": [
      { "text": "가서 제일 앞자리에 앉아 강사에게 질문하며 적극적으로 배운다.", "type": "D" },
      { "text": "친구들이랑 같이 가서 간식도 먹고 수다 떨러 간다.", "type": "I" },
      { "text": "남들이 다 배운다고 하니 나도 조용히 뒤에 앉아 듣는다.", "type": "S" },
      { "text": "강의 내용이 내 수준에 맞는지, 교재는 주는지 미리 알아본다.", "type": "C" }
    ]
  },
  {
    "id": 563,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "음성 인식 기능(예: 시리, 빅스비)을 써보라고 합니다.",
    "options": [
      { "text": "\"누구야! 날씨 알려줘!\" 명령하듯이 짧고 굵게 말한다.", "type": "D" },
      { "text": "\"어머, 내 말을 알아듣네? 고마워~\" 기계랑 대화를 한다.", "type": "I" },
      { "text": "기계에 대고 말하는 게 쑥스러워서 남들 없을 때 해본다.", "type": "S" },
      { "text": "어떤 명령어를 써야 정확히 인식하는지 사용법을 본다.", "type": "C" }
    ]
  },
  {
    "id": 564,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "QR 코드를 찍어야 입장할 수 있는 식당입니다.",
    "options": [
      { "text": "잘 안 찍히면 \"이거 왜 안 돼!\" 하며 기계를 툭툭 친다.", "type": "D" },
      { "text": "직원에게 \"이것 좀 찍어줘요~\" 하고 밝게 부탁한다.", "type": "I" },
      { "text": "뒤 사람에게 방해될까 봐 미리 앱을 켜놓고 준비한다.", "type": "S" },
      { "text": "화면 밝기를 조절하고 네모 칸에 정확히 맞춰서 찍는다.", "type": "C" }
    ]
  },
  {
    "id": 565,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "새로운 가전제품(로봇 청소기 등)을 샀는데 작동이 안 됩니다.",
    "options": [
      { "text": "고객센터에 바로 전화해서 당장 고쳐달라고 따진다.", "type": "D" },
      { "text": "주변에 기계 잘 아는 사람을 불러서 밥 한 끼 사주며 부탁한다.", "type": "I" },
      { "text": "내가 뭘 잘못 만졌나 싶어서 건드리지 않고 둔다.", "type": "S" },
      { "text": "설명서의 '고장 시 대처 방법'을 읽고 그대로 따라 해본다.", "type": "C" }
    ]
  },
  {
    "id": 566,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "유튜브에 싫어하는 내용의 영상이 자꾸 뜹니다.",
    "options": [
      { "text": "다시는 안 뜨게 '관심 없음' 버튼을 확실하게 누른다.", "type": "D" },
      { "text": "기분 나쁘니까 얼른 다른 재밌는 영상으로 넘긴다.", "type": "I" },
      { "text": "그냥 두면 없어지겠지 하고 참고 넘어간다.", "type": "S" },
      { "text": "왜 이런 영상이 뜨는지 시청 기록을 확인하고 삭제한다.", "type": "C" }
    ]
  },
  {
    "id": 567,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주들과 영상 통화(페이스톡)를 하게 되었습니다.",
    "options": [
      { "text": "화면이 잘 안 보이면 \"얼굴 좀 가까이 대봐라!\" 지시한다.", "type": "D" },
      { "text": "\"우리 강아지들~ 할미/할비 보여?\" 손 흔들며 반가워한다.", "type": "I" },
      { "text": "애들이 바쁜데 내가 귀찮게 한 건 아닌지 걱정한다.", "type": "S" },
      { "text": "내 얼굴이 화면에 잘 나오는지 각도와 조명을 맞춘다.", "type": "C" }
    ]
  },
  {
    "id": 568,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "스마트폰 글씨가 너무 작아서 안 보입니다.",
    "options": [
      { "text": "당장 설정에 들어가서 제일 큰 글씨로 바꾼다.", "type": "D" },
      { "text": "자녀에게 \"이거 글씨 좀 키워줘~\" 하고 부탁한다.", "type": "I" },
      { "text": "불편해도 그냥 돋보기를 쓰고 본다.", "type": "S" },
      { "text": "화면 설정 메뉴를 찾아서 적당한 크기로 조절한다.", "type": "C" }
    ]
  },
  {
    "id": 569,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "무인 계산대에서 물건 바코드가 잘 안 찍힙니다.",
    "options": [
      { "text": "직원을 큰 소리로 불러서 해결해달라고 한다.", "type": "D" },
      { "text": "옆에 있는 젊은이에게 \"이것 좀 도와줄래요?\" 묻는다.", "type": "I" },
      { "text": "당황해서 물건을 도로 내려놓거나 유인 계산대로 간다.", "type": "S" },
      { "text": "바코드가 구겨졌는지 확인하고 평평하게 펴서 다시 찍는다.", "type": "C" }
    ]
  },
  {
    "id": 570,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "스마트폰 배터리가 얼마 남지 않았습니다.",
    "options": [
      { "text": "꺼지기 전에 필요한 전화부터 빨리 건다.", "type": "D" },
      { "text": "식당이나 카페에 가서 \"충전 좀 해주세요\" 부탁한다.", "type": "I" },
      { "text": "전화가 꺼지면 가족들이 걱정할까 봐 마음이 조급하다.", "type": "S" },
      { "text": "배터리 잔량을 확인하고 절전 모드로 바꾼다.", "type": "C" }
    ]
  },
  {
    "id": 571,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "택시 호출 앱(카카오T 등)을 처음 써봅니다.",
    "options": [
      { "text": "잘 안 잡히면 길가에 나가서 손 흔들어 잡는 게 빠르다.", "type": "D" },
      { "text": "기사님이 오시면 \"앱으로 부르니 참 편하네요\" 말 건다.", "type": "I" },
      { "text": "택시가 올 때까지 약속 장소에서 꼼짝 않고 기다린다.", "type": "S" },
      { "text": "도착 예상 시간과 요금을 미리 확인하고 호출한다.", "type": "C" }
    ]
  },
  {
    "id": 572,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "인터넷으로 물건을 샀는데 배송이 늦어집니다.",
    "options": [
      { "text": "고객센터에 전화해서 \"언제 오냐\"고 독촉한다.", "type": "D" },
      { "text": "\"요즘 택배 물량이 많은가 봐~\" 하고 잊고 지낸다.", "type": "I" },
      { "text": "택배 기사님 힘들까 봐 재촉하지 않고 기다린다.", "type": "S" },
      { "text": "송장 번호를 조회해서 현재 위치가 어디인지 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 573,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "스마트폰 사진첩에 사진이 너무 많아 정리가 필요합니다.",
    "options": [
      { "text": "필요 없는 건 과감하게 다 삭제해 버린다.", "type": "D" },
      { "text": "옛날 사진 보면서 추억에 잠겨 시간 가는 줄 모른다.", "type": "I" },
      { "text": "지웠다가 나중에 후회할까 봐 그냥 다 놔둔다.", "type": "S" },
      { "text": "날짜별, 장소별로 폴더를 만들어서 차곡차곡 정리한다.", "type": "C" }
    ]
  },
  {
    "id": 574,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "건강검진 결과를 모바일 앱으로 확인하라고 합니다.",
    "options": [
      { "text": "결과만 빨리 보고 싶어서 '결과 보기' 버튼만 찾는다.", "type": "D" },
      { "text": "결과가 좋으면 친구들에게 자랑하고 한턱 쏜다.", "type": "I" },
      { "text": "혹시 안 좋은 병이 있을까 봐 확인하기가 두렵다.", "type": "S" },
      { "text": "수치를 하나하나 읽어보고 정상 범위인지 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 575,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "카페에서 적립금(쿠폰)을 태블릿에 입력하라고 합니다.",
    "options": [
      { "text": "\"귀찮게 뭘 그런 걸 해. 됐어.\" 안 하고 그냥 간다.", "type": "D" },
      { "text": "\"이거 모으면 커피 공짜야?\" 신나서 번호를 누른다.", "type": "I" },
      { "text": "직원이 하라는 대로 군말 없이 번호를 입력한다.", "type": "S" },
      { "text": "몇 번 입력해야 무료인지 혜택 조건을 따져본다.", "type": "C" }
    ]
  },
  {
    "id": 576,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "스마트폰 벨 소리가 공공장소에서 크게 울렸습니다.",
    "options": [
      { "text": "당황하지 않고 태연하게 전화를 받거나 끈다.", "type": "D" },
      { "text": "\"아이고, 내 전화네! 호호호.\" 멋쩍게 웃으며 넘긴다.", "type": "I" },
      { "text": "남들에게 피해를 줬다는 생각에 얼굴이 빨개지고 미안해한다.", "type": "S" },
      { "text": "얼른 소리를 줄이고 진동 모드로 설정을 바꾼다.", "type": "C" }
    ]
  },
  {
    "id": 577,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "유튜브 프리미엄(유료) 무료 체험을 해보라는 창이 떴습니다.",
    "options": [
      { "text": "\"공짜면 일단 해봐.\" 바로 가입 버튼을 누른다.", "type": "D" },
      { "text": "광고 안 보고 노래 들을 수 있다니 좋아서 가입한다.", "type": "I" },
      { "text": "나중에 돈 나갈까 봐 무서워서 '건너뛰기'를 누른다.", "type": "S" },
      { "text": "무료 기간이 언제 끝나는지, 해지는 쉬운지 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 578,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 내 스마트폰 배경 화면을 바꿔주겠다고 합니다.",
    "options": [
      { "text": "\"멋진 걸로 해다오.\" 알아서 잘 하라고 맡긴다.", "type": "D" },
      { "text": "\"우리 손주 사진으로 해줘!\" 예쁜 사진을 고른다.", "type": "I" },
      { "text": "손주가 해주고 싶은 대로 하라고 둔다.", "type": "S" },
      { "text": "아이콘이 잘 보이는 깔끔한 배경인지 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 579,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "내비게이션이 아는 길과 다른 길을 안내합니다.",
    "options": [
      { "text": "\"내가 이 길은 훤해.\" 기계 끄고 내 감대로 간다.", "type": "D" },
      { "text": "동승자와 \"이 기계가 엉뚱하네~\" 하며 웃고 떠든다.", "type": "I" },
      { "text": "기계가 안내하는 이유가 있겠지 싶어 따라간다.", "type": "S" },
      { "text": "도착 예정 시간이 더 빠른지 시간을 비교해 본다.", "type": "C" }
    ]
  },
  {
    "id": 580,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "식당에서 태블릿 메뉴판으로 주문해야 합니다.",
    "options": [
      { "text": "메뉴가 너무 많아. \"제일 잘 나가는 걸로 줘.\" 결정한다.", "type": "D" },
      { "text": "\"이것도 맛있겠다, 저것도 맛있겠다!\" 고르는 게 즐겁다.", "type": "I" },
      { "text": "남들이 시키는 거랑 똑같은 걸로 시킨다.", "type": "S" },
      { "text": "가격과 음식 사진을 꼼꼼히 비교해서 주문한다.", "type": "C" }
    ]
  },
  {
    "id": 581,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "스마트폰 '업데이트'를 하라는 알림이 떴습니다.",
    "options": [
      { "text": "\"귀찮게 또 떴네.\" 뭔지 안 보고 그냥 '확인' 누른다.", "type": "D" },
      { "text": "\"뭐가 바뀌었을까?\" 궁금해서 자식들에게 물어본다.", "type": "I" },
      { "text": "잘 쓰고 있는데 괜히 건드려서 고장 날까 봐 놔둔다.", "type": "S" },
      { "text": "업데이트 내용이 무엇인지 자세히 읽어보고 결정한다.", "type": "C" }
    ]
  },
  {
    "id": 582,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀가 집에 '인공지능 스피커'를 설치해 줬습니다.",
    "options": [
      { "text": "\"노래 틀어!\" 비서 부리듯이 명령한다.", "type": "D" },
      { "text": "\"오늘 기분 어때?\" 친구처럼 말을 건다.", "type": "I" },
      { "text": "신기하지만 낯설어서 먼지 쌓이게 놔둔다.", "type": "S" },
      { "text": "어떤 기능이 있는지 설명서를 읽어보고 테스트해 본다.", "type": "C" }
    ]
  },
  {
    "id": 583,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "마트 셀프 계산대에서 결제가 안 되고 오류가 났습니다.",
    "options": [
      { "text": "\"이거 고장 났어!\" 직원을 크게 부른다.", "type": "D" },
      { "text": "\"어머, 내가 뭘 잘못했나 봐~\" 주변을 보며 머쓱해한다.", "type": "I" },
      { "text": "뒤에 기다리는 사람들에게 미안해서 어쩔 줄 모른다.", "type": "S" },
      { "text": "화면에 뜬 오류 메시지가 무슨 뜻인지 읽어본다.", "type": "C" }
    ]
  },
  {
    "id": 584,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "스마트폰으로 손주 사진을 찍어주려 합니다.",
    "options": [
      { "text": "\"자, 찍는다! 하나 둘 셋!\" 빨리 찍고 끝낸다.", "type": "D" },
      { "text": "\"아이구 예쁘다! 여기 좀 봐!\" 계속 말을 걸며 찍는다.", "type": "I" },
      { "text": "손주가 포즈를 취할 때까지 조용히 기다려준다.", "type": "S" },
      { "text": "초점이 잘 맞았는지, 배경은 괜찮은지 확인하고 찍는다.", "type": "C" }
    ]
  },
  {
    "id": 585,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "지인이 카카오톡으로 동영상을 보내왔습니다.",
    "options": [
      { "text": "재미없으면 바로 끄고, 재밌으면 끝까지 본다.", "type": "D" },
      { "text": "\"너무 재밌다!\" 답장도 보내고 다른 방에도 퍼 나른다.", "type": "I" },
      { "text": "보낸 사람 성의를 생각해서 끝까지 다 봐준다.", "type": "S" },
      { "text": "데이터 요금이 나갈까 봐 와이파이인지 확인하고 켠다.", "type": "C" }
    ]
  },
  {
    "id": 586,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "병원 예약을 모바일 앱으로 하라고 합니다.",
    "options": [
      { "text": "복잡하면 그냥 병원에 전화해서 예약 잡아달라고 한다.", "type": "D" },
      { "text": "병원 가서 간호사 선생님한테 도와달라고 한다.", "type": "I" },
      { "text": "앱 설치하고 가입하는 게 힘들지만 하라는 대로 한다.", "type": "S" },
      { "text": "예약 가능한 날짜와 시간을 꼼꼼히 확인하고 선택한다.", "type": "C" }
    ]
  },
  {
    "id": 587,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "유튜브 보다가 화면이 멈췄습니다.",
    "options": [
      { "text": "스마트폰을 탁탁 치거나 껐다 켜본다.", "type": "D" },
      { "text": "\"이거 왜 이러지?\" 옆 사람에게 화면을 보여준다.", "type": "I" },
      { "text": "기다리면 나오겠지 하고 가만히 둔다.", "type": "S" },
      { "text": "와이파이 신호가 약한지 연결 상태를 점검한다.", "type": "C" }
    ]
  },
  {
    "id": 588,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "새로운 디지털 기기 사용법을 배울 때 나는?",
    "options": [
      { "text": "핵심 기능만 알면 된다. 복잡한 건 딱 질색이다.", "type": "D" },
      { "text": "이걸로 누구랑 연락하고 놀 수 있는지가 중요하다.", "type": "I" },
      { "text": "남들이 쓰는 만큼만 천천히 배운다.", "type": "S" },
      { "text": "기능 하나하나 눌러보며 원리를 이해해야 직성이 풀린다.", "type": "C" }
    ]
  },
  {
    "id": 589,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "버스 정류장에서 '도착 예정 시간' 전광판을 봅니다.",
    "options": [
      { "text": "5분 넘게 남았으면 택시를 탄다. 기다리는 건 싫다.", "type": "D" },
      { "text": "옆 사람에게 \"버스가 곧 오네요\"라고 말을 건다.", "type": "I" },
      { "text": "늦게 와도 벤치에 앉아서 느긋하게 기다린다.", "type": "S" },
      { "text": "정말 그 시간에 오는지 시계를 보며 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 590,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "스마트폰 타자 치는 게 느려서 답답합니다.",
    "options": [
      { "text": "타자 치기 귀찮아서 그냥 전화를 걸어버린다.", "type": "D" },
      { "text": "오타가 나도 그냥 보낸다. 뜻만 통하면 되지.", "type": "I" },
      { "text": "느려도 한 글자 한 글자 꾹꾹 눌러 쓴다.", "type": "S" },
      { "text": "음성 입력 기능이나 타자 연습을 통해 해결책을 찾는다.", "type": "C" }
    ]
  },
  {
    "id": 591,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 내 폰에 게임을 깔아놨습니다.",
    "options": [
      { "text": "내 폰 느려지니까 당장 지우라고 한다.", "type": "D" },
      { "text": "손주가 좋아하는 거니 놔두고 가끔 구경한다.", "type": "I" },
      { "text": "손주가 지우지 말라고 했으니 그냥 둔다.", "type": "S" },
      { "text": "용량을 얼마나 차지하는지 확인해 본다.", "type": "C" }
    ]
  },
  {
    "id": 592,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "온라인 쇼핑몰에서 옷을 사보려고 합니다.",
    "options": [
      { "text": "사진만 보고 맘에 들면 바로 '구매' 버튼을 누른다.", "type": "D" },
      { "text": "사람들이 쓴 후기를 읽어보고 인기 많은 걸 산다.", "type": "I" },
      { "text": "입어보고 사는 게 편해서 눈팅만 하고 매장 간다.", "type": "S" },
      { "text": "치수표와 소재 정보를 꼼꼼하게 읽어보고 주문한다.", "type": "C" }
    ]
  },
  {
    "id": 593,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "키오스크에서 '품절'된 메뉴가 많습니다.",
    "options": [
      { "text": "되는 게 뭐야! 짜증 나서 나간다.", "type": "D" },
      { "text": "직원에게 \"맛있는 거 추천해 줘요\"라고 묻는다.", "type": "I" },
      { "text": "남아있는 메뉴 중에서 아무거나 고른다.", "type": "S" },
      { "text": "주문 가능한 메뉴를 천천히 훑어보고 고른다.", "type": "C" }
    ]
  },
  {
    "id": 594,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "스마트폰을 잃어버릴까 봐 걱정되십니까?",
    "options": [
      { "text": "내가 잃어버릴 리 없다. 자신만만하다.", "type": "D" },
      { "text": "잃어버리면 연락 끊길까 봐 그게 제일 걱정이다.", "type": "I" },
      { "text": "항상 가방 깊숙한 곳이나 같은 주머니에 넣는다.", "type": "S" },
      { "text": "혹시 모르니 가족 번호를 수첩에 따로 적어 다닌다.", "type": "C" }
    ]
  },
  {
    "id": 595,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "전자제품 매장에 갔는데 직원이 설명을 너무 어렵게 합니다.",
    "options": [
      { "text": "말을 자르고 \"그래서 얼마요? 좋은 거요?\" 묻는다.", "type": "D" },
      { "text": "웃으면서 \"내가 늙어서 못 알아들어~ 쉽게 해줘\" 한다.", "type": "I" },
      { "text": "못 알아들었지만 알아듣는 척 고개를 끄덕인다.", "type": "S" },
      { "text": "팸플릿(안내 책자)을 달라고 해서 내가 직접 읽어본다.", "type": "C" }
    ]
  },
  {
    "id": 596,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "유튜브 알고리즘이 자꾸 옛날 노래를 추천해 줍니다.",
    "options": [
      { "text": "내 취향 아니면 가차 없이 끈다.", "type": "D" },
      { "text": "추억 돋고 좋네! 흥얼거리며 따라 부른다.", "type": "I" },
      { "text": "틀어주니까 그냥 듣는다.", "type": "S" },
      { "text": "내가 전에 뭘 봤길래 이게 나오나 생각해 본다.", "type": "C" }
    ]
  },
  {
    "id": 597,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "스마트폰으로 손주에게 용돈을 보내려는데 비밀번호가 틀렸다고 나옵니다.",
    "options": [
      { "text": "에이 안 해! 다음에 만나서 현금으로 준다.", "type": "D" },
      { "text": "손주한테 전화해서 \"할미가 보내려다 못했다\"고 말한다.", "type": "I" },
      { "text": "다시 생각날 때까지 천천히 기다려본다.", "type": "S" },
      { "text": "비밀번호 재설정 절차를 밟아서 다시 시도한다.", "type": "C" }
    ]
  },
  {
    "id": 598,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "무인 민원 발급기(동사무소 기계)를 써야 합니다.",
    "options": [
      { "text": "직원에게 가서 \"이거 좀 뽑아줘\" 하고 시킨다.", "type": "D" },
      { "text": "도와주는 공익 요원에게 사탕 하나 주며 부탁한다.", "type": "I" },
      { "text": "줄 서서 기다리더라도 창구에서 사람에게 받는다.", "type": "S" },
      { "text": "화면 안내에 따라 지문 인식을 정확하게 시도한다.", "type": "C" }
    ]
  },
  {
    "id": 599,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "지하철 노선도 앱을 보는데 너무 복잡합니다.",
    "options": [
      { "text": "그냥 탄다. 가서 물어보면 되지.", "type": "D" },
      { "text": "옆 사람에게 \"이거 어디로 가요?\" 묻는다.", "type": "I" },
      { "text": "늘 다니던 길로만 다닌다. 모르는 길은 안 간다.", "type": "S" },
      { "text": "확대해서 환승역과 소요 시간을 미리 계산한다.", "type": "C" }
    ]
  },
  {
    "id": 600,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "식당에서 로봇이 음식을 가져왔는데 내리는 법을 모르겠습니다.",
    "options": [
      { "text": "그냥 그릇을 확 집어 내린다.", "type": "D" },
      { "text": "\"어머, 이거 어떻게 내려?\" 주변 사람들과 웃는다.", "type": "I" },
      { "text": "직원이 올 때까지 손 안 대고 기다린다.", "type": "S" },
      { "text": "화면에 '수령 확인' 버튼이 있는지 찾아본다.", "type": "C" }
    ]
  },
  {
    "id": 601,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀가 갑자기 급한 일이 생겼다며 손주를 봐달라고 부탁합니다.",
    "options": [
      { "text": "\"내가 시간이 되는지 먼저 봐야지.\" 내 일정이 우선이라 확인부터 한다.", "type": "D" },
      { "text": "\"오냐, 얼른 데려오너라!\" 손주 볼 생각에 반갑게 수락한다.", "type": "I" },
      { "text": "몸이 좀 피곤하지만 자식이 급하다니 어쩔 수 없이 봐준다.", "type": "S" },
      { "text": "몇 시부터 몇 시까지 봐줘야 하는지 정확한 시간을 묻는다.", "type": "C" }
    ]
  },
  {
    "id": 602,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 밥은 안 먹고 사탕만 달라고 떼를 씁니다.",
    "options": [
      { "text": "\"밥 안 먹으면 사탕도 없다!\" 밥그릇을 치우며 단호하게 혼낸다.", "type": "D" },
      { "text": "\"이거 먹고 나랑 놀자~\" 달콤한 말로 달래서 기분을 풀어준다.", "type": "I" },
      { "text": "우는 게 안쓰러워서 몰래 사탕을 하나 쥐여준다.", "type": "S" },
      { "text": "밥을 먹어야 하는 이유를 차근차근 설명해 준다.", "type": "C" }
    ]
  },
  {
    "id": 603,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "며느리(혹은 사위)가 정해준 육아 방식이 내 방식과 다릅니다.",
    "options": [
      { "text": "\"애들은 내가 키워봐서 안다.\" 내 방식대로 밀고 나간다.", "type": "D" },
      { "text": "\"요즘은 그렇다니 맞춰줘야지.\" 겉으로는 알겠다고 하고 융통성 있게 한다.", "type": "I" },
      { "text": "자식들 듣기 싫은 소리 안 하려고 하라는 대로 꾹 참고 따른다.", "type": "S" },
      { "text": "왜 그렇게 해야 하는지 이유를 물어보고 타당하면 따른다.", "type": "C" }
    ]
  },
  {
    "id": 604,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주와 놀이터에 갔는데 아이가 위험한 기구에 올라가려 합니다.",
    "options": [
      { "text": "\"안 돼! 내려와!\" 큰 소리로 즉시 제지한다.", "type": "D" },
      { "text": "\"어구구 잘하네! 조심조심~\" 옆에서 지켜보며 응원한다.", "type": "I" },
      { "text": "다칠까 봐 가슴이 철렁해서 얼른 가서 잡아준다.", "type": "S" },
      { "text": "안전한 놀이 기구인지 먼저 확인하고 이용 수칙을 알려준다.", "type": "C" }
    ]
  },
  {
    "id": 605,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주를 봐주는 대가(용돈)에 대해 자녀와 이야기할 때 당신은?",
    "options": [
      { "text": "\"힘든 만큼 이 정도는 줘야지.\" 원하는 금액을 확실히 말한다.", "type": "D" },
      { "text": "\"돈은 무슨, 맛있는 거나 사 먹게 좀 줘.\" 웃으며 넘긴다.", "type": "I" },
      { "text": "자식들 살림도 빠듯할 텐데... 주면 받고 안 주면 만다.", "type": "S" },
      { "text": "교통비, 간식비 등 들어가는 비용을 계산해서 이야기한다.", "type": "C" }
    ]
  },
  {
    "id": 606,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 집안 물건을 깨뜨렸습니다.",
    "options": [
      { "text": "\"조심하라고 했지!\" 따끔하게 야단쳐서 다시는 못 하게 한다.", "type": "D" },
      { "text": "\"안 다쳤니? 괜찮아, 괜찮아.\" 놀란 아이부터 달랜다.", "type": "I" },
      { "text": "자녀가 알면 손주를 혼낼까 봐 내가 몰래 치운다.", "type": "S" },
      { "text": "어떻게 하다가 깼는지 자초지종을 물어본다.", "type": "C" }
    ]
  },
  {
    "id": 607,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "황혼 육아로 인해 체력적으로 너무 힘듭니다.",
    "options": [
      { "text": "\"더 이상은 못 봐주겠다.\" 자녀에게 힘들다고 선언한다.", "type": "D" },
      { "text": "친구들에게 \"나 골병들겠어~\" 하소연하며 스트레스를 푼다.", "type": "I" },
      { "text": "자식들이 곤란해질까 봐 아파도 참고 계속 봐준다.", "type": "S" },
      { "text": "육아 시간을 줄이거나 도우미를 쓰는 대안을 찾는다.", "type": "C" }
    ]
  },
  {
    "id": 608,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 스마트폰만 계속 보고 있으려 합니다.",
    "options": [
      { "text": "\"그만 봐라.\" 폰을 뺏거나 TV를 꺼버린다.", "type": "D" },
      { "text": "\"할미랑 재미있는 놀이 할까?\" 다른 놀이로 유도한다.", "type": "I" },
      { "text": "하지 말라고 하고 싶지만 애가 울까 봐 그냥 둔다.", "type": "S" },
      { "text": "딱 30분만 보기로 아이와 약속하고 시간을 잰다.", "type": "C" }
    ]
  },
  {
    "id": 609,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀가 퇴근이 늦어져서 약속된 시간보다 늦게 데리러 왔습니다.",
    "options": [
      { "text": "\"시간 약속은 지켜야지!\" 늦은 것에 대해 한소리 한다.", "type": "D" },
      { "text": "\"고생했네, 얼른 와서 밥 먹어.\" 반갑게 맞이한다.", "type": "I" },
      { "text": "얼마나 바빴으면 늦었을까 이해하고 기다린다.", "type": "S" },
      { "text": "늦으면 미리 연락을 달라고 규칙을 정한다.", "type": "C" }
    ]
  },
  {
    "id": 610,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주에게 한글이나 숫자를 가르쳐줄 때 당신의 스타일은?",
    "options": [
      { "text": "\"이것도 몰라? 집중해!\" 엄하게 가르친다.", "type": "D" },
      { "text": "노래도 부르고 춤도 추면서 놀이처럼 가르친다.", "type": "I" },
      { "text": "아이가 힘들어하면 \"오늘은 그만하자\" 하고 쉬게 한다.", "type": "S" },
      { "text": "하루에 한 장씩 교재를 정해놓고 꾸준히 시킨다.", "type": "C" }
    ]
  },
  {
    "id": 611,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 친구와 싸우고 울면서 들어왔습니다.",
    "options": [
      { "text": "\"누가 그랬어? 당장 가자!\" 앞장서서 해결하려 한다.", "type": "D" },
      { "text": "\"아이고 속상해라~\" 안아주며 같이 흉을 봐준다.", "type": "I" },
      { "text": "많이 아팠겠다고 등을 토닥이며 위로해 준다.", "type": "S" },
      { "text": "누가 먼저 잘못했는지 자초지종을 들어본다.", "type": "C" }
    ]
  },
  {
    "id": 612,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀가 \"어머니, 애한테 과자 좀 주지 마세요\"라고 잔소리합니다.",
    "options": [
      { "text": "\"내가 알아서 한다. 잔소리 말라.\" 불쾌해한다.", "type": "D" },
      { "text": "\"알았다, 알았어~\" 대답은 잘하고 몰래 또 준다.", "type": "I" },
      { "text": "자식 말이 맞겠지 싶어서 주지 않으려 노력한다.", "type": "S" },
      { "text": "하루에 몇 개까지 괜찮은지 정해달라고 한다.", "type": "C" }
    ]
  },
  {
    "id": 613,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 비싼 장난감을 사달라고 조릅니다.",
    "options": [
      { "text": "\"안 돼. 쓸데없는 거 사지 마.\" 단칼에 거절한다.", "type": "D" },
      { "text": "\"우리 강아지가 갖고 싶어? 사자!\" 기분 좋게 사준다.", "type": "I" },
      { "text": "사주면 버릇 나빠질까 걱정되지만 결국 사준다.", "type": "S" },
      { "text": "집에 비슷한 장난감이 있는지 생각해 보라고 한다.", "type": "C" }
    ]
  },
  {
    "id": 614,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주를 돌보느라 친구들과의 모임에 못 가게 생겼습니다.",
    "options": [
      { "text": "자녀에게 \"나 약속 있으니 다른 사람 알아봐라\" 하고 나간다.", "type": "D" },
      { "text": "손주를 데리고 모임에 가서 자랑한다.", "type": "I" },
      { "text": "친구들에게 미안하다고 하고 약속을 취소한다.", "type": "S" },
      { "text": "모임 시간을 조정할 수 있는지 친구들에게 물어본다.", "type": "C" }
    ]
  },
  {
    "id": 615,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "아이가 잠투정을 하며 잠을 안 잡니다.",
    "options": [
      { "text": "\"얼른 눈 감고 자!\" 불을 끄고 엄하게 재운다.", "type": "D" },
      { "text": "자장가를 불러주거나 옛날이야기를 해주며 재운다.", "type": "I" },
      { "text": "잠들 때까지 계속 업어주거나 안아준다.", "type": "S" },
      { "text": "낮잠을 많이 잤는지 확인하고 수면 환경을 점검한다.", "type": "C" }
    ]
  },
  {
    "id": 616,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 유치원 가기 싫다고 떼를 씁니다.",
    "options": [
      { "text": "\"학생이 학교 가는 건 당연한 거야. 빨리 가.\" 억지로 보낸다.", "type": "D" },
      { "text": "\"가면 친구들도 있고 재밌잖아~\" 잘 설득해 본다.", "type": "I" },
      { "text": "어디 아픈 건 아닌지 걱정하며 안쓰러워한다.", "type": "S" },
      { "text": "왜 가기 싫은지 이유를 물어보고 해결책을 찾는다.", "type": "C" }
    ]
  },
  {
    "id": 617,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "주말에 자녀 부부가 손주를 맡기고 여행을 가겠다고 합니다.",
    "options": [
      { "text": "\"나도 쉴 때가 필요하다.\" 힘들면 거절한다.", "type": "D" },
      { "text": "\"잘 다녀와라! 애들은 내가 잘 볼게.\" 흔쾌히 보내준다.", "type": "I" },
      { "text": "힘들겠지만 자식들 오붓한 시간 보내라고 맡아준다.", "type": "S" },
      { "text": "애들 밥이랑 약 챙겨야 할 것들을 메모해두라고 한다.", "type": "C" }
    ]
  },
  {
    "id": 618,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 편식을 심하게 합니다.",
    "options": [
      { "text": "\"안 먹으면 치운다.\" 굶겨서라도 버릇을 고치려 한다.", "type": "D" },
      { "text": "좋아하는 반찬 위주로 차려줘서 일단 먹인다.", "type": "I" },
      { "text": "잘게 다지거나 모양을 내서 어떻게든 먹여본다.", "type": "S" },
      { "text": "영양 불균형이 올까 봐 골고루 먹어야 하는 이유를 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 619,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀가 보낸 육아 용품 사용법이 너무 복잡합니다.",
    "options": [
      { "text": "\"뭐가 이렇게 복잡해?\" 안 쓰고 내 방식대로 한다.", "type": "D" },
      { "text": "자녀에게 영상 통화를 걸어 \"이거 어떻게 쓰는 거냐?\" 묻는다.", "type": "I" },
      { "text": "고장 낼까 봐 건드리지 않고 놔둔다.", "type": "S" },
      { "text": "설명서를 돋보기 쓰고 꼼꼼히 읽어본다.", "type": "C" }
    ]
  },
  {
    "id": 620,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "놀이터에서 다른 아이가 내 손주를 밀쳤습니다.",
    "options": [
      { "text": "그 아이에게 가서 \"그러면 안 돼!\" 하고 호통친다.", "type": "D" },
      { "text": "그 아이 부모에게 웃으면서 \"애들이 놀다 보면 그럴 수 있죠\" 한다.", "type": "I" },
      { "text": "내 손주를 데리고 다른 쪽으로 피한다.", "type": "S" },
      { "text": "손주가 다친 곳은 없는지 상처부터 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 621,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주 옷 입히는 문제로 며느리/사위와 의견이 갈립니다. (춥다 vs 덥다)",
    "options": [
      { "text": "\"애 감기 걸리면 네가 책임질 거냐?\" 내 고집대로 입힌다.", "type": "D" },
      { "text": "\"그래? 이게 요즘 유행이니?\" 자녀 말에 맞장구친다.", "type": "I" },
      { "text": "엄마 아빠 뜻대로 입히는 게 맞겠지 하고 따른다.", "type": "S" },
      { "text": "오늘 기온을 확인하고 적절한 두께의 옷을 찾는다.", "type": "C" }
    ]
  },
  {
    "id": 622,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 할머니/할아버지 집이 심심하다고 집에 가자고 합니다.",
    "options": [
      { "text": "\"그럼 가라.\" 서운한 마음에 퉁명스럽게 말한다.", "type": "D" },
      { "text": "\"우리 맛있는 거 먹으러 갈까?\" 밖으로 데리고 나간다.", "type": "I" },
      { "text": "재밌게 못 해줘서 미안한 마음이 든다.", "type": "S" },
      { "text": "집에 있는 장난감이나 책을 꺼내주며 놀거리를 찾는다.", "type": "C" }
    ]
  },
  {
    "id": 623,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀가 육아 문제로 나에게 짜증을 냅니다.",
    "options": [
      { "text": "\"내가 널 어떻게 키웠는데!\" 같이 화를 낸다.", "type": "D" },
      { "text": "\"너 회사 일이 힘들었구나?\" 기분을 풀어주려 한다.", "type": "I" },
      { "text": "내가 늙어서 잘 못하나 싶어 의기소침해진다.", "type": "S" },
      { "text": "무엇이 문제였는지 차분하게 대화로 풀어본다.", "type": "C" }
    ]
  },
  {
    "id": 624,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 밖에서 인사를 잘 안 합니다.",
    "options": [
      { "text": "\"어른 봤으면 인사해야지!\" 그 자리에서 따끔하게 가르친다.", "type": "D" },
      { "text": "\"안녕하세요~ 해야지?\" 내가 먼저 시범을 보이며 웃는다.", "type": "I" },
      { "text": "쑥스러워서 그런가 보다 하고 머리를 쓰다듬어 준다.", "type": "S" },
      { "text": "예의 범절이 중요함을 나중에 조용히 타일러준다.", "type": "C" }
    ]
  },
  {
    "id": 625,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주를 봐주기로 한 날, 몸살 기운이 있습니다.",
    "options": [
      { "text": "자녀에게 전화해 \"오늘은 못 봐준다\"고 확실히 말한다.", "type": "D" },
      { "text": "아파도 손주 보면 힘이 날 것 같아 그냥 오라고 한다.", "type": "I" },
      { "text": "자녀가 휴가 내기 힘들 테니 약 먹고 버틴다.", "type": "S" },
      { "text": "감기가 옮을 수 있으니 오지 않는 게 좋겠다고 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 626,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 내가 아끼는 화분을 깨뜨렸습니다.",
    "options": [
      { "text": "\"거기 가지 말라고 했지!\" 크게 야단친다.", "type": "D" },
      { "text": "\"아이고, 화분은 또 사면 되지.\" 아이가 안 다쳤나 살핀다.", "type": "I" },
      { "text": "속상하지만 아이 놀랄까 봐 아무 말 없이 치운다.", "type": "S" },
      { "text": "파편에 찔리지 않게 아이를 멀리 보내고 꼼꼼히 청소한다.", "type": "C" }
    ]
  },
  {
    "id": 627,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀가 감사의 표시로 용돈 봉투를 드립니다.",
    "options": [
      { "text": "\"그래, 고맙다.\" 당연하게 받는다.", "type": "D" },
      { "text": "\"뭘 이런 걸 다~\" 하면서도 기분 좋게 받아서 자랑한다.", "type": "I" },
      { "text": "\"너희 쓰기도 바쁠 텐데...\" 미안해서 거절하려 한다.", "type": "S" },
      { "text": "얼마인지 확인하고 손주 통장에 넣어주거나 저축한다.", "type": "C" }
    ]
  },
  {
    "id": 628,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 떼쓰며 길바닥에 드러누웠습니다.",
    "options": [
      { "text": "\"일어나! 버릇없이 뭐 하는 거야!\" 억지로 일으켜 세운다.", "type": "D" },
      { "text": "주변 사람들 시선이 민망해서 얼른 원하는 걸 들어준다.", "type": "I" },
      { "text": "달래도 안 되니 어쩔 줄 몰라 쩔쩔맨다.", "type": "S" },
      { "text": "그칠 때까지 기다렸다가 단호하게 훈육한다.", "type": "C" }
    ]
  },
  {
    "id": 629,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀가 주말마다 손주를 데리고 옵니다. 쉬고 싶은데...",
    "options": [
      { "text": "\"이번 주말은 오지 마라.\" 내 스케줄을 챙긴다.", "type": "D" },
      { "text": "힘들어도 손주 재롱 보는 낙으로 반긴다.", "type": "I" },
      { "text": "오지 말라고 하면 자녀가 서운해할까 봐 말 못 한다.", "type": "S" },
      { "text": "한 달에 두 번만 오는 것으로 규칙을 정하자고 한다.", "type": "C" }
    ]
  },
  {
    "id": 630,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 나에게 말대꾸를 합니다.",
    "options": [
      { "text": "\"어디 어른한테 말대꾸야!\" 권위 있게 혼낸다.", "type": "D" },
      { "text": "\"허허, 녀석 말 잘하네.\" 웃어넘긴다.", "type": "I" },
      { "text": "속상하지만 내가 참는다.", "type": "S" },
      { "text": "그런 말은 예의가 아니라고 차분하게 가르친다.", "type": "C" }
    ]
  },
  {
    "id": 631,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀 몰래 손주에게 라면이나 인스턴트를 줬습니다.",
    "options": [
      { "text": "\"맛있으면 됐지 뭐.\" 자녀가 알아도 당당하다.", "type": "D" },
      { "text": "\"엄마한테는 비밀이다~\" 손주랑 윙크하며 약속한다.", "type": "I" },
      { "text": "혹시 배탈이라도 날까 봐 걱정한다.", "type": "S" },
      { "text": "성분표를 보고 그나마 건강한 것으로 골라준다.", "type": "C" }
    ]
  },
  {
    "id": 632,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주 기저귀를 가는 게 냄새나고 힘듭니다.",
    "options": [
      { "text": "자녀에게 \"빨리 와서 좀 갈아라\" 시킨다.", "type": "D" },
      { "text": "\"아이고 똥강아지, 많이 쌌네!\" 말 걸며 즐겁게 간다.", "type": "I" },
      { "text": "내 손주니까 당연히 해야 할 일이라 생각하고 묵묵히 간다.", "type": "S" },
      { "text": "물티슈와 파우더를 준비해 순서대로 깔끔하게 간다.", "type": "C" }
    ]
  },
  {
    "id": 633,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 어린이집에서 배워온 노래와 춤을 보여줍니다.",
    "options": [
      { "text": "\"잘한다! 한 번 더 해봐!\" 박수 치며 크게 칭찬한다.", "type": "D" },
      { "text": "나도 같이 춤추며 흥을 돋운다.", "type": "I" },
      { "text": "흐뭇하게 바라보며 미소 짓는다.", "type": "S" },
      { "text": "가사를 잘 외우는지 박자는 맞는지 유심히 본다.", "type": "C" }
    ]
  },
  {
    "id": 634,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 숙제를 하기 싫어합니다.",
    "options": [
      { "text": "\"숙제 다 하기 전에는 못 놀아.\" 엄격하게 검사한다.", "type": "D" },
      { "text": "\"조금만 하고 나랑 놀자~\" 아이 편을 들어준다.", "type": "I" },
      { "text": "옆에 앉아서 다독이며 끝까지 할 수 있게 도와준다.", "type": "S" },
      { "text": "알림장을 확인하고 숙제 내용을 체크해 준다.", "type": "C" }
    ]
  },
  {
    "id": 635,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주를 데리고 키즈카페(놀이방)에 갔습니다.",
    "options": [
      { "text": "구석 테이블에 앉아서 내 볼일을 보거나 쉰다.", "type": "D" },
      { "text": "다른 할머니들과 대화하며 친해진다.", "type": "I" },
      { "text": "손주가 다칠까 봐 졸졸 따라다닌다.", "type": "S" },
      { "text": "입장료와 이용 시간을 계산하고 시간 맞춰 나온다.", "type": "C" }
    ]
  },
  {
    "id": 636,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀가 손주 훈육 문제로 언성을 높여 싸웁니다.",
    "options": [
      { "text": "\"시끄러워! 애 앞에서 뭐 하는 짓이야!\" 호통친다.", "type": "D" },
      { "text": "손주를 데리고 다른 방으로 가서 놀아준다.", "type": "I" },
      { "text": "눈치를 보며 싸움이 멈추길 조용히 기다린다.", "type": "S" },
      { "text": "나중에 조용할 때 누구의 교육관이 맞는지 조언한다.", "type": "C" }
    ]
  },
  {
    "id": 637,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 할머니/할아버지보다 TV 만화가 더 좋다고 합니다.",
    "options": [
      { "text": "\"그럼 저리 가라. 나도 너 안 좋아해.\" 삐친 척한다.", "type": "D" },
      { "text": "\"만화보다 할미가 더 재밌게 해줄게!\" 관심을 끈다.", "type": "I" },
      { "text": "섭섭하지만 아이가 좋아하니 TV를 틀어준다.", "type": "S" },
      { "text": "너무 오래 보면 눈 나빠지니 시간을 제한한다.", "type": "C" }
    ]
  },
  {
    "id": 638,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 아파서 열이 납니다.",
    "options": [
      { "text": "당장 겉옷 입혀서 병원 응급실로 데려간다.", "type": "D" },
      { "text": "자녀에게 전화해서 \"큰일 났다, 빨리 와라\" 하며 호들갑을 떤다.", "type": "I" },
      { "text": "밤새 옆에서 물수건으로 닦아주며 간호한다.", "type": "S" },
      { "text": "체온을 시간마다 재고 해열제 용량을 확인해 먹인다.", "type": "C" }
    ]
  },
  {
    "id": 639,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 내 안경이나 지팡이를 장난감처럼 가지고 놉니다.",
    "options": [
      { "text": "\"이건 노는 거 아냐. 이리 내.\" 뺏는다.", "type": "D" },
      { "text": "\"할미처럼 안경 썼네? 아이고 박사님이네!\" 맞장구친다.", "type": "I" },
      { "text": "망가질까 봐 걱정되지만 달라고 말을 못 한다.", "type": "S" },
      { "text": "위험한 물건이니 다칠 수 있다고 설명하고 치운다.", "type": "C" }
    ]
  },
  {
    "id": 640,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "동네 사람들이 \"손주 봐주느라 고생하시네요\"라고 인사합니다.",
    "options": [
      { "text": "\"뭐, 내 팔자려니 합니다.\" 덤덤하게 대답한다.", "type": "D" },
      { "text": "\"힘들긴요~ 애가 얼마나 예쁜데요!\" 자랑을 늘어놓는다.", "type": "I" },
      { "text": "\"네, 감사합니다.\" 수줍게 인사하고 지나간다.", "type": "S" },
      { "text": "\"요즘 황혼 육아가 대세라잖아요.\" 사회적 현상으로 받아들인다.", "type": "C" }
    ]
  },
  {
    "id": 641,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 밥상머리에서 돌아다닙니다.",
    "options": [
      { "text": "\"앉아! 다 먹기 전엔 못 일어나.\" 엄하게 교육한다.", "type": "D" },
      { "text": "밥그릇 들고 쫓아다니며 한 숟가락이라도 먹인다.", "type": "I" },
      { "text": "화내면 체할까 봐 돌아다녀도 그냥 둔다.", "type": "S" },
      { "text": "식사 예절은 중요한 것이니 식탁 의자에 앉히고 규칙을 지키게 한다.", "type": "C" }
    ]
  },
  {
    "id": 642,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주 옷을 사주러 백화점에 갔습니다. 어떤 걸 고를까요?",
    "options": [
      { "text": "가장 비싸고 고급스러운 브랜드 옷.", "type": "D" },
      { "text": "알록달록하고 눈에 확 띄는 화려한 옷.", "type": "I" },
      { "text": "활동하기 편하고 피부에 닿는 느낌이 좋은 옷.", "type": "S" },
      { "text": "가격 대비 품질이 좋고 세탁하기 편한 실용적인 옷.", "type": "C" }
    ]
  },
  {
    "id": 643,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 어린이집 가기 전 옷 투정을 부립니다.",
    "options": [
      { "text": "\"주는 대로 입어.\" 시간 없으니 강제로 입힌다.", "type": "D" },
      { "text": "\"이거 입으면 공주님/왕자님 같겠다!\" 칭찬하며 입힌다.", "type": "I" },
      { "text": "아이가 입고 싶다는 옷을 찾아 입혀준다.", "type": "S" },
      { "text": "어제 골라놓은 옷을 입어야 한다고 약속을 상기시킨다.", "type": "C" }
    ]
  },
  {
    "id": 644,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀가 \"어머니, 애한테 영상 보여주지 마세요\"라고 합니다.",
    "options": [
      { "text": "\"내가 힘든데 어떡하냐!\" 내 상황을 강력히 주장한다.", "type": "D" },
      { "text": "\"알았어, 알았어~\" 하고 몰래 보여준다.", "type": "I" },
      { "text": "힘들어도 책을 읽어주거나 장난감으로 놀아준다.", "type": "S" },
      { "text": "교육적인 영상은 괜찮은지 물어보고 허용 범위를 정한다.", "type": "C" }
    ]
  },
  {
    "id": 645,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 놀다가 다쳐서 울고 있습니다.",
    "options": [
      { "text": "\"뚝 그쳐! 사내자식이(다 큰 애가) 우는 거 아냐.\"", "type": "D" },
      { "text": "\"호~ 해주께. 안 아프지?\" 과장되게 위로한다.", "type": "I" },
      { "text": "많이 아프지? 하며 꼭 안아준다.", "type": "S" },
      { "text": "상처 부위를 보고 소독약과 밴드를 가져온다.", "type": "C" }
    ]
  },
  {
    "id": 646,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 밥을 남겼습니다.",
    "options": [
      { "text": "\"농부 아저씨가 힘들게 농사지은 거야. 다 먹어.\" 강요한다.", "type": "D" },
      { "text": "\"배부르면 그만 먹어라.\" 쿨하게 치운다.", "type": "I" },
      { "text": "남은 밥이 아까워서 내가 먹는다.", "type": "S" },
      { "text": "다음엔 먹을 만큼만 덜어서 먹자고 가르친다.", "type": "C" }
    ]
  },
  {
    "id": 647,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 할머니/할아버지 댁에 오기 싫어한다고 합니다.",
    "options": [
      { "text": "\"오기 싫으면 관두라 해!\" 섭섭해서 화를 낸다.", "type": "D" },
      { "text": "\"맛있는 거 사놨는데~\" 전화로 아이를 꼬신다.", "type": "I" },
      { "text": "내가 재미없게 해줬나 싶어서 마음이 아프다.", "type": "S" },
      { "text": "왜 오기 싫어하는지 이유를 자녀에게 물어본다.", "type": "C" }
    ]
  },
  {
    "id": 648,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주가 낮잠 잘 시간인데 안 자고 칭얼거립니다.",
    "options": [
      { "text": "\"자라!\" 이불을 덮어주고 자는 척한다.", "type": "D" },
      { "text": "유모차에 태워서 산책 나가 재운다.", "type": "I" },
      { "text": "안아서 둥가둥가 해주며 재운다.", "type": "S" },
      { "text": "조용한 음악을 틀고 암막 커튼을 친다.", "type": "C" }
    ]
  },
  {
    "id": 649,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀가 바빠서 며칠 동안 손주를 맡아야 합니다.",
    "options": [
      { "text": "\"며칠 동안 내 말 잘 들어야 한다.\" 규칙을 정한다.", "type": "D" },
      { "text": "\"우리 합숙 훈련하는 거야! 재밌겠지?\" 아이를 신나게 한다.", "type": "I" },
      { "text": "엄마 아빠 보고 싶어 할 손주가 짠해서 더 잘해준다.", "type": "S" },
      { "text": "아이의 하루 일과표를 받아서 그대로 지키려 한다.", "type": "C" }
    ]
  },
  {
    "id": 650,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "황혼 육아를 그만두고 싶을 때 당신의 생각은?",
    "options": [
      { "text": "내 인생도 중요하다. 당당하게 그만둔다.", "type": "D" },
      { "text": "여행도 다니고 친구도 만나고 싶다.", "type": "I" },
      { "text": "자식들이 맡길 데 없어서 고생할까 봐 그만두지 못한다.", "type": "S" },
      { "text": "언제까지 봐줄지 날짜를 정해서 통보한다.", "type": "C" }
    ]
  },
  {
    "id": 651,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "수십 년 만에 초등학교 동창회에 나갔습니다. 문을 열고 들어설 때 당신의 모습은?",
    "options": [
      { "text": "\"다들 잘 있었나! 내가 왔다!\" 큰 소리로 인사하며 당당하게 들어간다.", "type": "D" },
      { "text": "\"어머, 이게 누구야!\" 보이는 친구마다 손잡고 반가워한다.", "type": "I" },
      { "text": "아는 얼굴이 있나 살피며 조용히 빈자리를 찾아 앉는다.", "type": "S" },
      { "text": "약속 시간에 맞춰 왔는지 시계를 확인하고 명찰부터 찾는다.", "type": "C" }
    ]
  },
  {
    "id": 652,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친한 친구가 급하다며 돈을 빌려달라고 합니다.",
    "options": [
      { "text": "\"언제 갚을 건데?\" 날짜부터 확실하게 못 박는다.", "type": "D" },
      { "text": "\"오죽 급하면 나한테 말했겠나.\" 안쓰러워서 쌈짓돈을 꺼내준다.", "type": "I" },
      { "text": "거절하면 친구 사이가 멀어질까 봐 걱정부터 앞선다.", "type": "S" },
      { "text": "무슨 일에 쓸 건지, 갚을 능력은 있는지 꼼꼼히 물어본다.", "type": "C" }
    ]
  },
  {
    "id": 653,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "동창회에서 친구가 자기 자식 자랑, 돈 자랑만 계속 늘어놓습니다.",
    "options": [
      { "text": "\"그만해라. 너만 잘사냐?\" 말을 자르고 화제를 돌린다.", "type": "D" },
      { "text": "\"정말? 좋겠다! 그래서 어떻게 됐는데?\" 맞장구치며 들어준다.", "type": "I" },
      { "text": "듣기 싫어도 친구 기분 상할까 봐 웃으며 가만히 있는다.", "type": "S" },
      { "text": "저 말이 사실인지, 과장은 아닌지 속으로 따져본다.", "type": "C" }
    ]
  },
  {
    "id": 654,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "돈을 빌려 간 친구가 약속한 날짜에 돈을 안 갚습니다.",
    "options": [
      { "text": "당장 전화를 걸어 \"오늘까지 넣으라\"고 독촉한다.", "type": "D" },
      { "text": "깜빡했나 싶어서 \"요즘 별일 없지?\" 안부 전화로 돌려 말한다.", "type": "I" },
      { "text": "사정이 있겠지... 갚을 때까지 말없이 기다린다.", "type": "S" },
      { "text": "며칠이나 지났는지 확인하고 연체 이자 이야기를 꺼낼지 고민한다.", "type": "C" }
    ]
  },
  {
    "id": 655,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "동창회 장소인 식당 음식이 맛이 없고 불친절합니다.",
    "options": [
      { "text": "주인을 불러 \"돈 받고 장사를 이렇게 하나!\" 호통친다.", "type": "D" },
      { "text": "\"오랜만에 만났는데 기분 풀자~\" 친구들을 다독인다.", "type": "I" },
      { "text": "불편해도 분위기 깰까 봐 조용히 먹는다.", "type": "S" },
      { "text": "다음 모임 때는 여기 오지 말자고 회장에게 건의한다.", "type": "C" }
    ]
  },
  {
    "id": 656,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구가 보증을 서달라고 부탁합니다.",
    "options": [
      { "text": "\"보증은 자식이라도 안 돼.\" 단호하게 거절한다.", "type": "D" },
      { "text": "거절해야 하는데 친구 얼굴 보니 마음이 약해진다.", "type": "I" },
      { "text": "집에 가서 배우자와 상의해 보겠다고 피한다.", "type": "S" },
      { "text": "보증의 법적 책임이 어디까지인지 알아보고 판단한다.", "type": "C" }
    ]
  },
  {
    "id": 657,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "동창회에서 노래방에 가자고 합니다. 당신의 반응은?",
    "options": [
      { "text": "\"내가 첫 곡 뽑을게!\" 마이크부터 잡는다.", "type": "D" },
      { "text": "탬버린을 흔들며 친구들과 어울려 춤춘다.", "type": "I" },
      { "text": "뒤에 앉아서 친구들 노래하는 걸 구경하며 박수 친다.", "type": "S" },
      { "text": "내가 부를 노래 번호를 미리 책에서 찾아놓는다.", "type": "C" }
    ]
  },
  {
    "id": 658,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구가 갚기로 한 돈 대신 물건(건강식품 등)으로 주겠다고 합니다.",
    "options": [
      { "text": "\"필요 없다. 현금으로 가져와.\" 원칙대로 하라고 한다.", "type": "D" },
      { "text": "\"그래? 그거 몸에 좋은 거야?\" 호기심을 보인다.", "type": "I" },
      { "text": "돈이 더 좋지만 친구가 미안해할까 봐 그냥 받는다.", "type": "S" },
      { "text": "그 물건의 시장 가격이 빌려준 돈과 맞는지 따져본다.", "type": "C" }
    ]
  },
  {
    "id": 659,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "동창회 회장을 뽑아야 하는데 아무도 안 하려고 합니다.",
    "options": [
      { "text": "\"답답하네. 내가 할 테니 따라와!\" 내가 맡는다.", "type": "D" },
      { "text": "\"OO이가 인기 많잖아~ 네가 해!\" 분위기를 띄우며 추천한다.", "type": "I" },
      { "text": "누가 시킬까 봐 눈을 피하고 가만히 있는다.", "type": "S" },
      { "text": "회장의 역할과 임기가 어떻게 되는지 회칙을 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 660,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "돈거래할 때 차용증(빌려준 증서)을 쓰자고 하면?",
    "options": [
      { "text": "당연한 거다. 꼼꼼하게 써서 도장 찍는다.", "type": "D" },
      { "text": "\"우리 사이에 무슨 종이 쪼가리냐~\" 믿고 그냥 준다.", "type": "I" },
      { "text": "쓰자고 하면 친구가 서운해할까 봐 말을 못 꺼낸다.", "type": "S" },
      { "text": "법적 효력이 있는 양식인지 확인하고 작성한다.", "type": "C" }
    ]
  },
  {
    "id": 661,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "모임에서 옛날이야기를 하다가 기억이 서로 다릅니다.",
    "options": [
      { "text": "\"내 말이 맞다니까!\" 끝까지 내 주장을 우긴다.", "type": "D" },
      { "text": "\"그랬나? 하하, 우리가 늙어서 그래~\" 웃어넘긴다.", "type": "I" },
      { "text": "\"네 말이 맞는 것 같다.\" 친구 의견에 동의해 준다.", "type": "S" },
      { "text": "누가 맞는지 앨범이나 기록을 찾아보자고 한다.", "type": "C" }
    ]
  },
  {
    "id": 662,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구가 돈을 빌려 가서 엉뚱한 곳(도박, 사치)에 쓴 걸 알았습니다.",
    "options": [
      { "text": "당장 찾아가서 \"내 돈 내놔!\" 하고 뒤집어엎는다.", "type": "D" },
      { "text": "사람이 변했다며 주변 친구들에게 하소연한다.", "type": "I" },
      { "text": "속은 쓰리지만 내가 사람 잘못 본 탓이라며 자책한다.", "type": "S" },
      { "text": "더 이상 돈을 빌려주지 않겠다고 결심하고 거리를 둔다.", "type": "C" }
    ]
  },
  {
    "id": 663,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "동창회 회비를 걷는데 몇 명이 안 냅니다.",
    "options": [
      { "text": "\"회비 안 낼 거면 밥 먹지 마라.\" 공개적으로 면박 준다.", "type": "D" },
      { "text": "\"다음에 꼭 내기다?\" 좋게 말하고 넘어간다.", "type": "I" },
      { "text": "사정이 어렵겠지 싶어 내가 몰래 대신 내준다.", "type": "S" },
      { "text": "미납자 명단을 작성해서 총무에게 전달한다.", "type": "C" }
    ]
  },
  {
    "id": 664,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구가 사업한다고 큰돈을 투자하라고 합니다.",
    "options": [
      { "text": "성공할 것 같으면 내가 주도적으로 참여한다.", "type": "D" },
      { "text": "친구가 같이 하자니까 거절하기 힘들어서 솔깃한다.", "type": "I" },
      { "text": "노후 자금 잃을까 봐 무서워서 절대 안 한다.", "type": "S" },
      { "text": "사업 계획서를 가져오라고 해서 수익성을 따져본다.", "type": "C" }
    ]
  },
  {
    "id": 665,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "동창회에서 이름이 기억 안 나는 친구가 인사합니다.",
    "options": [
      { "text": "\"야, 이름이 뭐더라?\" 대놓고 물어본다.", "type": "D" },
      { "text": "\"어머, 얼굴 보니 딱 알겠네! 반갑다!\" 아는 척하며 넘긴다.", "type": "I" },
      { "text": "기억 못 해서 미안한 마음에 어물쩍 인사한다.", "type": "S" },
      { "text": "졸업 앨범 속 얼굴과 매칭하며 누군지 추리해 본다.", "type": "C" }
    ]
  },
  {
    "id": 666,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "돈을 빌려준 친구가 연락을 피합니다.",
    "options": [
      { "text": "집이나 직장으로 찾아가서 담판을 짓는다.", "type": "D" },
      { "text": "\"무슨 일 있는 건 아니지?\" 걱정하는 문자를 보낸다.", "type": "I" },
      { "text": "연락 올 때까지 기다리는 것 말고는 할 수 있는 게 없다.", "type": "S" },
      { "text": "법적 조치를 취할 수 있는지 증거를 모은다.", "type": "C" }
    ]
  },
  {
    "id": 667,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "모임 2차 장소를 정해야 하는데 의견이 갈립니다.",
    "options": [
      { "text": "\"내 단골집으로 가자. 거기가 최고야.\" 내가 정한다.", "type": "D" },
      { "text": "\"어디가 좋아? 다수결로 할까?\" 여러 의견을 듣는다.", "type": "I" },
      { "text": "다들 가는 곳으로 아무 데나 따라간다.", "type": "S" },
      { "text": "인원수와 예산에 맞는 조용한 곳을 검색한다.", "type": "C" }
    ]
  },
  {
    "id": 668,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "여유 돈이 조금 생겼습니다. 어떻게 할까요?",
    "options": [
      { "text": "자식들 주거나 내 마음대로 쓴다.", "type": "D" },
      { "text": "친구들에게 밥 한 번 거하게 산다.", "type": "I" },
      { "text": "혹시 모르니 통장에 고이 모셔둔다.", "type": "S" },
      { "text": "이율 높은 예금 상품을 찾아서 넣는다.", "type": "C" }
    ]
  },
  {
    "id": 669,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "동창회에서 정치 이야기로 싸움이 났습니다.",
    "options": [
      { "text": "\"그만해! 좋은 날 왜 싸우고 난리야!\" 소리쳐서 말린다.", "type": "D" },
      { "text": "\"아이구, 우리 짠하자 짠!\" 술잔을 돌리며 화해시킨다.", "type": "I" },
      { "text": "싸움에 휘말리기 싫어서 조용히 자리를 피한다.", "type": "S" },
      { "text": "양쪽 주장의 오류를 속으로 분석하며 듣는다.", "type": "C" }
    ]
  },
  {
    "id": 670,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "어려운 친구를 돕기 위해 모금을 하자고 합니다.",
    "options": [
      { "text": "\"내가 10만 원 낼게. 너희도 내라.\" 주도한다.", "type": "D" },
      { "text": "\"그래그래, 십시일반으로 돕자!\" 분위기를 띄운다.", "type": "I" },
      { "text": "남들 내는 만큼 눈치껏 따라 낸다.", "type": "S" },
      { "text": "모금액이 투명하게 전달되는지 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 671,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구들과 여행을 가기로 했는데 계획을 짜야 합니다.",
    "options": [
      { "text": "\"걱정 마라. 내가 다 알아서 할게.\" 리더를 자청한다.", "type": "D" },
      { "text": "\"가서 재밌게 놀 생각만 하자!\" 계획보다는 기대감에 들뜬다.", "type": "I" },
      { "text": "누가 짜주면 군말 없이 잘 따라다닌다.", "type": "S" },
      { "text": "교통편, 숙소, 경비를 꼼꼼하게 비교해서 예약한다.", "type": "C" }
    ]
  },
  {
    "id": 672,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "가족 몰래 친구에게 돈을 빌려줬습니다.",
    "options": [
      { "text": "내 돈 내가 쓰는데 무슨 상관이냐. 당당하다.", "type": "D" },
      { "text": "들키면 혼날 텐데... 조마조마하다.", "type": "I" },
      { "text": "배우자가 알면 속상해할까 봐 끝까지 비밀로 한다.", "type": "S" },
      { "text": "비상금 통장에서 나간 거라 티 안 나게 처리한다.", "type": "C" }
    ]
  },
  {
    "id": 673,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "모임에서 단체 사진을 찍자고 합니다.",
    "options": [
      { "text": "\"자, 빨리빨리 모여!\" 대형을 정비한다.", "type": "D" },
      { "text": "가운데 서서 제일 환하게 웃는다.", "type": "I" },
      { "text": "구석이나 뒷줄에 서서 조용히 찍는다.", "type": "S" },
      { "text": "눈 감은 사람 없는지 사진을 확인해 준다.", "type": "C" }
    ]
  },
  {
    "id": 674,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구에게 빌려준 돈을 받으러 갔는데 형편이 너무 어려워 보입니다.",
    "options": [
      { "text": "\"그래도 갚을 건 갚아야지.\" 확실하게 말한다.", "type": "D" },
      { "text": "마음이 약해져서 \"다음에 줘도 돼\" 하고 그냥 온다.", "type": "I" },
      { "text": "돈 달라는 말이 목구멍까지 나왔다가 도로 들어간다.", "type": "S" },
      { "text": "언제쯤 형편이 풀릴지 현실적으로 물어본다.", "type": "C" }
    ]
  },
  {
    "id": 675,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "동창회에서 춤을 추라고 부추깁니다.",
    "options": [
      { "text": "빼지 않고 나가서 멋지게 한 곡 춘다.", "type": "D" },
      { "text": "덩실덩실 춤추며 분위기 메이커가 된다.", "type": "I" },
      { "text": "부끄러워서 손사래 치며 거절한다.", "type": "S" },
      { "text": "남들 추는 거 구경하는 게 더 편하다.", "type": "C" }
    ]
  },
  {
    "id": 676,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구가 돈을 갚으면서 이자까지 쳐서 줬습니다.",
    "options": [
      { "text": "\"당연한 거지.\" 사양 않고 받는다.", "type": "D" },
      { "text": "\"친구끼리 무슨 이자야~ 밥이나 사!\" 이자는 돌려준다.", "type": "I" },
      { "text": "원금만 받기도 미안해서 이자는 극구 사양한다.", "type": "S" },
      { "text": "은행 이자율 정도면 합리적이라 생각하고 받는다.", "type": "C" }
    ]
  },
  {
    "id": 677,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "동창회 기념품(수건, 우산 등)을 골라야 합니다.",
    "options": [
      { "text": "가장 실용적이고 좋은 걸로 내가 결정한다.", "type": "D" },
      { "text": "디자인이 예쁘고 화려한 걸로 하자고 한다.", "type": "I" },
      { "text": "남들이 좋다는 걸로 따른다.", "type": "S" },
      { "text": "예산 범위 내에서 가성비가 제일 좋은 걸 찾는다.", "type": "C" }
    ]
  },
  {
    "id": 678,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "돈거래 때문에 친구와 사이가 멀어졌습니다.",
    "options": [
      { "text": "돈도 잃고 사람도 잃었네. 잊어버린다.", "type": "D" },
      { "text": "옛날 생각나서 마음이 아프고 그립다.", "type": "I" },
      { "text": "먼저 연락해서 화해할까 수십 번 고민한다.", "type": "S" },
      { "text": "무엇이 잘못되었는지 복기하며 같은 실수를 안 하려 한다.", "type": "C" }
    ]
  },
  {
    "id": 679,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "모임에 늦게 온 친구가 회비를 안 내려고 합니다.",
    "options": [
      { "text": "\"규칙은 규칙이다. 내라.\" 강하게 말한다.", "type": "D" },
      { "text": "\"야야, 늦게 왔으니 노래라도 한 곡 해!\" 넘어가 준다.", "type": "I" },
      { "text": "얼굴 붉히기 싫어서 총무가 알아서 하겠지 둔다.", "type": "S" },
      { "text": "늦게 오면 반액만 낸다는 규칙을 만들자고 한다.", "type": "C" }
    ]
  },
  {
    "id": 680,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구가 10만 원만 빌려달라고 합니다.",
    "options": [
      { "text": "\"여기 있다. 갚을 필요 없다.\" 쿨하게 준다.", "type": "D" },
      { "text": "\"술 한 잔 사면 빌려주지!\" 농담하며 준다.", "type": "I" },
      { "text": "작은 돈이니까 부담 없이 빌려준다.", "type": "S" },
      { "text": "지갑에 현금이 얼마나 있는지 세어보고 준다.", "type": "C" }
    ]
  },
  {
    "id": 681,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "동창회에서 옛 첫사랑을 만났습니다.",
    "options": [
      { "text": "당당하게 가서 \"잘 지냈냐?\" 악수를 청한다.", "type": "D" },
      { "text": "\"어머, 웬일이야!\" 호들갑 떨며 반가워한다.", "type": "I" },
      { "text": "가슴이 설레어 멀리서 쳐다만 본다.", "type": "S" },
      { "text": "많이 늙었네... 세월의 흐름을 실감한다.", "type": "C" }
    ]
  },
  {
    "id": 682,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀가 \"엄마/아버지, 친구한테 돈 빌려주지 마세요\"라고 잔소리합니다.",
    "options": [
      { "text": "\"내 돈 내가 쓴다는데 네가 뭔 상관이냐.\" 화를 낸다.", "type": "D" },
      { "text": "\"알았다, 알았어~\" 대답만 하고 몰래 빌려준다.", "type": "I" },
      { "text": "자식 걱정시키기 싫어서 알겠다고 한다.", "type": "S" },
      { "text": "왜 빌려줬는지 타당한 이유를 설명하려 한다.", "type": "C" }
    ]
  },
  {
    "id": 683,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "동창회 끝나고 집에 가는 길, 택시가 안 잡힙니다.",
    "options": [
      { "text": "도로 한가운데 나가서라도 기어이 잡는다.", "type": "D" },
      { "text": "친구들과 더 놀다가 천천히 가면 되지 생각한다.", "type": "I" },
      { "text": "자녀에게 데리러 와달라고 조심스레 전화한다.", "type": "S" },
      { "text": "콜택시 앱을 켜거나 버스 노선을 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 684,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구가 다단계(방문 판매) 물건을 사달라고 부탁합니다.",
    "options": [
      { "text": "\"난 그런 거 안 산다.\" 딱 잘라 거절한다.", "type": "D" },
      { "text": "친구 체면 봐서 싼 거 하나 사준다.", "type": "I" },
      { "text": "거절 못 하고 억지로 사주고 후회한다.", "type": "S" },
      { "text": "물건의 품질과 가격을 인터넷으로 비교해 본다.", "type": "C" }
    ]
  },
  {
    "id": 685,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "동창회에 너무 화려하게 입고 온 친구가 있습니다.",
    "options": [
      { "text": "\"너 어디 잔치 가냐?\" 농담 반 진담 반으로 핀잔준다.", "type": "D" },
      { "text": "\"와! 멋쟁이네!\" 칭찬해 준다.", "type": "I" },
      { "text": "속으로만 '좀 과하네' 생각하고 말하지 않는다.", "type": "S" },
      { "text": "옷 브랜드가 뭔지, 얼마짜리인지 궁금해한다.", "type": "C" }
    ]
  },
  {
    "id": 686,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "빌려준 돈을 받으려는데 계좌 번호가 기억나지 않습니다.",
    "options": [
      { "text": "은행에 전화하거나 통장을 찾아 빨리 해결한다.", "type": "D" },
      { "text": "\"나중에 생각나면 줄게~\" 하고 미룬다.", "type": "I" },
      { "text": "자녀에게 물어보거나 찾을 때까지 기다린다.", "type": "S" },
      { "text": "수첩에 적어둔 메모를 꼼꼼히 뒤져본다.", "type": "C" }
    ]
  },
  {
    "id": 687,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "모임에서 건배사를 시킵니다. 당신의 스타일은?",
    "options": [
      { "text": "\"자, 다들 잔 들어!\" 짧고 굵게 선창한다.", "type": "D" },
      { "text": "재미있는 유머나 긴 덕담으로 분위기를 띄운다.", "type": "I" },
      { "text": "\"그냥 건강하자.\" 수줍게 짧게 말한다.", "type": "S" },
      { "text": "미리 준비해 간 좋은 글귀를 읊는다.", "type": "C" }
    ]
  },
  {
    "id": 688,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구가 돈 대신 밥을 사겠다고 합니다.",
    "options": [
      { "text": "비싼 거 얻어먹어야 본전 뽑는다.", "type": "D" },
      { "text": "밥 먹으면서 이야기나 실컷 하자고 한다.", "type": "I" },
      { "text": "친구 형편 생각해서 싼 거 먹자고 한다.", "type": "S" },
      { "text": "밥값과 빌려준 돈의 차액을 계산해 본다.", "type": "C" }
    ]
  },
  {
    "id": 689,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "동창회 총무가 회계 보고를 엉성하게 합니다.",
    "options": [
      { "text": "\"제대로 좀 해라. 영수증 가져와.\" 따진다.", "type": "D" },
      { "text": "\"고생했는데 대충 넘어가자~\" 덮어준다.", "type": "I" },
      { "text": "찜찜하지만 나서서 말하지는 않는다.", "type": "S" },
      { "text": "계산이 맞는지 내가 다시 검산해 본다.", "type": "C" }
    ]
  },
  {
    "id": 690,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "돈을 안 갚는 친구와 길에서 마주쳤습니다.",
    "options": [
      { "text": "\"야! 내 돈 언제 줄 거야!\" 큰 소리로 부른다.", "type": "D" },
      { "text": "반가운 마음에 돈 이야기는 잊고 인사부터 한다.", "type": "I" },
      { "text": "민망해서 못 본 척 피해 간다.", "type": "S" },
      { "text": "어떻게 말할지 표정 관리부터 한다.", "type": "C" }
    ]
  },
  {
    "id": 691,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구들이 다음 모임 장소를 해외로 가자고 합니다.",
    "options": [
      { "text": "\"좋지! 추진해!\" 찬성하고 밀어붙인다.", "type": "D" },
      { "text": "\"와 신난다! 어디가 좋을까?\" 들떠서 이야기한다.", "type": "I" },
      { "text": "몸도 아프고 비용도 부담스러워 걱정된다.", "type": "S" },
      { "text": "회비로 감당이 되는지 예산을 계산한다.", "type": "C" }
    ]
  },
  {
    "id": 692,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "지갑을 안 가져왔는데 친구가 돈을 빌려달라고 할 때?",
    "options": [
      { "text": "\"없다.\" 짧게 대답한다.", "type": "D" },
      { "text": "\"어머 어떡해, 나도 지갑을 놓고 왔네.\" 같이 안타까워한다.", "type": "I" },
      { "text": "미안해서 집에 가서 가져다줄까 고민한다.", "type": "S" },
      { "text": "스마트폰 뱅킹으로 보내줄 수 있는지 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 693,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "모임에서 혼자 겉도는 친구가 보입니다.",
    "options": [
      { "text": "\"이리 와서 앉아!\" 챙겨준다.", "type": "D" },
      { "text": "옆에 가서 계속 말을 걸어 심심하지 않게 한다.", "type": "I" },
      { "text": "눈이 마주치면 조용히 미소 지어준다.", "type": "S" },
      { "text": "왜 저 친구는 혼자 있을까 이유를 관찰한다.", "type": "C" }
    ]
  },
  {
    "id": 694,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구가 꾼 돈을 갚으면서 고맙다는 말도 없습니다.",
    "options": [
      { "text": "\"사람이 고마운 줄을 알아야지.\" 한마디 한다.", "type": "D" },
      { "text": "섭섭해서 다른 친구들에게 흉을 본다.", "type": "I" },
      { "text": "받은 게 어디냐 싶어서 그냥 넘어간다.", "type": "S" },
      { "text": "다음부터는 거래하지 않겠다고 마음먹는다.", "type": "C" }
    ]
  },
  {
    "id": 695,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "동창회 밴드(SNS)에 가입하라고 합니다.",
    "options": [
      { "text": "귀찮지만 필요하다니 가입하고 눈팅만 한다.", "type": "D" },
      { "text": "가입하자마자 사진 올리고 댓글 달며 활동한다.", "type": "I" },
      { "text": "할 줄 몰라서 자녀에게 해달라고 부탁한다.", "type": "S" },
      { "text": "개인정보가 공개되는 건 아닌지 설정을 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 696,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "가장 친한 친구가 큰돈을 빌려달라고 사정합니다.",
    "options": [
      { "text": "친구라도 돈 거래는 안 된다고 선을 긋는다.", "type": "D" },
      { "text": "너무 마음이 아파서 있는 돈 없는 돈 다 끌어모은다.", "type": "I" },
      { "text": "배우자 몰래 빌려주고 끙끙 앓는다.", "type": "S" },
      { "text": "내가 감당할 수 있는 금액까지만 빌려준다.", "type": "C" }
    ]
  },
  {
    "id": 697,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "동창회 명부를 만드는데 내 정보를 적으라고 합니다.",
    "options": [
      { "text": "이름이랑 전화번호만 대충 적는다.", "type": "D" },
      { "text": "하는 일, 취미까지 자세히 적어 자기를 알린다.", "type": "I" },
      { "text": "남들이 적는 거 보고 비슷하게 적는다.", "type": "S" },
      { "text": "혹시 악용될까 봐 최소한의 정보만 정확히 적는다.", "type": "C" }
    ]
  },
  {
    "id": 698,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "빌려준 돈을 못 받을 것 같습니다. 포기할까요?",
    "options": [
      { "text": "어림없는 소리. 끝까지 받아낸다.", "type": "D" },
      { "text": "술 한 잔 먹고 잊어버리자. 친구가 더 중요하다.", "type": "I" },
      { "text": "속상해서 밤에 잠이 안 온다.", "type": "S" },
      { "text": "세금 공제나 손실 처리가 가능한지 알아본다.", "type": "C" }
    ]
  },
  {
    "id": 699,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "모임 날짜가 갑자기 변경되었습니다.",
    "options": [
      { "text": "\"왜 자꾸 바꿔!\" 짜증을 낸다.", "type": "D" },
      { "text": "\"그날도 시간 돼! 괜찮아!\" 긍정적으로 반응한다.", "type": "I" },
      { "text": "약속이 있었지만 모임에 맞추려고 내 약속을 바꾼다.", "type": "S" },
      { "text": "변경된 날짜와 장소를 달력에 다시 메모한다.", "type": "C" }
    ]
  },
  {
    "id": 700,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구가 곗돈을 들고 도망갔다는 소문이 돕니다.",
    "options": [
      { "text": "경찰에 신고하고 잡으러 다닌다.", "type": "D" },
      { "text": "\"설마 걔가 그랬겠어?\" 믿고 싶지 않다.", "type": "I" },
      { "text": "다른 친구들과 모여서 걱정만 한다.", "type": "S" },
      { "text": "사실 관계를 확인하고 피해 금액을 파악한다.", "type": "C" }
    ]
  },
  {
    "id": 701,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "모르는 번호로 '검찰청입니다. 계좌가 도용되었습니다'라는 보이스피싱 문자가 왔습니다.",
    "options": [
      { "text": "\"어디서 사기를 쳐!\" 화가 나서 당장 전화를 걸어 호통친다.", "type": "D" },
      { "text": "\"이거 진짜인가?\" 겁이 나서 주변 사람들에게 보여주며 물어본다.", "type": "I" },
      { "text": "혹시 자식들에게 피해가 갈까 봐 가슴이 두근거리고 걱정된다.", "type": "S" },
      { "text": "발신 번호를 확인하고 경찰청이나 은행에 전화해 사실인지 알아본다.", "type": "C" }
    ]
  },
  {
    "id": 702,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "TV에서 인기 있는 트로트 경연 프로그램을 보고 있습니다. 투표를 해야 한다면?",
    "options": [
      { "text": "무조건 1등 할 것 같은 힘 있고 노래 잘하는 가수에게 투표한다.", "type": "D" },
      { "text": "무대 매너 좋고 흥이 넘치는 가수에게 투표한다.", "type": "I" },
      { "text": "사연이 딱하고 고생 많이 한 것 같은 가수에게 마음이 가서 투표한다.", "type": "S" },
      { "text": "박자와 음정이 정확하고 기교가 좋은 실력파 가수에게 투표한다.", "type": "C" }
    ]
  },
  {
    "id": 703,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "의사 선생님이 \"건강을 위해 운동하고 식단 조절하셔야 합니다\"라고 했습니다.",
    "options": [
      { "text": "\"알겠습니다. 당장 오늘부터 합니다.\" 결심하고 바로 운동 나간다.", "type": "D" },
      { "text": "\"네~ 노력해 볼게요.\" 대답은 잘하지만 친구 만나서 맛있는 거 먹는다.", "type": "I" },
      { "text": "의사 선생님 말씀 안 들으면 큰일 날까 봐 시키는 대로 꼭 지킨다.", "type": "S" },
      { "text": "어떤 운동이 좋은지, 뭐를 먹지 말아야 하는지 꼼꼼히 적어 온다.", "type": "C" }
    ]
  },
  {
    "id": 704,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "경로당이나 복지관에서 노래 교실 수업을 듣습니다.",
    "options": [
      { "text": "제일 앞자리에 앉아서 강사님보다 더 크게 노래 부른다.", "type": "D" },
      { "text": "옆 사람과 박수 치고 어깨춤을 추며 신나게 즐긴다.", "type": "I" },
      { "text": "튀지 않게 뒷자리에 앉아서 조용히 따라 부른다.", "type": "S" },
      { "text": "가사 틀리지 않으려고 악보를 열심히 보며 부른다.", "type": "C" }
    ]
  },
  {
    "id": 705,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "매일 먹어야 하는 혈압약이나 당뇨약을 자꾸 깜빡합니다.",
    "options": [
      { "text": "약 먹는 게 귀찮아서 \"하루쯤 안 먹어도 괜찮아\" 하고 넘긴다.", "type": "D" },
      { "text": "배우자나 자녀에게 \"나 약 먹으라고 얘기 좀 해줘\" 부탁한다.", "type": "I" },
      { "text": "안 먹으면 큰 병 생길까 봐 눈에 잘 띄는 식탁 위에 둔다.", "type": "S" },
      { "text": "요일별 약통에 정리해두고 달력에 먹었는지 표시한다.", "type": "C" }
    ]
  },
  {
    "id": 706,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구들과 관광버스를 타고 효도 관광을 갑니다. 버스 안에서?",
    "options": [
      { "text": "마이크 잡고 분위기를 주도하거나 기사님에게 길을 참견한다.", "type": "D" },
      { "text": "일어 서서 춤추고 친구들에게 간식 나눠주느라 바쁘다.", "type": "I" },
      { "text": "멀미 날까 봐 조용히 자리에 앉아서 창밖을 구경한다.", "type": "S" },
      { "text": "도착 시간이 언제인지, 화장실은 어디인지 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 707,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀가 건강에 좋다며 비싼 영양제를 사 왔습니다.",
    "options": [
      { "text": "\"비싼 거 뭐 하러 샀냐!\" 하면서도 효과가 빠른지 묻는다.", "type": "D" },
      { "text": "\"역시 우리 딸/아들밖에 없네!\" 동네방네 자랑한다.", "type": "I" },
      { "text": "자식들 돈 쓰게 한 게 미안해서 아껴서 먹는다.", "type": "S" },
      { "text": "어디에 좋은 건지 성분표와 설명서를 돋보기 쓰고 읽어본다.", "type": "C" }
    ]
  },
  {
    "id": 708,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "공원 운동기구(산스장)를 쓰려는데 다른 사람이 오래 쓰고 안 비켜줍니다.",
    "options": [
      { "text": "\"거 좀 비킵시다! 혼자 전세 냈소?\" 한마디 한다.", "type": "D" },
      { "text": "\"운동 열심히 하시네~ 언제 끝나요?\" 말 걸며 눈치를 준다.", "type": "I" },
      { "text": "싸우기 싫어서 다른 빈 기구를 찾거나 그냥 기다린다.", "type": "S" },
      { "text": "저 사람이 얼마나 더 할지 시계를 보며 기다린다.", "type": "C" }
    ]
  },
  {
    "id": 709,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "시장에 가서 물건값을 깎을 때 당신의 모습은?",
    "options": [
      { "text": "\"비싸요! 천 원만 깎아줘요!\" 당당하게 요구한다.", "type": "D" },
      { "text": "\"사장님~ 인물도 좋으신데 좀 봐줘요~\" 애교 섞인 흥정을 한다.", "type": "I" },
      { "text": "깎아달라는 말이 안 나와서 그냥 달라는 대로 주고 산다.", "type": "S" },
      { "text": "다른 가게랑 가격을 비교해 보고 제일 싼 집에서 산다.", "type": "C" }
    ]
  },
  {
    "id": 710,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "지인이 \"돈 빌려주면 이자 많이 주는 곳이 있다\"며 투자를 권합니다.",
    "options": [
      { "text": "\"확실해? 내가 직접 확인해 보고 결정하겠네.\" 주도권을 쥔다.", "type": "D" },
      { "text": "\"그래? 누가 돈 벌었다던가?\" 귀가 솔깃해진다.", "type": "I" },
      { "text": "노후 자금 잃을까 봐 무서워서 \"나는 안 해\" 하고 거절한다.", "type": "S" },
      { "text": "사기일 수 있으니 회사가 어디인지 꼼꼼히 따져본다.", "type": "C" }
    ]
  },
  {
    "id": 711,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "식당에서 음식이 늦게 나옵니다.",
    "options": [
      { "text": "\"여기요! 주문한 지가 언젠데 아직도 안 나와요!\" 재촉한다.", "type": "D" },
      { "text": "\"배고파서 현기증 나요~ 빨리 주세요!\" 농담하며 재촉한다.", "type": "I" },
      { "text": "바빠서 그렇겠지 하고 배고파도 꾹 참고 기다린다.", "type": "S" },
      { "text": "주문이 들어갔는지 확인하고 얼마나 더 걸리는지 묻는다.", "type": "C" }
    ]
  },
  {
    "id": 712,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구들과 고스톱(화투)이나 윷놀이를 합니다.",
    "options": [
      { "text": "무조건 이겨야 한다. 지면 화나서 판을 엎기도 한다.", "type": "D" },
      { "text": "돈 잃어도 친구들이랑 떠들고 노는 게 재밌다.", "type": "I" },
      { "text": "남들이 하자는 대로 규칙에 맞춰서 조용히 친다.", "type": "S" },
      { "text": "점수 계산을 정확하게 하고 누가 속임수 쓰나 감시한다.", "type": "C" }
    ]
  },
  {
    "id": 713,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "TV 리모컨이 잘 작동하지 않습니다.",
    "options": [
      { "text": "리모컨을 탁탁 치거나 건전지를 뺐다 껴본다.", "type": "D" },
      { "text": "\"누구야, 리모컨 좀 고쳐줘라!\" 가족을 부른다.", "type": "I" },
      { "text": "고장 났나 보다 하고 그냥 나오는 채널을 본다.", "type": "S" },
      { "text": "건전지 방향이 맞는지 확인하고 새 건전지로 갈아본다.", "type": "C" }
    ]
  },
  {
    "id": 714,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀 집 비밀번호(도어락)가 기억나지 않습니다.",
    "options": [
      { "text": "생각나는 번호를 이것저것 빠르게 눌러본다.", "type": "D" },
      { "text": "지나가는 사람에게 전화 좀 빌려달라고 한다.", "type": "I" },
      { "text": "자녀가 올 때까지 문 앞에 쭈그리고 앉아 기다린다.", "type": "S" },
      { "text": "수첩에 적어둔 게 있는지 주머니를 뒤져본다.", "type": "C" }
    ]
  },
  {
    "id": 715,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "새로 이사 온 이웃을 엘리베이터에서 만났습니다.",
    "options": [
      { "text": "\"이사 왔소? 어디서 왔소?\" 먼저 꼬치꼬치 묻는다.", "type": "D" },
      { "text": "\"반가워요! 우리 잘 지내봐요~\" 웃으며 인사한다.", "type": "I" },
      { "text": "가볍게 눈인사만 하고 조용히 서 있는다.", "type": "S" },
      { "text": "어떤 사람인지 복장은 단정한지 슬쩍 관찰한다.", "type": "C" }
    ]
  },
  {
    "id": 716,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "무릎이나 허리가 아파서 병원에 갔습니다.",
    "options": [
      { "text": "\"제일 센 주사 놔줘요. 빨리 낫게.\" 의사에게 요구한다.", "type": "D" },
      { "text": "\"아이고 선생님, 나 아파 죽겠어~\" 엄살을 부린다.", "type": "I" },
      { "text": "의사 선생님이 하라는 검사는 군말 없이 다 한다.", "type": "S" },
      { "text": "내 증상이 언제부터 시작됐는지 날짜별로 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 717,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "노인정(경로당)에서 점심 메뉴를 정해야 합니다.",
    "options": [
      { "text": "\"오늘은 짜장면 시킵시다!\" 내가 먹고 싶은 걸로 정한다.", "type": "D" },
      { "text": "\"뭐 먹을까? 맛있는 거 먹자!\" 분위기를 띄운다.", "type": "I" },
      { "text": "\"아무거나 다 괜찮아요.\" 남들이 정하는 대로 따른다.", "type": "S" },
      { "text": "회비가 얼마나 남았는지 확인하고 가격 맞춰서 정한다.", "type": "C" }
    ]
  },
  {
    "id": 718,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀가 용돈을 보내주며 \"사고 싶은 거 사세요\"라고 합니다.",
    "options": [
      { "text": "평소 갖고 싶었던 비싼 옷이나 물건을 산다.", "type": "D" },
      { "text": "친구들 불러서 밥 한 끼 크게 쏜다.", "type": "I" },
      { "text": "자식 고생해서 번 돈인데... 못 쓰고 장판 밑에 둔다.", "type": "S" },
      { "text": "나중에 병원비로 쓰려고 통장에 저금한다.", "type": "C" }
    ]
  },
  {
    "id": 719,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "집안에 고장 난 물건(선풍기 등)이 있습니다.",
    "options": [
      { "text": "내가 고쳐보겠다며 분해하다가 안 되면 갖다 버린다.", "type": "D" },
      { "text": "자녀가 올 때까지 기다렸다가 고쳐달라고 한다.", "type": "I" },
      { "text": "고장 난 대로 대충 쓰거나 창고에 넣어둔다.", "type": "S" },
      { "text": "수리 기사를 부르거나 서비스 센터 전화번호를 찾는다.", "type": "C" }
    ]
  },
  {
    "id": 720,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구가 내 험담을 하고 다닌다는 소리를 들었습니다.",
    "options": [
      { "text": "당장 그 친구에게 전화해서 \"사실이냐\"고 따진다.", "type": "D" },
      { "text": "너무 속상해서 다른 친구들에게 하소연한다.", "type": "I" },
      { "text": "그럴 리가 없다며 애써 무시하고 참는다.", "type": "S" },
      { "text": "누가 그런 말을 전했는지 출처를 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 721,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "등산을 갔는데 갈림길이 나왔습니다.",
    "options": [
      { "text": "\"이쪽인 거 같아. 가자!\" 앞장서서 간다.", "type": "D" },
      { "text": "\"사람들 많이 가는 쪽으로 가자.\" 묻어간다.", "type": "I" },
      { "text": "다들 가는 쪽으로 조용히 따라간다.", "type": "S" },
      { "text": "이정표를 확인하거나 지도를 본다.", "type": "C" }
    ]
  },
  {
    "id": 722,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "나이가 들어서인지 깜빡깜빡 건망증이 심해집니다.",
    "options": [
      { "text": "\"치매 아니야?\" 걱정되어 바로 병원 검사를 예약한다.", "type": "D" },
      { "text": "\"나이 들면 다 그렇지 뭐~\" 허허 웃고 넘긴다.", "type": "I" },
      { "text": "가족들에게 짐이 될까 봐 혼자 속앓이한다.", "type": "S" },
      { "text": "치매 예방에 좋은 음식이나 운동을 찾아 실천한다.", "type": "C" }
    ]
  },
  {
    "id": 723,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "길에서 누군가 \"도를 아십니까?\"라며 말을 겁니다.",
    "options": [
      { "text": "\"비켜요! 바빠요!\" 소리치고 지나간다.", "type": "D" },
      { "text": "\"좋은 말씀이네요~\" 하면서 얘기 다 들어준다.", "type": "I" },
      { "text": "거절을 못 해서 우물쭈물하며 잡혀 있는다.", "type": "S" },
      { "text": "수상한 사람 같으니 눈도 안 마주치고 피한다.", "type": "C" }
    ]
  },
  {
    "id": 724,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "혼자 밥을 먹어야 하는데 밥하기가 귀찮습니다.",
    "options": [
      { "text": "나가서 사 먹거나 배달 시킨다.", "type": "D" },
      { "text": "친구 불러서 같이 밥 먹자고 한다.", "type": "I" },
      { "text": "대충 물 말아서 김치랑 먹는다.", "type": "S" },
      { "text": "냉장고에 있는 반찬을 꺼내서 영양 맞춰 먹는다.", "type": "C" }
    ]
  },
  {
    "id": 725,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주 돌잔치나 결혼식에 입고 갈 옷을 고릅니다.",
    "options": [
      { "text": "제일 비싸고 고급스러운 옷을 입는다.", "type": "D" },
      { "text": "화사하고 젊어 보이는 색깔 옷을 입는다.", "type": "I" },
      { "text": "가지고 있는 옷 중에 제일 점잖은 걸 입는다.", "type": "S" },
      { "text": "격식에 맞고 단정한 정장을 입는다.", "type": "C" }
    ]
  },
  {
    "id": 726,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "건강 검진을 받으러 갔는데 대기 시간이 깁니다.",
    "options": [
      { "text": "간호사에게 \"언제 내 차례냐\"고 자꾸 묻는다.", "type": "D" },
      { "text": "옆에 앉은 사람과 \"어디가 아파서 왔수?\" 수다 떤다.", "type": "I" },
      { "text": "이름 부를 때까지 조용히 TV 보며 기다린다.", "type": "S" },
      { "text": "혈압 재는 기계로 혈압을 재보며 시간을 보낸다.", "type": "C" }
    ]
  },
  {
    "id": 727,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀가 스마트폰 사용법을 알려주는데 자꾸 까먹습니다.",
    "options": [
      { "text": "\"아유 몰라! 안 해!\" 답답해서 화를 낸다.", "type": "D" },
      { "text": "\"내가 머리가 굳어서 그래~ 다시 알려줘~\" 웃는다.", "type": "I" },
      { "text": "자식 귀찮게 하는 것 같아 미안해서 그만둔다.", "type": "S" },
      { "text": "수첩에 순서대로 적어놓고 혼자 연습한다.", "type": "C" }
    ]
  },
  {
    "id": 728,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "밤에 잠이 안 와서 뒤척거립니다.",
    "options": [
      { "text": "일어나서 TV를 켜거나 집안일을 한다.", "type": "D" },
      { "text": "친구에게 전화를 걸어 수다를 떤다 (늦은 시간이라도).", "type": "I" },
      { "text": "가족들 깰까 봐 조용히 누워 있는다.", "type": "S" },
      { "text": "내일 할 일을 머릿속으로 정리하거나 라디오를 듣는다.", "type": "C" }
    ]
  },
  {
    "id": 729,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구들과 모임 회비를 걷는데 총무가 계산을 틀렸습니다.",
    "options": [
      { "text": "\"틀렸잖아! 다시 계산해!\" 바로 지적한다.", "type": "D" },
      { "text": "\"좋은 게 좋은 거지~\" 하고 넘어간다.", "type": "I" },
      { "text": "말하면 분위기 안 좋아질까 봐 가만히 있는다.", "type": "S" },
      { "text": "조용히 다시 계산해서 총무에게 알려준다.", "type": "C" }
    ]
  },
  {
    "id": 730,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "명절에 자녀들이 다 모였습니다. 당신의 역할은?",
    "options": [
      { "text": "\"너는 이거 하고, 너는 저거 해라.\" 지휘 감독한다.", "type": "D" },
      { "text": "손주들 재롱보며 웃고 떠드느라 바쁘다.", "type": "I" },
      { "text": "자식들 먹이려고 부엌에서 계속 음식만 한다.", "type": "S" },
      { "text": "제사상 차림이나 음식 간이 맞는지 점검한다.", "type": "C" }
    ]
  },
  {
    "id": 731,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "유튜브에서 '건강에 나쁜 음식' 영상을 봤습니다.",
    "options": [
      { "text": "냉장고에 있는 그 음식을 싹 다 갖다 버린다.", "type": "D" },
      { "text": "친구들에게 전화해서 \"그거 먹지 말래!\" 알려준다.", "type": "I" },
      { "text": "그동안 먹었던 게 걱정돼서 찜찜해한다.", "type": "S" },
      { "text": "진짜인지 아닌지 다른 영상도 찾아본다.", "type": "C" }
    ]
  },
  {
    "id": 732,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "버스나 지하철에서 젊은이가 자리를 양보해 줍니다.",
    "options": [
      { "text": "\"고맙네.\" 하고 당당하게 앉는다.", "type": "D" },
      { "text": "\"아이고, 복 받을 거야~\" 칭찬을 늘어놓으며 앉는다.", "type": "I" },
      { "text": "\"괜찮아요, 금방 내려요.\" 미안해서 사양한다.", "type": "S" },
      { "text": "예의 바른 청년이라 생각하며 고맙다고 짧게 인사한다.", "type": "C" }
    ]
  },
  {
    "id": 733,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀가 용돈을 적게 주거나 연락이 뜸해서 서운합니다.",
    "options": [
      { "text": "전화해서 \"너네는 부모도 없냐!\" 호통친다.", "type": "D" },
      { "text": "친구들 만나서 \"우리 애들은 바빠서 그래\" 하고 덮어준다.", "type": "I" },
      { "text": "사는 게 힘들겠지... 하고 혼자 삭힌다.", "type": "S" },
      { "text": "무슨 일이 있는지 넌지시 안부 문자를 보낸다.", "type": "C" }
    ]
  },
  {
    "id": 734,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "집 근처에 맛있는 식당(맛집)이 생겼습니다.",
    "options": [
      { "text": "가족들 다 데리고 가서 \"내가 쏜다!\" 한다.", "type": "D" },
      { "text": "친구들과 모임 장소로 잡아서 왁자지껄 먹는다.", "type": "I" },
      { "text": "가보고 싶지만 혼자 가기 그래서 구경만 한다.", "type": "S" },
      { "text": "가격이 얼마인지 메뉴판을 밖에서 확인해 본다.", "type": "C" }
    ]
  },
  {
    "id": 735,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "무인 주문기(키오스크) 앞에서 뒷사람이 기다리고 있습니다.",
    "options": [
      { "text": "뒷사람 신경 안 쓰고 내 할 일 한다. \"기다려요!\"", "type": "D" },
      { "text": "\"아이고, 내가 늦네~ 미안해요\" 웃으며 양해를 구한다.", "type": "I" },
      { "text": "등에서 식은땀이 나고 미안해서 그냥 주문 안 하고 비킨다.", "type": "S" },
      { "text": "당황하지 않고 화면 글씨를 차근차근 읽어본다.", "type": "C" }
    ]
  },
  {
    "id": 736,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구가 옥장판이나 건강 보조 기구를 사라고 권유합니다.",
    "options": [
      { "text": "\"안 사! 필요 없어!\" 딱 잘라 거절한다.", "type": "D" },
      { "text": "친구 체면 봐서 싼 거라도 하나 사준다.", "type": "I" },
      { "text": "거절하면 친구 사이 나빠질까 봐 억지로 산다.", "type": "S" },
      { "text": "인터넷으로 가격과 효능을 비교해 보고 결정한다.", "type": "C" }
    ]
  },
  {
    "id": 737,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "동네 노래자랑 대회에 나가보라는 권유를 받았습니다.",
    "options": [
      { "text": "\"상금은 내 거야!\" 자신 있게 나간다.", "type": "D" },
      { "text": "\"재밌겠네! 의상은 뭐 입지?\" 신나서 준비한다.", "type": "I" },
      { "text": "\"망신만 당할걸요...\" 부끄러워서 거절한다.", "type": "S" },
      { "text": "어떤 노래를 불러야 점수가 잘 나올지 선곡한다.", "type": "C" }
    ]
  },
  {
    "id": 738,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "비 오는 날, 외출해야 하는데 무릎이 쑤십니다.",
    "options": [
      { "text": "약속은 약속이다. 아파도 참고 나간다.", "type": "D" },
      { "text": "전화해서 \"비 오니까 다음에 보자\"고 미룬다.", "type": "I" },
      { "text": "집에 있는 게 편하긴 한데... 고민하다가 나간다.", "type": "S" },
      { "text": "일기예보를 보고 비가 언제 그치는지 확인한다.", "type": "C" }
    ]
  },
  {
    "id": 739,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "배우자가 잔소리를 합니다.",
    "options": [
      { "text": "\"그만 좀 해!\" 버럭 소리를 지른다.", "type": "D" },
      { "text": "\"알았어, 알았어~ 사랑해~\" 애교로 넘긴다.", "type": "I" },
      { "text": "듣기 싫어도 묵묵히 참고 듣는다.", "type": "S" },
      { "text": "뭐가 불만인지 조목조목 따져 묻는다.", "type": "C" }
    ]
  },
  {
    "id": 740,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀가 \"엄마/아버지, 운전 이제 그만하세요\"라고 합니다.",
    "options": [
      { "text": "\"내가 너보다 운전 잘한다!\" 면허 반납을 거부한다.", "type": "D" },
      { "text": "\"그럼 네가 기사 노릇 해주냐?\" 농담한다.", "type": "I" },
      { "text": "자식들 걱정시키기 싫어서 운전을 줄인다.", "type": "S" },
      { "text": "내 시력과 반응 속도가 운전하기에 적합한지 고민한다.", "type": "C" }
    ]
  },
  {
    "id": 741,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "친구들과 1박 2일 여행을 가기로 했습니다. 짐 쌀 때?",
    "options": [
      { "text": "갈아입을 옷만 간단히 챙긴다. \"가서 사면 돼.\"", "type": "D" },
      { "text": "화려한 등산복과 선글라스를 챙긴다.", "type": "I" },
      { "text": "혹시 몰라 비상약, 우산, 간식까지 바리바리 싼다.", "type": "S" },
      { "text": "체크리스트를 만들어서 빠진 것 없이 챙긴다.", "type": "C" }
    ]
  },
  {
    "id": 742,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "손주에게 줄 용돈 봉투를 준비합니다.",
    "options": [
      { "text": "오만 원권으로 두둑하게 넣어 준다.", "type": "D" },
      { "text": "봉투에 '사랑하는 손주에게'라고 예쁜 글씨를 쓴다.", "type": "I" },
      { "text": "많이 못 줘서 미안한 마음을 담아 준다.", "type": "S" },
      { "text": "신권으로 바꿔서 깨끗한 돈으로 준다.", "type": "C" }
    ]
  },
  {
    "id": 743,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "집 앞에 쓰레기를 무단 투기하는 사람을 봤습니다.",
    "options": [
      { "text": "\"거기다 버리면 안 돼!\" 창문을 열고 소리친다.", "type": "D" },
      { "text": "동네 사람들에게 \"누가 그랬대~\" 하고 흉본다.", "type": "I" },
      { "text": "싸움 날까 봐 무서워서 모른 척한다.", "type": "S" },
      { "text": "경비실이나 구청에 신고한다.", "type": "C" }
    ]
  },
  {
    "id": 744,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "오래된 앨범을 보며 옛날 생각에 잠깁니다.",
    "options": [
      { "text": "\"내가 왕년에는 잘 나갔지.\" 과거의 영광을 생각한다.", "type": "D" },
      { "text": "그때 그 친구들이 보고 싶어서 전화를 건다.", "type": "I" },
      { "text": "세월이 많이 흘렀구나 싶어 마음이 뭉클하다.", "type": "S" },
      { "text": "사진 속 날짜와 장소를 확인하며 기억을 더듬는다.", "type": "C" }
    ]
  },
  {
    "id": 745,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "마트에서 물건을 샀는데 계산이 잘못된 것 같습니다.",
    "options": [
      { "text": "당장 가서 \"이거 틀렸잖아!\" 따진다.", "type": "D" },
      { "text": "\"아가씨, 이거 좀 이상한데?\" 부드럽게 묻는다.", "type": "I" },
      { "text": "큰돈 아니니 귀찮아서 그냥 집에 간다.", "type": "S" },
      { "text": "영수증을 하나하나 대조해 보고 확인하러 간다.", "type": "C" }
    ]
  },
  {
    "id": 746,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "갑자기 정전이 되어 집이 깜깜해졌습니다.",
    "options": [
      { "text": "두꺼비집(차단기)을 찾아서 올려본다.", "type": "D" },
      { "text": "\"누구 없어요?\" 무서워서 소리친다.", "type": "I" },
      { "text": "가만히 앉아서 불이 들어올 때까지 기다린다.", "type": "S" },
      { "text": "손전등과 양초 위치를 침착하게 찾는다.", "type": "C" }
    ]
  },
  {
    "id": 747,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "TV 뉴스에서 안 좋은 소식(전쟁, 재난)이 나옵니다.",
    "options": [
      { "text": "\"정치를 똑바로 해야지!\" 화를 낸다.", "type": "D" },
      { "text": "\"어머, 어떡해... 불쌍해서 어쩌나.\" 감정이입 한다.", "type": "I" },
      { "text": "무서워서 채널을 돌려버린다.", "type": "S" },
      { "text": "왜 저런 일이 생겼는지 원인을 분석하며 본다.", "type": "C" }
    ]
  },
  {
    "id": 748,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "건강을 위해 새로운 운동(수영, 요가 등)을 배우려 합니다.",
    "options": [
      { "text": "빨리 배워서 남들보다 잘하고 싶다.", "type": "D" },
      { "text": "가서 새로운 친구들 사귈 생각에 설렌다.", "type": "I" },
      { "text": "내가 잘 따라 할 수 있을지 걱정된다.", "type": "S" },
      { "text": "준비물과 수업 시간을 꼼꼼히 챙긴다.", "type": "C" }
    ]
  },
  {
    "id": 749,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "자녀 부부와 외식을 하러 가는데 메뉴를 정하라고 합니다.",
    "options": [
      { "text": "\"갈비 먹으러 가자.\" 내가 좋아하는 걸로 딱 정한다.", "type": "D" },
      { "text": "\"너희 먹고 싶은 거 먹자~ 난 다 좋아!\"", "type": "I" },
      { "text": "돈 많이 나오는 거 말고 싼 걸로 먹자고 한다.", "type": "S" },
      { "text": "손주도 먹을 수 있고 주차도 편한 곳을 추천한다.", "type": "C" }
    ]
  },
  {
    "id": 750,
    "category": "senior_60plus",
    "target_age_min": 60,
    "target_age_max": 99,
    "question": "인생의 마지막을 정리하는 '버킷리스트(소원 목록)'를 쓴다면?",
    "options": [
      { "text": "멋진 여행 가기, 큰돈 기부하기.", "type": "D" },
      { "text": "친구들과 파티하기, 자서전 쓰기.", "type": "I" },
      { "text": "가족들과 오손도손 밥 한 끼 먹기.", "type": "S" },
      { "text": "재산 정리하기, 유언장 써두기.", "type": "C" }
    ]
  },
  {
    "id": 751,
    "category": "general",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "새로운 반이나 학원에 처음 갔을 때, 너의 모습은?",
    "options": [
      { "text": "가장 눈에 띄는 자리에 앉거나, 반장 선거에 나갈 생각을 한다.", "type": "D" },
      { "text": "옆 친구에게 먼저 말을 걸고 장난치며 금세 친해진다.", "type": "I" },
      { "text": "튀지 않는 자리에 조용히 앉아 전체적인 분위기를 살핀다.", "type": "S" },
      { "text": "게시판에 붙은 공지사항이나 시간표를 꼼꼼히 읽어본다.", "type": "C" }
    ]
  },
  {
    "id": 752,
    "category": "school_work",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "조별 과제(팀플) 중 아무것도 안 하는 '프리라이더'가 있다. 대처법은?",
    "options": [
      { "text": "단톡방에서 이름 언급하며 '언제까지 하실래요?'라고 딱 잘라 말한다.", "type": "D" },
      { "text": "분위기 싸해지는 게 싫어서 좋게 좋게 타이르며 참여를 유도한다.", "type": "I" },
      { "text": "싸우기 싫어서 그냥 내가 그 사람 몫까지 맡아서 한다.", "type": "S" },
      { "text": "참여 안 한 증거(카톡 캡처)를 모아 선생님께 팩트로 알린다.", "type": "C" }
    ]
  },
  {
    "id": 753,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "약속 장소에 친구가 연락도 없이 30분째 늦고 있다. 너의 속마음은?",
    "options": [
      { "text": "내 시간을 낭비하게 하다니... 오면 진짜 화내야겠다.", "type": "D" },
      { "text": "심심하니까 다른 친구한테 전화하거나 틱톡/릴스 보면서 기다린다.", "type": "I" },
      { "text": "오다가 무슨 사고라도 난 건 아닌지 걱정하며 계속 기다린다.", "type": "S" },
      { "text": "30분 늦었으니까 밥 먹는 시간 줄이고 영화 시간 다시 계산한다.", "type": "C" }
    ]
  },
  {
    "id": 754,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구들과 놀러 갈 계획을 짤 때 너의 스타일은?",
    "options": [
      { "text": "'일단 홍대 가자!' 큰 목적지만 정하고 가서 끌리는 대로 한다.", "type": "D" },
      { "text": "맛집, 인생네컷, 노래방 등 재밌고 핫한 곳 위주로 알아본다.", "type": "I" },
      { "text": "친구들이 가자고 하는 곳이면 다 좋아. 불만 없이 따른다.", "type": "S" },
      { "text": "지하철 출구, 이동 시간, 1인당 비용까지 꼼꼼하게 검색해서 짠다.", "type": "C" }
    ]
  },
  {
    "id": 755,
    "category": "school_work",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "시험 기간, 독서실이나 책상 위 너의 자리는?",
    "options": [
      { "text": "필요한 책 딱 한 권! 핵심만 빠르게 보고 끝낼 준비가 돼 있다.", "type": "D" },
      { "text": "간식, 쪽지, 귀여운 필통... 공부보다 딴짓 할 물건이 많다.", "type": "I" },
      { "text": "좋아하는 연예인 사진이나 편안한 물건을 둬서 안정감을 느낀다.", "type": "S" },
      { "text": "형광펜, 교과서, 노트가 각 맞춰 정리되어 있고 스톱워치가 있다.", "type": "C" }
    ]
  },
  {
    "id": 756,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구와 말다툼을 했다. 너의 해결 방식은?",
    "options": [
      { "text": "누가 잘못했는지 따지고, '사과해'라고 말해서 빨리 끝낸다.", "type": "D" },
      { "text": "어색한 분위기를 못 견뎌서 장난치거나 웃긴 짤을 보내 푼다.", "type": "I" },
      { "text": "친구가 화 풀릴 때까지 기다려주거나 내가 먼저 미안하다고 한다.", "type": "S" },
      { "text": "내가 왜 화났는지 논리적으로 설명해서 이해시키려 한다.", "type": "C" }
    ]
  },
  {
    "id": 757,
    "category": "general",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "용돈으로 물건을 살 때 너의 기준은?",
    "options": [
      { "text": "내가 사고 싶은 거면 고민 없이 바로 산다.", "type": "D" },
      { "text": "요즘 유행하거나 디자인이 예뻐서 친구들한테 자랑할 만한 것.", "type": "I" },
      { "text": "원래 쓰던 브랜드나 무난하고 편안한 것을 고른다.", "type": "S" },
      { "text": "가격 대비 성능(가성비), 성분, 리뷰를 다 비교해 보고 산다.", "type": "C" }
    ]
  },
  {
    "id": 758,
    "category": "school_work",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "시험 점수가 생각보다 낮게 나왔다. 너의 반응은?",
    "options": [
      { "text": "화가 난다. 다음엔 무조건 더 잘해서 만회하겠다고 다짐한다.", "type": "D" },
      { "text": "우울하니까 친구들이랑 코노(노래방) 가서 스트레스 푼다.", "type": "I" },
      { "text": "'나 머리가 나쁜가...' 자책하며 조용히 슬퍼한다.", "type": "S" },
      { "text": "어느 문제에서 틀렸는지 오답 노트를 만들고 분석한다.", "type": "C" }
    ]
  },
  {
    "id": 759,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구가 고민 상담을 해올 때, 너의 반응은?",
    "options": [
      { "text": "\"그래서 결론이 뭐야? 그냥 헤어져.\" (해결책 제시)", "type": "D" },
      { "text": "\"헐 대박... 진짜? 걔 미친 거 아냐?\" (격한 리액션과 공감)", "type": "I" },
      { "text": "\"많이 힘들었겠다... 내가 옆에 있어 줄게.\" (따뜻한 위로)", "type": "S" },
      { "text": "\"근데 그 상황에서 네가 먼저 실수한 건 없어?\" (사실 확인)", "type": "C" }
    ]
  },
  {
    "id": 760,
    "category": "school_work",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "동아리 기장(리더)을 맡게 되었다. 너의 스타일은?",
    "options": [
      { "text": "카리스마 있게 애들을 이끌며, 빠른 결정으로 성과를 낸다.", "type": "D" },
      { "text": "분위기 메이커로서 회식도 하고 다 같이 친해지게 만든다.", "type": "I" },
      { "text": "소외되는 부원 없이 한 명 한 명 챙기며 배려한다.", "type": "S" },
      { "text": "회칙과 계획을 정확히 세우고, 규칙대로 운영한다.", "type": "C" }
    ]
  },
  {
    "id": 761,
    "category": "general",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "네가 가장 스트레스받는 상황은?",
    "options": [
      { "text": "내 맘대로 못 하게 하거나, 시간 낭비하는 짓을 시킬 때.", "type": "D" },
      { "text": "친구들 사이에서 왕따 당하거나, 너무 엄숙한 분위기일 때.", "type": "I" },
      { "text": "갑자기 계획이 바뀌거나 친구들끼리 싸울 때.", "type": "S" },
      { "text": "정보가 틀렸거나, 규칙 없이 대충대충 할 때.", "type": "C" }
    ]
  },
  {
    "id": 762,
    "category": "general",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "식당에서 주문한 음식이 잘못 나왔다. 너의 행동은?",
    "options": [
      { "text": "즉시 직원을 불러 \"이거 안 시켰는데요\" 하고 바꿔달라고 한다.", "type": "D" },
      { "text": "웃으면서 \"이것도 맛있겠네요\" 하고 그냥 먹거나 좋게 말한다.", "type": "I" },
      { "text": "불편하지만 같이 온 사람 분위기 깰까 봐 그냥 먹는다.", "type": "S" },
      { "text": "영수증 확인하고 우리가 주문한 거랑 뭐가 다른지 짚어준다.", "type": "C" }
    ]
  },
  {
    "id": 763,
    "category": "general",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "너에게 '성공'이란?",
    "options": [
      { "text": "남들이 다 인정하는 1등이 되는 것. 이기는 것.", "type": "D" },
      { "text": "인기 많고 유명해지는 것. 인플루언서처럼 사는 것.", "type": "I" },
      { "text": "걱정 없이 편안하고 안정적으로 사는 것.", "type": "S" },
      { "text": "내 분야에서 완벽한 전문가가 되는 것.", "type": "C" }
    ]
  },
  {
    "id": 764,
    "category": "school_work",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "갑자기 학원 보충 수업이 잡혔다. 너의 반응은?",
    "options": [
      { "text": "짜증나지만, 빨리 끝내버리고 집에 가자.", "type": "D" },
      { "text": "친구들도 다 남는 거니까 끝나고 같이 떡볶이 먹으러 가야지.", "type": "I" },
      { "text": "어쩔 수 없지... 선생님이 하라니까 그냥 한다.", "type": "S" },
      { "text": "왜 보충을 해야 하는지 따져보고, 비효율적이면 불만이다.", "type": "C" }
    ]
  },
  {
    "id": 765,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구 생일 선물을 고를 때 가장 중요한 건?",
    "options": [
      { "text": "가격 떠나서 친구의 '급'을 높여줄 수 있는 폼나는 것.", "type": "D" },
      { "text": "서프라이즈 이벤트와 함께 줄 수 있는 재밌고 화려한 것.", "type": "I" },
      { "text": "친구가 평소에 필요하다고 지나가듯 말했던 그 물건.", "type": "S" },
      { "text": "실용적이고 튼튼한 거. 가성비 좋고 오래 쓸 수 있는 것.", "type": "C" }
    ]
  },
  {
    "id": 766,
    "category": "general",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구들과 대화할 때 너의 스타일은?",
    "options": [
      { "text": "결론부터 말하고, 내 주장을 확실하게 말한다.", "type": "D" },
      { "text": "손동작을 많이 쓰고, 성대모사도 하면서 재밌게 말한다.", "type": "I" },
      { "text": "주로 듣는 편이고, 맞장구(리액션)를 잘 쳐준다.", "type": "S" },
      { "text": "단어를 신중하게 고르고, 정확한 사실만 말한다.", "type": "C" }
    ]
  },
  {
    "id": 767,
    "category": "school_work",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "회의 중에 내 의견과 반대되는 주장이 나왔다.",
    "options": [
      { "text": "바로 \"그건 아니지\"라고 반박하고 내 말이 맞다고 주장한다.", "type": "D" },
      { "text": "분위기 싸해지지 않게 웃으면서 부드럽게 설득한다.", "type": "I" },
      { "text": "상대방 말을 끝까지 듣고, 조율할 방법을 찾는다.", "type": "S" },
      { "text": "상대방 말의 논리적 오류를 찾아서 팩트로 반박한다.", "type": "C" }
    ]
  },
  {
    "id": 768,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친한 친구가 다른 애랑 더 친하게 지내면 질투가 난다?",
    "options": [
      { "text": "내 거 건드리는 거 싫음. 내 베프는 나랑만 놀아야 함.", "type": "D" },
      { "text": "\"야 너 걔랑 뭐 했어?\" 삐진 티 팍팍 내면서 서운해한다.", "type": "I" },
      { "text": "속으로만 서운해하고 겉으로는 티 안 낸다.", "type": "S" },
      { "text": "질투보다는 걔랑 왜 친해졌는지 이유를 생각해 본다.", "type": "C" }
    ]
  },
  {
    "id": 769,
    "category": "general",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "가장 듣고 싶은 칭찬은?",
    "options": [
      { "text": "\"와 너 진짜 능력 쩐다. 너 없으면 안 돼.\"", "type": "D" },
      { "text": "\"너랑 있으면 진짜 재밌어! 넌 핵인싸야.\"", "type": "I" },
      { "text": "\"넌 참 착해. 항상 도와줘서 고마워.\"", "type": "S" },
      { "text": "\"넌 진짜 똑똑하다. 어떻게 그런 걸 다 알아?\"", "type": "C" }
    ]
  },
  {
    "id": 770,
    "category": "school_work",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "학교 규칙이나 숙제 가이드라인을 대하는 태도는?",
    "options": [
      { "text": "필요하면 깰 수도 있지. 결과만 좋으면 장땡.", "type": "D" },
      { "text": "규칙보다는 융통성 있게 상황 봐가면서 하는 게 좋다.", "type": "I" },
      { "text": "정해진 규칙대로 하는 게 마음 편하고 안전하다.", "type": "S" },
      { "text": "규칙은 반드시 지켜야 한다. 매뉴얼대로 하는 게 효율적이다.", "type": "C" }
    ]
  },
  {
    "id": 771,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "단톡방에서 너의 포지션은?",
    "options": [
      { "text": "약속 시간, 장소 딱 정하고 공지 때리는 역할.", "type": "D" },
      { "text": "ㅋㅋㅋㅋ, 짤방, 이모티콘 보내면서 분위기 띄우는 역할.", "type": "I" },
      { "text": "주로 읽기만 하거나, 누가 물어보면 대답해 주는 역할.", "type": "S" },
      { "text": "약속 장소 링크, 지도, 투표 기능 올리는 정보 공유 역할.", "type": "C" }
    ]
  },
  {
    "id": 772,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "알바 면접에서 어필하고 싶은 너의 강점은?",
    "options": [
      { "text": "\"일머리가 좋아서 시키지 않아도 알아서 잘합니다.\"", "type": "D" },
      { "text": "\"성격이 밝아서 손님들이랑 금방 친해집니다.\"", "type": "I" },
      { "text": "\"지각 안 하고 성실하게 오래 일할 수 있습니다.\"", "type": "S" },
      { "text": "\"실수 없이 정확하고 꼼꼼하게 일 처리 합니다.\"", "type": "C" }
    ]
  },
  {
    "id": 773,
    "category": "general",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "위험하지만 성공하면 대박인 기회가 왔다. 선택은?",
    "options": [
      { "text": "무조건 도전! 실패해도 해보는 게 낫다.", "type": "D" },
      { "text": "재밌을 것 같은데? 느낌 오면 일단 해본다.", "type": "I" },
      { "text": "지금 가진 것도 잃을 수 있으니 안 한다.", "type": "S" },
      { "text": "성공 확률과 실패 확률을 계산해 보고 결정한다.", "type": "C" }
    ]
  },
  {
    "id": 774,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구가 \"나 살찐 거 같아?\"라고 물어보면?",
    "options": [
      { "text": "\"좀 찐 거 같네. 내일부터 운동 같이 하자.\" (솔직+해결)", "type": "D" },
      { "text": "\"아니야! 너 지금도 완전 예뻐!\" (무조건 칭찬)", "type": "I" },
      { "text": "\"음... 잘 모르겠는데? 떡볶이 먹으러 갈래?\" (회피)", "type": "S" },
      { "text": "\"몸무게 재봤어? 저번보다 늘었어?\" (사실 확인)", "type": "C" }
    ]
  },
  {
    "id": 775,
    "category": "school_work",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "발표 수행평가 준비할 때 가장 신경 쓰는 건?",
    "options": [
      { "text": "애들을 휘어잡는 발표력과 임팩트 있는 결론.", "type": "D" },
      { "text": "지루하지 않게 재밌는 사진 넣고 웃기게 하는 것.", "type": "I" },
      { "text": "조원들끼리 싸우지 않고 사이좋게 준비하는 것.", "type": "S" },
      { "text": "자료 출처가 정확한지, PPT 오타는 없는지 확인.", "type": "C" }
    ]
  },
  {
    "id": 776,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구에게 빌려준 돈을 받아야 할 때?",
    "options": [
      { "text": "\"야, 저번에 빌려간 만 원 지금 보내줘.\" (직설적)", "type": "D" },
      { "text": "\"우리 마라탕 먹으러 갈래? 네가 쏘는 걸로 퉁칠까?\" (돌려 말하기)", "type": "I" },
      { "text": "말하기 미안해서 친구가 기억할 때까지 끙끙 앓는다.", "type": "S" },
      { "text": "계좌번호랑 금액을 카톡으로 딱 남겨둔다.", "type": "C" }
    ]
  },
  {
    "id": 777,
    "category": "general",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "너의 단점에 가까운 모습은?",
    "options": [
      { "text": "성격이 급해서 남의 말 끊고 내 말만 할 때가 있다.", "type": "D" },
      { "text": "말이 너무 많고, 덜렁거려서 중요한 걸 놓친다.", "type": "I" },
      { "text": "거절을 못 해서 손해 볼 때가 많다.", "type": "S" },
      { "text": "너무 따지고 들어서 친구들이 피곤해한다.", "type": "C" }
    ]
  },
  {
    "id": 778,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "미래 직업을 고를 때 가장 중요한 건?",
    "options": [
      { "text": "돈 많이 벌고, 남들이 우러러보는 성공한 직업.", "type": "D" },
      { "text": "재밌고 사람들을 많이 만나는 인기 있는 직업.", "type": "I" },
      { "text": "잘릴 걱정 없고 편안하게 일할 수 있는 안정적인 직업.", "type": "S" },
      { "text": "내 지식을 발휘할 수 있는 전문적인 직업.", "type": "C" }
    ]
  },
  {
    "id": 779,
    "category": "general",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "인스타(SNS)를 하는 주된 이유는?",
    "options": [
      { "text": "나의 멋진 모습이나 성공한 걸 자랑하고 싶어서.", "type": "D" },
      { "text": "친구들이랑 소통하고 핫플 다녀온 거 보여주려고.", "type": "I" },
      { "text": "친한 친구들 소식 보고 좋아요 눌러주려고.", "type": "S" },
      { "text": "맛집 정보나 유용한 꿀팁 저장해 두려고.", "type": "C" }
    ]
  },
  {
    "id": 780,
    "category": "school_work",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구가 숙제를 안 해와서 보여달라고 한다.",
    "options": [
      { "text": "\"보여줄게. 대신 매점 빵 네가 사.\" (거래)", "type": "D" },
      { "text": "\"여기 있어! 빨리 베껴!\" (흔쾌히 줌)", "type": "I" },
      { "text": "선생님한테 걸릴까 봐 무서운데 거절은 못 한다.", "type": "S" },
      { "text": "\"내가 쓴 게 정답이 아닐 수도 있는데...\" 하며 주저한다.", "type": "C" }
    ]
  },
  {
    "id": 781,
    "category": "general",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "갑자기 학원이 휴강돼서 자유시간이 생겼다!",
    "options": [
      { "text": "평소 하고 싶었던 운동이나 게임 레벨업을 한다.", "type": "D" },
      { "text": "친구들한테 전화해서 \"놀 사람?\" 하고 번개 모임을 만든다.", "type": "I" },
      { "text": "집에 가서 침대에 눕는다. 집이 최고다.", "type": "S" },
      { "text": "밀린 숙제를 하거나 읽고 싶던 책을 읽는다.", "type": "C" }
    ]
  },
  {
    "id": 782,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구를 '손절'하게 되는 결정적 이유는?",
    "options": [
      { "text": "나를 무시하거나 자존심 건드리는 말을 할 때.", "type": "D" },
      { "text": "나한테 관심 없고 반응이 시큰둥할 때.", "type": "I" },
      { "text": "맨날 싸우고 감정 소모하는 게 지칠 때.", "type": "S" },
      { "text": "약속을 밥 먹듯이 어기고 거짓말할 때.", "type": "C" }
    ]
  },
  {
    "id": 783,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "알바 중 손님이 메뉴에 없는 이상한 걸 요구한다.",
    "options": [
      { "text": "\"그건 안 됩니다.\" 단호하게 거절한다.", "type": "D" },
      { "text": "\"오 신기한 조합이네요? 한번 해드릴게요!\" 융통성을 발휘한다.", "type": "I" },
      { "text": "\"사장님께 여쭤볼게요...\" 곤란해하며 책임을 넘긴다.", "type": "S" },
      { "text": "\"규정상 어렵습니다.\" 매뉴얼대로 안내한다.", "type": "C" }
    ]
  },
  {
    "id": 784,
    "category": "general",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "복잡한 문제를 풀어야 할 때 너의 방식은?",
    "options": [
      { "text": "핵심만 딱 파악해서 빨리빨리 푼다.", "type": "D" },
      { "text": "친구들한테 물어보고 다 같이 머리 맞대고 푼다.", "type": "I" },
      { "text": "선생님이 알려주신 방법 그대로 차근차근 푼다.", "type": "S" },
      { "text": "원리를 파악하고 논리적으로 따져가며 푼다.", "type": "C" }
    ]
  },
  {
    "id": 785,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "새 학기 첫날, 마음에 드는 친구를 발견했다.",
    "options": [
      { "text": "가서 \"안녕? 나랑 밥 먹자.\" 하고 당당하게 말 건다.", "type": "D" },
      { "text": "재밌는 농담 던지면서 웃게 만든다.", "type": "I" },
      { "text": "눈 마주치면 살짝 웃어주고 말이 통할 때까지 기다린다.", "type": "S" },
      { "text": "어떤 애인지 며칠 동안 관찰하고 파악한다.", "type": "C" }
    ]
  },
  {
    "id": 786,
    "category": "school_work",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "선생님이 기분이 안 좋아 보이신다.",
    "options": [
      { "text": "상관없음. 내 할 일만 잘하면 됨.", "type": "D" },
      { "text": "\"쌤 오늘 무슨 일 있으세요?\" 애교 부리며 기분 풀어드린다.", "type": "I" },
      { "text": "혹시 나 때문에 화나셨나? 눈치 보며 조용히 있는다.", "type": "S" },
      { "text": "감정적인 태도는 별로라고 생각하며 거리를 둔다.", "type": "C" }
    ]
  },
  {
    "id": 787,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구들이 점심 메뉴를 못 정하고 있다.",
    "options": [
      { "text": "\"그럼 마라탕 먹자. 가자.\" 내가 정하고 끌고 간다.", "type": "D" },
      { "text": "\"떡볶이? 피자? 햄버거? 난 다 좋아!\" 계속 메뉴만 던진다.", "type": "I" },
      { "text": "누군가 정할 때까지 조용히 있거나 \"난 아무거나...\"라고 한다.", "type": "S" },
      { "text": "가까운 식당 별점이랑 웨이팅 시간 검색해서 보여준다.", "type": "C" }
    ]
  },
  {
    "id": 788,
    "category": "general",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "너의 롤모델에 가까운 사람은?",
    "options": [
      { "text": "세상을 바꾸는 혁신적이고 카리스마 있는 리더.", "type": "D" },
      { "text": "모두에게 사랑받고 소통 잘하는 인기 유튜버/연예인.", "type": "I" },
      { "text": "남을 돕고 헌신하는 평화로운 사람.", "type": "S" },
      { "text": "천재적인 두뇌로 문제를 해결하는 과학자나 탐정.", "type": "C" }
    ]
  },
  {
    "id": 789,
    "category": "school_work",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "시험 5분 전, 너의 모습은?",
    "options": [
      { "text": "시험지 받자마자 풀 수 있게 핵심 키워드만 외운다.", "type": "D" },
      { "text": "\"아 망했다 공부 하나도 안 했어\" 엄살떨며 긴장 푼다.", "type": "I" },
      { "text": "조용히 자리에 앉아 마음을 가다듬고 심호흡한다.", "type": "S" },
      { "text": "오답 노트나 요약 정리본을 마지막까지 꼼꼼히 본다.", "type": "C" }
    ]
  },
  {
    "id": 790,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구에게 카톡을 보냈는데 읽씹(읽고 답장 없음) 당했다.",
    "options": [
      { "text": "급한 용건이면 전화한다. 안 받으면 '뭐하냐'고 다시 보낸다.", "type": "D" },
      { "text": "\"왜 안 보지? 나한테 삐졌나?\" 온갖 상상을 하며 불안해한다.", "type": "I" },
      { "text": "바쁜가 보다. 나중에 답장 오겠지 하고 기다린다.", "type": "S" },
      { "text": "언제 접속했는지 확인하거나 그냥 잊고 할 일 한다.", "type": "C" }
    ]
  },
  {
    "id": 791,
    "category": "school_work",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "수업 시간에 선생님 말씀이 틀린 것 같다.",
    "options": [
      { "text": "손 들고 \"쌤, 그거 틀린 거 같은데요?\"라고 바로 말한다.", "type": "D" },
      { "text": "옆 친구한테 귓속말로 \"야 저거 틀리지 않았냐?\" 수군댄다.", "type": "I" },
      { "text": "내가 잘못 알았겠지 싶어서 그냥 필기하고 넘어간다.", "type": "S" },
      { "text": "교과서 찾아보고 확실한 근거를 가지고 수업 후에 질문한다.", "type": "C" }
    ]
  },
  {
    "id": 792,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "네가 생각하는 '진정한 친구'란?",
    "options": [
      { "text": "내가 힘들 때 확실한 해결책을 주고 자극을 주는 친구.", "type": "D" },
      { "text": "만나면 시간 가는 줄 모르고 웃게 해주는 재밌는 친구.", "type": "I" },
      { "text": "내 말을 다 들어주고 언제나 내 편이 되어주는 친구.", "type": "S" },
      { "text": "약속 잘 지키고 배울 점이 있는 똑똑한 친구.", "type": "C" }
    ]
  },
  {
    "id": 793,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "노래방에 갔을 때 너의 모습은?",
    "options": [
      { "text": "내가 부르고 싶은 노래는 남들이 뭐라든 예약하고 부른다.", "type": "D" },
      { "text": "탬버린 흔들고 춤추며 분위기 메이커 역할을 한다.", "type": "I" },
      { "text": "친구들이 노래 부를 때 박수 쳐주고 호응해 준다.", "type": "S" },
      { "text": "남들이 안 부르는 노래를 선곡하거나, 내 차례를 조용히 기다린다.", "type": "C" }
    ]
  },
  {
    "id": 794,
    "category": "school_work",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "팀플(조별 과제)에서 선호하는 역할은?",
    "options": [
      { "text": "조장. 내가 주도해서 빨리 끝내는 게 속 편하다.", "type": "D" },
      { "text": "발표. 사람들 앞에 서는 게 좋고 말하는 건 자신 있다.", "type": "I" },
      { "text": "자료 조사. 남들 눈에 안 띄고 묵묵히 돕는 게 좋다.", "type": "S" },
      { "text": "PPT 제작. 디자인과 오타를 완벽하게 잡는다.", "type": "C" }
    ]
  },
  {
    "id": 795,
    "category": "general",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "10년 뒤, 네가 꿈꾸는 미래 모습은?",
    "options": [
      { "text": "내 회사를 차리거나 높은 자리에 올라가서 성공한 모습.", "type": "D" },
      { "text": "인맥 넓고 어디 가나 환영받는 인기 있는 모습.", "type": "I" },
      { "text": "안정적인 직장에서 가족들과 행복하게 사는 모습.", "type": "S" },
      { "text": "내 분야에서 대체 불가능한 전문가가 되어 인정받는 모습.", "type": "C" }
    ]
  },
  {
    "id": 796,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구들과 게임(롤, 오버워치 등)을 하는데 계속 진다. 반응은?",
    "options": [
      { "text": "\"아 똑바로 안 하냐?\" 못하는 친구를 지적하며 승부욕을 불태운다.", "type": "D" },
      { "text": "\"야 즐겜(즐거운 게임) 하자~\" 지더라도 채팅 치며 떠드는 게 재밌다.", "type": "I" },
      { "text": "내가 못해서 진 것 같아 미안해하며 조용히 서포트한다.", "type": "S" },
      { "text": "패배 원인을 분석하고 공략법을 찾아본다.", "type": "C" }
    ]
  },
  {
    "id": 797,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구가 내 비밀을 다른 애한테 말해버렸다.",
    "options": [
      { "text": "바로 전화해서 \"너 미쳤냐?\" 따지고 사과받는다.", "type": "D" },
      { "text": "너무 배신감 느껴서 다른 친구들한테 걔 욕을 한다.", "type": "I" },
      { "text": "속으로만 끙끙 앓고 걔랑 서서히 멀어진다.", "type": "S" },
      { "text": "언제, 누구한테, 뭐라고 말했는지 정확히 확인하고 손절한다.", "type": "C" }
    ]
  },
  {
    "id": 798,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구들과 여행 가서 길을 잃었다.",
    "options": [
      { "text": "지나가는 사람 붙잡고 \"여기 어디예요?\" 당당하게 물어본다.", "type": "D" },
      { "text": "\"이것도 추억이지!\" 하며 셀카 찍고 돌아다닌다.", "type": "I" },
      { "text": "친구들이 하자는 대로 따라가며 불안해한다.", "type": "S" },
      { "text": "지도 앱 켜서 현재 위치와 목적지 최단 경로를 찾는다.", "type": "C" }
    ]
  },
  {
    "id": 799,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구들 사이에서 싸움이 나서 편을 갈라야 한다.",
    "options": [
      { "text": "내가 생각하기에 맞는 쪽 편을 확실하게 든다.", "type": "D" },
      { "text": "양쪽 왔다 갔다 하며 분위기를 풀려고 노력한다.", "type": "I" },
      { "text": "싸움에 끼기 싫어서 중립을 지키거나 조용히 있는다.", "type": "S" },
      { "text": "누가 원인 제공을 했는지 객관적으로 따져본다.", "type": "C" }
    ]
  },
  {
    "id": 800,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "시험 기간인데 친구가 놀자고 꼬신다.",
    "options": [
      { "text": "\"시험 끝나고 놀아. 끊어.\" 단칼에 거절한다.", "type": "D" },
      { "text": "\"아 공부해야 하는데...\" 하다가 결국 나가서 논다.", "type": "I" },
      { "text": "거절하면 친구가 서운해할까 봐 걱정된다.", "type": "S" },
      { "text": "\"나 오늘 계획한 분량 다 끝내야 해서 안 돼.\" 이유를 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 801,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구가 내 옷이나 물건을 빌려달라고 한다.",
    "options": [
      { "text": "\"깨끗하게 쓰고 내일까지 가져와.\" 조건을 건다.", "type": "D" },
      { "text": "\"그래! 너한테 잘 어울리겠다!\" 흔쾌히 빌려준다.", "type": "I" },
      { "text": "빌려주기 싫은데 거절 못 하고 빌려준다.", "type": "S" },
      { "text": "혹시 망가뜨릴까 봐 걱정돼서 안 빌려주거나 낡은 걸 준다.", "type": "C" }
    ]
  },
  {
    "id": 802,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "셋이서 노는데 둘이서만 귓속말을 한다.",
    "options": [
      { "text": "\"야, 뭔데? 나도 좀 알자.\" 대놓고 끼어든다.", "type": "D" },
      { "text": "\"너네끼리 뭐 해! 나 왕따 시키냐?\" 장난식으로 삐진다.", "type": "I" },
      { "text": "소외감 느끼지만 티 안 내고 폰 보는 척한다.", "type": "S" },
      { "text": "별로 신경 안 쓰고 내 할 일(생각)을 한다.", "type": "C" }
    ]
  },
  {
    "id": 803,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구가 밥을 쩝쩝거리며 먹어서 거슬린다.",
    "options": [
      { "text": "\"야 좀 조용히 먹어.\" 바로 지적한다.", "type": "D" },
      { "text": "장난치면서 \"너 ASMR 하냐?\"라고 돌려 말한다.", "type": "I" },
      { "text": "말하면 무안해할까 봐 그냥 참는다.", "type": "S" },
      { "text": "식사 예절에 어긋난다고 생각하며 속으로 싫어한다.", "type": "C" }
    ]
  },
  {
    "id": 804,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "노래방에서 친구가 내가 예약한 노래를 취소해버렸다.",
    "options": [
      { "text": "리모컨 뺏어서 \"아 뭐 하는 거야!\" 화낸다.", "type": "D" },
      { "text": "\"아 내 노래!! ㅠㅠ\" 징징대다가 다음 곡 예약한다.", "type": "I" },
      { "text": "실수겠지... 하고 아무 말 없이 다시 예약한다.", "type": "S" },
      { "text": "취소한 이유가 있는지 물어보거나 기분 나빠서 집에 간다.", "type": "C" }
    ]
  },
  {
    "id": 805,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구들과 단체 사진을 찍어서 SNS에 올릴 때.",
    "options": [
      { "text": "내가 제일 잘 나온 사진을 고른다. (친구 얼굴 신경 안 씀)", "type": "D" },
      { "text": "다 같이 웃고 떠드는 즐거운 분위기의 사진.", "type": "I" },
      { "text": "친구들에게 \"이거 올려도 돼?\" 허락받은 사진.", "type": "S" },
      { "text": "구도랑 필터가 완벽하게 보정된 사진.", "type": "C" }
    ]
  },
  {
    "id": 806,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구가 \"나 요즘 썸 타는 애 생겼어\"라고 말한다.",
    "options": [
      { "text": "\"누군데? 사진 보여줘 봐. 괜찮은 앤지 내가 봐줄게.\"", "type": "D" },
      { "text": "\"대박! 언제부터? 어디서 만났어?\" 호들갑 떨며 궁금해한다.", "type": "I" },
      { "text": "\"진짜? 잘됐다! 축하해~\" 진심으로 기뻐해 준다.", "type": "S" },
      { "text": "\"몇 살인데? 학교 어디야?\" 신상 정보부터 물어본다.", "type": "C" }
    ]
  },
  {
    "id": 807,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구들과 PC방/놀이공원 가기로 했는데 귀찮아졌다.",
    "options": [
      { "text": "\"나 오늘 안 갈래. 담에 봐.\" 쿨하게 통보한다.", "type": "D" },
      { "text": "가기 싫지만 막상 가서 놀면 제일 신나게 논다.", "type": "I" },
      { "text": "약속 깰 수 없어서 억지로 나간다.", "type": "S" },
      { "text": "안 가면 회비는 어떻게 할지, 일정 변경할지 논의한다.", "type": "C" }
    ]
  },
  {
    "id": 808,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구가 엉터리 정보를 진짜인 것처럼 말한다.",
    "options": [
      { "text": "\"야 그거 아니야. 헛소리하지 마.\" 면박 준다.", "type": "D" },
      { "text": "\"아 진짜? 대박이다~\" 알면서도 맞장구쳐준다.", "type": "I" },
      { "text": "틀린 걸 알지만 굳이 지적해서 무안 주지 않는다.", "type": "S" },
      { "text": "핸드폰으로 검색해서 \"여기 봐, 이거 아니네\"라고 팩트 체크한다.", "type": "C" }
    ]
  },
  {
    "id": 809,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구가 내 뒷담화를 했다는 소문을 들었다.",
    "options": [
      { "text": "당장 그 친구 찾아가서 \"너 내 얘기 하고 다녔냐?\" 따진다.", "type": "D" },
      { "text": "너무 충격받아서 다른 친구들한테 하소연하며 운다.", "type": "I" },
      { "text": "믿기지 않아서 혼자 끙끙 앓으며 거리를 둔다.", "type": "S" },
      { "text": "누가 전해줬는지, 정확히 뭐라 했는지 증거를 찾는다.", "type": "C" }
    ]
  },
  {
    "id": 810,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구들과 파자마 파티를 할 때 너의 역할은?",
    "options": [
      { "text": "\"자, 이제 진실게임 하자.\" 게임 주도자.", "type": "D" },
      { "text": "밤새 수다 떨고 엽사 찍자고 하는 분위기 메이커.", "type": "I" },
      { "text": "이불 펴주고 간식 챙겨주는 엄마 같은 역할.", "type": "S" },
      { "text": "내일 몇 시에 일어날지 알람 맞추고 정리하는 역할.", "type": "C" }
    ]
  },
  {
    "id": 811,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "졸업식 날, 너는 어떤 모습일까?",
    "options": [
      { "text": "반장이나 대표로 상을 받거나 주목받고 싶다.", "type": "D" },
      { "text": "친구들이랑 사진 수백 장 찍고 롤링페이퍼 돌린다.", "type": "I" },
      { "text": "정든 친구, 선생님과 헤어지려니 눈물이 난다.", "type": "S" },
      { "text": "졸업장과 앨범 챙겨서 조용히 집에 간다.", "type": "C" }
    ]
  },
  {
    "id": 812,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구가 약속을 깜빡 잊고 안 나왔다.",
    "options": [
      { "text": "\"장난하냐? 절교다.\" 화내고 집에 간다.", "type": "D" },
      { "text": "\"어떻게 그럴 수가 있어ㅠㅠ\" 계속 서운하다고 징징댄다.", "type": "I" },
      { "text": "무슨 사정이 있겠지... 다음에 보자고 좋게 말한다.", "type": "S" },
      { "text": "다시는 이 친구와 중요한 약속을 잡지 않겠다고 기록한다.", "type": "C" }
    ]
  },
  {
    "id": 813,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구네 집에 놀러 갔는데 방이 너무 더럽다.",
    "options": [
      { "text": "\"야 좀 치우고 살아라.\" 발로 툭툭 치며 지적한다.", "type": "D" },
      { "text": "\"우와~ 여기서 잠이 오냐?ㅋㅋ\" 농담하며 넘어간다.", "type": "I" },
      { "text": "아무 말 안 하고 앉을 자리만 찾아서 앉는다.", "type": "S" },
      { "text": "어디서부터 치워야 할지 머릿속으로 견적이 나온다.", "type": "C" }
    ]
  },
  {
    "id": 814,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구들과 1박 2일 여행, 잘 때가 됐다.",
    "options": [
      { "text": "\"잘 사람은 자고, 더 놀 사람은 나와.\" 딱 정리한다.", "type": "D" },
      { "text": "\"잠이 오냐? 밤새워야지!\" 자는 애들 깨워서 괴롭힌다.", "type": "I" },
      { "text": "졸리지만 친구들이 놀자고 하면 억지로 깨어 있는다.", "type": "S" },
      { "text": "내일 일정을 위해 정해진 시간에 잔다.", "type": "C" }
    ]
  },
  {
    "id": 815,
    "category": "friendship",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구가 직접 만든(맛없는) 쿠키를 줬다. 반응은?",
    "options": [
      { "text": "\"솔직히 좀 맛없다. 담엔 설탕 더 넣어.\" (팩트 폭격)", "type": "D" },
      { "text": "\"와! 짱이다! 너무 고마워!\" (맛 평가는 안 하고 리액션만)", "type": "I" },
      { "text": "\"고생했겠다... 잘 먹을게.\" (맛없어도 꾸역꾸역 먹음)", "type": "S" },
      { "text": "\"레시피 뭐 보고 했어? 뭔가 빠진 거 같은데.\" (분석)", "type": "C" }
    ]
  },
  {
    "id": 816,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "편의점 알바 중, 진상 손님이 반말하며 시비를 건다.",
    "options": [
      { "text": "\"반말하지 마세요.\" 똑같이 강하게 나간다.", "type": "D" },
      { "text": "속으론 욕하지만 겉으로는 웃으며 상황을 넘긴다.", "type": "I" },
      { "text": "너무 무섭고 당황해서 아무 말 못 하고 얼어버린다.", "type": "S" },
      { "text": "CCTV 녹화 중임을 알리고 경찰 신고 절차를 생각한다.", "type": "C" }
    ]
  },
  {
    "id": 817,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "사장님이 \"오늘 손님 없네, 일찍 퇴근해\"라고 하셨다.",
    "options": [
      { "text": "\"앗싸!\" 뒤도 안 돌아보고 바로 나간다.", "type": "D" },
      { "text": "\"진짜요? 사장님 최고!\" 감사 인사하고 친구한테 연락한다.", "type": "I" },
      { "text": "\"어... 그래도 뒷정리는 하고 가야 하지 않을까요?\" 주저한다.", "type": "S" },
      { "text": "일찍 퇴근하면 시급 깎이는지 계산해 본다.", "type": "C" }
    ]
  },
  {
    "id": 818,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "서빙 알바 중 실수를 해서 접시를 깼다.",
    "options": [
      { "text": "당황하지 않고 빠르게 빗자루 가져와서 치운다.", "type": "D" },
      { "text": "\"어떡해ㅠㅠ 죄송합니다!\" 큰 소리로 사과하고 어쩔 줄 모른다.", "type": "I" },
      { "text": "손님들 놀랐을까 봐 걱정하고, 조용히 치운다.", "type": "S" },
      { "text": "다친 사람은 없는지 확인하고 변상해야 하는지 물어본다.", "type": "C" }
    ]
  },
  {
    "id": 819,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "진로 상담 선생님이 \"너는 성적이 애매하네\"라고 했다.",
    "options": [
      { "text": "자존심 상한다. 보란 듯이 성공해서 증명하겠다고 다짐한다.", "type": "D" },
      { "text": "기분 나쁘지만 친구들한테 선생님 욕하면서 잊어버린다.", "type": "I" },
      { "text": "의기소침해져서 '난 안 되나 봐'라고 우울해한다.", "type": "S" },
      { "text": "어떤 과목이 부족한지 성적표를 분석하고 전략을 짠다.", "type": "C" }
    ]
  },
  {
    "id": 820,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "알바 첫 월급을 받았다! 어디에 쓸까?",
    "options": [
      { "text": "평소 갖고 싶었던 비싼 신발이나 전자기기를 지른다.", "type": "D" },
      { "text": "친구들이랑 뷔페 가고 노래방 가고 펑펑 쓴다.", "type": "I" },
      { "text": "부모님 선물 사드리고 나머지는 저축한다.", "type": "S" },
      { "text": "계획했던 리스트대로 필요한 물건만 최저가로 산다.", "type": "C" }
    ]
  },
  {
    "id": 821,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "하고 싶은 일(꿈)과 부모님이 원하는 직업이 다르다.",
    "options": [
      { "text": "내 인생은 내 거다. 부모님과 싸워서라도 내 길을 간다.", "type": "D" },
      { "text": "\"알겠어요~\" 하고 앞에서는 네네 하지만 뒤로는 딴짓한다.", "type": "I" },
      { "text": "부모님 실망시키기 싫어서 꿈을 포기하고 따른다.", "type": "S" },
      { "text": "내 꿈의 전망과 성공 가능성을 데이터로 정리해서 설득한다.", "type": "C" }
    ]
  },
  {
    "id": 822,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "같이 일하는 알바 동료가 일을 너무 못해서 답답하다.",
    "options": [
      { "text": "\"저기요, 이거 이렇게 하시면 안 돼요.\" 직접 지적한다.", "type": "D" },
      { "text": "다른 동료한테 \"쟤 진짜 일 못 하지 않냐?\" 뒷담화한다.", "type": "I" },
      { "text": "내가 좀 더 고생하고 말지... 그냥 내가 다 처리한다.", "type": "S" },
      { "text": "사장님께 말씀드려 업무 분장을 다시 해달라고 요청한다.", "type": "C" }
    ]
  },
  {
    "id": 823,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "대학교 전공을 선택할 때 가장 고민되는 것은?",
    "options": [
      { "text": "나중에 취업 잘 되고 연봉 높은 과인가?", "type": "D" },
      { "text": "재밌어 보이고, 대학 로망(CC, 축제)을 즐길 수 있는가?", "type": "I" },
      { "text": "너무 빡세지 않고 무난하게 졸업할 수 있는가?", "type": "S" },
      { "text": "커리큘럼이 체계적이고 내가 배울 게 많은가?", "type": "C" }
    ]
  },
  {
    "id": 824,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "알바 면접을 보러 갔다. 사장님이 \"질문 있나요?\"라고 묻는다.",
    "options": [
      { "text": "\"시급은 얼마고, 인센티브 있나요?\" 돈부터 묻는다.", "type": "D" },
      { "text": "\"여기 분위기 어때요? 텃세 없죠?\" (친목)", "type": "I" },
      { "text": "\"아니요, 없습니다...\" (긴장)", "type": "S" },
      { "text": "\"휴게 시간은 언제이고, 주휴수당은 포함인가요?\" (조건)", "type": "C" }
    ]
  },
  {
    "id": 825,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "손님이 물건을 찾는데 매장에 없다.",
    "options": [
      { "text": "\"그거 품절입니다.\" 단호하게 말하고 보낸다.", "type": "D" },
      { "text": "\"어머 어떡하죠ㅠㅠ 대신 이건 어떠세요?\" 다른 거 추천한다.", "type": "I" },
      { "text": "\"죄송합니다... 언제 들어오는지 알아봐 드릴까요?\" 미안해한다.", "type": "S" },
      { "text": "재고 시스템 조회해서 근처 다른 매장에 있는지 확인해 준다.", "type": "C" }
    ]
  },
  {
    "id": 826,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "내가 꿈꾸는 '이상적인 알바'는?",
    "options": [
      { "text": "짧게 일하고 돈 많이 주는 꿀알바.", "type": "D" },
      { "text": "또래들이랑 썸도 타고 재밌게 노는 에버랜드 알바 같은 곳.", "type": "I" },
      { "text": "손님 적고 혼자서 편하게 일하는 편의점 야간 알바.", "type": "S" },
      { "text": "업무 매뉴얼 확실하고 배울 점이 있는 카페나 사무 보조.", "type": "C" }
    ]
  },
  {
    "id": 827,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "갑자기 사장님이 칭찬을 해주셨다. \"일 참 잘하네!\"",
    "options": [
      { "text": "\"감사합니다. 시급 좀 올려주세요.\" 기회를 놓치지 않는다.", "type": "D" },
      { "text": "\"진짜요? 헤헤 신난다!\" 하루 종일 기분 좋아서 날아다닌다.", "type": "I" },
      { "text": "\"아니에요... 다들 잘 도와주셔서 그렇죠.\" 겸손하게 답한다.", "type": "S" },
      { "text": "빈말인지 진짜인지 표정을 살피며 분석한다.", "type": "C" }
    ]
  },
  {
    "id": 828,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "알바를 그만두기로 결심했다. 이유는?",
    "options": [
      { "text": "사장님이 내 말을 안 듣고 무시해서.", "type": "D" },
      { "text": "일이 너무 지루하고 같이 일하는 사람들이 재미없어서.", "type": "I" },
      { "text": "사람들이랑 트러블 생기는 게 너무 스트레스받아서.", "type": "S" },
      { "text": "월급이 밀리거나 근로 계약 조건을 안 지켜서.", "type": "C" }
    ]
  },
  {
    "id": 829,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "학교 축제 때 우리 반 주점을 운영하게 되었다. 내 역할은?",
    "options": [
      { "text": "총괄 매니저. 애들 지휘하고 매출 관리한다.", "type": "D" },
      { "text": "호객꾼. 복도 나가서 소리 지르고 손님 끌어온다.", "type": "I" },
      { "text": "요리/서빙. 안 보이는 곳에서 묵묵히 일한다.", "type": "S" },
      { "text": "회계. 재료비랑 수익 계산해서 장부 정리한다.", "type": "C" }
    ]
  },
  {
    "id": 830,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "내일 중요한 시험이나 면접이 있다. 전날 밤 나는?",
    "options": [
      { "text": "\"난 무조건 된다.\" 자기 최면 걸고 일찍 잔다.", "type": "D" },
      { "text": "떨려서 친구들한테 \"나 어떡해\" 카톡 하다가 늦게 잔다.", "type": "I" },
      { "text": "긴장돼서 잠이 안 와 뒤척인다.", "type": "S" },
      { "text": "준비물, 옷, 교통편 미리 다 챙겨 놓고 시뮬레이션 돌린다.", "type": "C" }
    ]
  },
  {
    "id": 831,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "친구들이 \"넌 커서 뭐가 될 거 같아?\"라고 묻는다.",
    "options": [
      { "text": "\"난 CEO나 대통령 될 거야.\" 야망을 드러낸다.", "type": "D" },
      { "text": "\"연예인? 유튜버? 아무튼 유명한 사람!\"", "type": "I" },
      { "text": "\"그냥 평범하게 살고 싶어. 행복한 사람?\"", "type": "S" },
      { "text": "\"아직 확실하진 않지만 이쪽 분야 연구원이 될 거야.\"", "type": "C" }
    ]
  },
  {
    "id": 832,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "알바 대타 부탁을 받았다. \"이번 한 번만 해줘 ㅠㅠ\"",
    "options": [
      { "text": "\"안 돼. 나 바빠.\" 거절하거나 \"대신 밥 사\" 거래한다.", "type": "D" },
      { "text": "\"음... 알겠어! (거절 못 하고 승락)\"", "type": "I" },
      { "text": "해주기 싫은데 상대가 급해 보여서 억지로 해준다.", "type": "S" },
      { "text": "내 스케줄 확인해 보고 가능한 시간이면 해준다.", "type": "C" }
    ]
  },
  {
    "id": 833,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "진로 적성 검사 결과가 내 생각과 다르게 나왔다.",
    "options": [
      { "text": "\"기계가 뭘 알아?\" 무시하고 내가 하고 싶은 거 한다.", "type": "D" },
      { "text": "친구들 결과랑 비교하면서 웃고 떠든다.", "type": "I" },
      { "text": "\"내가 이런 쪽에 재능이 있나?\" 하며 진지하게 고민해 본다.", "type": "S" },
      { "text": "해석지 자세히 읽어보며 왜 이렇게 나왔는지 분석한다.", "type": "C" }
    ]
  },
  {
    "id": 834,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "알바 중 내가 실수한 게 아닌데 손님이 나한테 화를 낸다.",
    "options": [
      { "text": "\"제 잘못 아닌데요?\" 따박따박 말대꾸한다.", "type": "D" },
      { "text": "너무 억울해서 눈물이 핑 돈다.", "type": "I" },
      { "text": "일단 죄송하다고 사과해서 상황을 끝낸다.", "type": "S" },
      { "text": "상황을 설명하고 매니저를 불러 해결한다.", "type": "C" }
    ]
  },
  {
    "id": 835,
    "category": "work_career",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "시험 공부 계획을 짤 때 너의 스타일은?",
    "options": [
      { "text": "목표 점수만 정하고, 삘(Feel) 받는 과목부터 벼락치기.", "type": "D" },
      { "text": "계획은 거창하게 짜는데 3일도 못 가서 포기한다.", "type": "I" },
      { "text": "무리하지 않고 내가 할 수 있는 만큼만 짠다.", "type": "S" },
      { "text": "시간 단위로 쪼개서 철저하게 짜고 체크리스트 만든다.", "type": "C" }
    ]
  },
  {
    "id": 836,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "엄마가 \"방 좀 치워라!\" 하고 잔소리할 때 반응은?",
    "options": [
      { "text": "\"알아서 한다고!\" 방문 닫고 들어간다.", "type": "D" },
      { "text": "\"아잉 알겠어~ 좀 이따 할게~\" 애교로 넘긴다.", "type": "I" },
      { "text": "군말 없이 조용히 치운다.", "type": "S" },
      { "text": "\"지금 숙제 중이라 1시간 뒤에 치울게요.\" 계획을 말한다.", "type": "C" }
    ]
  },
  {
    "id": 837,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "동생(혹은 형제)이 내 물건을 허락 없이 썼다.",
    "options": [
      { "text": "당장 쫓아가서 \"야! 죽을래?\" 하고 뺏는다.", "type": "D" },
      { "text": "\"아 진짜 짜증 나네!\" 소리 지르고 엄마한테 이른다.", "type": "I" },
      { "text": "화나지만 싸우기 싫어서 \"다음부턴 말하고 써\"라고 좋게 말한다.", "type": "S" },
      { "text": "내 물건에 손대지 말라고 경고문 써서 붙여 놓는다.", "type": "C" }
    ]
  },
  {
    "id": 838,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "가족끼리 외식 메뉴를 정하는데 의견이 안 맞는다.",
    "options": [
      { "text": "\"오늘 고기 먹자. 고기!\" 내 주장을 끝까지 민다.", "type": "D" },
      { "text": "\"그럼 가위바위보로 정해!\" 재밌게 해결하려 한다.", "type": "I" },
      { "text": "부모님이 드시고 싶은 걸로 먹자고 양보한다.", "type": "S" },
      { "text": "가족들 식성과 거리를 고려해서 합리적인 곳을 추천한다.", "type": "C" }
    ]
  },
  {
    "id": 839,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "부모님이 성적표를 보고 실망하셨다.",
    "options": [
      { "text": "\"다음엔 잘 볼 거야.\" 큰소리치고 방에 들어간다.", "type": "D" },
      { "text": "\"이번엔 어려웠어ㅠㅠ\" 핑계 댄다.", "type": "I" },
      { "text": "죄송해서 고개를 푹 숙이고 아무 말 못 한다.", "type": "S" },
      { "text": "이번 시험 난이도와 평균 점수를 설명하며 방어한다.", "type": "C" }
    ]
  },
  {
    "id": 840,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "명절에 친척들이 \"공부 잘하냐?\"라고 물어본다.",
    "options": [
      { "text": "\"네, 뭐 알아서 잘해요.\" 딱 잘라 대답하기 싫은 티 낸다.", "type": "D" },
      { "text": "\"아이~ 용돈 주시면 알려드릴게요!\" 능청스럽게 넘긴다.", "type": "I" },
      { "text": "어색하게 웃으면서 \"열심히 하고 있어요...\"라고 답한다.", "type": "S" },
      { "text": "몇 등급인지, 모의고사 점수가 몇 점인지 사실대로 말한다.", "type": "C" }
    ]
  },
  {
    "id": 841,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "가족 여행 계획을 짤 때 너의 역할은?",
    "options": [
      { "text": "귀찮으니까 아빠가 정해. 난 따라갈게. (하지만 불평함)", "type": "D" },
      { "text": "가서 사진 찍을 예쁜 옷 고르고 신나 한다.", "type": "I" },
      { "text": "가족들 짐 싸는 거 도와주고 빠진 거 없나 챙긴다.", "type": "S" },
      { "text": "맛집 검색하고 일정표 짜서 카톡방에 공유한다.", "type": "C" }
    ]
  },
  {
    "id": 842,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "엄마가 기분이 안 좋아 보이신다.",
    "options": [
      { "text": "신경 안 쓰고 내 방에서 게임 한다.", "type": "D" },
      { "text": "옆에 가서 재롱떨면서 웃게 해드린다.", "type": "I" },
      { "text": "조용히 눈치 보며 설거지나 청소를 돕는다.", "type": "S" },
      { "text": "왜 기분이 안 좋은지 원인을 분석해 본다.", "type": "C" }
    ]
  },
  {
    "id": 843,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "형제/자매와 TV 리모컨(또는 컴퓨터) 쟁탈전이 벌어졌다.",
    "options": [
      { "text": "힘으로 뺏거나 \"내가 형(언니)이잖아\" 하며 누른다.", "type": "D" },
      { "text": "\"야 한 번만~\" 떼쓰거나 협상한다.", "type": "I" },
      { "text": "싸우기 싫어서 그냥 내가 양보하고 폰 본다.", "type": "S" },
      { "text": "\"너 1시간 봤으니까 이제 내 차례야.\" 규칙을 들이댄다.", "type": "C" }
    ]
  },
  {
    "id": 844,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "부모님께 용돈을 올려달라고 할 때?",
    "options": [
      { "text": "\"돈 부족해. 더 줘.\" 당당하게 요구한다.", "type": "D" },
      { "text": "\"엄마~ 사랑해~ 용돈 좀~\" 애교 작전.", "type": "I" },
      { "text": "타이밍 보다가 조심스럽게 \"저... 드릴 말씀이 있는데요...\"", "type": "S" },
      { "text": "물가 상승률과 내 지출 내역을 보여주며 인상 필요성을 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 845,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "집안일(설거지, 쓰레기 버리기) 당번을 정할 때?",
    "options": [
      { "text": "\"난 바쁘니까 이거 할게.\" 제일 쉬운 거 먼저 선점한다.", "type": "D" },
      { "text": "가위바위보나 사다리 타기로 정하자고 한다.", "type": "I" },
      { "text": "남은 거 아무거나 내가 한다.", "type": "S" },
      { "text": "공평하게 요일별로 당번표를 만들어서 붙이자고 한다.", "type": "C" }
    ]
  },
  {
    "id": 846,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "부모님이 내 친구를 마음에 안 들어 하신다.",
    "options": [
      { "text": "\"엄마가 뭘 알아!\" 화내며 방문 쾅 닫는다.", "type": "D" },
      { "text": "\"걔 진짜 착하고 재밌는 애야~\" 좋게 포장해서 말한다.", "type": "I" },
      { "text": "부모님 앞에서는 그 친구 얘기 안 꺼낸다.", "type": "S" },
      { "text": "그 친구의 장점과 배울 점을 논리적으로 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 847,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "주말 아침, 늦잠 자고 싶은데 가족들이 깨운다.",
    "options": [
      { "text": "이불 뒤집어쓰고 \"아 안 먹어!\" 소리 지른다.", "type": "D" },
      { "text": "\"5분만...\" 하다가 일어나서 비몽사몽 밥 먹는다.", "type": "I" },
      { "text": "피곤하지만 부모님이 부르시니까 바로 일어난다.", "type": "S" },
      { "text": "전날 몇 시에 일어날지 미리 말해뒀으니 깨우지 말라고 한다.", "type": "C" }
    ]
  },
  {
    "id": 848,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "가족끼리 보드게임을 하는데 내가 지고 있다.",
    "options": [
      { "text": "\"아 이거 재미없어. 안 해.\" 판 엎거나 그만둔다.", "type": "D" },
      { "text": "반칙 써서라도 이기려고 장난친다.", "type": "I" },
      { "text": "져도 괜찮다. 가족들이 즐거우면 됐다.", "type": "S" },
      { "text": "룰북 다시 확인하고 역전할 전략을 짠다.", "type": "C" }
    ]
  },
  {
    "id": 849,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "아빠가 옛날이야기(라떼는 말이야)를 시작하셨다.",
    "options": [
      { "text": "\"아빠 그 얘기 100번도 더 들었어.\" 말을 끊는다.", "type": "D" },
      { "text": "\"우와 진짜요? 대박~\" 영혼 없는 리액션을 해준다.", "type": "I" },
      { "text": "지겹지만 끝까지 웃으면서 들어드린다.", "type": "S" },
      { "text": "딴생각하거나 핸드폰 보면서 한 귀로 흘린다.", "type": "C" }
    ]
  },
  {
    "id": 850,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "집에 손님(친척 어른)들이 오셨다.",
    "options": [
      { "text": "인사만 딱 하고 내 방으로 도망간다.", "type": "D" },
      { "text": "옆에 앉아서 재롱떨고 용돈을 노린다.", "type": "I" },
      { "text": "과일 깎아 오거나 심부름을 도맡아 한다.", "type": "S" },
      { "text": "질문하시면 예의 바르고 짧게 대답만 한다.", "type": "C" }
    ]
  },
  {
    "id": 851,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "부모님이 내 핸드폰을 검사하겠다고 하신다.",
    "options": [
      { "text": "\"이건 사생활 침해예요!\" 절대 안 보여준다.", "type": "D" },
      { "text": "보여주기 전에 얼른 카톡 방 나가고 갤러리 정리한다.", "type": "I" },
      { "text": "찝찝하지만 부모님이 하라니까 보여드린다.", "type": "S" },
      { "text": "비밀번호 걸어놓고 왜 보여드려야 하는지 이유를 묻는다.", "type": "C" }
    ]
  },
  {
    "id": 852,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "형제/자매와 옷 입는 스타일로 싸웠다.",
    "options": [
      { "text": "\"내 옷 입지 말라고!\" 소리 지르고 옷장에 자물쇠 건다.", "type": "D" },
      { "text": "\"야 이거 내놔!\" 서로 머리채 잡고 싸운다.", "type": "I" },
      { "text": "그냥 내가 안 입고 만다. (포기)", "type": "S" },
      { "text": "서로의 옷을 공유할 규칙을 정해서 합의한다.", "type": "C" }
    ]
  },
  {
    "id": 853,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "가족 중 누군가 아플 때 너의 행동은?",
    "options": [
      { "text": "\"병원 가봐. 약 먹어.\" 말로만 해결책 제시.", "type": "D" },
      { "text": "걱정돼서 계속 옆에서 말 걸고 안마해 준다.", "type": "I" },
      { "text": "죽을 끓여주거나 물수건을 챙겨준다.", "type": "S" },
      { "text": "증상을 검색해 보고 무슨 약을 먹어야 할지 알아본다.", "type": "C" }
    ]
  },
  {
    "id": 854,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "부모님이 형제/자매와 나를 비교하신다.",
    "options": [
      { "text": "\"그럼 걔랑 살든가!\" 화내고 반항한다.", "type": "D" },
      { "text": "\"아잉~ 그래도 내가 더 귀엽잖아.\" 능글맞게 넘긴다.", "type": "I" },
      { "text": "상처받지만 내색 안 하고 방에 가서 운다.", "type": "S" },
      { "text": "서로 재능이 다른 분야라고 차이점을 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 855,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "통금 시간(귀가 시간)을 어겨서 혼났다.",
    "options": [
      { "text": "\"아니, 친구랑 놀다 보면 늦을 수도 있지!\" 대든다.", "type": "D" },
      { "text": "\"죄송해요 뿌잉뿌잉~ 담엔 일찍 올게요!\" 애교 작전.", "type": "I" },
      { "text": "\"죄송합니다...\" 고개 숙이고 반성한다.", "type": "S" },
      { "text": "왜 늦었는지 육하원칙에 따라 사유를 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 856,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "가족 단톡방에 부모님이 좋은 글/사진을 올리셨다.",
    "options": [
      { "text": "읽씹한다. (답장 안 함)", "type": "D" },
      { "text": "하트 이모티콘 5개 날린다.", "type": "I" },
      { "text": "\"좋은 글이네요^^\" 하고 답장한다.", "type": "S" },
      { "text": "내용을 다 읽어보고 관련된 답을 짧게 한다.", "type": "C" }
    ]
  },
  {
    "id": 857,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "부모님이 내가 싫어하는 반찬을 억지로 먹으라고 하신다.",
    "options": [
      { "text": "\"안 먹어!\" 젓가락 내려놓는다.", "type": "D" },
      { "text": "\"배불러서 못 먹겠어요~\" 핑계 댄다.", "type": "I" },
      { "text": "눈 딱 감고 그냥 삼킨다.", "type": "S" },
      { "text": "이걸 왜 안 먹는지 맛과 식감에 대해 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 858,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "반려동물을 키우자고 설득할 때?",
    "options": [
      { "text": "일단 데려오고 본다. \"이미 데려왔어. 키우자.\"", "type": "D" },
      { "text": "\"강아지 너무 귀엽잖아~ 제발~\" 감정에 호소한다.", "type": "I" },
      { "text": "부모님이 허락해 주실 때까지 기다린다.", "type": "S" },
      { "text": "산책은 누가 시키고 비용은 어떻게 할지 계획서를 쓴다.", "type": "C" }
    ]
  },
  {
    "id": 859,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "엄마가 내 패션을 지적하신다. \"옷이 그게 뭐니?\"",
    "options": [
      { "text": "\"내 스타일이야. 신경 꺼.\"", "type": "D" },
      { "text": "\"요즘 이게 유행이야~ 힙하지?\"", "type": "I" },
      { "text": "\"이상한가...? 갈아입을까?\" 위축된다.", "type": "S" },
      { "text": "이 옷을 입은 이유와 코디 컨셉을 설명한다.", "type": "C" }
    ]
  },
  {
    "id": 860,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "가족들이 내 생일 파티를 해준다고 한다.",
    "options": [
      { "text": "내가 받고 싶은 선물 리스트를 딱 보낸다.", "type": "D" },
      { "text": "친구들도 초대해서 왁자지껄하게 하고 싶다.", "type": "I" },
      { "text": "그냥 가족끼리 집에서 맛있는 밥 먹는 게 좋다.", "type": "S" },
      { "text": "식당 예약 시간과 케이크 종류를 미리 정해둔다.", "type": "C" }
    ]
  },
  {
    "id": 861,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "형제/자매가 힘든 일이 있어 보인다.",
    "options": [
      { "text": "\"야, 무슨 일이야? 말해봐. 누가 괴롭혀?\"", "type": "D" },
      { "text": "\"기분 전환하러 나가자!\" 맛있는 거 사준다.", "type": "I" },
      { "text": "말없이 간식 챙겨주거나 방문 앞에 둔다.", "type": "S" },
      { "text": "고민이 뭔지 들어보고 현실적인 조언을 해준다.", "type": "C" }
    ]
  },
  {
    "id": 862,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "부모님이 \"우리 여행 갈까?\" 하신다.",
    "options": [
      { "text": "\"거기 가서 뭐 할 건데요? 재미없으면 안 감.\"", "type": "D" },
      { "text": "\"좋아! 가서 사진 많이 찍어야지!\"", "type": "I" },
      { "text": "\"네, 좋아요.\" 가족들이 원하면 따른다.", "type": "S" },
      { "text": "\"언제 가요? 학원 스케줄 확인해 봐야 해요.\"", "type": "C" }
    ]
  },
  {
    "id": 863,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "집에서 혼자 있을 때 나는?",
    "options": [
      { "text": "평소 못 했던 걸 자유롭게 만끽한다.", "type": "D" },
      { "text": "심심해서 친구들한테 영상 통화 건다.", "type": "I" },
      { "text": "밀린 잠을 자거나 넷플릭스 보며 쉰다.", "type": "S" },
      { "text": "밀린 청소를 하거나 취미 생활(조립, 독서)을 한다.", "type": "C" }
    ]
  },
  {
    "id": 864,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "부모님 결혼기념일이다. 선물은?",
    "options": [
      { "text": "현금이나 상품권. 확실하고 실용적인 거.", "type": "D" },
      { "text": "직접 만든 영상 편지나 깜짝 파티.", "type": "I" },
      { "text": "정성스러운 손 편지와 커플 컵.", "type": "S" },
      { "text": "두 분에게 필요한 건강식품이나 영양제.", "type": "C" }
    ]
  },
  {
    "id": 865,
    "category": "family",
    "target_age_min": 10,
    "target_age_max": 19,
    "question": "가족 대청소 날이다. 나의 태도는?",
    "options": [
      { "text": "빨리 끝내고 놀러 나가려고 엄청 빨리 치운다.", "type": "D" },
      { "text": "노래 틀어놓고 춤추면서 청소한다.", "type": "I" },
      { "text": "시키시는 구역을 묵묵히 닦는다.", "type": "S" },
      { "text": "창틀 먼지나 구석진 곳까지 꼼꼼하게 닦는다.", "type": "C" }
    ]
  }
];
