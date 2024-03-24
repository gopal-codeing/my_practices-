import React, { useEffect, useState } from "react";
// import { json } from "react-router-dom";

const IPLtable = () => {

    const [ipllist, setipllist] = useState([]);

    const callapi = async () => {
        const responce = await fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data");
        const data = await responce.json();
        console.log(data);
        setipllist(data);
    }

    useEffect(() => {
        callapi();
    }, []);

    const sortlistfn = () => {
        let temp = ipllist.sort((item, item2) => item2.NRR - item.NRR);
        setipllist([...temp]);
    }


    return (
        <>

<h2 className='bg-primary bg-opacity-25'>IPL Table</h2>

<button onClick={sortlistfn}>Sort on NRR</button>
            <table className='table table-striped'>
                <thead>
                    <th> No </th>
                    <th> Team </th>
                    <th> Matches </th>
                    <th> Won  </th>
                    <th> Lost  </th>
                    <th> Tied </th>
                    <th> NRR </th>
                    <th> Points </th>
                </thead>
                <tbody>
                    {


                        ipllist.map((item) => (
                            <tr>
                                <td>{item.No}</td>
                                <td>{item.Team}</td>
                                <td>{item.Matches}</td>
                                <td>{item.Won}</td>
                                <td>{item.Lost}</td>
                                <td>{item.Tied}</td>
                                <td>{item.NRR}</td>
                                <td>{item.Points}</td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>

        </>);
}
export default IPLtable;

// https://my-json-server.typicode.com/FreSauce/json-ipl/data