import propTypes from 'prop-types';

const cardShape = propTypes.shape({
  id: propTypes.number.isRequired,
  src: propTypes.string.isRequired,
  matched: propTypes.bool.isRequired,
});

export default cardShape;
