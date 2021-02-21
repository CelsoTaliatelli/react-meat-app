import { useParams } from "react-router-dom";
import { getById } from "../Services/API";
import Banner from "./RestaurantBanner";
import RestaurantMenu from "./RestaurantMenu";


export default function RestaurantPage() {
    let { id } = useParams();
    let banner = [];
    getById(id).then(function(response){
        response.data.forEach(r => {
            banner.push({
                name: r.name,
                description: r.description,
                banner: r.banner
            });
        });
    });
    return(
        <div>
            <Banner restaurant={banner} />
            <RestaurantMenu restaurantMenu={ id } />
        </div>
       
    );
}