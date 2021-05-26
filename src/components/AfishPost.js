import './AfishPost.css';

function AfishPost(props){
    const {afish,onBgClick}=props;
    return(
        <div className="afish-post">
            <div className="afish-post-bg" onClick={onBgClick}/>
            <div className="afish-post-content">
                <img src={afish.fullUrl}/>
                <h4>{afish.title}</h4>
            </div>
        </div>
    );
}

export default AfishPost;