const Block = ({name, code, web_link, desc, tech}) => {
    return (
        <div className="block-container">
            <div className="block-container_header">
                <h1>{name}</h1>
                <a className="code" href={code}>{code}</a>
                <a className="web_link" href={web_link}>{web_link}</a>
            </div>
            <div className="block-container_desc">
                <p>{desc}</p>
            </div>
            <div className="block-container_tech">
                <p>{tech}</p>
            </div>
        </div>
    )
}

export default Block
