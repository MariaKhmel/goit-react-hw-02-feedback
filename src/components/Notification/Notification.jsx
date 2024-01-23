import { Box } from "components/Box"
import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
    <Box as='p'>{message}</Box>
)

Notification.propTypes = {
   message:PropTypes.string.isRequired, 
}