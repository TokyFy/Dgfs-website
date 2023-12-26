import React from 'react';
import {Facebook, Linkedin, Mail} from "lucide-react";

function Footer() {
    return (
        <footer
            className="flex flex-col items-centertext-center text-white">
            <div
                className="w-full bg-white text-neutral-400 bg-opacity-10 p-6 text-center  text-sm"> © 2023 Copyright :
                <a className=""> Direction Générale de Fourniture des Soins </a>
            </div>
        </footer>
    );
}

export default Footer;