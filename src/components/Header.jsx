import React from "react";
import { Button, Image } from "@nextui-org/react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
    return (
        <header className="shadow">
            <div className="container h-20 mx-auto flex justify-between items-center">
                <div className="md:flex md:gap-x-10 md:justify-center md:items-center">
                    <Image
                        width={200}
                        src="https://www.malasngoding.com/wp-content/uploads/2023/09/logo-1.png"
                        alt="logo"
                        className="ml-5"
                    />
                    <ul className="hidden md:flex justify-center md:gap-x-5 lg:gap-x-10">
                        <li>
                            <a
                                href="#"
                                className="py-1 hover:text-blue-500 font-semibold transition-all  duration-100 ease-in-out"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="py-1 hover:text-blue-500 font-semibold transition-all  duration-100 ease-in-out"
                            >
                                Tutorial
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="py-1 hover:text-blue-500 font-semibold transition-all  duration-100 ease-in-out"
                            >
                                Shop
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="py-1 hover:text-blue-500 font-semibold transition-all  duration-100 ease-in-out"
                            >
                                Demo
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="py-1 hover:text-blue-500 font-semibold transition-all  duration-100 ease-in-out"
                            >
                                CodeLab
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex md:gap-5">
                    <Button color="primary">Register</Button>
                    <Button color="primary">Login</Button>
                </div>
                <AiOutlineMenu className="text-[25px] mr-5 md:hidden" />
            </div>
        </header>
    );
};

export default Header;
