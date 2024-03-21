import React, { useState,useEffect } from "react";

function Slideshow() {
    const imagens = ['Slide.webp','slide2.webp'];
    const [indiceAtual,setIndiceAtual] = useState(0);

    const proximoSlide = () => {
        setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
    };
        const voltarSlide = () => {
         setIndiceAtual((prevIndice) => (prevIndice - 1 +  imagens.length) % imagens.length);
    };
    useEffect(() => {
    const interval = setInterval(proximoSlide,5000);

    return()=> clearInterval(interval);
}, []);
    return (
        <div>
            <img src={imagens[indiceAtual]} alt={`Imagem ${indiceAtual + 1}`} />
            <button onClick={voltarSlide}style={{ backgroundColor: 'orangered', color: 'white' }}>Anterior</button>
            <button onClick={proximoSlide}style={{ backgroundColor: 'orangered', color: 'white' }}>Próximo</button>
        </div>
    
    );
    }

export default Slideshow;