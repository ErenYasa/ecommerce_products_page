import { RefObject, useEffect } from "react";

export const useOutsideClick = (
    ref: RefObject<HTMLElement>,
    cb: () => void,
    outsideClick: boolean
): void => {
    const handleClickOutside = (event: MouseEvent) => {
        // const bypassNodeList: string[] = [];
        // const clickedOnBypassNode = bypassNodeList.some((node) => (event.target as HTMLElement).closest(node));

        if (
            ref.current &&
            !ref.current.contains(event.target as Node) &&
            outsideClick
        )
            cb();
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
};
