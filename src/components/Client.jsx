import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function PartnerCarousel() {
  const clientLogoPath = [
    "/client/bhaktianindya.png",
    "/client/client-1.png",
    "/client/client-2.png",
    "/client/client-3.png",
    "/client/client-4.png",
    "/client/client-5.png",
    "/client/client-6.png",
    "/client/client-7.png",
    "/client/client-8.png",
    "/client/client-9.png",
    "/client/client-10.png",
    "/client/client-11.png",
  ];

  return (
    <section
      className="w-full flex flex-col justify-center items-center py-20 bg-white"
      id="portofolio"
    >
      <div className="flex flex-col justify-center items-center pt-10 pb-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2a3342]">
          Client Kami
        </h1>
        <p className="pt-3 text-gray-600 max-w-2xl text-base md:text-lg">
          Berikut beberapa perusahaan, instansi, sekolah dan kampus yang sudah
          bergabung bersama kami
        </p>
      </div>

      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 20 }, 
          768: { slidesPerView: 3, spaceBetween: 30 }, 
          1024: { slidesPerView: 4, spaceBetween: 40 }, 
        }}
        className="w-[90%]"
      >
        {clientLogoPath.map((path, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <img
                src={path}
                alt={`Client ${index + 1}`}
                className="w-40 h-28 sm:w-48 sm:h-32 object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
