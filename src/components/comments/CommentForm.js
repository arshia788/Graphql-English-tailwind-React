import React, { useEffect, useState } from 'react';

import { useMutation } from '@apollo/client';
import { SEND_COMMENT } from '../graphql/mutation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaCheckCircle } from "react-icons/fa";
import { BsFillPatchExclamationFill } from "react-icons/bs";

// func
import { validate } from '../helper/validation';

const CommentForm = ({ slug }) => {

    const [info, setInfo] = useState({
        nameInfo: '',
        emailInfo: '',
        text: '',
        // check: false
    })

    const [errors, setErrors] = useState({});
    const [pressed, setPressed] = useState(false);
    const [focus, setFocus] = useState({});

    useEffect(() => {
        setErrors(validate(info))
    }, [info, focus])


    const changeHandler = (event) => {
        setInfo({ ...info, [event.target.name]: event.target.value })
    }


    const [sendComment, { loading, data, erros }] = useMutation(SEND_COMMENT, {
        variables: { name: info.nameInfo, email: info.emailInfo, text: info.text, slug }
    })


    const snedHandler = () => {

        if (!Object.keys(errors).length) {
            sendComment()
            setPressed(true)
            setInfo({
                nameInfo:'',
                emailInfo:'',
                text:'',
            })
            setFocus({
                nameInfo: false,
                emailInfo: false,
                text: false,
            })
            
        }

        else {
            setFocus({
                nameInfo: true,
                emailInfo: true,
                text: true,
            })
            setPressed(false)
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

    const submitHandler = (e) => {
        e.preventDefault()
    }





    return (
        <form
            onSubmit={submitHandler}
            className=' grid-cols-12 rounded-md py-4 my-4
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
                    className={`border-2 p-2 rounded-sm border-gray-500
                outline-none focus:border-blue-700
                placeholder:text-gray-600 placeholder:opacity-60
                ${focus.nameInfo && errors.name ? 'border-red-700' : 'border-gray-500'}
                ${info.nameInfo && 'border-green-600'}
                `}

                    placeholder='name'
                    value={info.nameInfo}
                    name='nameInfo'
                    type='text'
                    onChange={changeHandler}
                    onFocus={focusHandler} />


                {
                    focus.nameInfo && errors.name &&
                    <BsFillPatchExclamationFill
                        className='absolute right-6 top-6 text-red-600 text-xl'
                    />
                }
                {info.nameInfo &&
                    <FaCheckCircle
                        className={`${info.nameInfo ? 'absolute' : 'hidden'}  right-6 top-6 text-green-600 text-xl`}

                    />
                }



            </div>

            <div className='col-span-12 flex flex-col p-4 m-4 relative'>

                <input
                    className={`border-2 p-2 rounded-sm border-gray-500
                    outline-none focus:border-blue-700
                    placeholder:text-gray-600 placeholder:opacity-60 relative
                    ${focus.emailInfo && errors.email ? 'border-red-700' : 'border-gray-500'}
                    ${info.emailInfo && 'border-green-600'}
                    `
                    }

                    placeholder='email'
                    value={info.emailInfo}
                    name='emailInfo'
                    type='email'
                    onChange={changeHandler}
                    onFocus={focusHandler}
                />

                {
                    focus.emailInfo && errors.email &&
                    <BsFillPatchExclamationFill
                        className='absolute right-6 top-6 text-red-600 text-xl'
                    />
                }
                
                {info.emailInfo && !errors.email &&
                    <FaCheckCircle
                        className={`${info.nameInfo ? 'absolute' : 'hidden'}  right-6 top-6 text-green-600 text-xl`}

                    />
                }

            </div>

            <div className='col-span-12 flex flex-col p-4 m-4 relative'>

                <input
                    className={`border-2 p-2 rounded-sm border-gray-500
                    outline-none 
                    placeholder:text-gray-600 placeholder:opacity-60
                    focus:border-blue-700 relative
                    ${focus.text && errors.text ? 'border-red-700' : 'border-gray-500'}
                    ${info.text && 'border-green-600'}
                    `}
                    placeholder='comment'
                    value={info.text}
                    type='text'
                    onChange={changeHandler}
                    name='text'
                    onFocus={focusHandler}
                />

                {
                    focus.text && errors.text &&
                    <BsFillPatchExclamationFill
                        className='absolute right-6 top-6 text-red-600 text-xl'
                    />
                }
                {info.text &&
                    <FaCheckCircle
                        className={`${info.nameInfo ? 'absolute' : 'hidden'}  right-6 top-6 text-green-600 text-xl`}

                    />
                }

            </div>

            {loading ? <button disabled
                className=' bg-orange-400 text-white py-1 px-2 rounded-sm ml-8 text-lg border-none outline-none'
            >sending the data</button>

                :
                <button
                    onClick={snedHandler}
                    className='bg-blue-700 text-white py-1 px-2 rounded-sm ml-8 text-lg  border-none outline-none'
                >submit</button>
            }

            <ToastContainer />
        </form>
    );
};

export default CommentForm;