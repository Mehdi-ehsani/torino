"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Image from "next/image";
import slide1 from "../../assets/image/slide1.png";
import slide2 from "../../assets/image/slide2.png";
import slide3 from "../../assets/image/slide3.png";
import slide4 from "../../assets/image/slide4.png";

const ImageSlider = () => {
	return (
		<main className="2xl:px-[126px] w-full  py-6 grid grid-cols-1 xl:grid-cols-2 border-b border-[#00000020]">
			<div className="sm:block hidden">
				<div className="flex items-start gap-5">
					<div className="w-[59px] h-[59px] rounded-full bg-gradient-to-b from-[#28A745] to-[#10411B] text-white font-semibold text-3xl flex items-center justify-center">
						?
					</div>
					<h1 className="text-[40px] font-extrabold text-black">
						چرا
						<span className="text-primery"> تورینو</span>؟
					</h1>
				</div>
				<div>
					<h1 className="text-[36px] mt-4 font-medium text-[#282828]">
						تور طبیعت گردی و تاریخی{" "}
					</h1>
					<p className="text-[24px] mt-4 leading-[50px] font-medium text-[#282828]">
						اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
						طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
						طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
						آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و
						تاریخی را خریداری کنید.
					</p>
				</div>
			</div>
			<Swiper
				effect={"cards"}
				grabCursor={true}
				modules={[EffectCards]}
				className="mySwiper"
			>
				<SwiperSlide>
					<Image src={slide1} alt="slide pic" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={slide2} alt="slide pic" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={slide3} alt="slide pic" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={slide4} alt="slide pic" />
				</SwiperSlide>
			</Swiper>
		</main>
	);
};

export default ImageSlider;
