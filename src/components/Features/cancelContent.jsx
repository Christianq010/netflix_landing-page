import React from 'react';

import './styles.module.scss';


const cancelContent = () => {
    return (
        <section>
            <div className="content">
                {/* <p onClick={props.click}>{props.children}</p> */}
                <p>Cancel Content</p>
            </div>
        </section>
    )
}

export default cancelContent;