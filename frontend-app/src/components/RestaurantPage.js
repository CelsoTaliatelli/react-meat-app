import { useParams } from "react-router-dom";
import Banner from "./RestaurantBanner";
import RestaurantMenu from "./RestaurantMenu";

export default function RestaurantPage() {
    let { id } = useParams();
    return(
        <div>
            <Banner restaurantId={ id }/>
            <RestaurantMenu restaurantId={ id } />
        </div>
       
    );
}