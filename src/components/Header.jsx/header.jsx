import logo from '../../assets/logoitamar.png'
import whats from '../../assets/whatsapp.png'
import insta from '../../assets/instagram.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from '../../Pages/Inicio/Inicio'
import QuemSomos from '../../Pages/QuemSomos/QuemSomos'
import FaleConosco from '../../Pages/FaleConosco/FaleConosco'
import H from "./header.module.scss"

export default function Header(){
    return(
            <BrowserRouter>
            <header>
                <section className={H.boxLogo}>
                    <Link to="/">
                    <img src={logo} alt="Logo loja itamar veiculos" />
                    </Link>
                </section>
                <nav className={H.boxMenu}>
                    <ul>
                        <li> <Link to="/">Início</Link> </li>
                        <li> <Link to="/quemSomos">Quem Somos</Link> </li>
                        <li> <Link to="/faleConosco">Fale Conosco</Link> </li>
                    </ul>
                </nav>
                <div className={H.boxSocial}>
                    <a href="#" target='blank'>
                        <div className={H.boxWhats}>
                            <img src={whats} alt="Logo whatsapp"/>
                            <p>WhatsApp</p>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/itamarveiculospe?igsh=MWsxNndsbXg4MjQ1eg==" target='blank'>
                        <div className={H.boxInsta}>
                            <img src={insta} alt="Logo instagram" />
                        </div>
                    </a>
                </div>
            </header>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/quemSomos' element={<QuemSomos/>}/>
                <Route path='/faleConosco' element={<FaleConosco/>}/>
            </Routes>
            </BrowserRouter>
    )
}