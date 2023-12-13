import './Burger.css'
import '../Snack/Snack.css'
import { burgers, extra } from '../../const/burger'
import SnackItem from '../SnackItem/SnackItem'

function Burger() {
    return (
        <section className='burger'>
            <ul className='burger__list'>
                {burgers.map((item) => {
                    return (
                        <li className='burger__item' key={item.name}>
                            <div className='burger__container'>
                                <h3 className='burger__name'>{item.name}</h3>
                                <p className='burger__info'>{item.info}</p>
                            </div>
                            <h3 className='burger__price'>{item.price} ₽</h3>
                        </li>
                    )
                })}
            </ul>
            <h3 className='subtitle'>дополнительно</h3>
            <ul className='snack__container'>
                {extra.map((item) => {
                    return (
                        <SnackItem
                            key={item.name}
                            name={item.name}
                            price={item.price}
                        />
                    )
                })}
            </ul>
        </section>
    )
}

export default Burger