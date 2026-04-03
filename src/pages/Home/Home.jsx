import { useState, useEffect } from "react";
import { fetchRestaurant } from "../../api/restaurantsApi";
import { RestaurantCard, FilterTabs } from "../../components/index";

export function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchRestaurant().then((res) => setData(res.data.restaurants));
  }, []);

  return (
    <>
      <FilterTabs />
      <ul className="grid grid-cols-3 gap-[24px] w-full max-w-[1080px] m-auto pb-[50px]">
        {data.map((item) => (
          <RestaurantCard
            id={item.id}
            img={item.image}
            name={item.name}
            tags={item.tags}
          />
        ))}
      </ul>
    </>
  );
}
