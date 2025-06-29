import react from "react";
import { Link } from 'react-router-dom';
import './contato.css'
const Contato = (props) => (
    <>
        <div className="container3">
                <h1>CONTATE-ME</h1>
            <div className="container4">
                <a href="https://wa.me/5541995879717" class="whatsapp" target="_blank">
                    <i class="fa fa-whatsapp"> Whatsapp</i>
                </a>
                <a href="https://www.facebook.com/share/1Ar418MneC/" class="facebook" target="_blank">
                    <i class="fa fa-facebook"> Facebook</i>
                </a>
                <br/>
                <a href="mailto:luzia.boguchevski2@gmail.com" class="email" target="_blank">
                    <i class="fa fa-envelope"> E-mail</i>
                </a>
            </div>
        </div>
    </>
)
export default Contato;