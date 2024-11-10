import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './CarouselSection.css';

import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Keyboard,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function CarouselSection({ components = [], defaultActiveIndex = 0 }) {
	const pagination = {
		clickable: true,
		el: '.swiper-custom-pagination',
		renderBullet: function (index, className) {
			return (
				'<span class="' +
				'swiper-pagination-bullet swiper-pagination-bullet-active' +
				'"> </span>'
			);
		},
	};

	return (
		<Swiper
			style={{ width: '100vw', height: '100vh' }}
			modules={[Navigation, Pagination, A11y, Keyboard, Scrollbar]}
			spaceBetween={0}
			slidesPerView={1}
			keyboard={true}
			pagination={pagination}
			className="mySwiper"
		>
			{components.map((component, index) => (
				<SwiperSlide
					style={{ width: '100vw', height: '100vh' }}
					key={index}
				>
					{component}
				</SwiperSlide>
			))}
			<div className="swiper-custom-pagination" />
		</Swiper>
	);
}

export default CarouselSection;
