// Functional Component
const MyApp = () => {
    // State declaration with Hook
    const [title, setTitle] = React.useState("Learn React");
    // variable declaration
    let foo = "Hei";
    console.log('A: ', foo);
    // Arrow function inside functional compoent
    const handleButtonClick = () => {
        console.log('B: ', foo);
        foo = "Hello";
        console.log('c: ', foo);

        if (title === "Learn React") {
            // change the state value
            setTitle("Learn JavaScript");
        }
        else {
            // change the state value
            setTitle("Learn React");
        }
    }
    // Arrow function inside funtional component
    const handleFooClick = () => {
        console.log(foo);
        alert(foo);
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
const myApp = myElement;
ReactDOM.createRoot(document.getElementById('root')).render(myApp);