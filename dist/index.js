let currentPromotion = 0;
const promotions = document.querySelectorAll('.promotion-text');
const totalPromotions = promotions.length;
const sellBtn = document.querySelectorAll('.sell')

sellBtn.forEach(async (btn) => {
  btn.addEventListener('click', (ev) => {
    btn.innerText = 'Vendido'
    btn.style.backgroundColor = 'red'
    btn.disabled = 'true'
    btn.style.fontWeight = '800'

  })
})
function changeSlide() {
  // Remove a classe 'active' de todos os slides
  promotions.forEach(promotion => {
      promotion.classList.remove('active');
      promotion.style.transform = 'translateX(-100%)';
  });

  // Adiciona a classe 'active' ao slide atual
  promotions[currentPromotion].classList.add('active');
  promotions[currentPromotion].style.transform = 'translateX(0)';

  // Incrementa o índice do slide atual, voltando ao primeiro após o último
  currentPromotion = (currentPromotion + 1) % totalPromotions;
}

// Inicia o primeiro slide
changeSlide();
setInterval(changeSlide, 3000);



