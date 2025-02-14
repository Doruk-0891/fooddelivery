const Hero = () => {
  return (
    <div className="h-[34vw] my-8 mx-auto relative bg-[url(/header_img.png)] bg-contain bg-no-repeat">
      <div className="absolute flex flex-col items-start md:gap-[1.5vw] gap-2 max-w-[50%] bottom-[10%] left-[6vw]">
        <h2 className="font-semibold text-white text-[3vw] md:text-[4.5vw]">Order your favorite food here</h2>
        <p className="text-white text-[1vw]">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button className="border-none text-[#747474] font-semibold bg-white rounded-[50px] text-[2vw] md:text-xs px-4 py-1 lg:px-10 lg:py-5">Explore Menu</button>
      </div>
    </div>
  )
}

export default Hero