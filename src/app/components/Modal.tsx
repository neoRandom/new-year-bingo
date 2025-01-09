import { Dispatch, SetStateAction } from "react";

type ModalProps = {
    title: string;
    content: string;
    setActive: Dispatch<SetStateAction<boolean>>;
};

export default function Modal({
    title,
    content: promisse,
    setActive,
}: ModalProps) {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/25">
            <div className="max-w-[75%] sm:max-w-[460px] p-6 rounded-lg glassmorph">
                <header className="flex items-center min-w-[200px] sm:min-w-[300px]">
                    <h2 className="flex-1 font-semibold sm:text-xl">{title}</h2>
                    <button
                        type="button"
                        onClick={() => setActive(false)}
                        className="text-sm sm:text-base px-2 py-1 border-white/50 border rounded-md hover:bg-white hover:text-black"
                    >
                        Close
                    </button>
                </header>
                <hr className="my-2" />
                <p className="p-2 text-lg">{promisse}</p>
            </div>
        </div>
    );
}
