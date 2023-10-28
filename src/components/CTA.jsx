import { Button, Image } from "@nextui-org/react";

const CTA = () => {
    return (
        <section className="my-20">
            <div className="md:container lg:max-w-6xl mx-auto flex gap-x-10">
                <Image
                    src="https://www.malasngoding.com/wp-content/uploads/2020/06/ebook-html-dan-css-dasar.png"
                    className="flex-2"
                />
                <div className="flex-1">
                    <h2 className="text-4xl font-bold">
                        Download Ebook belajar HTML & CSS dasar untuk pemula
                        gratis.
                    </h2>
                    <p className="my-10">
                        Ebook ini bisa di download oleh teman-teman yang baru
                        mulai belajar HTML dan CSS dasar tapi tidak tahu mau
                        memulai belajar dari mana. materi pembelajaran sudah di
                        susun secara sistematis dan di dukung contoh gambar.
                    </p>
                    <Button color="primary" variant="solid" size="lg" className="font-semibold">Download</Button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
