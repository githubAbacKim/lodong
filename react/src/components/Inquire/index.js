import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect,useRef ,useState} from 'react';
import { InquireInfo,InquireInput,NavLinkBox } from './InquireElements';
import './style.css';
import {toast,ToastContainer} from 'react-toastify';
import axios from 'axios';


const InquireSection = () => {
  
    const form = useRef();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [loading, setLoading] = useState('');

    useEffect(() => {
        const body = document.querySelector('#root');
    
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    
    }, []);
  
    const divStyle = {
        marginLeft: "6rem"
    }

    const inputStyle={
    marginLeft: "1rem"
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if(!email || !subject || !message){
            return toast.error('Please fill email, name and message');
        }

        try{
            setLoading(true);
            const {data} = await axios.post(`/api/email`,{
                email,
                subject,
                message
            });
            setLoading(false);
            toast.success(data.message);
        }catch (err) {
            setLoading(false);
            toast.error(
                err.response && err.response.data.message
                ? err.response.data.message
                : err.message
            );
        }
    }
    return (
      <>
      <div className='container justify-content-center '>
       <div className='row '>
        <div className='col-12'>
        <InquireInfo >
            <div className='row mt-5 '>
                <div className='col-5  text-muted'style={divStyle}>회사</div>
                <div className='col-5 text-muted' >전화번호</div>
            </div>
            <div className='row '>
                <div className='col-5 text-light' style={divStyle}>경기도 안양시 만악구 덕천로 152번길 25<br/> 아이에스비즈타워 B동 1506호</div>
                <div className='col-5 text-light'>010-6575-1161</div>
            </div>
            <div className='row '>
                <div className='col-5 text-light'></div>
                <div className='col-5 text-muted' style={divStyle}>이메일</div>
            </div>
            <div className='row '>
                <div className='col-5 text-light'></div>
                <div className='col-5 text-light' style={divStyle}>cyj@lodong.co.kr</div>
            </div>
        </InquireInfo>
        </div>

        <div className='col-12'>
       {/*  <InquireInput>
            <ToastContainer position='bottom-center' limit={1} />
            <form onSubmit={submitHandler}>
            <div className='row mt-5'>
                <div className='col-2   text-muted'>
                    <input className='leftInput' onChange={(e)=> setSubject(e.target.value)} type="text"placeholder='이름'/>
                </div>
                <div className='col-8 offset-2 text-muted' >
                <input type="email"className='rightInput' onChange={(e)=> setEmail(e.target.value)} placeholder='이메일'/>
                </div>
            </div>
            <div className='row mt-5'>
            <textarea type="text" onChange={(e)=> setMessage(e.target.value)} placeholder='프로젝트에 대해 알려주세요. 어떤 도움이 필요한가요?'/>
            </div>
            <button disabled={loading} type='submit'> 문의하기</button>
           {loading ? 'sending...' : 'submit'}
            </form>
        </InquireInput> */}
        </div>
       </div>
       
       
      </div>

      
       
    
      </>
    );
}

export default InquireSection;