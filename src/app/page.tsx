import { Loader } from "@googlemaps/js-api-loader";

export default function Home() {
    const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "",
        version: "weekly"
    })
    
    return (
        <main>
            <h1>Env vars</h1>
        </main>
    );
}
