import { Button, Pagination } from "@nextui-org/react";
import PostItem from "./PostItem";

const PostList = () => {
    return (
        <section>
            <div className="container mx-auto px-5">
                <div className="mt-20">
                    <h1 className="text-center text-2xl md:text-4xl font-bold">
                        Terbaru di Malas Ngoding
                    </h1>
                    <h2 className="text-center font-medium text-gray-500">
                        Baca update artikel dan tutorial terbaru setiap harinya.
                    </h2>
                </div>
                <div className="mt-20">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <PostItem />
                        <PostItem />
                        <PostItem />
                        <PostItem />
                        <PostItem />
                        <PostItem />
                        <PostItem />
                        <PostItem />
                    </div>
                </div>
                <div className="my-20 flex justify-center items-center flex-col gap-y-16">
                    <Pagination total={10} initialPage={1} />
                    <Button
                        variant="solid"
                        color="primary"
                        className="font-semibold"
                        size="lg"
                    >
                        Semua Tutorial
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PostList;
