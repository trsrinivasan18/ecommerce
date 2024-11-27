import React from 'react';
import logo from '../Assets/logo.png';
import './Categories.css';
// import { useEffect, useState } from 'react';

export const Categories = () => {
    const cate = [
        {
            "title": "Clothing & Shoes",
            "img": logo,
        },
        {
            "title": "Home & Living",
            "img": logo,
        },
    ]

    // const [records, setRecords] = useState([null])
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/todos/1")
    //     .then((response) => response.json())
    //     .then((data) => setRecords(data))
    //     .catch((err) => console.error(err));
    // }, []);

    return (
        <div className="category-blk">
            <div className="container">
                <div className="cate-fle d-flex">
                    {cate?.map((item, index) => (
                        <div className="cate-items">
                            <div className="cat-img">
                                <img src={item.img} alt="" />
                                <span>{item?.title}</span>
                                <p>hi vicky</p>
                            </div>
                        </div>
                    ))}
                

                </div>
                {/* {records &&
                    <div className="cate-items">
                        <span>{records.userId}</span>
                        <span>{records.id}</span>
                        <span>{records.title}</span>
                    </div>
} */}
            </div>
        </div>
    )
}
