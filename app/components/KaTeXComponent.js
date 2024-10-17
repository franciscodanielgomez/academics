// components/KaTeXComponent.js
import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const KaTeXComponent = ({ equation, className = '' }) => {
    return (
        <span
            className={`katex ${className}`} // Acepta una clase adicional
            dangerouslySetInnerHTML={{
                __html: katex.renderToString(equation, { throwOnError: false }),
            }}
        />
    );
};

export default KaTeXComponent;