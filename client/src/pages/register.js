 import{useState} from 'react';
 

export default function Resgister(){
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    
    async function register(e){
        e.preventDefault();
        const response = await fetch('/register' , {
            method:'POST',
            body:JSON.stringify({username , password}),
            headers: {'Content-Type' : 'application/json'},
        })
        

        if(response.status === 200){
            alert('Registered Successfully');
        }
        else{
            alert('Registration Failed');
        }
    }

    return (
        <form className="register" onSubmit={register}>
            <h1>Resgister</h1>
            <input type='text'
                 placeholder='username'
                 value={username}
                 onChange={e => setUsername(e.target.value)} 
            />
            <input type='password'
                placeholder='password' 
                value={password}
                onChange={e => setPassword(e.target.value)}
             />
            <button >Resgister</button>
        </form>
    )
}