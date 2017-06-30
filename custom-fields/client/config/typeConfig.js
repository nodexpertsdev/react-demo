const typeConfig = {
  macField: {
    separator: ':',
    segments: 6,
    regEx: /([^0-9A-F]){1}/gi,
    size: 2,
    min: 0,
    max: 0,
    type: 'text',
  },
  ipv6Field: {
    separator: ':',
    segments: 8,
    regEx: /([^0-9A-F]){1}/gi,
    size: 4,
    min: 0,
    max: 0,
    type: 'text',
  },
  ipv4Field: {
    separator: '.',
    segments: 4,
    regEx: '',
    size: 3,
    min: 0,
    max: 255,
    type: 'number',
  },
};

export default typeConfig;
