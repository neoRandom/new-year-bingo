import Container from "./components/Container";
import Waves from "./components/waves/Waves";

export default function Home() {
    return (
        <div>
            <div className="absolute top-0 left-0 w-screen h-full overflow-hidden">
                <div className="spotlight absolute -left-1/3 top-[60%] w-[175%] h-[150%]"></div>
                <div className="absolute bottom-0 w-full">
                    <Waves />
                </div>
            </div>
            <div className="absolute top-0 left-0 w-screen h-full flex items-center justify-center">
                <Container />
            </div>
        </div>
    );
}
