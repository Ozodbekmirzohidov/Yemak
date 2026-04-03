import { useNavigate } from "react-router-dom";

export function RestaurantCard({ img, name, tags, id }) {
  const navigate = useNavigate()

  return (
    <li className="w-[344px] rounded-[16px] pb-[16px] overflow-hidden border border-[#F0F0F0] bg-[#FFFFFF] cursor-pointer" onClick={()=> navigate(`/restaurant/${id}`)}>
      <div className="w-full h-[180px] mb-[12px] overflow-hidden rounded-[16px] ">
        <img className="w-full h-full" src={img} alt={name} />
      </div>
      <div>
        <div className="ml-[12px] text-16px font-bold text-[#12282F] mb-[6px]">
          {name}
        </div>
        <div className="ml-[12px] font-semibold text-[14px] text-[#5A696E]">
          {tags?.join(", ")}
        </div>
      </div>
    </li>
  );
}
