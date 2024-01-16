import React from 'react';
import {useParams} from "react-router-dom";

const Photos = () => {
    const photoArr = [
        "https://inlviv.in.ua/wp-content/uploads/2017/03/virmenskiy-kafedralniy-sobor-uspinnya-presvyatoyi-bogoroditsi.jpg",
        "https://inlviv.in.ua/wp-content/uploads/2017/03/virmenskiy-kafedralniy-sobor-uspinnya-presvyatoyi-bogoroditsi-1.jpg",
        "https://inlviv.in.ua/wp-content/uploads/2017/03/virmenskiy-kafedralniy-sobor-uspinnya-presvyatoyi-bogoroditsi-2.jpg",
        "https://inlviv.in.ua/wp-content/uploads/2017/03/kostel-sv.-petra-i-pavla-ordenu-yezuyitiv.jpg",
        "https://inlviv.in.ua/wp-content/uploads/2017/03/budinok-vchenih-abo-kazino-gerharda.jpg"
    ]
    const {count} = useParams();


    return (
        <div>
            {photoArr.map((link, index) => {
                if(index < count){
                    return <img src={link} alt={index} key={index}/>
                }
                return null
            })}
        </div>
    );
};

export default Photos;
