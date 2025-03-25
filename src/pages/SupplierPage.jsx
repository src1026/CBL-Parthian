import React, { useState, useEffect } from 'react'
import { Footer, Navbar } from "../components";

const allSuppliers = [
  {
    id: 1, 
    name: "Sparkion", 
    image: "https://media.licdn.com/dms/image/v2/C4E0BAQFRgFsYdpO54A/company-logo_200_200/company-logo_200_200/0/1635776473174/sparkion_logo?e=2147483647&v=beta&t=h1hX0MiQlVo4yxv2KIh0KDk6Skb88Ox5R9T9omcev8Q", 
    region: "Europe",
  }, 
  {
    id: 2,
    name: "Repurpose Battery, Inc",
    image: "https://static.wixstatic.com/media/f1e5e1_57dd8d190c5b462cabd325833cce98f3~mv2.png",
    region: "North America",
  },
  {
    id: 3,
    name: "Connected Energy",
    image: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/tzvswizwbwjcgozdhbnu",
    region: "Europe",
  },
  {
    id: 4,
    name: "Intertek",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKgCKMxn9IEA0TJUSDiFcaLa0QnkxpSySlQ&s",
    region: "Asia",
  },
]
const SupplierPage = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setData(allSuppliers);
    setFiltered(allSuppliers);
  }, []);
  
  const handleFilter = (region) =>{
    if (region === "All") {
      setFiltered(data);
    } else {
      setFiltered(data.filter(supplier => supplier.region === region));
    }
  };

  const regions = ["All", ...new Set(data.map(s => s.region))];
  return (
    <>
    <Navbar/>
    <div className="container my-3 py-3">
        <h1 className="text-center">Supplier Directory</h1>
        <hr />
        <p className="lead text-center">
          The new and enhanced Parthian Supplier Directory brings together suppliers and companies showcasing their batteries all year round. The supplier directory is refreshed monthly.
        </p>
        <h2 className="text-center py-4">Our Suppliers</h2>

        {/* Filter Buttons */}
        <div className="buttons text-center py-3">
          {regions.map(region => (
            <button
              key={region}
              className="btn btn-outline-dark btn-sm m-2"
              onClick={() => handleFilter(region)}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Supplier Cards */}
        <div className="row">
          {filtered.map((supplier) => (
            <div className="col-md-3 col-sm-6 mb-3 px-3" key={supplier.id}>
              <div className="card h-100">
                <img className="card-img-top img-fluid" src={supplier.image} alt={supplier.name} height={160} />
                <div className="card-body">
                  <h5 className="card-title text-center">{supplier.name}</h5>
                  <p className="text-muted text-center small">{supplier.region}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    <Footer />
    </>
  );
};

export default SupplierPage