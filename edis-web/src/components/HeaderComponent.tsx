import React from 'react';
import { Image } from 'primereact/image';

const HeaderComponent: React.FC = () => {
    return (
        <header className="header-container mt-4 d-flex align-items-center justify-content-center">
            <Image src="/sbwc.JPG" alt="SBWC Logo" width="100" />
            <h4 className="mb-3 text-center" style={{ color: 'white', flex: 2 }}>
                <b>Enforcement Division Information System (EDIS)</b>
            </h4>
        </header>
    );
};

export default HeaderComponent;
