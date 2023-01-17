import "./index.css";
import "./AULAProject.css";
import "./PhoneScreen.css"

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { useState } from "react";

function PhoneScreenSkeleton() {
    return (
        <Skeleton className="skeleton" />
    )
}

export function PhoneScreen({ src, alt, className }) {
    const [isLoading, setIsLoading] = useState(true);

    let containerStyle = { opacity: 1 };
    if (isLoading) {
        containerStyle = { opacity: 0, display: "none" };
    }

    const onImageLoad = () => {
        setIsLoading(false);
    }

    return (
        <div className={className + " PhoneScreen"}>
            {isLoading && <PhoneScreenSkeleton />}
            <img src={src} alt={alt} onLoad={onImageLoad} style={containerStyle} />
        </div >
    );
}