const comparisons = [
  { before: './assets/map-02.png', after: './assets/map-03.png', beforeAlt: '회색 음영으로 산지의 높낮이를 표현한 지도', afterAlt: '노랑과 초록 계열로 지형 높낮이를 표현한 지도', beforeLabel: '지형 음영', afterLabel: '색상 지형 표현' },
  { before: './assets/map-01.png', after: './assets/map-04.png', beforeAlt: '지명과 등고선이 표시된 지형도', afterAlt: '숲과 주변 평야를 보여주는 항공 이미지', beforeLabel: '등고선·지명', afterLabel: '항공 이미지' },
  { before: './assets/map-04.png', after: './assets/map-05.png', beforeAlt: '숲과 주변 평야를 보여주는 항공 이미지', afterAlt: '항공 이미지 위에 붉은색 표시 구역이 겹쳐진 지도', beforeLabel: '항공 이미지', afterLabel: '표시 구역 겹쳐 보기' }
];
const stage = document.querySelector('#compare-stage');
const shell = document.querySelector('.compare-shell');
const beforeImage = document.querySelector('#compare-before-image');
const afterImage = document.querySelector('#compare-after-image');
const beforeLabel = document.querySelector('#compare-before-label');
const afterLabel = document.querySelector('#compare-after-label');
const range = document.querySelector('#compare-range');
const value = document.querySelector('#compare-value');
const pairButtons = [...document.querySelectorAll('.pair-button')];
function setSplit(split) {
  shell.dataset.split = String(split);
  stage.style.setProperty('--split', split + '%');
  value.value = '경계 ' + split + '%';
}
function setComparison(index) {
  const item = comparisons[index];
  beforeImage.src = item.before;
  beforeImage.alt = item.beforeAlt;
  afterImage.src = item.after;
  afterImage.alt = item.afterAlt;
  beforeLabel.textContent = item.beforeLabel;
  afterLabel.textContent = item.afterLabel;
  pairButtons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  setSplit(Number(range.value));
}
range.addEventListener('input', () => setSplit(Number(range.value)));
pairButtons.forEach(button => button.addEventListener('click', () => setComparison(Number(button.dataset.pair))));
setSplit(Number(range.value));
