import React from "react";
import Main from '../template/Main';
import './home.css'

const Home = () => (
    <Main icon="home" title="Início">
        <div className="container1">
            <div className="texto">
                <h1 className="display-4">Luzia Boguchevski </h1>
                <hr />
                <div className="texto1">
                    <p className="mb-3"> Corretora de imóveis.</p>
                    <a href="/contato" className="saiba"> Saiba mais</a>
                </div>
            </div>
        </div>
    </Main>
);

export default Home;