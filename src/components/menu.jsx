import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../index.css'

const Menu = () => {
    const [inputVal, setInputVal] = useState(100)

    const inputValChange = (e) => {
        setInputVal(e.target.value)
    }

    return (
        <nav>
            <ul className="menu-ul">
                <li><Link className="menu-li" to="/about">Про Львів</Link></li>
                <li><Link className="menu-li" to = "/famlandmark">Найвідоміша пам'ятка Львова</Link></li>
                <li><Link className="menu-li" to="/othrlandmarks">Інші пам'ятки</Link></li>
                <li>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Link className="menu-li" to={`/photos/${inputVal}`}>Фотографії</Link>
                    <select value={inputVal} onChange={inputValChange} style={{height: "25px"}}>

                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    </div>
                </li>
                <li><Link className="menu-li" to="/form">Форма - EX4</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
