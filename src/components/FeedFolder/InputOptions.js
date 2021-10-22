import React from 'react';
import './InputOptions.css';

function InputOptions({title, color, Icon})
{
    return(
          <div className="input-option">
              <Icon style={{color:color}}/>
                <h4>{title}</h4>
          </div>
    );
}
export default InputOptions;
