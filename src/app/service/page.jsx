'use client'
import axios from 'axios';

import { useState } from 'react';

const page = () => {

    const [file, setFile] = useState('');

    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => setFile(reader.result)
    }

    const handleFileChange = (e) => {
        // previewFile(e.target.files[0]);
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData()
            formData.append("file", file)

            const res = await fetch("http://localhost:3000/api/media", {
                method: "POST",
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            const data = await res.json()
            console.log(data);



        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <form>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload</button>
            </form>

        </div>
    );
}
export default page
