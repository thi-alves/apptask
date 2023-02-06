import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoAddOutline, IoArrowBackOutline } from 'react-icons/io5';
import TaskItem from './TaskItem';


const WorkProjects = ({ data, setData }) => {

    const navigate = useNavigate();

    const handleRemove = (id) => {
        setData
            (
                data.filter((dt) => dt.id !== id)
            );
    };

    const handleCompleted = (id) => {
        setData
            (
                data.map((dt) => {
                    if (dt.id === id) {
                        return { ...dt, completed: !dt.completed };
                    }
                    return dt;
                })
            );
    };

    const handleEdit = (id) => {
        const state = data.find((dt) => dt.id === id);
        return navigate("/addtask", { state: state });
    };

    return (
        <div>
            <div id="nav" className="h-4"></div>
            <div id="header" className="text-primary text-4xl text-center mb-4">
                <h1 className=''>Todas</h1>
                <h1><strong>Tarefas</strong></h1>
                <p className='text-gray-400 text-base'></p>
            </div>
            <div className="">
                <Link to="/addtask"><div className="bg-secondary h-20 w-20 flex justify-start items-start text-white text-3xl rounded-3xl p-2 absolute bottom-[-30px] right-[-30px] hover:scale-125 transition-transform ease-in-out duration-200 cursor-pointer"><IoAddOutline /></div><div /></Link>
            </div>
            <div className="">
                <Link to="/"><div className="bg-secondary h-20 w-20 flex justify-end items-start text-white text-3xl rounded-3xl p-2 absolute bottom-[-30px] left-[-30px] hover:scale-125 transition-transform ease-in-out duration-200 cursor-pointer"><IoArrowBackOutline /></div><div /></Link>
            </div>
            <div className="overflow-y-hidden">
            {data.map((dt, index) => (
                <TaskItem  data={dt} key={index} handleRemove={handleRemove} handleEdit={handleEdit} handleCompleted={handleCompleted} />
            ))}
            </div>
            

        </div>
    )
}

export default WorkProjects