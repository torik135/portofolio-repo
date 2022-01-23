// import Block from "./Block"

// import blockData from "./BlockData"

import HtmlcssProject from '../components/htmlcss/HtmlcssProject'
import htmlcssData from '../components/htmlcss/htmlcssData'

import ReactNextProject from '../components/reactnext/ReactNextProject'
import reactnextData from "./reactnext/reactnextData"

const Container = () => {
    return (
        <div className="container">

            <div className="container-card">
                <div className="container-card_header">
                    <h2>TEXT</h2>
                    <p>TEXT</p>
                </div>

                <div className="container-content card-list">
                    
                    <div className="container-card_content">
                        <div className="container-card_content-item">
                            {htmlcssData.map((item, index) => (
                                <HtmlcssProject
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
    
            <div className="container-divider">
            ==================    DIVIDER    ==================
            </div>

            <div className="container-card">
                <div className="container-card_header">
                    <h2>TEXT</h2>
                    <p>TEXT</p>
                </div>

                <div className="container-content card-list">
                
                    <div className="container-card_content">
                        <div className="container-card_content-item">
                            {reactnextData.map((item, index) => (
                                <ReactNextProject
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
