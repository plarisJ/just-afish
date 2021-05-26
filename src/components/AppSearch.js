function AppSearch(props){
    const{value, onValueChange} = props
    return (
        <div className="aapp-search">
            <input 
                className="app-search-input"
                type="text"
                placeholder="search here!!"
                value = {value}
                onChange={(event)=>{onValueChange(event.target.value)}}
            />
        </div>
    );
}
export default AppSearch;

