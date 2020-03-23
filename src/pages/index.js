import React from "react"

const CURRENT_STREAM = "https://www.youtube.com/embed/5qap5aO4i9A";

export default () => (
    <div>
        <iframe width="560" height="315" src={CURRENT_STREAM} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    </div>
);
