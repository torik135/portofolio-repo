const ReactNextProject = ({name, code, web_link, desc, tech}) => {
    return (
        <div className="reactnext-container">
            <div className="reactnext-header">
                <h2>React.js or Next.js Projects</h2>
            </div>
            <div className="reactnext-content">
                <div className="reactnext-content_header">
                    <a href={code}>
                        <h3>{name}</h3>.
                    </a>
                    <a href={web_link}>{web_link}</a>
                </div>
                <div className="reactnext-content_desc">
                    <p>{desc}</p>
                </div>
                <div className="reactnext-content_tech">
                    <p>{tech}</p>
                </div>
            </div>
        </div>
    )
}

export default ReactNextProject