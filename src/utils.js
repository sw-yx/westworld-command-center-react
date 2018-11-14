export function clean(name) {
  return name
    .split('_')
    .map(string => string.charAt(0).toUpperCase() + string.slice(1))
    .join(' ');
}
