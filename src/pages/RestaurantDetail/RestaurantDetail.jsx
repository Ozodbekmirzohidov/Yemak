import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CategoryTabs, Modal } from "../../components";

export function RestaurantDetail() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [choose, setChoose] = useState(null);

  const fetchRes = async () => {
    try {
      const res = await fetch(
        `https://api.yemak.uz/user/restaurant/product?id=${id}`,
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    fetchRes().then((res) => setData(res?.data?.products));
    console.log(data);
  }, [id]);

  return (
    <>
      {choose && <Modal meal={choose} close={() => setChoose(null)} />}
      <CategoryTabs />
      <div className="w-full max-w-[1080px] m-auto">
        {data.map((item) => (
          <div key={item.id}>
            <h2 className="mb-[16px] text-[24px] font-bold">{item.title}</h2>
            <ul className="grid grid-cols-3 gap-[32px]">
              {item.products?.map((product) => (
                <li
                  onClick={() => setChoose(product)}
                  key={product.id}
                  className="rounded-[16px] overflow-hidden border border-[#F0F0F0] bg-[#FFFFFF] mb-[10px]"
                >
                  <div className="w-full rounded-[12px] overflow-hidden mb-[12px]">
                    <img
                      src={product.photo}
                      alt={product.name}
                      className="w-full"
                    />
                  </div>
                  <div className="text-[15px] text-[#12282F] font-semibold mb-[15px] ml-[12px]">
                    {product.name}
                  </div>
                  <div className="font-bold text-[18px] text-[#12282F] ml-[12px]">
                    {product.price} so'm
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
