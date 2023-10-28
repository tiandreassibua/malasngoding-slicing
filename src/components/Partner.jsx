import { Image } from "@nextui-org/react";
import React from "react";

const Partner = () => {
    return (
        <section className="bg-gray-200 py-20 border-y border-gray-300">
            <div className="container mx-auto">
                <h1 className="uppercase text-center text-lg font-bold text-gray-500">
                    TELAH KERJA SAMA DENGAN 100+ PARTNER
                </h1>
                <div className="flex justify-center items-center gap-20 mt-7">
                    <Image
                        src="https://assets.bukalapak.com/daisy/compro/docs/media/brand-assets/9fe100e-1.png"
                        width={150}
                    />
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tokopedia.svg/250px-Tokopedia.svg.png"
                        width={150}
                    />
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/250px-Shopee.svg.png"
                        width={150}
                    />
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/175px-DigitalOcean_logo.svg.png"
                        width={150}
                    />
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/200px-Discord_logo.svg.png"
                        width={150}
                    />
                </div>
            </div>
        </section>
    );
};

export default Partner;
