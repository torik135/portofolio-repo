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
                <div className="container-htmlcss">
                    <h2>TEXT</h2>
                    <p>TEXT</p>
                </div>

                <div className="container-content">
                    <div className="container-card_heading">
                        <h3>This Projects only use HTML & CSS</h3>
                    </div>
                    <div className="container-card_content">
                        <div className="container-card_content-item">
                            {htmlcssData.map((item, index) => (
                                <HtmlcssProject
                                name={item.name}
                                code={item.code}
                                web_link={item.web_link}
                                desc={item.desc}
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
                <div className="container-reactnext">
                    <h2>TEXT</h2>
                    <p>TEXT</p>
                </div>

                <div className="container-content">
                    <div className="container-card_heading">
                        <h3>This Projects only use React.js or Next.js</h3>
                    </div>
                    <div className="container-card_content">
                        <div className="container-card_content-item">
                            {reactnextData.map((item, index) => (
                                <ReactNextProject
                                name={item.name}
                                code={item.code}
                                web_link={item.web_link}
                                desc={item.desc}
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
