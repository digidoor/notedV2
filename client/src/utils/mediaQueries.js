import React, { useState, useEffect } from 'react';

export const sizes = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
};

function isMatch(media) {
    const query = `(min-width: ${sizes[media]})`;
    return window.matchMedia(query).matches;
}

function findClosest(sizes) {
    for (let i = sizes.length - 1; i >= 0; i--) {
        if (isMatch(sizes[i])) {
            return sizes[i];
        }
    }
    return 'sm';
}

export const useClosestMedia = () => {
    const [closest, setClosest] = useState('sm');

    useEffect(() => {
        const listener = () => setClosest(findClosest(sizes));
        listener();
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener); //Cleanup
    }, []);

    return closest;
};