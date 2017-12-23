import React, {Component} from 'react';

const Zone = (props) => {
    return(
        <div className="column">
            <div className="column box">
                <h2 className="is-size-3 has-text-default"> {props.currentZone.name} </h2>
                <span className="has-text-info">{12}comments</span> <br />
                <span>Zip Code(s) {props.currentZone.zipCodes}</span>
            </div>
        </div>
    )
}
export default Zone;