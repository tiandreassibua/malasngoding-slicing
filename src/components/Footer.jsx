import React from "react";
import {
    BsFacebook,
    BsGithub,
    BsInstagram,
    BsWhatsapp,
    BsYoutube,
} from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="py-20 border-t border-t-gray-300">
            <div className="flex flex-col justify-center items-center">
                <ul className="font-bold flex gap-x-5">
                    <li className="hover:text-blue-500 text-lg transition-all duration-100 ease-in-out">
                        <a href="#">Tutorial</a>
                    </li>
                    <li className="hover:text-blue-500 text-lg transition-all duration-100 ease-in-out">
                        <a href="#">Shop</a>
                    </li>
                    <li className="hover:text-blue-500 text-lg transition-all duration-100 ease-in-out">
                        <a href="#">Circle</a>
                    </li>
                    <li className="hover:text-blue-500 text-lg transition-all duration-100 ease-in-out">
                        <a href="#">Cara Pembelian</a>
                    </li>
                    <li className="hover:text-blue-500 text-lg transition-all duration-100 ease-in-out">
                        <a href="#">Kontak</a>
                    </li>
                </ul>
                <div className="flex gap-5 my-10">
                    <BsYoutube />
                    <RiTwitterXFill />
                    <BsFacebook />
                    <BsInstagram />
                    <BsGithub />
                    <BsWhatsapp />
                </div>
                <h5 className="text-gray-600">
                    <span className="text-2xl">&copy;</span> 2023{" "}
                    <span className="font-bold">www.malasngoding.com</span>{" "}
                    dengan❤️
                </h5>
            </div>
        </footer>
    );
};

export default Footer;
