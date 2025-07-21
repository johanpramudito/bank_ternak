import React from "react";
import HamburgerMenu from "@/components/HamburgerMenuPenyakit";

const SistemPenggemukan = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start :justify-start w-full h-fit">
      <div className="relative flex w-full h-full">
        <div className="relative flex h-screen w-full bg-[url(/penggemukan-ternak/sistem-penggemukan/bg.png)] bg-bottom bg-cover bg-no-repeat">
          <div className="w-full h-full bg-gradient-to-b from-black to-transparent absolute z-[0]"></div>
          <div className="lg:px-[127px] lg:py-[83px] p-10 gap-x-10 gap-y-5 lg:gap-y-10 flex flex-col justify-start items-start">
            <div className="flex flex-row lg:gap-y-10 gap-x-5 lg:gap-x-0 relative z-10 w-full">
              <h1
                className="font-unbounded font-bold text-[40px] lg:text-[96px] text-white flex-grow leading-none"
                data-aos="fade-up"
              >
                SISTEM <br /> PENGGEMUKAN
              </h1>
              <HamburgerMenu />
            </div>
            <div
              className="flex flex-col lg:gap-y-10 relative gap-y-5 w-full xl:w-1/2"
              data-aos="fade-up"
            >
              <p className="font-plus-jakarta-sans font-normal text-[20px] lg:text-[24px] text-white text-justify text-sm/relaxed">
                Pada sapi dapat dilakukan sistem penggemukan secara intensif
                maupun semi-intensif, dimana pada sistem intensif sapi berada
                pada kandang penuh, dan diberi pakan hijauan + konsentrat. Untuk
                sistem semi-intensif, sapi digembalakan pada siang hari, lalu
                dilanjut dikonsentrat pada sore hari. Durasi pengggemukan
                berkisar antara 3-4 bulan (90-120 hari)
              </p>
              <p className="font-plus-jakarta-sans font-normal text-[20px] lg:text-[24px] text-white text-justify text-sm/relaxed">
                Pada kambing sistem penggemukan dapat dilakukan dengan
                menggunakan kandang intensif (panggung), dengan lama penggemukan
                berkisar antara 2,5-3 bulan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SistemPenggemukan;
