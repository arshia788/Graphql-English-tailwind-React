
const validate=(info)=>{

    const errors={};

    if(!info.nameInfo.trim()){
        errors.name='fil the input'
    }
    else{
        delete errors.name
    }

    if(!info.emailInfo){
        errors.email='fil the input'
    }
    else if(!/\S+@\S+\.\S+/.test(info.emailInfo)){
        errors.email="Invalid email"
    }else{
        delete errors.email
    }

    if(!info.text){
        errors.text= 'fill the input text'
    }else{
        delete errors.text
    }


    return errors;
}

export {validate};






