import Credits from './credits/Credits'


const link_code = 'http://github.com/torik135'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-logo">
                <h3>logo</h3>
                <a href={link_code}>
                    <h4>github.com/torik135</h4>
                </a>
            </div>
            <div className="header-credits">
                <Credits/>
            </div>
            
        </div>
    )
}

export default Header
