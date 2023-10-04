import './styles.css';

const Filter = () => {
    return (
        <> <h1 className="white">Filtres</h1>
            <form action="#">
                <p>Prix</p>
                <input type="range" min={0} max={200}/>

                <div>
                    <p>Catégorie</p>
                    <hr/>

                    <div>
                        <input type="checkbox" id="Bestsellers"/> <label
                        htmlFor="Bestsellers">Bestsellers</label>
                        <span className="nb">(123)</span>
                    </div>

                    <div>
                        <input type="checkbox" id="Goodies"/> <label htmlFor="Goodies">Goodies</label>
                        <span className="nb">(456)</span>
                    </div>


                    <div>
                        <input type="checkbox" id="Vetements"/> <label htmlFor="Vetements">Vêtements</label>
                        <span className="nb">(789)</span>
                    </div>

                    <div>
                        <input type="checkbox" id="Affiches"/> <label
                        htmlFor="Affiches">Affiches/posters</label>
                        <span className="nb">(321)</span>
                    </div>

                    <div>
                        <input type="checkbox" id="Comics"/> <label htmlFor="Comics">Comics</label>
                        <span className="nb">(567)</span>
                    </div>

                    <div>
                        <input type="checkbox" id="Multimedia"/> <label htmlFor="Multimedia">Multimédia</label>
                        <span className="nb">(234)</span>
                    </div>

                    <div>
                        <input type="checkbox" id="Equipement"/> <label htmlFor="Equipement">Équipement</label>
                        <span className="nb">(890)</span>
                    </div>

                    <div>
                        <input type="checkbox" id="Bijoux"/> <label htmlFor="Bijoux">Bijoux</label>
                        <span className="nb">(432)</span>
                    </div>

                    <div>
                        <input type="checkbox" id="Vehicules"/> <label htmlFor="Vehicules">Véhicules</label>
                        <span className="nb">(123)</span>
                    </div>

                    <div>
                        <p>Couleur</p>
                        <hr/>

                        <p>Univers</p>
                        <hr/>

                        <div>
                            <input type="checkbox" id="Universe1"/> <label htmlFor="Universe1">The
                            Batman</label>
                        </div>

                        <div>
                            <input type="checkbox" id="Universe2"/> <label htmlFor="Universe2">The Dark Knight
                            Rises</label>
                        </div>

                        <div>
                            <input type="checkbox" id="Universe3"/> <label htmlFor="Universe3">Batman V
                            Superman</label>
                        </div>

                        <div>
                            <input type="checkbox" id="Universe4"/> <label htmlFor="Universe4">Batman et
                            Robin</label>
                        </div>

                        <div>
                            <input type="checkbox" id="Universe5"/> <label htmlFor="Universe5">Autres (comics,
                            dessin animés)</label>
                        </div>

                    </div>
                </div>
            </form>
        </>
    )
}
export default Filter;