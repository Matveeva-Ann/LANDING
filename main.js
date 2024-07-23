const accordion = document.querySelector('.js-howItWorksList');
const accordionItems = document.querySelectorAll('.howItWorks__answerSearch');
const accordionArrow = document.querySelectorAll('.howItWorks__icon');

accordion.addEventListener('click', e => {
  const targetQuestion = e.target.closest('.howItWorks__titleSearch');

  if (targetQuestion) {
    const question = targetQuestion.getAttribute('data-question');
    const targetAnswer = document.querySelector(`.howItWorks__answerSearch[data-answer="${question}"]`);
    const targetArrow = targetQuestion.querySelector('.howItWorks__icon');

    if (targetAnswer) {
      const isActive = targetAnswer.classList.contains('js-active');

      accordionItems.forEach(answer => answer.classList.remove('js-active'));
      accordionArrow.forEach(icon => icon.classList.remove('howItWorks__icon--rotate'));

      if (!isActive) {
        targetAnswer.classList.add('js-active');
        targetArrow.classList.add('howItWorks__icon--rotate');
      }
    }
  }
});


const chooseUsCardsList = document.querySelector('.chooseUs__cardsList');
const chooseUsCardsAll = document.querySelectorAll('.chooseUs__cardItem');

chooseUsCardsList.addEventListener('click', (e) => {
  const clickElem = e.target.closest('.chooseUs__cardItem');
  chooseUsCardsAll.forEach((elem) => elem.classList.remove('chooseUs__cardItem--active'));
  clickElem.classList.add('chooseUs__cardItem--active')
})


const swiperBtns = document.querySelector('.featuredJobs__contentBtns');
const cardList = document.querySelector('.featuredJobs__contentCardList');
const cards = document.querySelectorAll('.featuredJobs__contentCard');
const cardWidth = cards[0].offsetWidth + 65;
let currentIndex = 0;

swiperBtns.addEventListener('click', (e) => {
  const clickElem = e.target.closest('.featuredJobs__contentBtn');
  if (!clickElem) return;

  const direction = clickElem.getAttribute('data-direction')

  if (direction === 'right' && currentIndex < cards.length - 1) {
    currentIndex++;
    updateSlider();
    cards[currentIndex].classList.add('featuredJobs__contentCard--active');
  } else if (direction === 'left' && currentIndex > 0) {
    currentIndex--;
    updateSlider();
    cards[currentIndex +1].classList.remove('featuredJobs__contentCard--active');
  }
})

function updateSlider() {
  const offset = -currentIndex * cardWidth;
  cardList.style.transform = `translateX(${offset}px)`;
}