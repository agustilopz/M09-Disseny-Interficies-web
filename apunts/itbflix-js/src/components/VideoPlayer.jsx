import React from 'react';

const VideoPlayer = ({ videoMp4, videoWebm, fallback }) => {

    return (
        <>
            <video controls className="w-full">
                <source src={`${videoMp4}.mp4`} type="video/mp4" />
                <source src={`${videoWebm}.webm`} type="video/webm" />
                {fallback}
            </video>
        </>
    )
}

export default VideoPlayer;