import React, { use } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Customer = ({ticketsPromise}) => {
    const ticketData = use(ticketsPromise)
    console.log(ticketData)
    return (
        <div className='container mx-auto'>

            {
                ticketData.map(ticket=> <div className="card bg-base-100 w-96 shadow-sm p-4">
  <div className="card-body">
    <h2 className="card-title text-white">
      Login Issues-Can't Access Account
      <div className="badge badge-secondary">Open</div>
    </h2>
    <p className='text-gray-400'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
    <div className="flex justify-between">
    
      <div className='flex gap-2'>
        <div className="text-gray-300">#1001</div>
      <div className="text-pink-500">HIGH PRIORITY</div>
      </div>
      <div className='flex gap-2'>
        <div className="text-gray-300 ">John Smith</div>
      <div className="text-gray-300"><i class="fa-solid fa-calendar"></i>28/09/2025</div>
      </div>
    </div>
  </div>
        </div>)
            }
            {/* <div className="card bg-base-100 w-96 shadow-sm p-4">
  <div className="card-body">
    <h2 className="card-title text-white">
      Login Issues-Can't Access Account
      <div className="badge badge-secondary">Open</div>
    </h2>
    <p className='text-gray-400'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
    <div className="flex justify-between">
    
      <div className='flex gap-2'>
        <div className="text-gray-300">#1001</div>
      <div className="text-pink-500">HIGH PRIORITY</div>
      </div>
      <div className='flex gap-2'>
        <div className="text-gray-300 ">John Smith</div>
      <div className="text-gray-300"><i class="fa-solid fa-calendar"></i>28/09/2025</div>
      </div>
    </div>
  </div>
        </div> */}
        </div>
        
    );
};

export default Customer;