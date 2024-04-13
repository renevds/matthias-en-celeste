import {Swiper, SwiperSlide, useSwiper, useSwiperSlide} from "swiper/react";
import {ChevronLeft, ChevronRight} from 'lucide-react';

const SwiperSection = ({title, children, index}) => {
    const swiperSlide = useSwiperSlide();
    const swiper = useSwiper();

    const distance = Math.abs(swiper.activeIndex - index);
    let opacity = ''
    if (distance > 1) {
        opacity = 'opacity-30';
    } else if (distance === 1) {
        opacity = 'lg:opacity-60 opacity-50';
    }

    return (
        <div className={`flex items-center justify-center gap-2 ${opacity} lg:mx-4 mx-2`}>
            {swiperSlide.isActive &&
                <ChevronLeft width="32" height="32"
                             className="text-gray-600 cursor-pointer lg:block hidden"
                             onClick={() => swiper.slidePrev()}/>}
            <div className={`lg:w-[280px] w-[300px] h-full text-center lg:px-2 px-2 py-5 relative bg ${swiperSlide.isActive ? '' : ''}`} onClick={() => swiper.slideTo(index)}>
                <div className="text-lg lg:text-2xl font-tenor font-medium">{title}</div>
                <div className="text-gray-600 text-base lg:text-xl font-extralight lg:mt-6 mt-2">
                    {children}
                </div>
            </div>
            {swiperSlide.isActive &&
                <ChevronRight width="32" height="32"
                              className="text-gray-600 cursor-pointer lg:block hidden"
                              onClick={() => swiper.slideNext()}/>}
        </div>
    )
}

export const Section4 = () => (
    <div className="w-full flex justify-center bg-4">
        <div className="lg:py-36 py-20 w-full">
            <div>
                <Swiper slidesPerView={2} initialSlide={2} centeredSlides
                        breakpoints={{
                            1024: {
                                slidesPerView: 4,
                            },
                        }}>
                    <SwiperSlide>
                        <SwiperSection title="BURGERLIJK HUWELIJK"
                                       index={0}>
                            Wij trouwen al voor de wet op 8 mei in het gemeentehuis van De Pinte.
                        </SwiperSection>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperSection title="PARKING"
                                       index={1}>
                            Parkeren kan in de straat van De Wilde Brouwers, en na de kantooruren ook op de parkings van
                            de nabijgelegen kantoorgebouwen.
                        </SwiperSection>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperSection title="CADEAUTIP"
                                       index={2}>
                            Je kan ons het meest gelukkig maken met een bijdrage aan onze huwelijksreis en toekomst.
                        </SwiperSection>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperSection title="DRESSCODE"
                                       index={3}>
                            Er is geen vaste dresscode, draag vooral waar jij je goed in voelt.
                        </SwiperSection>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperSection title="EINDUUR"
                                       index={4}
                        >
                            We feesten tot in de vroege uurtjes, de zaal vraagt alleen dat om 4u30 de muziek stiller
                            wordt gezet.
                        </SwiperSection>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
)