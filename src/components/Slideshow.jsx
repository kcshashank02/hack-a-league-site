import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import { motion } from "framer-motion"
import "swiper/css"
import "swiper/css/navigation"

export default function Slideshow({ images = [], title = "" }) {
  if (!Array.isArray(images) || images.length === 0) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-full overflow-hidden rounded-xl"
    >
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        navigation={true}
        loop
        direction="horizontal"
        className="w-full h-[220px] sm:h-[260px] md:h-[340px]"
      >
        {images.map((src, i) => (
          <SwiperSlide key={`${src}-${i}`}>
            <motion.div
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="w-full h-full"
            >
              <img
                src={src}
                alt={`${title} ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  )
}
