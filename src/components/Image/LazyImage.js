import "./LazyImage.css";

import { useState } from "react";

export function LazyImage({ src, alt, placeholder, className }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isPlaceholderLoading, setIsPlaceholderLoading] = useState(true);
    const [showImage, setShowImage] = useState(false);

    const onImageLoad = () => {
        setIsLoading(false);
    }

    const onPlaceholderLoad = () => {
        setIsPlaceholderLoading(false);
    }

    const onPlaceholderAnimationEnd = (event) => {
        if (event.animationName === "placeholder-appear") {
            setShowImage(true);
        }
    }

    let placeholderClassName = className + " lazy-image placeholder";
    if (isPlaceholderLoading) {
        placeholderClassName += " loading";
    }

    let imgClassName = className + " lazy-image original";
    if (isLoading || !showImage) {
        imgClassName += " loading";
    }

    return (
        <>
            {
                (isLoading || !showImage)
                &&
                <img
                    src={placeholder}
                    alt={alt}
                    onLoad={onPlaceholderLoad}
                    className={placeholderClassName}
                    onAnimationEnd={onPlaceholderAnimationEnd}
                />
            }
            <img src={src} alt={alt} onLoad={onImageLoad} className={imgClassName} />
        </>
    )
}