import PropTypes from 'prop-types';
import './GlobalStyles.scss';

const Globalstyles = ({ children }) => {
    return children;
};
Globalstyles.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Globalstyles;
