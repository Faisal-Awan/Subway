
import Header from './Component/Header';
import React, { Suspense } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Menu from "./Component/Menu";
import Foter from './Component/Foter';
import Navbar from './Component/Navbar';
import Routing from './Routing'
// import Modal1 from "./Component/Product/Modal1"

// import Sig from './Component/Sig'



export default class Layout extends React.Component {
    render() {
        return (

            <Suspense>
                <Header />
                <Navbar />
                <Menu />
                {/* <Sig/> */}

                <Routing />
                {/* <Modal1/>  */}
                <Foter />
            </Suspense>
        );
    }
}

