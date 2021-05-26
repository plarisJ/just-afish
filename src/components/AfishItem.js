import './AfishItem.css'
function AfishItem(props) {
    const {afish,onAfishClick} = props;
    return(
        <div className="afish-item">
            <img src={afish.thumbnailUrl} onClick={()=> {onAfishClick(afish)}}/>
            <h4>{afish.title}</h4>
        </div>
    );
}
export default AfishItem;