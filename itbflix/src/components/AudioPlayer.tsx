import React from 'react';

interface AudioPlayerProps {
    audioMpeg: string;
    audioOgg?: string;
    fallback: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({audioMpeg, audioOgg, fallback}) => {

    return (
    <>
    <audio controls className="w-full">
        <source src={`${audioMpeg}.mp3`} type="audio/mpeg" />
        <source src={`${audioOgg}.ogg`} type="audio/ogg" />
        {fallback}
    </audio>
    </>
    )
}

export default AudioPlayer;