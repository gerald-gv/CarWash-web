import borrarIcon from "/images/borrar.png";
const CardService = (props) => {
  window.scrollTo(0, 0)
  const agregarServicio = (id) => {
    id = id - 1;
    const cards = document.getElementsByClassName("flip-card-inner");
    console.log(cards);
    console.log(id);
    cards[id].style.transform="rotateY(180deg)";
  }
  const cancelarServicio = (id) => {
    id = id - 1;
    const cards = document.getElementsByClassName("flip-card-inner");
    console.log(cards);
    console.log(id);
    cards[id].style.transform="";
  }
  
  return (
          <div className="flip-card">
            <article className={'flip-card-inner card main-services--card'+props.id}>
                <div className="flip-card-front">
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
                      <button className={'button button'+props.id} onClick={() => agregarServicio(props.id)}>Reservar</button>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back relative">
                  <div className="flex justify-between items-center mr-[16px] ml-[16px] h-[10%]">
                      <img src={borrarIcon} alt="boton borrar" onClick={() => cancelarServicio(props.id)}/>
                      <p>x<span>1</span></p>
                  </div>
                  <div className="grid content-center items-center h-[90%]">
                    <p className="flip-card-back--text">Reservado</p>
                  </div>
                </div>
            </article>
          </div>
  );
}
export default CardService