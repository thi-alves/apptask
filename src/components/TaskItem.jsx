import React, { useState } from "react"
import { BsCircle, BsCheckCircleFill } from "react-icons/bs"
import { IoStarOutline, IoAttachOutline, IoPencilOutline, IoTrashOutline, IoCalendarOutline, IoTimeOutline } from "react-icons/io5"

const TaskItem = ({ data, handleCompleted,handleEdit,handleRemove}) => {
    const [expand, setExpand] = useState(false);

    return (
        <div className="task-item bg-slate-50 flex justify-start items-center p-2  cursor-pointer mb-1 rounded-2xl">
            <div className="text-2xl text-tertiary mr-2 self-start">
                <button onClick={() => handleCompleted(data.id)}>
                    {
                        data.completed?<BsCheckCircleFill />:<BsCircle />
                    }
                </button>
            </div>
            <div className={`flex flex-col w-full` + (data.completed?` pointer-events-none opacity-50`:``)}>
                <div onClick={() => setExpand(!expand)} className="">
                    <h4 className='text-primary font-bold leading-none text-[13.5px]'>{data.task}</h4>
                    <p className='text-[11px] text-gray-400'>{data.category}</p>
                </div>
                <div className={expand ? "visible" : "hidden"}>
                    <div className="flex text-gray-500 mb-2 justify-between">
                        <div className="flex justify-center items-center text-[13px] gap-1"><IoCalendarOutline />{data.date}</div>
                        <div className="flex justify-center items-center text-[13px] gap-1"><IoTimeOutline />{data.time}</div>
                    </div>
                    <div className="w-full h-[1px] bg-primary/50 m-1"></div>
                    <div className="flex justify-center items-center text-primary py-1 text-xl leading-none">
                        <button className='w-1/4 flex justify-center items-center text-danger'  onClick={()=> handleRemove(data.id)}><IoTrashOutline /></button>
                        <button className='w-1/4 flex justify-center items-center'  onClick={()=> handleEdit(data.id)}><IoPencilOutline /></button>
                        <IoStarOutline className='w-1/4' />
                        <IoAttachOutline className='w-1/4' />
                    </div>
                    <div className="w-full h-[1px] bg-primary/50 mt-1"></div>
                </div>
            </div>
        </div>
    )
}

export default TaskItem