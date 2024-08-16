import PropTypes from "prop-types";

function Header({text = 'Feedback UI', bgColor = 'rgba(0,0,0,0.4)', textColor = '#ff6a95'}) {

    const HeaderStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }
    return (
        <header style={HeaderStyles}>
            <h2>{text}</h2>
        </header>
    )
}

//Removed this on my own and added default parameters in function parameter like javascript bcz of warning in console: 
//Warning: Header: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead
// Header.defaultProps = {
//     text : "FeedBack UI",
//     bgColor : 'rgba(0,0,0,0.4)',
//     textColor: '#ff6a95',
// }

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header;