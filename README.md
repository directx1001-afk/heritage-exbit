# 기록에서 지워진 일본 속 백제의 성, 키노성

키노성과 모모타로 설화, 오니 우라에 관한 전승과 해석을 소개하는 정적 웹 전시입니다. CC0 키노성 실사 사진, 사용 허가를 받은 모모타로 이미지 2점, 문화재総覧WebGIS에서 내려받은 지도 이미지 5장을 사용합니다.

## 로컬에서 열기

1. 이 폴더의 `index.html`을 브라우저에서 엽니다.
2. 서버, 패키지 설치, 빌드 과정은 필요하지 않습니다.
3. 설화 이미지와 지도 이미지가 표시되는지 확인하고, 비교 조합을 고른 뒤 좌우 슬라이더를 움직여 봅니다.

## 수정 방법

- 문안과 이미지 배치: `index.html`
- 색상, 글꼴, 반응형 배치: `style.css`
- 지도 이미지 전환: `script.js`
- 이미지 파일: `assets/`
- 이미지를 교체하거나 추가할 때는 `index.html`과 `script.js`의 상대경로도 함께 수정하세요. 로컬 컴퓨터의 절대 경로는 사용하지 말고 파일명 대소문자를 그대로 맞추세요.

## GitHub Pages 공개 설정

저장소 이름은 `heritage-exhibit`이며, `main` 브랜치의 최상위 폴더를 게시하는 구성을 전제로 합니다.

1. GitHub에서 `heritage-exhibit` 저장소를 만듭니다.
2. 아래 공개 파일 목록을 저장소 최상위에 올립니다.
3. 저장소의 **Settings → Pages**에서 **Deploy from a branch**, `main`, `/(root)`를 선택하고 저장합니다.
4. GitHub Pages가 표시하는 공개 주소에서 페이지와 이미지, 지도 전환이 열리는지 확인합니다. 공개 업로드는 저장소 소유자가 직접 진행합니다.

예시 명령(저장소 원격 주소는 본인의 GitHub 주소로 바꿉니다):

```sh
git init -b main
git add index.html style.css script.js README.md .gitignore assets/
git commit -m "Prepare heritage exhibit for GitHub Pages"
git remote add origin https://github.com/USERNAME/heritage-exhibit.git
git push -u origin main
```

이미 Git 저장소가 있다면 `git init`은 다시 실행하지 말고, 현재 브랜치와 원격 저장소를 먼저 확인하세요. 이 작업 폴더는 현재 Git 저장소로 초기화되어 있지 않습니다.

## 이번 공개용 파일 목록

- `index.html`
- `style.css`
- `script.js`
- `README.md`
- `.gitignore`
- `assets/kino-castle-overview.webp` (Saigen Jiro, Wikimedia Commons, CC0 1.0; 2200px WebP 사본)
- `assets/momotaro-woodblock.jpg` (사용자 제공 자료, 전시 사용 허가)
- `assets/momotaro-cover.webp` (사용자 제공 자료, 전시 사용 허가)
- `assets/map-01.png` (문화재総覧WebGIS 내보내기, 원본: `20261112224517`)
- `assets/map-02.png` (문화재総覧WebGIS 내보내기, 원본: `20261112224535`)
- `assets/map-03.png` (문화재総覧WebGIS 내보내기, 원본: `20261112224553`)
- `assets/map-04.png` (문화재総覧WebGIS 내보내기, 원본: `20261112224618`)
- `assets/map-05.png` (문화재総覧WebGIS 내보내기, 원본: `20261112224727`)

`.gitignore`는 이 목록에 포함된 정적 사이트 파일과 `assets/`만 기본 추적하도록 설정했습니다. 공개 전에 `git status --short`로 실제 추가 목록을 확인하세요.

## 현재 제외할 파일

아래 자료는 제작·검토용 원본이며, 공개 페이지에서 직접 참조하지 않습니다.

- 제공된 원본 이미지: `키노성1.webp`, `키노산성.png`, `모모타로1.jpg`, `모모타로2.webp` (웹에서 사용하는 설화 이미지 사본은 `assets/`에 포함)
- 사용하지 않는 이미지 후보 사본: `assets/kino-aerial.png`, `assets/kino-gate.webp`, `assets/kino-kibi-panorama.webp`
- 지도 내보내기 원본 폴더 5개와 각 `.aux.xml`, `README.md` (웹 전시에 쓰는 정리된 PNG 사본은 `assets/`에 포함)
- `40407_1_古代山城鬼ノ城.pdf`
- `128944-デジタル地形解析と縄張図から読み解く古代山城の防御構造.pdf`
- `plan.md`, `sources.md` (내부 기획·출처 확인용 문서)
- `prompts.md` (별도 폴더에 있는 작업 안내문)

## 출처와 공개 이용 조건

지도 PNG 5장은 사용자가 문화재総覧WebGIS에서 내려받아 공유한 자료이며, 공개 페이지에서도 상대경로로 작동하도록 `assets/`에 정리했습니다. [문화재総覧WebGIS](https://heritagemap.nabunken.go.jp/)에서 지정 화면을 열 수 있습니다. 원본 내보내기 안내는 이미지에 포함된 개별 데이터 제공처와 이용 조건을 확인하고 각 제공자의 조건·출처 표기를 따르도록 안내합니다. 전시 화면과 README에 문화재総覧WebGIS 출처를 표시했고, 세부 레이어 안내는 원본 내보내기 폴더에 보존했습니다. 지도는 참고용이며 측량이나 정확한 위치 판정에 사용하지 않습니다.

영상과 일본유산활성화협의회 페이지도 원출처·관련성과 주장의 근거를 확인하기 전에는 역사적 주장을 단독으로 뒷받침하는 자료로 사용하지 않습니다. 우라가 백제 유이민 집단을 이끈 왕자였고 토벌 후 오니로 격하되었다는 내용은 검토 대상 가설로 표시하며, 확정된 사실로 단정하지 않습니다.

## 개인정보·비밀정보 점검

현재 페이지는 방문자 정보 입력, 계정 정보, API 키, 분석 도구, 외부 스크립트를 사용하지 않습니다. 공개 목록에 포함된 자료 중 개인정보나 계정 정보는 확인되지 않았습니다. 이미지 메타데이터와 이용 허가는 별도 확인 대상입니다. 허용 목록 외 파일은 `.gitignore`로 제외되며, 업로드 전 실제 스테이징 목록을 확인하세요.



