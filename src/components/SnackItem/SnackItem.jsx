function SnackItem(props) {
    return (
        <li className='snack__item'>
            <p className='snack__name'>{props.name}</p>
            <p className='snack__price'>{props.price} ₽</p>
        </li>
    )
}
export default SnackItem