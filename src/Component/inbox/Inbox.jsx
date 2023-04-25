import './Inbox.css';
import {Link} from 'react-router-dom';
import { useEmail } from '../../Context/email-context';
import {AiOutlineStar} from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai'; 
export default function Inbox() {
    const { state, dispatch } = useEmail();

    const Unread= state.email.filter(item=>item.unread);

    return (

        <>
            <div id='main'>
                <div id='inbox-name'>abhishek's mail box</div>

                <div id='filter'>
                    <p id='filter-text'>Filters</p>
                    <input type='checkbox'  onChange={(e)=>dispatch({type:'unreadMails',payload:e.target.value})} />Show unread mails
                    <input type='checkbox'  onChange={(e)=>dispatch({type:'staredMails',payload:e.target.value})}/>Show stared mails
                </div>
                
                <p id='text'>Unread:{Unread.length}</p>


                {state.email?.map((item => {
                    return (
                        <>
                            <span className='subject'>
                                <h4>Subject: {item?.subject}</h4>
                                <span style={{ fontSize: '13px' }} >{item?.content}</span>
                                <div id='link-in-subject'>
                                    <p id='star' onClick={()=>dispatch({type:'starEmail',payload:item.mId})}>{item.isStarred?<AiFillStar/>:<AiOutlineStar/>}</p>
                                    <p id='link'>
                                <Link  className='delete-link' onClick={()=>dispatch({type:'deleteEmail',payload:item.mId})}>Delete</Link>
                                <Link  className='mark-link' onClick={()=>dispatch({type:'markAsRead',payload:item.mId})}>{item.unread?'Mark as Read':'Mark as Unread'}</Link>
                                <Link  className='report-link' onClick={()=>dispatch({type:'spamEmail',payload:item.mId} )}>Report Spam</Link>
                              </p>
                                </div >
                            </span>
                        </>
                    )
                }))}

            </div>

        </>
    )
}