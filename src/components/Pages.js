import {Switch, Route} from "react-router-dom";
import Inicio from "./inicio/Inicio";
import ProductsDetails from "./products/ProductsDetails";
import ProductsList from "./products/ProductsList";

const Pages = () => {

    return (
        <div>
            <Switch>
                <Route path="/" exact component={Inicio}></Route>
                <Route path="/productos" exact component={ProductsList}/>
                <Route path="/detalles/:id" exact component={ProductsDetails}/>
            </Switch>
        </div>
    )
}

export default Pages
