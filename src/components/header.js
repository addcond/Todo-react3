import React from "react";
import * as PropTypes from "prop-types";

const Header = ({ onItemAdd, tasksCount, uncompletedCount, handleAllComplete, }) => (

    <div id="forInput">
        <input
            id="input"
            onKeyDown={onItemAdd}
            placeholder="Input your things here"
        />
        {
            tasksCount ? (
                <div id="forCheckAll">
                    <label
                        htmlFor="checkAll"
                    >❯
                        <input
                            id="checkAll"
                            type="checkbox"
                            onChange={handleAllComplete}
                        />
                    </label>
                </div>
            ) : null
        }
    </div>
);

Header.propTypes = {
    handleAllComplete: PropTypes.func.isRequired,
    onItemAdd: PropTypes.func.isRequired,
    tasksCount: PropTypes.number,
    uncompletedCount: PropTypes.number,
};



export default Header;