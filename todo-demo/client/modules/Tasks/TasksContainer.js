import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

import { setData, addTask, deleteTask, toggleTask } from './TasksActions';
import { getAssignees, getCategories, getTasks } from './TasksReducers.js';

import AddTask from './components/AddTask';
import List from './components/List';

export class TasksContainer extends PureComponent {

  componentWillMount() {
    this.props.dispatch(setData());
  }

  handleAdd = ({ name, description, assignee, category, due }) => {
    this.props.dispatch(addTask({ name, description, assignee, category, due }));
  };

  handleDelete = (id) => {
    this.props.dispatch(deleteTask(id));
  };

  handleChangeCategory = (id, newCategory) => {
    // TODO
  };

  toggleDone = (id) => {
    this.props.dispatch(toggleTask(id));
  };

  render() {
    return (
      <div>
        <AppBar
          title="Todo App"
          showMenuIconButton={false}
        />

        {/* Add Task Form*/}
        <AddTask handleAdd={this.handleAdd} assignees={this.props.assignees} categories={this.props.categories} />

        <List
          assignees={this.props.assignees}
          categories={this.props.categories}
          tasks={this.props.tasks}
          toggleDone={this.toggleDone}
          handleDelete={this.handleDelete}
          handleChangeCategory={this.handleChangeCategory}
        />

        {/* Category Selector and Search Field

        Dynamic List of Categories (Vertical / Horizontal)
          List of Task Cards
            TASK CARD with Edit/Delete option*/}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    assignees: getAssignees(state),
    categories: getCategories(state),
    tasks: getTasks(state),
  };
}

export default connect(mapStateToProps)(TasksContainer);

