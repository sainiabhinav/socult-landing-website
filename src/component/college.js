"use client";

import axios from "axios";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import {useState} from "react";
import styles from "../app/college/college.css";
import Box from "@mui/material/Box";

function College() {
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [collegeName, setCollegeName] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');

    const [disabled, setDisabled] = useState(false)
    const [result, setResult] = useState([])

    const handleSubmit = async function (e) {
        setDisabled(true)
        e.preventDefault();
        await axios.post('http://www.survey.socult.in.s3-website.ap-south-1.amazonaws.com/opinion/submit', {
            name: name,
            emailId: emailId,
            data: data
        },  {headers: {"Access-Control-Allow-Origin" : "*", "Content-Type": "application/json"}})
            .then((res) => {
                const response = res.data.data.result[res.data.data.result.length -1];
                const index = response.indexOf('(')
                const result = [response.slice(0, index), response.slice(index)];
                setResult(result)
                setCounter(counter + 1)
            })
            .catch((error) => {
                setDisabled(false)
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
            <h1> Enroll your college with us </h1>
            <form onSubmit={handleSubmit} style={{textAlign: 'center', marginTop: '10px'}}>
                <TextField
                    required
                    fullWidth
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={e => setName(e.target.value)}
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
                    label="College Name"
                    variant="outlined"
                    value={collegeName}
                    onChange={e => setCollegeName(e.target.value)}
                    size="small"
                    style={{marginBottom: '1rem'}}
                    InputProps={{
                        classes: {
                            notchedOutline: 'notchedOutline',
                        }
                    }}
                />
                <TextField
                    required
                    fullWidth
                    label="Email Id"
                    variant="outlined"
                    value={emailId}
                    onChange={e => setEmailId(e.target.value)}
                    size="small"
                    style={{marginBottom: '1rem'}}
                    InputProps={{
                        classes: {
                            notchedOutline: 'notchedOutline',
                        }
                    }}
                />
                <TextField
                    required
                    fullWidth
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    label="Phone Number"
                    variant="outlined"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
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
                    label="Description"
                    variant="outlined"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
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
                <Button variant="contained" size="large" type='submit' disabled={disabled}
                        style={{width: '40%', textTransform: 'none'}}
                        endIcon={<SendIcon />}>
                    Submit
                </Button>
            </form>
        </Box>
    )
}

export default College;