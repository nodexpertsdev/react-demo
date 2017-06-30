import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';

class AddTask extends React.Component {
  // TODO: Add Select State and Handlers
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      category: '',
      // due: '',
      assignee: '',
    };
  }

  getData = () => {
    const {
      name,
      description,
      category,
      due,
      assignee,
    } = this.state;

    return Object.assign({}, {
      name,
      description,
      category,
      due,
      assignee,
    });
  };

  handleSelectChange = (key, event, index, value) => {
    this.setState({ [key]: value });
  };

  handleDateChange = (e, value) => {
    this.setState({ 'due': value });
  };

  handleStateChange = (e, key) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  renderAssignees = () => {
    return this.props.assignees.map(({ username, fullName }, idx) => (
      <MenuItem value={username} primaryText={fullName} key={`username-${idx}`} />
    ));
  };

  renderCategories = () => {
    return this.props.categories.map((category, idx) => (
      <MenuItem value={category} primaryText={category} key={`category-${idx}`} />
    ));
  };

  render() {
    return (
      <div>
        <Card>
          <CardTitle title="Add New Task" subtitle="Click the button to save" />
          <CardText>
            <div className="col-33">
              <TextField
                name="name"
                value={this.state.name}
                floatingLabelText="Name"
                onChange={this.handleStateChange}
              /><br />
              <TextField
                name="description"
                value={this.state.description}
                floatingLabelText="Description"
                onChange={this.handleStateChange}
              /><br />

            </div>

            <div className="col-33">
              <SelectField
                name="assignee"
                value={this.state.assignee}
                floatingLabelText="Assignee"
                onChange={this.handleSelectChange.bind(this, 'assignee')}
              >
                {this.renderAssignees()}
              </SelectField>
              <DatePicker
                name="due"
                value={this.state.due}
                floatingLabelText="Due Date"
                onChange={this.handleDateChange}
              />
            </div>

            <div className="col-33">
              <SelectField
                name="category"
                value={this.state.category}
                floatingLabelText="Category"
                onChange={this.handleSelectChange.bind(this, 'category')}
              >
                {this.renderCategories()}
              </SelectField>
              <br />
              <br />
              <br />
              <br />
              <br />
              {/* OR
              <TextField
                name="category"
                value={this.state.category}
                floatingLabelText="Add New Category"
                onChange={this.handleStateChange}
              /> */}
            </div>
          </CardText>

          <CardActions>
            <FlatButton
              label="Add"
              primary
              onTouchTap={this.props.handleAdd.bind(this, this.getData())}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

AddTask.propTypes = {
  categories: PropTypes.array.isRequired,
  assignees: PropTypes.array.isRequired,
};

export default AddTask;
