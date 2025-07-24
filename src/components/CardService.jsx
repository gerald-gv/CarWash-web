const CardService = (props) => {
  return (
          <article className={'card main-services--card'+props.id}>
            <h2>{props.titulo}</h2>
            <img src={props.img} alt="img" />
            <div>
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
/*
// Componente CardList
function CardList(props) {
  return (
    <div className="card-list">
      {props.cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
}

// Componente principal
function App() {
  const cardsData = [
    { title: "Card 1", content: "Contenido de la tarjeta 1" },
    { title: "Card 2", content: "Contenido de la tarjeta 2" },
    { title: "Card 3", content: "Contenido de la tarjeta 3" },
  ];

  return (
    <div>
      <h1>Lista de Tarjetas</h1>
      <CardList cards={cardsData} />
    </div
  );
}
  */