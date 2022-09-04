import PropTypes from 'prop-types';
import './GlobalStyles.scss';
import './GlobalStyles.css';

const Globalstyles = ({ children }) => {
    return children;
};
Globalstyles.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Globalstyles;
