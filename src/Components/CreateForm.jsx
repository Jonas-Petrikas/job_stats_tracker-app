import { useContext, useEffect, useState } from "react"
import Data from "../Contexts/Data";
import axios from "axios";

export default function CreateForm() {
    const inputDefault = { company: '', role: '', comment: '', timestamp: '', date: '', response: false, interview: false, rejection: false }
    const [input, setInput] = useState(inputDefault);
    const { applications, setApplications } = useContext(Data);


    const handleInput = e => {
        const inputName = e.target.name;
        // console.log(inputName)
        // console.log(input[inputName]);
        setInput(inn => ({
            ...inn,
            [inputName]: e.target.value
        }))
    }



    const save = _ => {
        console.log(input);
        const time = new Date();
        const date = time.getFullYear() + '-' + time.getMonth().toString().padStart(2, '0') + '-' + time.getDate().toString().padStart(2, '0');
        input.company !== '' && setApplications(applications => ([...applications, { ...input, timestamp: time.getTime().toString(), date: date }]));

        setInput(inputDefault);
        // axios.post('http://localhost/test-php/back.php', 'hello!', {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

    }

    useEffect(_ => {
        console.log(applications);
    }, [applications])


    return (
        <>

            <div className="form-container">
                <h2>Enter data:</h2>
                <div className="form-line"><span>Company: </span><input type="text" name='company' onChange={handleInput} value={input.company} /></div>
                <div className="form-line"><span>Role: </span><input type="text" name='role' onChange={handleInput} value={input.role} /></div>
                <div className="form-line"><span> Comment: </span><textarea name='comment' onChange={handleInput} value={input.comment} /></div>
                <div className="btn"><button onClick={save}>Add</button></div>

            </div>


        </>

    )
}