"use client";

import axios from "axios";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import {useState} from "react";
import Box from "@mui/material/Box";

function BlogForm() {
    const [imageUrl, setImageUrl] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async function (e) {
        e.preventDefault();
        await axios.post('https://efxbtbfcs6.execute-api.ap-south-1.amazonaws.com/dev/blog/blog-data', {
            imageUrl: imageUrl,
            title: title,
            body: body
        },  {headers: {"Access-Control-Allow-Origin" : "*", "Content-Type": "application/json"}})
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    };
    return(
        <Box
            className = "collegeFormBox"
            sx={{
                '& .MuiTextField-root': { m: 1},
                '&	.MuiOutlinedInput-input' : {color: 'white'},
            }}>
            <h1> Blog Entry </h1>
            <form onSubmit={handleSubmit} style={{textAlign: 'center', marginTop: '10px'}}>
                <TextField
                    required
                    fullWidth
                    label="Image Url"
                    variant="outlined"
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    size="small"
                    InputProps={{
                        classes: {
                            notchedOutline: 'notchedOutline',
                        }
                    }}
                />
                <TextField
                    required
                    fullWidth
                    label="Title"
                    variant="outlined"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    size="small"
                    style={{marginBottom: '1rem'}}
                    InputProps={{
                        classes: {
                            notchedOutline: 'notchedOutline',
                        }
                    }}
                />
                <TextField
                    fullWidth
                    label="Body"
                    variant="outlined"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    size="small"
                    style={{marginBottom: '1rem'}}
                    InputProps={{
                        classes: {
                            notchedOutline: 'notchedOutline',
                        }
                    }}
                    multiline
                    rows={3}
                />
                <Button variant="contained" size="large" type='submit' style={{width: '40%', textTransform: 'none'}} endIcon={<SendIcon />}>
                    Submit
                </Button>
            </form>
        </Box>
    )
}

export default BlogForm;