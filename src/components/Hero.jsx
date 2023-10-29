import { Button, Image } from "@nextui-org/react";
import { BsPatchCheckFill } from "react-icons/bs";

import heroImg from "../assets/hero.png";

const Hero = () => {
    return (
        <section className="bg-gray-100">
            {/* <div className="container md:container md:w-1/2 md:flex-col mx-auto py-20 gap-5 flex"> */}
            <div className="py-10 px-5 md:flex md:gap-x-5 md:items-center md:container md:mx-auto">
                <div className="md:w-1/2">
                    <strong className="flex items-center">
                        <BsPatchCheckFill className="mr-2 text-green-700" />{" "}
                        Trusted Educated platform
                    </strong>
                    <h1 className="text-3xl md:text-5xl font-bold my-5">
                        <span className="text-blue-500">Belajar ngoding</span>{" "}
                        dari paling dasar sampai expert.
                    </h1>
                    <h2 className="md:text-xl text-gray-500">
                        Materi lengkap dalam bentuk video dan tulisan yang
                        terstruktur dan mudah dipahami.
                    </h2>
                    <div className="flex gap-3 mt-10">
                        <Button
                            className="bg-slate-900 font-semibold text-white"
                            variant="solid"
                            size="md"
                        >
                            Alur Belajar
                        </Button>
                        <Button
                            className="bg-blue-500 font-semibold text-white"
                            variant="solid"
                            size="md"
                        >
                            Premium
                        </Button>
                    </div>
                </div>
                <div className="mt-10 md:w-1/2">
                    <Image src={heroImg} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
