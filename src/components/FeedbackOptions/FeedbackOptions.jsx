import {ButtonList, Button} from './FeedbackOptions.styled'
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ButtonList>{
        options.map((option, id) => (
            <li key={id}>
                <Button type="button"
                onClick={()=>onLeaveFeedback(option)}
                >{option}</Button>
            </li>
        ))
    } </ButtonList>)
}

FeedbackOptions.propTypes = {
    options:PropTypes.array,
    onLeaveFeedback:PropTypes.func,
}