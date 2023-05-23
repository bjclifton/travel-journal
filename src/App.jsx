import React from "react";
import Navbar from './components/Navbar';
import Card from './components/Card';
import Data from './data.js';
import Footer from './components/Footer'

// const items = Data.map((item) => {
//     return (
//     <Card {...item}/>
//     )
// });

// Map the items and spread them across the Card component. After all but the last card include a <hr /> element.

const items = Data.map((item, index) => {
    return (
        <>
            <Card {...item} />
            {index !== Data.length - 1 && <hr />}
        </>
    )
});

console.log(items)

export default function App() {
    return (
        <>
            <Navbar />
            <div className="card--container">
                {items}
            </div>
            <Footer />
        </>
    );
}