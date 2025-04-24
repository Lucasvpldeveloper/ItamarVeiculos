import logo from '../../assets/logoitamar.png'
import H from "./header.module.scss"

export default function Header(){
    return(
        <header>
            <section className={H.boxLogo}>
                <img src={logo} alt="Logo loja itamar veiculos" />
            </section>
            <nav className={H.boxMenu}>
                <ul>
                    <li>Início</li>
                    <li>Quem Somos</li>
                    <li>Fale Conosco</li>
                </ul>
            </nav>
            <div className={H.boxSocial}>
                <button>
                    <img src="" alt="" />
                    <p>WhatsApp</p>
                </button>
                <button>
                    <img src="" alt="" />
                    <p>Instagram</p>
                </button>
            </div>
        </header>
    )
}