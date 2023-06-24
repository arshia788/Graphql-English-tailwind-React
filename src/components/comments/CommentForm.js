import React, { useEffect, useState } from 'react';

import { useMutation } from '@apollo/client';
import { SEND_COMMENT } from '../graphql/mutation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaCheckCircle } from "react-icons/fa";
import { BsFillPatchExclamationFill } from "react-icons/bs";

const CommentForm = ({ slug }) => {

    const [check, setCheck] = useState(false);

    const [info, setInfo]=useState({
        nameInfo:'',
        emailInfo:'',
        text:''
    })
    const [pressed, setPressed] = useState(false);
    const [focus, setFocus] = useState({});
    
    console.log(focus);
    
    
    const changeHandler=(event)=>{
        setInfo({...info, [event.target.name]:event.target.value})
        console.log(info);
    }


    const [sendComment, { loading, data, erros }] = useMutation(SEND_COMMENT, {
        variables: { name:info.nameInfo, email:info.emailInfo, text:info.text , slug }
    })

    const snedHandler = () => {
        if (info.nameInfo && info.emailInfo && info.text) {
            sendComment()
            setPressed(true)
            setCheck(false)
        } else {
            setCheck(true)
            toast.error("Fill All The Fields", {
                position: "top-center",
            })
        }
    }

    const focusHandler = (e) => {
        setFocus({ ...focus, [e.target.name]: true })
    }
    
    
    if (data && pressed) {
        toast.success('the comment has sent please wait to be accepted by the admin', {
            position: "top-center"
        })
        setPressed(false);
    }

    

    return (
        <div className=' grid-cols-12 rounded-md py-4 my-4
        shadow-md
        shadow-gray-400
        '
        >
            <div className='col-span-12'>
                <p
                    className='text-2xl text-blue-700 font-bold ml-8'
                >send your comment</p>
            </div>

            <div className='col-span-12 flex flex-col p-4 m-4 relative'>

                <input
                className={`border p-2 rounded-sm border-gray-500
                
                outline-none focus:border-blue-700
                placeholder:text-gray-600 placeholder:opacity-60
                ${check ? 'border-red-700' : 'border-gray-500'}
                `}

                placeholder='name'
                value={info.nameInfo}
                name='nameInfo'
                type='text'
                onChange={changeHandler}
                onFocus={focusHandler} />

                {focus.name && <BsFillPatchExclamationFill 
                className='absolute right-6 top-6 text-red-600 text-xl'
                />}



            </div>

            <div className='col-span-12 flex flex-col p-4 m-4'>

                <input
                    className={`border p-2 rounded-sm border-gray-500
                    outline-none focus:border-blue-700
                    placeholder:text-gray-600 placeholder:opacity-60
                    ${check ? 'border-red-700' : 'border-gray-500'}
                    `}
                    placeholder='email'
                    value={info.emailInfo}
                    name='emailInfo'
                    type='email'
                    onChange={changeHandler}
                    onFocus={focusHandler}
                />

            </div>

            <div className='col-span-12 flex flex-col p-4 m-4'>

                <input
                    className={`border p-2 rounded-sm border-gray-500
                    outline-none 
                    placeholder:text-gray-600 placeholder:opacity-60
                    focus:border-blue-700
                    ${check ? 'border-red-700' : 'border-gray-500'}
                    `}
                    placeholder='comment'
                    value={info.text}
                    type='text'
                    onChange={changeHandler}
                    name='text'
                    onFocus={focusHandler}
                />

            </div>

            {loading ? <button disabled
                className=' bg-orange-300 text-white py-1 px-2 rounded-sm ml-8 text-lg border-none outline-none'
            >sending the data</button>

                :
                <button
                    onClick={snedHandler}
                    className='bg-blue-700 text-white py-1 px-2 rounded-sm ml-8 text-lg  border-none outline-none'
                >submit</button>
            }

            <ToastContainer />
        </div>
    );
};

export default CommentForm;