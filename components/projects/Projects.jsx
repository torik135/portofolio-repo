const Projects = ({name, code, web_link, desc, author, tech}) => {
    return (
        <div className="projects-container card">
            <div className="projects-live">
                <a href={web_link} target="_blank" rel="noreferrer">LIVE</a>
            </div>
            
            <h2>{name}</h2>
            <a href={code} className="projects-code" target="_blank" rel="noreferrer">{code}</a>
            
            <div className="projects-content_desc">
                <p>{desc}</p>
            </div>
            <div className="projects-content">
                <div className="projects-content_auth">
                    <p>{author}</p>
                </div>
                <div className="projects-content_tech">
                    <p>{tech}</p>
                </div>
            </div>
        </div>
    )
}

export default Projects