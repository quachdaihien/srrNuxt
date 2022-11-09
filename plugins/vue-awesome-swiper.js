import { createApp } from 'vue'
import SwiperClass, { /* swiper modules... */ } from 'Swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import swiper module styles
import 'swiper/css'
// more module style...

// use swiper modules
SwiperClass.use([/* swiper modules... */])

const app = createApp()
app.use(VueAwesomeSwiper)