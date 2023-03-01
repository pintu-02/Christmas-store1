import React, { useState } from 'react';
import BestdealsApi from './Api/BestdealsApi';

const Bestdeals = () => {

    const [BestdealsData, setBestdealsData] = useState(BestdealsApi);
    return (
        <>
            <section>
                <div className='container-fluid'>
                    <div className='Best-deals-container'>
                        <div className='wishes-text'>
                            <h1 pt-5>Best-Deals</h1>
                            <img src=".\images\border.png" alt="wish-png" />
                            <div className='card-container'>
                                <div className='row'>
                                    {BestdealsData.map((curElem) => {
                                        return (
                                            <>
                                                <div className='col col-4 ' key={curElem.id}>
                                                    <img src={curElem.image} alt="best-deals-card" className=' card-image img-fluid' />
                                                    <div className='sub-info'>
                                                    <div className='sub-text m-2'>{curElem.title}</div>
                                                    <div className='box-info'>
                                                        {curElem.info}
                                                    </div>
                                                    <a href="!#" className='btn btn-warning m-2'>{curElem.button}</a>
                                                    </div>
                                                </div>
                                            </>);
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bestdeals;
