"use client";

import { useState } from "react";
import goals from "../constants/goals";
import Goal from "./Goal";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import bingo_prizes from "../constants/bingo_prizes";

export default function Container() {
    const [isBingo, setIsBingo] = useState(false);

    return (
        <div className="absolute w-full sm:w-fit min-h-[50%] glassmorph sm:rounded-[32px]">
            <div className="w-full h-full p-4">
                <h1 className="text-4xl p-4 text-center font-semibold">
                    Bingo Card (2025)
                </h1>
                <div className="mx-auto sm:w-[480px] 2xl:w-[640px] aspect-square p-2 border-neutral-500/50 border-2 rounded-lg">
                    <div className="grid grid-cols-5 gap-2">
                        {Object.values(goals).map((value, i) => {
                            return (
                                <div key={i}>
                                    <Goal {...value} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <button
                    type="button"
                    onClick={() => setIsBingo(true)}
                    className="block font-semibold mx-auto mt-4 p-1 w-1/3 border-2 border-green-600 hover:bg-green-600 rounded-lg hover:-translate-y-0.5 transition-all"
                >
                    Bingo!
                </button>
                {isBingo &&
                    createPortal(
                        <Modal
                            title="Bingo values"
                            content={bingo_prizes}
                            setActive={setIsBingo}
                        />,
                        document.body
                    )}
            </div>
        </div>
    );
}
