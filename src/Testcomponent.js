import React from 'react'
import { useParams, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Testcomponent = (props) => {
  const { title } = props;
  const { name, id } = useParams();
  const [datas, setDatas] = useState()
  const location = useLocation();

  //  onclick  update setData(data+1)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setDatas(data); // Store the products array

      })
      .catch((err) => console.error(err));
  }, );
  return (

    <div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3 col-xl-2"></div>
        <div className="col-12 col-md-6 col-lg-3 col-xl-2"></div>
        <div className="col-12 col-md-6 col-lg-3 col-xl-2"></div>
        <div className="col-12 col-md-6 col-lg-3 col-xl-2"></div>
      </div>
      {datas?.map((item, index) => (
        <>
          <li>
            <NavLink to={`/product/${item} `} className={({ isActive }) => (isActive ? "active" : "")}>{item.title}</NavLink>
          </li>
          <li><img src={item.image} alt="" /></li>
        </>
      ))}
    </div>
  )
}

export default Testcomponent
