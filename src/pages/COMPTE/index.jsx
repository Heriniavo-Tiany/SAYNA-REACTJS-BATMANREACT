import './styles.css';
import Header from "./Header";
import MonProfil from "./MonProfil";

const Eshop = () => {
    return (
        <>
            <Header/>
            <MonProfil/>
            <footer className="footer">
                <div className="flex-col flex">
                    <p className="white">
                        <img src="../assets/logos/logo_0.png" alt="warner-bros"/>
                        Ce projet respecte l’univers cinématographique des films Batman récents. Version
                        Nolan &amp; Snyder &amp;
                        Reeves
                    </p>
                    <div className="social-icons flex">
                        <img className="logo-sayna" src="../assets/logos/logo_1.png" alt="sayna"/>
                        <img className="x-white-3" src="../assets/logos/logo_2.png" alt="X white 3"/>
                        <img className="vector" src="../assets/logos/logo_3.png" alt="Vector"/>
                        <img className="icons logo-fb" src="../assets/logos/logo_4.1.png" alt="icons / facebook"/>
                        <img className="icons logo-ig" src="../assets/logos/logo_5.png" alt="icons / instagram"/>
                        <img className="logo-tw icons" src="../assets/logos/logo_6.png" alt="icons / twitter"/>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Eshop;