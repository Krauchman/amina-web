import "./LazyImage.css";

import { useState } from "react";

export function LazyImage({ src, alt, placeholder, className }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isPlaceholderLoading, setIsPlaceholderLoading] = useState(true);

    const onImageLoad = () => {
        setIsLoading(false);
    }

    const onPlaceholderLoad = () => {
        setIsPlaceholderLoading(false);
    }

    let placeholderClassName = className + " lazy-image placeholder";
    if (!isLoading) {
        placeholderClassName += " hide";
    }
    else if (isPlaceholderLoading) {
        placeholderClassName += " loading";
    }

    let imgClassName = className + " lazy-image original";
    if (isLoading) {
        imgClassName += " loading";
    }

    return (
        <>

            <img src={src} alt={alt} onLoad={onImageLoad} className={imgClassName} />

            <img
                src={placeholder}
                alt={alt}
                onLoad={onPlaceholderLoad}
                className={placeholderClassName}
            />

        </>
    )
}