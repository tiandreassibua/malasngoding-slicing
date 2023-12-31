import {
    Button,
    Card,
    CardFooter,
    CardHeader,
    Chip,
    Image,
} from "@nextui-org/react";
import React from "react";

const ProductItem = () => {
    return (
        <div>
            <Card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-span-7"
            >
                <CardHeader className="absolute z-10 flex-col items-start bg-black/40">
                    <p className="text-tiny text-white/60 uppercase font-bold">
                        <Chip size="sm" color="warning">PHP</Chip>
                    </p>
                    <h4 className="text-white/90 font-medium text-sm">
                        Panduan Lengkap Laravel Untuk Pemula
                    </h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src="https://www.malasngoding.com/wp-content/uploads/2020/02/Ebook-Panduan-Lengkap-Laravel-Untuk-Pemula-Dari-Dasar-Sampai-Membuat-Aplikasi-Keuangan-276x300.png"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Breathing app icon"
                            className="rounded-full w-10 h-11 bg-black"
                            src="/images/breathing-app-icon.jpeg"
                        />
                        <div className="flex flex-col">
                            <p className="text-tiny text-white/60 line-through">
                                Rp.250,000,-
                            </p>
                            <p className="text-tiny text-green-500">
                                Rp.200,000,-
                            </p>
                        </div>
                    </div>
                    <Button radius="full" size="sm">
                        Beli
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ProductItem;
