import Header from '../components/Header.tsx';
import {Outlet} from 'react-router-dom';
import ErrorBoundary from "../components/ErrorBoundary.tsx";
import Footer from "../components/Footer.tsx";

function Shell() {
    return (
        <>
            <Header/>
            <main className={"min-h-screen"}>
                <ErrorBoundary>
                    <Outlet/>
                </ErrorBoundary>
            </main>
            <Footer/>
        </>
    );
}

export default Shell;