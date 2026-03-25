"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewTask() {
    const [task, setTask] = useState("");
    const [desc, setDesc] = useState("");

    const router = useRouter(); // ✅ correct place

    const createTask = async (e) => {
        e.preventDefault();

        const data = {
            name: task,
            description: desc
        };

        try {
            await axios.post("http://localhost:5000/api/tasks/", data);
            router.push("/notes");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <form onSubmit={createTask}>
                <input 
                    type="text" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} 
                    placeholder="Task title"
                />
                <input 
                    type="text" 
                    value={desc} 
                    onChange={(e) => setDesc(e.target.value)} 
                    placeholder="Description"
                />
                <input type="submit" value="Create" />
            </form>
        </div>
    );
}