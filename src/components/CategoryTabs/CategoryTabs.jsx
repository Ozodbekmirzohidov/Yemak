import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function CategoryTabs() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.yemak.uz/user/restaurant/category?id=${id}`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [id]);

  if (!data) return null;

  return (
    <ul className="flex items-center gap-[10px] w-full max-w-[1080px] mx-auto mt-[30px] mb-[24px] h-[48px] pl-[8px] bg-[#FFFFFF] rounded-[12px]">
      {data.map((item) => (
        <li
          key={item.id}
          className="cursor-pointer rounded-[8px] px-[12px] py-[6px] text-[#12282F] text-[14px] border border-[#e8e4e4]"
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}
