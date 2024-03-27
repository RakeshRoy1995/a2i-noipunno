// SecondComponent.tsx

import React from 'react';
import { useLocation } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';

const SecondComponent: React.FC = () => {



    const location = useLocation();

    console.log(location);
    const { name } = location.state || "no props";
    console.log(name);


    // const [searchParams] = useSearchParams();
    // const name = searchParams.get('name')

    // console.log(name);



    return (
        <div>
            <h1>Hello from Second Component!

            </h1>
            {name && <p>The name passed from the first component is: {name}</p>}
        </div>
    );
};

export default SecondComponent;
