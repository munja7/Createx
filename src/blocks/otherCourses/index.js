import "./otherCourses.sass";

import Swiper, {Navigation, Pagination} from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let otherCourses = new Swiper(".other-courses__slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
      clickable: true,
    },
    navigation: {
        nextEl: '.tutors-slider__arr-right',
        prevEl: '.tutors-slider__arr-left',
    },
    modules: [Navigation],
 });