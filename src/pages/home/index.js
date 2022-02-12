import React from 'react';

const Home = () => {
    return ( 
    <div className="container">
        <div className="container__content">
            <div className="container__img">
                <img src="/assets/img/airport.svg" alt="Airport"/>
            </div>

            <div className="container__forms">
                <form action="" className="container__form">
                    <h1 className="container__title">Busca ofertas de vuelos</h1>

                    <div className="container__box">
                        <label>
                            Origen:
                            <select className="container__input">
                                <option value="1">Uno</option>
                                <option value="2">Dos</option>
                                <option selected value="3">Guadalajara</option>
                                <option value="4">Cuatro</option>
                            </select>
                        </label>
                    </div>

                    <div className="container__box">
                        <label>
                            Destino:
                            <select className="container__input">
                                <option value="1">Uno</option>
                                <option value="2">Dos</option>
                                <option selected value="3">México</option>
                                <option value="4">Cuatro</option>
                            </select>
                        </label>
                    </div>

                    <div className="container__box">
                        <label>
                            Fecha:
                            <select className="container__input">
                                <option value="1">Uno</option>
                                <option value="2">Dos</option>
                                <option selected value="3">Lunes, 15 de febrero de 2021 8:00</option>
                                <option value="4">Cuatro</option>
                            </select>
                        </label>
                    </div>

                    <div className="container__box">
                        <label>
                            Pasajeros:
                            <select className="container__input">
                                <option value="1">Uno</option>
                                <option value="2">Dos</option>
                                <option selected value="3">2 Adultos</option>
                                <option value="4">Cuatro</option>
                            </select>
                        </label>
                    </div>
                 
                    <button href="#">Buscar vuelos</button>
                    

                </form>
            </div>
        </div>
    </div>
     );
}
 
export default Home;