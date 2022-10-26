import React from "react";
import {Embed} from 'semantic-ui-react'

function VideoCard(props) {
return <div>
    <Embed 
    onClick={() => console.log("hi")}
    id='GdT_XyB9voI'
    placeholder='/images/image-16by9.png'
    source='youtube'
    iframe={{
        allowFullScreen: true,
        style: {
        padding:0,
        width:"70%",
        height:"70%"
        },
    }}
    />
</div>
}

export default VideoCard