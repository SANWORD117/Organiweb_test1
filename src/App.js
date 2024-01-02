import './App.css';
import logo from './img/user.png';
import React, { useState } from 'react';




function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const abrirModal = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  return (
    
    <div className="App">
      {/* ----------------------- titulo ----------------------- */}
      <h1>Secretaria General</h1>
      <br/><br/>
      {/* ----------------------- Contenedores Con Imagenes ----------------------- */}
      <div className="Container" onClick={abrirModal}>
        <div className="Img">
          <img src={logo} alt="Descripción de la imagen"/>
        </div>
        <br/><br/>
        <h2>Esmeralda Molina</h2>
        <h3>Secretaria General</h3>
      </div>
      {/* ----------------------- Ventana Modal ----------------------- */}
      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="cerrar-modal" onClick={cerrarModal}>
              &times;
            </span>
            <br/><br/>
            {/* ----------------------- Contenedor Con Imagen Dentro De Modal ----------------------- */}
            <div className="Container">
              <div className="Img">
                <img src={logo} alt="Descripción de la imagen"/>
              </div>
              <br/><br/>
              <h2>Esmeralda Molina</h2>
              <h3>Secretaria General</h3>
            </div>
            {/* ----------------------- Contenedor De Informacion ----------------------- */}
            <div className="Container-info">
            <br/><br/><br/>
                <h2>Historia Laboral</h2>
            </div>
          </div>
        </div>
      )}

      <div className="Container2">
        <div className="Img2">
          <img src={logo} alt="Descripción de la imagen"/>
        </div>
        <br/><br/>
        <h2>Esmeralda Molina</h2>
        <h3>Secretaria General</h3>
      </div>

      <div className="Container3">
        <div className="Img3">
          <img src={logo} alt="Descripción de la imagen"/>
        </div>
        <br/><br/>
        <h2>Esmeralda Molina</h2>
        <h3>Secretaria General</h3>
      </div>

      <div className="Container4">
        <div className="Img4">
          <img src={logo} alt="Descripción de la imagen"/>
        </div>
        <br/><br/>
        <h2>Esmeralda Molina</h2>
        <h3>Secretaria General</h3>
      </div>

      <div className="Container5">
        <div className="Img5">
          <img src={logo} alt="Descripción de la imagen"/>
        </div>
        <br/><br/>
        <h2>Esmeralda Molina</h2>
        <h3>Secretaria General</h3>
      </div>
{/* ----------------------- Conexiones ----------------------- */}
      <div className="LineBarX"></div>
      <div className="LineBarX2"></div>
      <div className="LineBarY"></div>
      <div className="LineBarY2"></div>
      <div className="LineBarY3"></div>

{/*  */}
    </div>
  );
}

export default App;
