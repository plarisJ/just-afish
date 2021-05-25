import './AfishPost.css';

function AfishPost(props){
    const {afish}=props;
    return(
        <div className="afish-post">
            <div className="afish-post-bg"/>
            <div className="afish-post-content">
                <img src={afish.thumbnailUrl}/>
                <h4>{afish.title}</h4>
            </div>
        </div>
    );
}

export default AfishPost;