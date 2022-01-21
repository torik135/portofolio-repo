import Block from "./Block"

import blockData from "./BlockData"

const Container = () => {
    return (
        <div className="container">
            {blockData.map((item, index) => (
                <Block
                    name={item.name}
                    code={item.code}
                    web_link={item.web_link}
                    desc={item.desc}
                    tech={item.tech}
                    key={item.name + index}
                />
            ))}
        </div>
    )
}

export default Container
