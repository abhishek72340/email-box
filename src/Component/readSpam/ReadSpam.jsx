import {useParams,useNavigate} from 'react-router-dom';
import {useEmail} from '../../Context/email-context';
export default function ReadSpam(){
    const navigate=useNavigate();
    const {state} =useEmail();
const {Id} =useParams();

const readSpamEmail=state.email.find(item=>item.mId===Id);

    return(
        <>
            <div id='individual-parent'>
            <div id='individual'>
        <h2>{readSpamEmail?.subject}</h2>
        <p>{readSpamEmail?.content}</p>
        {console.log(readSpamEmail.content)}
        <button onClick={()=>navigate('/')}>Go to Inbox</button>
        </div>
        </div>

        </>
    )
}