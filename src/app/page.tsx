import { Header } from "@/components/header/Header";
import Image from "next/image";

export default function Home() {
    return (
        <>
        <main>
            <Header />
        </main> 
        <section className="container mx-auto">
            <div className="flex">
                <article className="w-1/3">bla</article>
                <article className="w-1/3">bla</article>
                <article className="w-1/3">bla</article>
            </div>
        </section>
        </>
    );
}
