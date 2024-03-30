import React from "react";
import withFilterHOC from './Hocfilter';

const states = ['Uttar Pradesh', 'Madhya Pradesh', 'Kerala', 'Maharashtra', 'Telangaana', 'Delhi', 'Harayana', 'Bihar', 'West Bengal'];
const Hocstates = (props) => {
    return (<>
        <div>

            <div>
                {
                    props.filteredList && props.filteredList.map((item) => (
                        <p>{item}</p>
                    ))
                }
            </div>

        </div>
    </>);
}
export default withFilterHOC(Hocstates, states);