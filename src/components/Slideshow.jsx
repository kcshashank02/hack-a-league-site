import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

export default function Slideshow({ images = [], title = "" }) {
  if (!Array.isArray(images) || images.length === 0) {
    return null
  }

  return (
    <div className="w-full max-w-full overflow-hidden rounded-xl">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        navigation={true}
        loop
        direction="horizontal"
        className="w-full h-[340px]"
      >
        {images.map((src, i) => (
          <SwiperSlide key={`${src}-${i}`}>
            <div className="w-full h-full">
              <img
                src={src}
                alt={`${title} ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
