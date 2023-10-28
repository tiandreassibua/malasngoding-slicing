import { Button, Image } from "@nextui-org/react";
import { BsPatchCheckFill } from "react-icons/bs";

import heroImg from "../assets/hero.png";

const Hero = () => {
    return (
        <section className="bg-gray-100">
            <div className="md:container lg:max-w-6xl mx-auto py-20 gap-5 grid grid-cols-2">
                <div className="w-full">
                    <strong className="flex items-center">
                        <BsPatchCheckFill className="mr-2 text-green-700" />{" "}
                        Trusted Educated platform
                    </strong>
                    <h1 className="text-5xl font-bold my-5">
                        <span className="text-blue-500">Belajar ngoding</span>{" "}
                        dari paling dasar sampai expert.
                    </h1>
                    <h2 className="text-xl text-gray-500">
                        Materi lengkap dalam bentuk video dan tulisan yang
                        terstruktur dan mudah dipahami.
                    </h2>
                    <div className="mt-10 space-x-3">
                        <Button
                            className="bg-slate-900 font-semibold text-white"
                            variant="solid"
                            size="lg"
                        >
                            Alur Belajar
                        </Button>
                        <Button
                            className="bg-blue-500 font-semibold text-white"
                            variant="solid"
                            size="lg"
                        >
                            Premium
                        </Button>
                    </div>
                </div>
                <div className="m-auto">
                    <Image src={heroImg} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
