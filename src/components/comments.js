import React from 'react';
import { css, Styled } from "theme-ui"

const Comments = ({commentBox}) => (
    <div>
        <Styled.h2
            css={css({
                mb: 0,
            })}
        >Comments</Styled.h2>
        <div ref={commentBox} className="comments"></div>
    </div>
)
export default Comments