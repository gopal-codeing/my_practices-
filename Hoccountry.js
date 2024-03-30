import React from "react";
import withFilterHOC from './Hocfilter';
const countries = ['India', 'Brazil', 'UK', 'USA', 'Nepal', 'China', 'Bhutan', 'Russia', 'Australia', 'Sri Lanka'];

const Hoccountry = (props) => {
    return (<> 
    {
        props.filteredList && props.filteredList.map((item) => (
            <p>{item}</p>

        ))
    }
    </>);
}
export default withFilterHOC(Hoccountry, countries)