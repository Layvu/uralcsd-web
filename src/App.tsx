import { Header } from "@components/Header";

function App() {
    return (
        <>
            <Header
                onMenuToggle={() => {
                    console.log("click");
                }}
            />
        </>
    );
}

export default App;
