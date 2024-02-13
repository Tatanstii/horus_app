export default function isEmpty(value: unknown) {
  return value === undefined || value === null || value === "" || (Array.isArray(value) && value.length === 0) || Object.keys(value).length === 0;
}
