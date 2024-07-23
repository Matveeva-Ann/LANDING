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