import React, { useState } from 'react';
import ProgressBar from './ProgressBar'

const UploadForm = () => {
    const [error, setError] = useState(null);
    const [file, setFile] = useState(null);
    const types = ['image/png', 'image/jpeg']; 

    const handleChange = (e) => {
        let selected = e.target.files[0];
        
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError("")
        }
        else{
            setFile(null);
            setError("Please, select an allowed file type (png or jpeg).");
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>            
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div className="file">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm;