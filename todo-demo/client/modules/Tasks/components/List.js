import React from 'react';
import PropTypes from 'prop-types';

import Divider from 'material-ui/Divider';

import Category from './Category';

class List extends React.Component {

  constructor(props) {
    super(props);
  }

  renderCategories = () => {
    const { assignees, categories, tasks, toggleDone, handleDelete, handleChangeCategory } = this.props;

    return this.props.categories.map((category, idx) => {
      const tasksByCategory = tasks
        // filter tasks by category
        .filter(task => task.category === category)
        // map to assignee
        .map((task) => {
          const mappedTask = Object.assign({}, task);
          const assigneeInfo = assignees.filter(assignee => assignee.username === mappedTask.assignee)[0];
          mappedTask.assignee = assigneeInfo;
          return mappedTask;
        });

      return (
        <div key={`list-category-${category}-${idx}`}>
          <Category
            category={category}
            tasks={tasksByCategory}
            key={`category-card-${idx}`}
            toggleDone={toggleDone}
            handleDelete={handleDelete}
            handleChangeCategory={handleChangeCategory}
          />
          <Divider />
        </div>
      );
    });
  };

  render() {
    // Add Filter and Search
    return (
      <div>
        <Divider />
        {this.renderCategories()}
      </div>
    );
  }
}

List.propTypes = {
  assignees: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  toggleDone: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleChangeCategory: PropTypes.func.isRequired,
};

export default List;
