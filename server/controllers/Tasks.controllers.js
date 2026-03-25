import Tasks from "../models/Tasks.js";

export const createTask = async (req,res) =>{
    try{
        const {name,description} = req.body;
        const task = await Tasks.create({
            name,
            description
        });
        res.status(201).json(task);
    } catch(e){
        res.status(500).json({message:e.message})
    }
};

export const gettasks = async (req, res) => {
    try {
        const alltasks = await Tasks.find();
        res.json(alltasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getTask = async(req,res) => {
    try{
        const {id} = req.params;
        const task = await Tasks.find({
            _id:id,
        });
        res.json(task)
    } catch(e){
        res.status(500).json({message:e.message})
    }
}