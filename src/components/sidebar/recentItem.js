import React from 'react';

function recentItem({Topic})
    {
        return(
            <div className="recentitem">
                
                <p> <span className="hash">#</span> {Topic} </p>
            </div>
        );
    }

    export default recentItem;