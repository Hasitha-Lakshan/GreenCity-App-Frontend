import { useState } from "react";
import './SearchPanel.css';

export const SearchPanel = (props: any) => {
    const [location, setLocation] = useState<string>("")
    const [wasteType, setWasteType] = useState<string>("")

    /**
     * This function is use to send searched values to Home component
     */
    const handleSearch = () => {
        props.searchCollectionCenters({ location: location, wasteType: wasteType });
    }

    return (
        <div className='search-bar py-3 pt-4'>
            <div className="container">
                <h6 className='pb-2 text-white'>FIND YOUR COLLECTION CENTER</h6>
                <div className="row mb-3">
                    <div className="col-md-6 ">
                        <input type="search" className={'form-control'} placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <div className="col-md-4 justify-content-md-center">
                        <select className="form-select" aria-label="Default select example" onChange={(e) => setWasteType(e.target.value)}>
                            <option value="">Waste Type</option>
                            <option value="Plastic">Plastic </option>
                            <option value="Metal">Metal </option>
                            <option value="Glass">Glass</option>
                            <option value="Polythene">Polythene</option>
                            <option value="E-Waste">E-Waste</option>
                            <option value="Paper">Paper</option>
                            <option value="Rubber">Rubber</option>
                        </select>
                    </div>
                    <div className="col-md-2 text-center">
                        <button className="search-btn btn btn-dark d-block w-100 rounded-1" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        </div >
    )
}


