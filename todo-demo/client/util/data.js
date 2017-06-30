/* eslint-disable max-len */

export const categories = [
  'Frontline',
  'Intelligence',
  'Support',
];

export const tasks = [{
  id: 'defaultTask1',
  name: 'Task 1',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et mauris vel leo rutrum suscipit ac ac risus. Nullam eget tristique nulla. Proin elit lorem, rhoncus eu blandit eget, fermentum non mauris.',
  assignee: 'wonderwoman',
  category: 'Frontline',
  due: new Date(),
  done: false,
}, {
  id: 'defaultTask2',
  name: 'Task 2',
  description: 'Vivamus quam justo, auctor ut ullamcorper a, tempor quis leo. In id sapien auctor, ornare turpis nec, scelerisque eros. Vivamus vitae nisi urna. Ut volutpat malesuada justo ut commodo. ',
  assignee: 'soldierspy',
  category: 'Intelligence',
  due: new Date(),
  done: true,
}, {
  id: 'defaultTask3',
  name: 'Task 3',
  description: 'Donec ultricies tempor porttitor. In ipsum turpis, tincidunt in egestas sed, cursus et dolor.',
  assignee: 'wonderwoman',
  category: 'Frontline',
  due: new Date(),
  done: true,
}, {
  id: 'defaultTask4',
  name: 'Task 4',
  description: 'Nam a lacinia tellus, ac fermentum lacus. Integer nec ex sed ligula feugiat hendrerit.',
  assignee: 'superetta',
  category: 'Support',
  due: new Date(),
  done: false,
}];

export const assignees = [{
  avatar: '/diana.jpeg',
  fullName: 'Diana Prince',
  username: 'wonderwoman',
}, {
  avatar: '/steve.jpg',
  fullName: 'Steve Trevor',
  username: 'soldierspy',
}, {
  avatar: '/etta.png',
  fullName: 'Etta Candy',
  username: 'superetta',
}];
