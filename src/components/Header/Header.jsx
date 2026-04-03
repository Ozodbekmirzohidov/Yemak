export function Header() {
  return (
    <div className="w-full h-[78px] bg-[#ffffff]">
      <header className="flex items-center w-full max-w-[1080px] h-full mx-auto ">
        <div className="w-full max-w-[134px] ">
          <img
            className="w-full h-[40px]"
            src="../public/assets/img/svg/header-logo.svg"
            alt="logo"
          />
        </div>
        <div className="flex justify-between  ml-[24px]">
          <div className="relative  h-[42px]">
            <img
              className="absolute top-[50%] translate-y-[-50%] left-[10px]"
              src="../public/assets/img/svg/search-icon.svg"
              alt="search-icon"
            />
            <input
              className="w-[300px] h-full pl-[38px] border border-[#F0F0F0] outline-none rounded-[10px] text-[16px] font-medium  bg-[#F7F7F7]"
              type="text"
              placeholder="Izlash"
            />
            {/* <img
              className="absolute top-[50%] translate-y-[-50%] right-0"
              src="../public/assets/img/svg/remove-icon.svg"
              alt="x icon"
            /> */}
          </div>

          <div className="relative flex items-center w-[228px]  ml-[28px] pl-[36px] border border-[#ddd9d9] rounded-[10px]">
            <img
              className="absolute left-[14px]"
              src="../public/assets/img/svg/location-icon.svg"
              alt="location-icon"
            />
            <h3 className="text-[14pxpx] font-semibold">
              Yoshlar markazi ofis
            </h3>
            <img
              className="absolute right-[12px]"
              src="../public/assets/img/svg/right-icon.svg"
              alt="right icon"
            />
          </div>
          <ul className="flex justify-between w-[294px] h-[42px] ml-[78px]">
            <li className="flex flex-col items-center mb-[2px] h-full w-max">
              <img
                className="w-[24px] h-[24px]"
                src="../public/assets/img/svg/receipt-icon.svg"
                alt=""
              />
              <span className="text-[12px] font-semibold text-[#5A696E]">
                Buyurtmalar
              </span>
            </li>
            <li className="flex flex-col items-center mb-[2px] h-full w-max">
              <img
                className="w-[24px] h-[24px]"
                src="../public/assets/img/svg/basket-icon.svg"
                alt=""
              />
              <span className="text-[12px] font-semibold text-[#5A696E]">
                Savatcha
              </span>
            </li>
            <li className="flex flex-col items-center mb-[2px] h-full w-max">
              <img
                className="w-[24px] h-[24px]"
                src="../public/assets/img/svg/world-icon.svg"
                alt=""
              />
              <span className="text-[12px] font-semibold text-[#5A696E]">
                O’zbekcha
              </span>
            </li>
            <li className="h-full w-max">
              <img src="../public/assets/img/svg/user.svg" alt="" />
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
