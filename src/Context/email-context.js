import { createContext, useContext, useReducer } from 'react';
import { mails } from '../Component/EmailData';
const emailContext = createContext();

const EmailContextProvider = ({ children }) => {

    const initialState = {
        email: mails,
        spam: [],
        trash:[],
        filter:''
    };



    const reducer = (state, action) => {
const {email,spam,trash}=state;
        switch (action.type) {
            case 'spamEmail':
                const item = email.find(mail => mail.mId === action.payload)
                return { ...state, spam: [...spam, item] };

                case 'deleteEmail':
                    const deleteItem=email.filter(mail=>mail.mId !==action.payload)
                    const deletedMail=email.find(mail=>mail.mId ===action.payload)
                    return {...state, email:deleteItem,trash:[...trash,deletedMail]};

                    case 'markAsRead':
                        const updateMail=email.map(item=>item.mId===action.payload?{...item,unread:!item.unread}:item)
                        return {...state, email:updateMail};

                        case 'starEmail':
                            const updateStar=email.map(item=>item.mId===action.payload?{...item,isStarred:!item.isStarred}:item)
                            return {...state,email:updateStar};

                            case 'unreadMails':
                                const updatedEmail=email.filter(item=>item.unread)
                            return{...state,filter:action.payload,email:updatedEmail};
                            case 'staredMails':
                                const updatedStared=email.filter(item=>item.isStarred)
                                return{...state,email:updatedStared};
                                
                                case 'trashDelete':
                                    const deletedTrash=trash.filter(item=>item.mId !==action.payload)
                                    return{...state, trash:deletedTrash};

                                    case 'spamDelete':
                                    const deletedSpam=spam.filter(item=>item.mId !==action.payload)
                                    return{...state, spam:deletedSpam};

                                    default:
                                        throw new Error('Not data found')
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)

    return (
        <emailContext.Provider value={{ state, dispatch }}>
            {children}
        </emailContext.Provider>
    )
};

const useEmail = () => useContext(emailContext);
export { useEmail, EmailContextProvider };
