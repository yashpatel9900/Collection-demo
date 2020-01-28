import React from 'react'

const CollectionCard = ({title, image}) => {
    return (
        <div className="col mb-9">
            <div className="card">
                <img src={image} className="card-img-top" alt="night" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    );
}

export default CollectionCard;