import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const KaTeXComponent = ({ equation, className = '' }) => {
    return (
        <span
            className={`katex ${className}`} // Acepta una clase adicional
            style={{ fontSize: '1rem' }} // Ajusta el tamaño de la fuente
            dangerouslySetInnerHTML={{
                __html: katex.renderToString(`\\displaystyle ${equation}`, { throwOnError: false }),
            }}
        />
    );
};

export default KaTeXComponent;