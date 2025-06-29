import './Main.css';
import React from 'react';
import Header from './Header';

const Main = (props) => (
    <>
        <Header {...props}/> {/* Arrumei a barra do Header */}
        <div className="imga">
            <main className="content container-fluid">
                <div className="p-3 mt-3">
                    {props.children}
                </div>
            </main>
        </div>
            {/*apaguei o Header daqui */}
    </>
)
export default Main;