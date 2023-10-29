import { Button, Image } from "@nextui-org/react";

const CTA = () => {
    return (
        <section className="my-20 px-5">
            <div className="md:container lg:max-w-6xl mx-auto flex flex-col justify-center items-center md:gap-x-10 md:flex-row">
                <Image
                    src="https://www.malasngoding.com/wp-content/uploads/2020/06/ebook-html-dan-css-dasar.png"
                    className="flex-2"
                />
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-extrabold">
                        Download Ebook belajar HTML & CSS dasar untuk pemula
                        gratis.
                    </h2>
                    <p className="my-5">
                        Ebook ini bisa di download oleh teman-teman yang baru
                        mulai belajar HTML dan CSS dasar tapi tidak tahu mau
                        memulai belajar dari mana. materi pembelajaran sudah di
                        susun secara sistematis dan di dukung contoh gambar.
                    </p>
                    <Button
                        color="primary"
                        variant="solid"
                        className="font-semibold"
                    >
                        Download
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
