import React from 'react';
import { Link } from 'react-router-dom';
import { IoAddOutline, IoReceiptOutline, IoPersonOutline,IoBriefcaseOutline, IoBagHandleOutline, IoSchoolOutline } from 'react-icons/io5';
import moment from 'moment';
import 'moment/dist/locale/pt-br';

const Home = ({ data }) => {
  const alltask = data.length;
  const alltaskcompleted = data.filter(data =>data.completed === true);
  const alltaskperson = data.filter(data =>data.category === "Personal Errands");
  const alltaskwork = data.filter(data =>data.category === "Work Projects");
  const alltaskgrocery = data.filter(data =>data.category === "Grocery List");
  const alltaskSchool = data.filter(data =>data.category === "School");
  var date = moment().locale('pt-br').format("dddd, dd MMMM");

  return (
    <div>
      <div id="nav" className="h-10"></div>
      <div id="header" className="text-primary text-4xl text-center mb-4">
        <h1 className=''>Thiago</h1>
        <h1  className='mb-2'><strong>Alves</strong></h1>
        <p className='text-gray-400 text-base'>{date}</p>
      </div>
      <div id="all-task" className="border-t border-b border-primary/50 flex justify-around items-center text-primary py-2 mb-4">
        <div className="flex gap-2">
          <p className='text-lg font-bold'>{alltask}</p>
          <p className='text-sm leading-none'>Tarefas <br /> Criadas</p>
        </div>
        <div className="flex gap-2">
          <p className='text-lg font-bold'>{alltaskcompleted.length}</p>
          <p className='text-sm leading-none'>Tarefas <br /> Completas</p>
        </div>
      </div>
      <div id="task-by-categories" className="flex flex-wrap">
        <div className="w-1/2 h-28 flex justify-center items-center rounded-2xl hover:bg-gray-50 cursor-pointer">
          <div className="flex gap-4">
            <div className="text-tertiary text-2xl">
            <IoReceiptOutline/>
            </div>
            <div className="text-gray-500">
            <p className='text-[14px]  font-bold leading-4 mb-1'>Todas <br /></p>
            <p className='text-[11px] leading-none text-gray-400'>{alltask} Tarefas</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-28 flex justify-center items-center rounded-2xl hover:bg-gray-50 cursor-pointer">
          <div className="flex gap-4">
            <div className="text-tertiary text-2xl">
            <IoPersonOutline/>
            </div>
            <div className="text-gray-500">
            <p className='text-[14px]  font-bold leading-4 mb-1'>Pessoais<br /></p>
            <p className='text-[11px] leading-none text-gray-400'>{alltaskperson.length} Tarefas</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-28 flex justify-center items-center rounded-2xl hover:bg-gray-50 cursor-pointer">
          <div className="flex gap-4">
            <div className="text-tertiary text-2xl">
            <IoBriefcaseOutline/>
            </div>
            <div className="text-gray-500">
            <p className='text-[14px]  font-bold leading-4 mb-1'>Trabalho<br /></p>
            <p className='text-[11px] leading-none text-gray-400'>{alltaskwork.length} Tarefas</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-28 flex justify-center items-center rounded-2xl hover:bg-gray-50 cursor-pointer">
          <div className="flex gap-4">
            <div className="text-tertiary text-2xl">
            <IoSchoolOutline/>
            </div>
            <div className="text-gray-500">
            <p className='text-[14px]  font-bold leading-4 mb-1'>Escola<br /></p>
            <p className='text-[11px] leading-none text-gray-400'>{alltaskSchool.length} Tarefas</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-28 flex justify-center items-center rounded-2xl hover:bg-gray-50 cursor-pointer">
          <div className="flex gap-4">
            <div className="text-tertiary text-2xl">
            <IoBagHandleOutline/>
            </div>
            <div className="text-gray-500">
            <p className='text-[14px]  font-bold leading-4 mb-1'>Compras<br /></p>
            <p className='text-[11px] leading-none text-gray-400'>{alltaskgrocery.length} Tarefas</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="">
        <Link to="/addtask"><div className="bg-secondary h-20 w-20 flex justify-start items-start text-white text-3xl rounded-3xl p-2 absolute bottom-[-30px] right-[-30px] hover:scale-125 transition-transform ease-in-out duration-200 cursor-pointer"><IoAddOutline /></div><div /></Link>
      </div>
    </div>
  )
}

export default Home