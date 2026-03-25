import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react"

export default function NewTask (){
    const [task,setTask] = useState("");
    const [desc,setDesc] = useState("");

    const createTask = async (e) => {
        const router = useRouter();
        e.preventDefault();
        const data = e
        try{
            await axios.post("http:",data)
            router.push('/app')
        }catch(e){
            console.log(e);
            
        }
    }
    return (
        <div>
            <form onSubmit={createTask} >
                <input type="text" value={task} onChange={(e)=> setTask(e.target.value)} />
                <input type="text" value={desc} onChange={(e)=> setDesc(e.target.value)} />
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}