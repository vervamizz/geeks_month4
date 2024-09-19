import About from '../../components/about/About';
import {Title} from "../../components/title/Title";

function MainPage  ()  {
    return (
        <>
            <h2>Main Page</h2>
            <About info={{title: "Some Title", body:"Some body"}}/>
            <Title text={"Hello World"}/>
        </>
    );
}

export default MainPage