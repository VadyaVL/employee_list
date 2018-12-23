export const Required = (value: React.ReactText): string => {
  if (Array.isArray(value)) {
      return value.length > 0 ? undefined : 'Required';
  }
  return value ? undefined : 'Required';
};