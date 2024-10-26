import React from 'react'
import "./colorTags.css"
 
const colors = [ "#ff6161", "#39a8f7", "#5e9197ab", "#cd895f91", "#930cc29e", "#cdb15fc4", "yellow" ];

const ColorTags = ( {tagColor, setTagColor } ) =>{
 
  return (
   <div className="Form__tags">
          <label>Select Tag :</label>
          <div>
          { colors.map( ( color ) => (
            <div className="SchedualForm__tag">
              <div
                className="tag"
                onClick={() => setTagColor(color)}
                style={{
                  background: `${color}`,
                  border: tagColor === color ? "2px solid black" : "none",
                }}
              ></div>
            </div>
          ))}
        </div>
</div>)
}

export default ColorTags