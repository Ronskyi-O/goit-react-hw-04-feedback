import React from 'react';
import PropTypes from 'prop-types'
import { Button, Wrapper } from './FeedbackOptions.Styled'

export const FeedbackOptions = ({
    onIncrementGoodFeedback,
    onIncrementNeutralFeedback,
    onIncrementBadFeedback,
}) => {
    return (
        <Wrapper>
            <Button type="button" onClick={onIncrementGoodFeedback}>
                Good
            </Button>
            <Button type="button" onClick={onIncrementNeutralFeedback}>
                Neutral
            </Button>
            <Button type="button" onClick={onIncrementBadFeedback}>
                Bad
            </Button>
        </Wrapper>
    );
};

FeedbackOptions.protoTypes = {
    onIncrementGoodFeedback: PropTypes.func.isRequired,
    onIncrementNeutralFeedback: PropTypes.func.isRequired,
    onIncrementBadFeedback: PropTypes.func.isRequired,
}
