import React, { use } from 'react';

const Main = ({ticketsPromise}) => {
    const TicketData = use(ticketsPromise)
    console.log(TicketData)
    return (
     
        <main>
            
            <div className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-8'>
            <div className=' col-span-9'>
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <h1 className='text-2xl font-semibold'>Customer Tickets</h1>


                    {
                        TicketData.map(ticket=>
                        <div className='customer-tickets '>
                        <div className="card bg-base-100 w-[513px] h-[148px] shadow-sm">
  <div className="card-body ">
    <div className='flex justify-between '>
        <h2 className="card-title">
      {ticket.title}
      
    </h2>
    <div className={`badge badge-secondary ${ticket.status == "Open" ? 'text-green-500 bg-green-200' : "text-yellow-500 bg-yellow-200" }`}>{ticket.status}</div>
    </div>
    <p className='text-gray-400'>{ticket.description}</p>
    <div className="flex justify-start">
      
        <div className=''>
            <span className="badge text-gray-400">{ticket.id}</span>
      <span className={`badge text-gray-400 ${ticket.priority == 'High Priority' ? "text-red-500 bg-red-100" : ticket.priority == 'Medium Priority' ? "text-green-500 bg-green-200" : "text-yellow-500 bg-yellow-100"}`}>{ticket.priority}</span>
        </div>
     <div className='ml-20'>
         <span className="badge text-gray-400">{ticket.customer}</span>
      <span className="badge text-gray-400">{ticket.date}</span>
     </div>
    </div>
  </div>
</div>
</div>)
}
                    
</div>
</div>
            <aside className=' lg:col-span-3 col-span-1'>
                <div>
                    <h1 className='text-2xl font-semibold'>Task Status</h1>
                <p className='text-gray-400'>Select a ticket to add to Task Status</p>
                <div className='mt-10'>
                    <h1 className='text-2xl font-semibold'>Resolved Tasks</h1>
                    <p className='text-gray-500'>No resolve tasks yet</p>
                </div>
                </div>
            </aside>
            </div>
        </main>
     
     
    );
};

export default Main;