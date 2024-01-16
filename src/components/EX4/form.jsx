import React, {useEffect, useRef, useState} from 'react';
import './ex4style.css'


const Form4 = () => {

    const [errorsData, setErrorsData] = useState({username: true,
                                                            password: true,
                                                            email: true,
                                                            photo: true,
                                                            description: true,
                                                            tags: true})

    const nickRef = useRef(null);
    const passRef = useRef(null);
    const emailRef = useRef(null);
    const fileRef = useRef(null);
    const descrRef = useRef(null);
    const tagRef = useRef(null);


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (Object.values(errorsData).some(value => value)) {
            alert("Помилки при заповненні форми")
            console.error(errorsData)
        }
        else {
            const formDataToSend = {
                username: nickRef.current.value,
                password: passRef.current.value,
                email: emailRef.current.value,
                photo: fileRef.current.files[0],
                description: descrRef.current.value,
                tags: tagRef.current.value,
            };

            try {
                const response = await fetch('http://localhost:3001/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formDataToSend),
                });

                if (response.ok) {
                    alert("OK")
                } else {
                    alert("ERROR")
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    const validate = (e) => {
        const {name, value} = e.target
        switch (name){
           case 'username':
               const isError = /\d/g.test(value)
               isError ? nickRef.current.classList.add('error') : nickRef.current.classList.remove('error')
               setErrorsData({...errorsData, [name]: isError})
               break
           case 'password':
               const isError2 = value.trim() === ''
               isError2 ? passRef.current.classList.add('error') : passRef.current.classList.remove('error')
               setErrorsData({...errorsData, [name]: isError2})
               break
           case 'description':
               const isError3 = value.trim() === ''
               isError3 ? descrRef.current.classList.add('error') : descrRef.current.classList.remove('error')
               setErrorsData({...errorsData, [name]: isError3})
               break
           case 'tags':
               const isError4 = value.trim() === ''
               isError4 ? tagRef.current.classList.add('error') : tagRef.current.classList.remove('error')
               setErrorsData({...errorsData, [name]: isError4})
               break
           case 'email':
               const isError5 = !/\S+@\S+\.\S+/.test(value)
               isError5 ? emailRef.current.classList.add('error') : emailRef.current.classList.remove('error')
               setErrorsData({...errorsData, [name]: isError5})
               break
           case 'photo':
               const photoFile = e.target.files[0]
               const isError6 = photoFile ? photoFile.size > 2 * 1024 * 1024 : true
               isError6 ? fileRef.current.classList.add('error') : fileRef.current.classList.remove('error')
               setErrorsData({...errorsData, [name]: isError6});
               break;
           default:
               setErrorsData({...errorsData, [name]: true})
       }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nik">Нік:</label><br/>
                <input  id="nik"
                        type="text"
                        name="username"
                        ref={nickRef}
                        onChange={validate}
                />
            </div><br/>
            <div>
                <label htmlFor="pass">Пароль:</label><br/>
                <input id="pass"
                       type="password"
                       name="password"
                       ref={passRef}
                       onChange={validate}/>
            </div><br/>
            <div>
                <label htmlFor="email">Електронна адреса:</label><br/>
                <input id="email"
                       type="email"
                       name="email"
                       ref={emailRef}
                       onChange={validate}/>
            </div><br/>
            <div>
                <label htmlFor="photo">Фотографія:</label><br/>
                <input id="photo"
                       type="file"
                       name="photo"
                       ref={fileRef}
                       accept="image/*"
                       onChange={validate} />
            </div><br/>
            <div>
                <label htmlFor="descr">Опис фотографії:</label><br/>
                <input id="descr"
                       type="text"
                       name="description"
                       ref={descrRef}
                       onChange={validate}/>
            </div><br/>
            <div>
                <label htmlFor="tags">Теги:</label><br/>
                <input id="tags"
                       type="text"
                       name="tags"
                       ref={tagRef}
                       onChange={validate}/>
            </div><br/>
            <button type="submit">Надіслати</button>
        </form>
    );
};

export default Form4;


