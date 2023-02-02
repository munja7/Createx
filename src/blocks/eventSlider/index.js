import "./eventSlider.sass";
import Swiper, {Navigation} from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

 const eventSlider = new Swiper(".event-slider__swiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   loop: true,
   navigation: {
       nextEl: '.tutors-slider__arr-right',
       prevEl: '.tutors-slider__arr-left',
   },
   modules: [Navigation],
});