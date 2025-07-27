const CardService = (props) => {
  return (
          <article className={'card main-services--card'+props.id}>
              <h2>{props.titulo}</h2>
              <img src={props.img} alt="img" />
              <div className="face front">
                <ul>
                  {props.items.map((li, index) => (
                    <li key={index}>{li}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p>Precio: <span>{'s/'+props.precio}</span></p>
                <div className='main-services--card--button'>
                  <button className={'button button'+props.id}>Reservar</button>
                </div>
              </div>
          </article>
  );
}
export default CardService