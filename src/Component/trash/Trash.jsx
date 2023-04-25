import './Trash.css';
import { useEmail } from "../../Context/email-context"
import {MdDelete} from 'react-icons/md'
import {useNavigate,Link} from 'react-router-dom'
export default function Trash(){
    const navigate=useNavigate();

    const {state,dispatch}=useEmail();
    return(

        <>
        <h1 id='trash-text'>Trash</h1>
       {state.trash.length>0?null:<p id='no-trash'> <button onClick={()=>navigate('/')}>Go to Inbox</button></p>}
        {state.trash?.map((item => {
                    return (
                        <>
                    <br/>
                            <div id='trash-main'>
                             <h3>{item.subject}</h3>
                             <span id='trash-content'>{item.content}</span>
                             <p><Link to={`/individual/${item.mId}`} id='dlt-link'>Read Mail</Link></p>
                            <p id='trash-delete' onClick={()=>dispatch({type:'trashDelete',payload:item.mId})}><MdDelete/></p>
                            </div>
                          
                        </>
                    )
                }))}
        </>
    )
}