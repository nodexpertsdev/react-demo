import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Card, CardHeader, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Done from 'material-ui/svg-icons/action/done';
import Clear from 'material-ui/svg-icons/content/clear';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import Delete from 'material-ui/svg-icons/action/delete';

class Task extends Component {
  constructor(props) {
    super(props);
  }
  // render task
  render() {
    const { toggleDone, handleChangeCategory, handleDelete } = this.props;
    const { id, name, description, assignee, due, done } = this.props.data;
    const formattedDate = moment(due).format('MMMM Do YYYY');

    return (
      <div className="task-card">
        <Card>
          <CardHeader
            title={assignee.fullName}
            subtitle={`Due Date: ${formattedDate}`}
            avatar={assignee.avatar}
          />
          <CardTitle title={name} subtitle={done ? 'Done' : 'Pending'} />
          <CardText>
            {description}
          </CardText>
          <CardActions>
            <FlatButton icon={done ? <Clear /> : <Done />} onTouchTap={toggleDone.bind(this, id)} />
            <FlatButton icon={<ModeEdit />} onTouchTap={handleChangeCategory.bind(this, id)} disabled />
            <FlatButton icon={<Delete />} onTouchTap={handleDelete.bind(this, id)} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

Task.propTypes = {
  data: PropTypes.object.isRequired,
  toggleDone: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleChangeCategory: PropTypes.func.isRequired,
};

export default Task;
