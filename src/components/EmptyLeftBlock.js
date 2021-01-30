import React from "react";
import '../style/EmptyLeftBlock.css';


const EmptyLeftBlock = () => {

    return (
        <div className="empty-left-block empty-left-block_position_relative">
            <div className="empty-left-block__background empty-left-block__background_position_absolute"></div>
        </div>
    );
};

export default EmptyLeftBlock;