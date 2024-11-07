import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <Image src="/img9.gif" alt="hi" width={300} height={800} className="w-full h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img10.webp" alt="hi" width={300} height={800} className="w-full h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img11.gif" alt="hi" width={300} height={800} className="w-full h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img12.webp" alt="hi" width={300} height={300} className="w-full h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/img13.webp" alt="hi" width={300} height={300} className="w-full h-auto object-cover" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
