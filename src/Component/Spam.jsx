import {useEmail} from '../Context/email-context';
import {useNavigate,Link} from 'react-router-dom'

import {MdDelete} from 'react-icons/md'
export default function Spam(){
    const navigate=useNavigate();

    const{dispatch,state}=useEmail();

    return(
        <> 
        <h1 id='trash-text'>Spam</h1>
        {state.spam.length>0?null:<p id='no-trash'> <button onClick={()=>navigate('/')}>Go to Inbox</button></p>}

        {state.spam?.map((item => {
                    return (
                        <>
                    <br/>
                            <div id='trash-main'>
                             <h3>{item.subject}</h3>
                             <span id='trash-content'>{item.content}</span>
                             <p><Link to={`/readspam/${item.mId}`}>Read Mail</Link></p>
                            <p id='trash-delete' onClick={()=>dispatch({type:'spamDelete',payload:item.mId})}><MdDelete/></p>
                            </div>
                          
                        </>
                    )
                }))}
        </>
    )
}