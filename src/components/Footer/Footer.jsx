export function Footer() {
  return (
    <div className="w-full pt-[24px] pb-[32px] bg-[#ffffff]">
      <div className=" flex justify-between w-full max-w-[1080px] h-full m-auto">
        <div className="w-[500px]">
          <div className="h-[40px] mb-[20px]">
            <img src="/assets/img/svg/header-logo.svg" alt="" />
          </div>
          <div className="flex gap-3.5 mb-[12px]">
            <span className="text-[16px] font-semibold text-[#12282F]">
              Biz haqimizda
            </span>
            <span className="text-[16px] font-semibold text-[#12282F]">
              Ommaviy oferta
            </span>
            <span className="text-[16px] font-semibold text-[#12282F]">
              Bog’lanish
            </span>
          </div>
          <p className="text-[14px] text-[#5A696E]">
            10 dan oshiq restoran, choyxona va kafelarni tanlab oson buyurtma
            berishingiz mumkin. Bularning barchasini telefoningizda turib
            bajarish mumkin
          </p>
        </div>
        <div className="flex items-center gap-[12px] w-[500px]">
          <div className="flex justify-between pl-[12px] pr-[24px] items-center w-[160px] h-[60px] bg-[#F7F7F7] rounded-[12px]">
            <div>
              <img src="/assets/img/svg/apple-icon.svg" alt="" />
            </div>
            <div>
              <span className="text-xs font-normal text-[#B0B7BA]">
                Yuklab oling
              </span>
              <h3 className="text-[14px] font-bold text-[#12282F]">
                App Store
              </h3>
            </div>
          </div>
          <div className="flex justify-between pl-[12px] pr-[24px] items-center w-[160px] h-[60px] bg-[#F7F7F7]  rounded-[12px]">
            <div>
              <img src="/assets/img/svg/market-icon.svg" alt="" />
            </div>
            <div>
              <span className="text-xs font-normal text-[#B0B7BA]">
                Yuklab oling
              </span>
              <h3 className="text-[14px] font-bold text-[#12282F]">
                Google Play
              </h3>
            </div>
          </div>
          <div className="flex justify-between pl-[12px] pr-[24px] items-center w-[160px] h-[60px] bg-[#F7F7F7] rounded-[12px]">
            <div>
              <img src="/assets/img/svg/huawei-icon.svg" alt="" />
            </div>
            <div>
              <span className="text-xs font-normal text-[#B0B7BA]">
                Yuklab oling
              </span>
              <h3 className="text-[14px] font-bold text-[#12282F]">
                App Gallery
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
