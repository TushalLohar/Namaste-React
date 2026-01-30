
import Shimmer from "./shimmer_component";
import { FOOD_URL  } from "./utils/constants.utils";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";


const Menu = () => {
  

  const {resID} =useParams();
  const restInfo = useRestaurantMenu(resID);

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="menu-item">
            
            {/* LEFT SIDE: Text Info */}
            <div className="menu-item-text">
              <h2>{item.card.info.name}</h2>
              <p className="price">
                ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              </p>
              <p className="rating">✪ {item.card.info.ratings.aggregatedRating.rating}</p>
              <p className="description">{item.card.info.description}</p>
            </div>

            {/* RIGHT SIDE: Image + Add Button */}
            <div className="menu-item-image">
              <img
                src={FOOD_URL + item.card.info.imageId}
                alt={item.card.info.name}
              />
              <button className="add-btn">ADD</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
