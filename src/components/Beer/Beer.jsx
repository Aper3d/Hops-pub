import "./Beer.css"
import { beers } from "../../const/beer"
import BeerItem from "../BeerItem/BeerItem"

function Beer() {
    return (
        <section className="beer">
            <h2 className="title">Сегодня на кранах</h2>
            <ul className="beer__list">
                {beers.map((item) => {
                    return (
                        <BeerItem
                            key={item.tap}
                            tap={item.tap}
                            name={item.name}
                            brewery={item.brewery}
                            style={item.style}
                            avb={item.avb}
                            ibu={item.ibu}
                            about={item.about}
                            link={item.link}
                            price={item.price}
                        />
                    )
                })
                }
            </ul>
        </section>
    )
}
export default Beer