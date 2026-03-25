import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [tasks,setTasks] = useState([]);

  const alltasks = async () =>{
    const tasks = await axios.get("http");
    setTasks(tasks)
  }
  useEffect(()=>{
    alltasks()
  },[])

  return (
    <div>
      <button>+ New Task</button>
      <h2>All Tasks</h2>
      {
        tasks.map((task)=>{
          <div onClick={()=>router.push(`/notes/${task._id}`)}>
            {task.name}
          </div>
        })
      }
    </div>
  );
}
