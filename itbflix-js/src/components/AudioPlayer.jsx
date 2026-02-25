import React from 'react';

const AudioPlayer = ({audioMpeg, audioOgg, fallback}) => {

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