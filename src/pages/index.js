import React from "react"

const CURRENT_STREAM = "https://www.youtube.com/embed/ns2POBYJtuw";

export default () => (
    <div>
        <iframe width="560" height="315" src={CURRENT_STREAM} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    </div>
);
