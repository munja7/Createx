import "./slider.sass";
import Swiper, {Navigation} from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

 const slider = new Swiper(".tutors-slider", {
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