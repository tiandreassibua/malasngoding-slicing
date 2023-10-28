import React from "react";
import ProductItem from "./ProductItem";
import { Button } from "@nextui-org/react";

const ProductLists = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto">
                <div>
                    <h1 className="text-4xl font-bold">
                        Terbaru di Malas Ngoding
                    </h1>
                    <h2 className="font-medium text-gray-500">
                        Baca update artikel dan tutorial terbaru setiap harinya.
                    </h2>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-5 gap-10">
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </div>
                </div>
                <div className="mt-20 flex justify-center items-center flex-col gap-y-16">
                    <Button
                        variant="solid"
                        color="primary"
                        className="font-semibold"
                        size="lg"
                    >
                        Produk Lainnya
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ProductLists;
