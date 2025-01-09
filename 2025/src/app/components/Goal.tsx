"use client";

import { useState } from "react";
import Modal from "./Modal";
import { createPortal } from "react-dom";

type GoalProp = {
    index: number;
    promisse: string;
    done: boolean;
};

export default function Goal(props: GoalProp) {
    const [active, setActive] = useState(false);

    return (
        <div>
            <div
                onClick={() => setActive(true)}
                className={`
                    aspect-square 
                    ${
                        props.done
                            ? "border-green-600/50"
                            : "border-neutral-500/50"
                    }
                    border-2 rounded-lg 
                    flex items-center justify-center 
                    select-none cursor-pointer 
                    transition-colors
                    ${
                        props.done
                            ? "hover:bg-green-600"
                            : "hover:bg-neutral-500"
                    }
                `}
            >
                {props.index}
            </div>

            {active &&
                createPortal(
                    <Modal
                        title="Your promisse"
                        content={props.promisse}
                        setActive={setActive}
                    />,
                    document.body
                )}
        </div>
    );
}
