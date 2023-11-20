import React, { useEffect, useState } from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';

const Category = () => {
    const [allData, setAllData] = useState([])

    useEffect(()=>{
      fetch('data.json')
      .then(res => res.json())
      .then(data =>{
        setAllData(data)
        console.log(data);
      })
    },[])

    
    return (
        <div>
           <SectionTitle
        subHeading={"Using Location"}
        heading={"Get All Restaurent Name"}
      ></SectionTitle>
            <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Georgia" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-10">
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
    {
      allData.filter(data => data.state === "Georgia").map(restaurant => 
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-orange-700">Name: {restaurant.restaurant_name}</h2>
    <p>Savor the artistry of flavors in an elegant ambience at <span className='text-orange-700 font-bold'>{restaurant.restaurant_name}</span>  where culinary excellence meets unparalleled hospitality.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Details</button>
    </div>
  </div>
</div>
       
)
    }
  </div>


  </div>
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Pennsylvania" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-10"> <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
    {
      allData.filter(data => data.state === "Pennsylvania").map(restaurant => 
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-orange-700">Name: {restaurant.restaurant_name}</h2>
    <p>Savor the artistry of flavors in an elegant ambience at <span className='text-orange-700 font-bold'>{restaurant.restaurant_name}</span>  where culinary excellence meets unparalleled hospitality.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Details</button>
    </div>
  </div>
</div>
       
)
    }
  </div>

  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Illinois" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-10"> <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
    {
      allData.filter(data => data.state === "Illinois").map(restaurant => 
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-orange-700">Name: {restaurant.restaurant_name}</h2>
    <p>Savor the artistry of flavors in an elegant ambience at <span className='text-orange-700 font-bold'>{restaurant.restaurant_name}</span>  where culinary excellence meets unparalleled hospitality.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Details</button>
    </div>
  </div>
</div>
       
)
    }
  </div>

  </div>
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="California" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-10"> <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
    {
      allData.filter(data => data.state === "California").map(restaurant => 
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-orange-700">Name: {restaurant.restaurant_name}</h2>
    <p>Savor the artistry of flavors in an elegant ambience at <span className='text-orange-700 font-bold'>{restaurant.restaurant_name}</span>  where culinary excellence meets unparalleled hospitality.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Details</button>
    </div>
  </div>
</div>
       
)
    }
  </div>

  </div>
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Texas" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-10"> <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
    {
      allData.filter(data => data.state === "Texas").map(restaurant => 
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-orange-700">Name: {restaurant.restaurant_name}</h2>
    <p>Savor the artistry of flavors in an elegant ambience at <span className='text-orange-700 font-bold'>{restaurant.restaurant_name}</span>  where culinary excellence meets unparalleled hospitality.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Details</button>
    </div>
  </div>
</div>
       
)
    }
  </div>

  </div>
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Florida" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-10"> <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
    {
      allData.filter(data => data.state === "Florida").map(restaurant => 
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-orange-700">Name: {restaurant.restaurant_name}</h2>
    <p>Savor the artistry of flavors in an elegant ambience at <span className='text-orange-700 font-bold'>{restaurant.restaurant_name}</span>  where culinary excellence meets unparalleled hospitality.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Details</button>
    </div>
  </div>
</div>
       
)
    }
  </div>

  </div>
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="New_York" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-10"> <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
    {
      allData.filter(data => data.state === "New York").map(restaurant => 
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-orange-700">Name: {restaurant.restaurant_name}</h2>
    <p>Savor the artistry of flavors in an elegant ambience at <span className='text-orange-700 font-bold'>{restaurant.restaurant_name}</span>  where culinary excellence meets unparalleled hospitality.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Details</button>
    </div>
  </div>
</div>
       
)
    }
  </div>

  </div>
</div>
        </div>
    );
};

export default Category;