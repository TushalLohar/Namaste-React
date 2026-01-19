import { CDN_URL } from "./utils/constants.utils";



const Restaurantcard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    sla,
  } = resData;

  return (
    <div className="restcard" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="rest-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(" ,")}</h4>
      <h4>{avgRating} 🌟</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default Restaurantcard;
