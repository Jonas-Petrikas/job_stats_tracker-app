import { useState } from "react"

export default function CreateForm() {
    const [input, setInput] = useState({ company: '', role: '', comment: '' });

    const handleInput = e => {
        const inputName = e.target.name;
        // console.log(inputName)
        console.log(input[inputName]);
        setInput(inn => ({
            ...inn,
            [inputName]: e.target.value
        }))
    }

    const save = _ => {
        console.log(input);
        setInput({ company: '', role: '', comment: '' });
    }


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