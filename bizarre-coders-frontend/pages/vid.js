import React, { useState } from 'react';

const VideoModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const openYouTubeVideo = () => {
        window.open("https://www.youtube.com/watch?v=your-video-id", "_blank");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <button
                onClick={openModal}
                className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
                Open Video
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative w-11/12 max-w-3xl p-4 bg-white rounded shadow-lg">
                        <button
                            onClick={closeModal}
                            className="absolute top-0 right-0 p-2 text-gray-700 hover:text-gray-900"
                        >
                            &times;
                        </button>
                        <div className="video-container">
                            <video
                                id="videoElement"
                                width="400"
                                controls
                                onClick={openYouTubeVideo}
                                className="cursor-pointer"
                            >
                                <source src="your-video-file.mp4" type="video/mp4" />
                                Your browser does not support HTML video.
                            </video>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoModal;
