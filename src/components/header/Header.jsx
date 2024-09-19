import {Title, Title2} from "../title/Title";

export default function Header (){
    return (
        <>
            <Title2/>
            <Title text="Header component" age={17} description="Lorem ipsum"/>
            <p>hello i am header component</p>
        </>
    )
}
