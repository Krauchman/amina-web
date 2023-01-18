import "./LazyImage.css";

import { useState } from "react";

export function LazyImage({ src, alt, placeholder }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isPlaceholderLoading, setIsPlaceholderLoading] = useState(true);

    const onImageLoad = () => {
        setIsLoading(false);
    }

    const onPlaceholderLoad = () => {
        setIsPlaceholderLoading(false);
    }

    let className = "lazy-image original";
    if (isLoading) {
        className = "lazy-image original loading";
    }

    let placeholderClassName = "lazy-image placeholder";
    if (isPlaceholderLoading) {
        placeholderClassName = "lazy-image placeholder loading";
    }

    return (
        <>
            {isLoading && <img src={placeholder} alt={alt} onLoad={onPlaceholderLoad} className={placeholderClassName} />}
            <img src={src} alt={alt} onLoad={onImageLoad} className={className} />
        </>
    )
}