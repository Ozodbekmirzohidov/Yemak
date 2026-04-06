import { useState, useEffect } from "react";

export function FilterTabs() {
  const [data, setData] = useState([]);

 const fetchCategory = async () => {
   try {
     const res = await fetch(`https://api.yemak.uz/user/category`);
     const json = await res.json();
     return json.data; 
   } catch (error) {
     console.error(error);
     return [];
   }
 };

  useEffect(() => {
    fetchCategory().then(setData);
  }, []);


  return (
    <div className="w-full max-w-[1080px] mx-auto mt-[44px] mb-[32px]">
      <h2 className="text-[32px] font-bold text-[#12282F] mb-[20px]">Restoranlar</h2>
      <ul className="flex items-center gap-[10px] pl-[12px] rounded-[12px] bg-[#ffffff]">
        {data.map((item) => {
          return (
            <li className="cursor-pointer rounded-[8px] px-[12px] py-[6px] border-2 border-red-500">
              <h3 className="text-[14px] text-[#12282F] font-semibold">
                {item.slug}
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
