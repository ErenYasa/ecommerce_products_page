import { useLayoutEffect } from "react";

export const useLockBodyScroll = (active: boolean): void => {
    useLayoutEffect(() => {
        const { body } = document;

        if (active) {
            const { scrollY } = window;
            body.style.position = "fixed";
            body.style.top = `-${scrollY}px`;
        }

        return () => {
            if (body.style.position === "fixed") {
                const bodyTop = body.style.top;
                body.style.position = "";
                body.style.top = "";
                window.scrollTo(0, parseInt(bodyTop || "0", 10) * -1);
            }
        };
    }, [active]);
};
