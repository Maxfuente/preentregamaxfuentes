const Item = ({id,name,img,price,stock})=>{

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="IteamHeader">
                    {name}
                    </h2>
                    </header>
                    <picture>
                        <img src={img} alt={name} className="ItemImg"/>
                    </picture>
                    <section>
                        <p className="Info">
                            precio:${price}
                    
                        </p>
                        <p className="Info">
                            Stock disponible: {stock}
                        </p>
                    </section>
                    <footer className="ItemFooter">
                        <button className="Option">Ver detalle</button>
                    </footer>
                    </article>
    )
}

export default Item