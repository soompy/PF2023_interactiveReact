export default function List() {
    return (
        <>
            <ul className="list-wrapper type2">
                <li>
                    <a href="" target="_top" className="thumb">
                        <img src="https://source.unsplash.com/random" alt="" />
                    </a>		
                    
                    <div className="list-cont">
                        <h4 className="titles"><a href="/news/articleView.html?idxno=9908" target="_blank">What is Lorem Ipsum?</a></h4>
                        <p className="lead line-6x2">
                            <a href="/news/articleView.html?idxno=9908" target="_top">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </a>
                        </p>
                        <span className="publication">                            
                            <em>Lorem</em>
                            <em>2023.12.28 13:16</em>
                        </span>
                    </div>
                </li>	
            </ul>
        </>
    )
}