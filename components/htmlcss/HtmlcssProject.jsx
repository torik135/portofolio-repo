const HtmlcssProject = ({name, code, web_link, desc, tech}) => {
    return (
        <div className="htmlcss-container">

            <div className="htmlcss-header">
                <h2>HTML & CSS Projects</h2>
            </div>
            <div className="htmlcss-content">
                <div className="htmlcss-content_header">
                    <a href={code}>
                        <h3>{name}</h3>
                    </a>
                    <a href={web_link}>{web_link}</a>
                </div>
                <div className="htmlcss-content_desc">
                    <p>{desc}</p>
                </div>
                <div className="htmlcss-content_tech">
                    <p>{tech}</p>
                </div>
            </div>
        </div>
    )
}

export default HtmlcssProject
