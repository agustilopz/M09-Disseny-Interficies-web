import React from 'react';

interface VideoPlayerProps {
    videoMp4: string;
    videoWebm: string;
    subtitles: string;
    fallback: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({videoMp4, videoWebm, subtitles, fallback}) => {

    return (
    <>
    <video controls className="w-full">
        <source src={`src/assets/video/${videoMp4}.mp4`} type="video/mp4" />
        <source src={`src/assets/video/${videoWebm}.webm`} type="video/webm" />
        <track src={subtitles} kind="subtitles" srcLang="en" label="English" default />
        {fallback}
    </video>
    </>
    )
}

export default VideoPlayer;