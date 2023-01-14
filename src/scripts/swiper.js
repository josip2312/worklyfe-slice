import Swiper, { Scrollbar } from 'swiper';

export function initializeSwiper() {
  new Swiper('.swiper', {
    modules: [Scrollbar],
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    slidesPerView: '1.15',
    spaceBetween: 16,
  });
}
