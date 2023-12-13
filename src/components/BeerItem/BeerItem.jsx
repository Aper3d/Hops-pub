/* eslint-disable react/prop-types */
function BeerItem(props) {

    return (
        <li className='beer__item'>
            <div className="beer__full">
                <p className="tap__number">{props.tap}</p>
                <div className="beer__container">
                    <h4 className="beer__brew">{props.brewery}</h4>
                    <h3 className='beer__name'>{props.name}</h3>
                </div>
                <div className="beer__info">
                    <p className="beer__avb">{`AVB ${props.avb}%`}</p>
                    <p className="beer__avb">{`IBU ${props.ibu}`}</p>
                    <h3 className="beer__price">{props.price}</h3>
                </div>
            </div>
            {/* <div className="beer__info-container">
                <button className="beer__button" onClick={setIsActive(true)}>Подробнее</button>
                <div className={isActive ? 'beer__info' : 'beer__info_hidden'}>
                    <p className="beer__about">{props.about}</p>
                    <a className="beer__link" href={props.link} target="blank">untappd</a>
                </div>
            </div> */}
        </li>
    )
}
export default BeerItem