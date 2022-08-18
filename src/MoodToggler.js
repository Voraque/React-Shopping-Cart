import React, { useState } from "react";

function MoodToggler() {
    const [isHappy, setIsHappy] = useState(false);
    const toggleIsHappy = () => setIsHappy(!isHappy);
    return (
        <>
            <h3
                style={{ color: `${isHappy ? 'green' : 'red'}` }} onClick={toggleIsHappy}>
                {isHappy ? ':)' : ':('}
            </h3>
        </>
    )
}

export default MoodToggler;