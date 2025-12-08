import React from 'react';

interface VideoPlayerProps {
    videoMp4: string;
    videoWebm: string;
    fallback: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({videoMp4, videoWebm, fallback}) => {

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