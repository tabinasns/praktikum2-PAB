// Functional Component
const MyApp = () => {
    // State declaration with Hook
    const [title, setTitle] = React.useState("Learn React");
    // variable declaration
    const foo = React.useRef("Hei");
    console.log('A: ', foo);
    // Arrow function inside functional compoent
    const handleButtonClick = () => {
        console.log('B: ', foo.current);
        foo.current = "Hello";
        console.log('c: ', foo.current);

        if (title === "Learn React") {
            setTitle("Learn JavaScript");
        }
        else {
            setTitle("Learn React");
        }
    }
    // Arrow function inside funtional component
    const handleFooClick = () => {
        console.log('Get Foo:', foo.current);
        alert(foo.current);
    }
    return (
        <div>
            <h3>Title: {title}</h3>
            <div>
                <p><button onClick={handleButtonClick}>Change Title</button></p>
                <p><button onClick={handleFooClick}>Get Foo Value</button></p>
            </div>
        </div>
    )
}
const myElement = <MyApp />;
ReactDOM.createRoot(document.getElementById('root')).render(myElement);