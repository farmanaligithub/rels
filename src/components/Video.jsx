import React, { useRef, useEffect, useState } from 'react';
import './Video.css';
import Footer from './Footer';
import Aside from './Aside';

export default function Video({ url, channel, description, audio }) {

    const videoRef = useRef(null);

    // Function to check if an element is in the viewport
    const isElementInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleElementVisibility = () => {
        if (videoRef.current) {
            if (isElementInViewport(videoRef.current) && videoRef.current.paused) {
                videoRef.current.play();
            } else if (!isElementInViewport(videoRef.current) && !(videoRef.current.paused)) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    }

    useEffect(() => {
        const scrollContainer = document.querySelector('.container');
        scrollContainer.addEventListener('scroll', handleElementVisibility);
        handleElementVisibility()
        return () => {
            scrollContainer.removeEventListener('scroll', handleElementVisibility)
        }
    }, [])


    function onVideoPress() {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }

    return (
        <div className="video">
            <video
                src={url}
                className="player"
                ref={videoRef}
                onClick={onVideoPress}
                loop
            />
            <Aside />
            <Footer
                channel={channel}
                description={description}
                audio={audio}
            />
        </div>
    );
}
