import './styles.css';
import Filter from "../Filter";

const Catalogue = () => {
    const items = [
        {title: "Sweat “why so serious”", price: "55€", price2: "32€"},
        {title: "Horloge", price: "16€", price2: "8€"},
        {title: "Mug", price: "126€", price2: "9€"},
        {title: "Mug voyage", price: "39€", price2: "25€"},
        {title: "T Shirt batmobile", price: "", price2: "25€"},
        {title: "Horloge", price: "", price2: "8€"},
        {title: "SAc a dos", price: "", price2: "25€"},
        {title: "poster batman (2022)", price: "", price2: "32€"},
        {title: "Mug", price: "", price2: "16€"},
    ];


    return (
        <div id="divGame">
            <img id="arrowDown" src="./assets/Logos/flèche_down_header.png" alt=""/>
            <img id="chevalierNoir" src="../assets/icones/flèche_down_header.png" alt=""/>
            <br/>
            <div className="row">
                <div className="col-md-3">
                   <Filter/>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {items.map((item, index) => (
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={`../assets/images/article_${index}.png`} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.price} {item.price2}</p>
                                    </div>
                                </div>
                                <button className="demarrer">AJOUTER AU PANIER</button>
                            </div>
                        ))}
                        {items.map((item, index) => (
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={`../assets/images/article_${index}.png`} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.price} {item.price2}</p>
                                    </div>
                                </div>
                                <button className="demarrer">AJOUTER AU PANIER</button>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Catalogue;