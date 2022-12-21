import "./tutors.sass";
 // import Swiper JS
 import Swiper, {Navigation, Pagination} from 'swiper';
 // import Swiper styles
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';

  let swiperTutors = new Swiper(".tutors-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    navigation: {
        nextEl: '.tutors-slider__arr-right',
        prevEl: '.tutors-slider__arr-left',
    },
    modules: [Navigation],
});

 let swiperTestimonial = new Swiper(".testimonial-swiper", {
    slidesPerView: 1,
    spaceBetween: 150,
    loop: true,
    pagination: {
      el: ".testimon__pagination",
      // type: 'custom',
      clickable: true
    },
    navigation: {
        nextEl: '.tutors-slider__arr-right',
        prevEl: '.tutors-slider__arr-left',
    },
    modules: [Navigation, Pagination], 
});