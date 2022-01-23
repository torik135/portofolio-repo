const Projects = ({name, code, web_link, desc, author, tech}) => {
    return (
        <div className="projects-container card box-shadow-yellow">
            <div className="projects-live">
                <a href={web_link} target="_blank" rel="noreferrer">LIVE</a>
            </div>
            <p className="projects-author">{author}</p>
            
            <h2>{name}</h2>
            <a href={code} className="projects-code" target="_blank" rel="noreferrer">source</a>

            <div className="divider"></div>
            
            <div className="projects-desc">
                {desc}
            </div>
            
            <div className="projects-tech">
                <p>{tech}</p>
            </div>
        </div>
    )
}

export default Projects