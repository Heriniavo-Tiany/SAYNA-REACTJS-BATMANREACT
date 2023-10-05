import './styles.css';
const Header = () => {
    return (
        <section className="hero2">
            <nav className="navbar">
                <div className="logo">
                    <img src="../assets/logos/logohome.png" alt="logo"/>
                </div>
                <ul>
                    <li><a href="index.html"><h1>HOME</h1></a></li>
                    <li><a href="#"><h1 id="game" className="inactive">GAME</h1></a></li>
                    <li><a href="/"><h1 id="game"  className="inactive">E-SHOP</h1></a></li>
                    <li><a href="/compte"><h1 id="game">Mon Compte</h1></a></li>
                </ul>
            </nav>
            <div>
                <h1 className="white">VOTRE IDENTITÉ</h1>
                <h1 className="white">SECRETE . . .</h1>
            </div>
        </section>
    )
}
export default Header;