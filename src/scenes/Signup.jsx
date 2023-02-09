import { initializeApp } from "firebase/app";
import { Form , Button, Input} from "antd"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC1gMa-xjn2_5y6nnpf6n8fSY11bgZt70A",
    authDomain: "simple-login-er.firebaseapp.com",
    projectId: "simple-login-er",
    storageBucket: "simple-login-er.appspot.com",
    messagingSenderId: "456343505703",
    appId: "1:456343505703:web:7c38acef1513cc4ae0b702"
  };

export default function Signup({setUser, setIsUser}){
    const handleSubmit =async ({email, password})=>{
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const _user = await createUserWithEmailAndPassword(auth,email,password)
        .catch(alert)
        console.log(_user)
        setUser(_user.user)
    }
    return(
        <section>
            <h1>Sign Up</h1>
            <Form onFinish={handleSubmit} labelCol={{span:8}} wrapperCol={{span: 16}}>
                <Form.Item label= "Email" name="email" >
                    <Input type="email"/>
                </Form.Item>
                <Form.Item label= "Password" name="password" >
                    <Input.Password/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Sign Up</Button>
                </Form.Item>


            </Form>

            <p>Already a user?  <Button onClick={()=>setIsUser(true)}>Login</Button></p>

        </section>

    )
}