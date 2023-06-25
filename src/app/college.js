import axios from "axios";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';

function College() {
    const [question, setQuestion] = useState("Hobby personality quiz");
    const [subHeading, setSubHeading] = useState("Answer these questions and find your hobby in just 15 clicks.");
    const [counter, setCounter] = useState(0);
    const [survey, setSurvey] = useState('');
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [emailId, setEmailId] = useState('');
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
        <form onSubmit={handleSubmit} style={{textAlign: 'center', marginTop: '10px'}}>
            <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={name}
                onChange={e => setName(e.target.value)}
                size="small"
                style={{marginBottom: '10px'}}
            />
            <TextField
                fullWidth
                label="Email Id"
                variant="outlined"
                value={emailId}
                onChange={e => setEmailId(e.target.value)}
                size="small"
                style={{marginBottom: '10px'}}
            />
            <Button variant="contained" size="large" type='submit' disabled={disabled}
                    style={{width: '60%', textTransform: 'none'}}
                    endIcon={<SendIcon />}>
                Get Test Result
            </Button>
        </form>
    )
}

export default College;