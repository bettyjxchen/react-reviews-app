import PropTypes from 'prop-types'

export const REVIEW_PROP_TYPE = PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    rating: PropTypes.isRequired,
    author: PropTypes.string.isRequired
})
