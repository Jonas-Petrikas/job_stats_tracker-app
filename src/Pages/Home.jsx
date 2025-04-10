import CreateForm from "../Components/CreateForm";
import List from "../Components/List";
import Stats from "../Components/Stats";

export default function Home() {
    return (
        <>

            <h1>Welcome</h1>
            <div className="app-container">
                <div className="app-top">
                    <CreateForm />
                    <Stats />

                </div>
                <List />
            </div>

        </>
    )
}