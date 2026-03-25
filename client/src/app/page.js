"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [tasks,setTasks] = useState([]);

  const alltasks = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/tasks/alltasks");
    setTasks(res.data);
  } catch (err) {
    console.error(err);
  }
};
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
