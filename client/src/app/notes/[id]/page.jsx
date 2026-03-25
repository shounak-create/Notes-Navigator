"use client";
import axios from "axios";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function opentask(){
    const {id} = useParams();
    const [task,setTask] = useState(null)

    const fetchtasks = async ()=>{
        const data = await axios.get(`/api/tasks/${id}`);
        setTask(data.data)
    }
    useEffect(()=>{
        fetchtasks()
    },[])

    return (
        <div>
            {task.map((t)=>{
                <div key={t._id}>
                    {t.name}
                    {t.desc}
                </div>
            })}
        </div>
    )
}