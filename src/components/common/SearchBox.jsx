import Image from "next/image"
import locationImg from "./../../assets/image/location.png"
import searchImg from "./../../assets/image/search.png"
import calendarImg from "./../../assets/image/calendar.png"

const SearchBox = () => {
  return (
    <div className='w-[874px] h-[71px] px-2 flex items-center justify-between mx-auto mb-20 mt-10 border border-[#0000025] rounded-[20px] '>
        <div className=" cursor-pointer h-[56px] flex items-center justify-start gap-2">
            <Image src={locationImg} alt="location image"/>
            <p className="text-[#2c2c2c] text-xl">مبدا</p>
        </div>
        <div className="  cursor-pointer h-[56px] pr-3 flex items-center justify-start gap-2 border-r border-[#00000020]">
            <Image src={searchImg} alt="search image"/>
            <p className="text-[#2c2c2c] text-xl">مقصد</p>
        </div>
       <div className="flex items-center h-[56px] pr-3 border-r border-[#00000020]">
       <div className=" cursor-pointer flex items-center justify-start gap-2">
            <Image src={calendarImg} alt="calendar image"/>
            <p className="text-[#2c2c2c] text-xl">تاریخ</p>
        </div>
        <button className="w-[190px] h-[51px] bg-[#28A745] mr-[100px] rounded-2xl text-white font-medium text-2xl">جستجو</button>
       </div>
    </div>
  )
}

export default SearchBox