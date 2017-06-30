export const replaceOperators = (op) => {
  let operator;
  switch (op) {
    case '=':
      operator = '==';
      break;
    case 'AND':
      operator = '&&';
      break;
    case 'OR':
      operator = '||';
      break;
    default:
    operator = op;
      break;
  }
  return operator;
}
