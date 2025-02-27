import Navbar from "./Navbar";

const Heading = () => {
    return (
        <div className="heading">
            <Navbar />
            <div className="heading-container">
                <h1>Say Hello to ReactJS</h1>
                <p>You will learn how to use the most popular front-end library, and become a super Ninja developer.</p>
                <button>Awsome!</button>
            </div>
        </div>
    )
}

export default Heading;