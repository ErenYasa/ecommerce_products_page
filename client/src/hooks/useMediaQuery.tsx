import { useEffect, useState } from "react";

export function useMediaQuery(type: string = "max", query: string = "576px") {
    const validQueryPattern = `(${type}-width: ${query})`;

    const [matches, setMatches] = useState(
        window.matchMedia(validQueryPattern).matches
    );

    useEffect(() => {
        const media = window.matchMedia(validQueryPattern);

        if (media.matches !== matches) setMatches(media.matches);

        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);

        return () => {
            media.removeEventListener("change", listener);
        };
    }, [matches, query]);

    return matches;
}
