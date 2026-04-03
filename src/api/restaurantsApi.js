export const fetchRestaurant = async () => {
  const restaurantUrl = `https://api.yemak.uz/user/restaurant`;
  try {
    const res = await fetch(restaurantUrl);
    const data = await res.json();
    return data;
  } catch(error) {
    console.error(error);
    return [];
  }
};
