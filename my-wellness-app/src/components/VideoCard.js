import React from "react";
import {Embed} from 'semantic-ui-react'

function VideoCard(props) {
return <div>
    <Embed 
    onClick={() => console.log("hi")}
    id='GdT_XyB9voI'
    placeholder='/images/image-16by9.png'
    source='youtube'
    height="75%"
    width="75%"
    iframe={{
        allowFullScreen: true,
        style: {
        padding:0,

        },
    }}
    />
</div>
}

export default VideoCard