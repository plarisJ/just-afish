import './AfishItem.css'
function AfishItem(props) {
    const {afish} = props;
    return(
        <div className="afish-item">
            <img src={afish.thumbnailUrl} />
            <h4>{afish.title}</h4>
        </div>
    );
}
export default AfishItem;