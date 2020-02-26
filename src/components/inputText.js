import React from "react";
import * as PropTypes from "prop-types";
import FilterBtn from "./filterButton";


export default function InputText({
                                   tasksCount,
                                   uncompletedCount,
                                   completedCount,
                                   onFilterChange,
                                   onDeleteAllCompleted,
                                   filter,
                               }) {
    const letter = uncompletedCount === 1 ? "" : "s";

    return tasksCount ? (
        <section id="timer-footer">
      <span id="uncompleteCounter">
        {`${uncompletedCount} item${letter} left`}
      </span>
            <div id="buttons-div">
                <FilterBtn
                    value="all"
                    onFilterChange={onFilterChange}
                    filter={filter}
                />
                <FilterBtn
                    value="active"
                    onFilterChange={onFilterChange}
                    filter={filter}
                />
                <FilterBtn
                    value="completed"
                    onFilterChange={onFilterChange}
                    filter={filter}
                />
            </div>
            <button
                className={`clear-all${completedCount ? " visible" : ""}`}
                onClick={onDeleteAllCompleted}
            >
                {" "}
                clear all completed tasks
            </button>
        </section>
    ) : null;
}

InputText.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    onDeleteAllCompleted: PropTypes.func.isRequired,
    filter: PropTypes.string,
    tasksCount: PropTypes.number,
    uncompletedCount: PropTypes.number,
    completedCount: PropTypes.number,
};

InputText.defaultProps = {
    filter: "all",
    tasksCount: 0,
    uncompletedCount: 0,
    completedCount: 0,
};