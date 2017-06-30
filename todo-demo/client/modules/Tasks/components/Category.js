import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardActions, CardTitle, CardText } from 'material-ui/Card';

import Task from './Task';

class Category extends Component {
  constructor(props) {
    super(props);
  }

  renderTasks = () => {
    return this.props.tasks.map((task, idx) => (
      <div key={`task-card-${idx}`} className="task" >
        <Task
          data={task}
          toggleDone={this.props.toggleDone}
          handleDelete={this.props.handleDelete}
          handleChangeCategory={this.props.handleChangeCategory}
        />
      </div>
    ));
  }

  // render category
  render() {
    const { category } = this.props;

    return (
      <div>
        <Card initiallyExpanded>
          <CardHeader
            title={category}
            actAsExpander
            showExpandableButton
          />
          <CardText expandable>
            <div className="category">{this.renderTasks()}</div>
          </CardText>
        </Card>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  toggleDone: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleChangeCategory: PropTypes.func.isRequired,
};

export default Category;
