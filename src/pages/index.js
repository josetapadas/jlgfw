import React from "react"

const CURRENT_STREAM = "https://www.youtube.com/watch?v=21X5lGlDOfg";

class Index extends React.Component {
    componentDidMount() {
        setTimeout(function () {
            window.location.href = CURRENT_STREAM;
         }, 2000);
    }

    render() {
        return <div>Redirecting ...</div>;
    }
}

export default Index;