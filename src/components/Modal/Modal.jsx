import { createPortal } from "react-dom";
import { useState } from "react";

export function Modal({ meal, close }) {
  const [count, setCount] = useState(1);

  return createPortal(
    <div
      className="fixed flex items-center justify-center inset-0 bg-black/85"
      onClick={() => close()}
    >
      <div
        className="relative flex gap-[20px] w-[750px] p-5 bg-[#FFFFFF] rounded-[20px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute flex items-center justify-center top-5 right-5 w-8 h-8 cursor-pointer bg-[#F7F7F7] border border-[#F0F0F0] rounded-[50%]"
          onClick={() => close()}
        >
          x
        </div>
        <div className="border-2 border-red-500 w-[330px] h-[330px] rounded-[14px] overflow-hidden">
          <img className="w-full h-full " src={meal.photo} alt="" />
        </div>
        <div className="w-max">
          <h2 className="text-[24px] font-bold text-[#12282F] mb-[12px]">
            {meal.name}
          </h2>
          <h3 className="text-[14px] font-[400px] text-[#5A696E] mb-4">
            {meal.description || "Hozircha ma'lumotlar yo'q"}
          </h3>
          <div
            className="flex justify-between items-center w-[360px] p-3 rounded-[12px] bg-[#ffffff] mb-4"
            style={{ boxShadow: "0px 6px 20px 0px #12282F0F" }}
          >
            <div className=" w-max">
              <div className="text-[16px] font-bold text-[#12282F]">Miqdor</div>
              <div className="text-[14px] text-[#5A696E]">
                <span className="text-[16px] font-bold text-[#12282F]">
                  {count}{" "}
                </span>
                <span className="mr-[3px]">x</span>
                {meal.price * count} UZS
              </div>
            </div>
            <div className="flex gap-[10px]">
              <button
                onClick={() => setCount(count > 1 ? count - 1 : 1)}
                className="flex items-center justify-center w-[48px] h-[36px] bg-[#ffffff] border border-[#B0B7BA] rounded-[8px] cursor-pointer"
              >
                -
              </button>
              <div className=" flex items-center justify-center w-[48px] h-[36px] bg-[#F7F7F7] rounded-[8px]">
                {count}
              </div>
              <button
                onClick={() => setCount(count + 1)}
                className="flex items-center justify-center w-[48px] h-[36px] bg-[#ffffff] border border-[#B0B7BA] rounded-[8px] cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
          <div className="w-[360px] py-3 bg-[#EDC843] rounded-[10px] text-center text-[15px] font-semibold text-[#12282F] cursor-pointer">
            Savatchaga <span>{meal.price * count}</span>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
