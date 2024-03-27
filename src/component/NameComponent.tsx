// NameComponent.tsx

import React from 'react';
import { Link } from 'react-router-dom';



const NameComponent = () => {
    return (
        <div>
            {/* <h1>Hello!</h1> */}
            <Link to="/SecondComponent" state={{ name: "occupation" }}>
                Next Step
            </Link>

            {/* <Link to="ideas" params={{ testvalue: "hello" }}>Create Idea</Link> */}


        </div>
    );
};

export default NameComponent;
