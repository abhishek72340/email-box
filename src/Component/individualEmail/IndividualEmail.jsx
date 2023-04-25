import './IndividualEmail.css';
import {useParams,useNavigate} from 'react-router-dom';
import {useEmail} from '../../Context/email-context';
export default function IndividualEmail(){
    const navigate=useNavigate();
    const {Id} =useParams();

    const{state} =useEmail();

    const individual=state.email.find(item=>item.mId===Id)
    return(
        
            <>
            <div id='individual-parent'>
            <div id='individual'>
        <h2>{individual?.subject}</h2>
        <p>{individual?.content}</p>
        <button onClick={()=>navigate('/')}>Go to Inbox</button>
        </div>
        </div>


        </>
    )
}