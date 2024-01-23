import { Box } from "components/Box"
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return (
        <Box as='section' padding={3}>
        <Box as='h2' mb={4}>{title}</Box>
        {children}
         </Box>   
            )
    
}

Section.propTypes = {
    title:PropTypes.string.isRequired, 
}