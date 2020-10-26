import React from 'react'
import Card from './Card';
import Image from './Image'

const Service = () =>{

    return (
        <div>
        <div className="my-5">
        <h1 className="text-center">Our Services</h1>
    </div>
    <div className="container-fluid mb-5 d-flex">
        <div className="row">
            <div className="col-12 mx-auto">
                <div className="row gy-4">


                {
                    Image.map((val, ind) =>{
                        return <Card key={ind} imgsrc={val.imgsrc} title={val.title}/>
                    })
                }

                </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Service;