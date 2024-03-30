import React from "react";

const withFilterHOC = (InputComponent, data) => {

    class OutputComponent extends React.Component {
        constructor() {
            super();
            this.state={
                searchtext: '',
                originalList: data,
                filteredList: data
            }
        }
 
        filterFn= (e) => {
            console.log(e.target.value);
            const searchText = e.target.value.toLowerCase();
            const tempFilteredList = this.state.originalList.filter((item) => {
                return item.toLowerCase().includes(searchText);
            })

            // console.log(tempfilteredList);

            this.setState({
                originalList: this.state.originalList,
                filteredList: tempFilteredList,
                searchtext: e.target.value
            })

        }


        render() {
            return (
                <>
                    <input type='text' onChange={(e) => this.filterFn(e)}/>
                    <InputComponent filteredList = {this.state.filteredList}/>
                </>
            )
        }
    }

    return OutputComponent;
}

export default withFilterHOC;

