import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { Link} from 'react-router-dom';
import { IoImageOutline, IoCameraOutline, IoVideocamOutline, IoAttachOutline, IoMicOutline,IoArrowBackOutline } from "react-icons/io5";

const AddTask = ({ data, setData }) => {

    const location = useLocation();
    const state = location.state;

    const navigate = useNavigate();

    const [values, setValues] = useState();

    useEffect(() => {
        if (state) {
            document.querySelector("#task").value = state.task;
            document.querySelector("#date").value = state.date;
            document.querySelector("#time").value = state.time;
        }
    }, [state]);


    const handleInputs = (e) => {
        const valueInputs = { ...values };
        valueInputs[e.target.id] = e.target.value;
        setValues(valueInputs);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (state) {
            setData
                (
                    data.map((dt) => {
                        if (dt.id === state.id) {
                            return {
                                ...dt,
                                task: values.task ? values.task : state.task,
                                date: values.date ? values.date : state.date,
                                time: values.time ? values.time : state.time,
                                category: values.category ? values.category : state.category,
                            };
                        }
                        return dt;
                    })
                );
        }
        else {
            const task = {
                id: uuidv4(),
                task: values.task,
                date: values.date,
                time: values.time,
                category: values.category,
                completed: false,
            }

            setData([...data, task]);
        }
        setValues();
        navigate(location.pathname, {});
        return navigate("/workprojects");
    }

    return (
        <div className='flex flex-col justify-center place-items-center h-full w-full gap-2'>
            <h1 className='text-primary font-bold text-xl mb-4'>Add New Task</h1>
            <form className='space-y-4'>
                <input  id="task" name="task" type="text" onChange={handleInputs} required placeholder='Defina uma tarefa...' className="bg-gray-50 appearance-none border-2 border-gray-200 rounded-2xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary" />
                <select required id="category" name="category" onChange={handleInputs} defaultValue={'DEFAULT'}  className="bg-gray-50  border-2 border-gray-200 rounded-2xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary">
                    <option value="DEFAULT" disabled >Escolha uma categoria...</option>
                    <option value="Personal Errands">Personal Errands</option>
                    <option value="Work Projects">Work Projects</option>
                    <option value="Grocery List">Grocery List</option>
                    <option value="School">School</option>
                </select>
                <input id="date" type="date" onChange={handleInputs} className="bg-gray-50  border-2 border-gray-200 rounded-2xl  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary mr-5"></input>
                <input id="time" type="time" onChange={handleInputs} className="bg-gray-50  border-2 border-gray-200 rounded-2xl  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary"></input>
                <div className='w-full  bg-slate-50 py-2 px-4 flex text-tertiary justify-between text-2xl mb-10 rounded-2xl'>
                    <IoImageOutline className='hover:scale-125' />
                    <IoCameraOutline className='hover:scale-125' />
                    <IoVideocamOutline className='hover:scale-125' />
                    <IoAttachOutline className='hover:scale-125' />
                    <IoMicOutline className='hover:scale-125' />
                </div>
                <div className="w-full flex justify-center items-center pt-10">
                    <button onClick={handleSubmit} className='w-max uppercase bg-secondary text-white font-bold text-sm px-10 py-2 rounded-2xl shadow-md shadow-secondary/50'>add task</button>
                </div>
            </form>
            <div className="">
                <Link to="/workprojects"><div className="bg-secondary h-20 w-20 flex justify-end items-start text-white text-3xl rounded-3xl p-2 absolute bottom-[-30px] left-[-30px] hover:scale-125 transition-transform ease-in-out duration-200 cursor-pointer"><IoArrowBackOutline /></div><div /></Link>
            </div>
        </div>
    )
}

export default AddTask