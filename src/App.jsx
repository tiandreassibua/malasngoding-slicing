import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partner from "./components/Partner";
import PostList from "./components/PostList";
import ProductLists from "./components/ProductLists";

function App() {
    return (
        <div className="font-inconsolata">
            <Header />
            <Hero />
            <PostList />
            <ProductLists />
            <Partner />
            <CTA />
            <Footer />
        </div>
    );
}

export default App;
