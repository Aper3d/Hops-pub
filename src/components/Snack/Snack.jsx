import './Snack.css'
import { lightSnacks, classicSnacks, seriousSnacks } from '../../const/snacks'
import SnackItem from '../SnackItem/SnackItem'

function Snack() {

    return (
        <section className='snack'>
            <h3 className='subtitle'>легкие</h3>
            <ul className='snack__container' id='light'>
                {lightSnacks.map((item) => {
                    return (
                        <SnackItem
                            key={item.name}
                            name={item.name}
                            price={item.price}
                        />
                    )
                })}
            </ul>
            <h3 className='subtitle'>классические</h3>
            <ul className='snack__container' id='classic'>
                {classicSnacks.map((item) => {
                    return (
                        <SnackItem
                            key={item.name}
                            name={item.name}
                            price={item.price}
                        />
                    )
                })}
            </ul>
            <h3 className='subtitle'>посерьезней</h3>
            <ul className='snack__container' id='serious'>
                {seriousSnacks.map((item) => {
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

export default Snack