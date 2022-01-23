import Projects from '../components/projects/Projects'

import htmlcssData from '../data/htmlcssData'
import reactnextData from '../data/reactnextData'
import jstsData from '../data/jstsData'

const Container = () => {
    return (
        <div className="container">

            {/* <div className="divider"></div> */}

            <div className="container-card">

                <div className="container-card_header">
                    <h2>HTML & CSS</h2>
                    <p>this web use HTML & css (native or framework)</p>
                </div>

                <div className="container-content card-list">
                    
                    <div className="container-card_content">
                        <div className="container-card_content-item">
                            {htmlcssData.map((item, index) => (
                                <Projects
                                name={item.name}
                                code={item.code}
                                web_link={item.web_link}
                                desc={item.desc}
                                author={item.author}
                                tech={item.tech}
                                key={item.name + index}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
    
            {/* <div className="divider"></div> */}

            <div className="container-card">
                <div className="container-card_header">
                    <h2>React.js & Next.js</h2>
                    <p>this web use React.js & Next.js (and css for styling)</p>
                </div>

                <div className="container-content card-list">
                
                    <div className="container-card_content">
                        <div className="container-card_content-item">
                            {reactnextData.map((item, index) => (
                                <Projects
                                name={item.name}
                                code={item.code}
                                web_link={item.web_link}
                                desc={item.desc}
                                author={item.author}
                                tech={item.tech}
                                key={item.name + index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="divider"></div> */}

            <div className="container-card">
                <div className="container-card_header">
                    <h2>JavaScript or TypeScript</h2>
                    <p>this web use JavaScript or TypeScript (or any backend framework and markup languages)</p>
                </div>

                <div className="container-content card-list">
                
                    <div className="container-card_content">
                        <div className="container-card_content-item">
                            {jstsData.map((item, index) => (
                                <Projects
                                name={item.name}
                                code={item.code}
                                web_link={item.web_link}
                                desc={item.desc}
                                author={item.author}
                                tech={item.tech}
                                key={item.name + index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Container
