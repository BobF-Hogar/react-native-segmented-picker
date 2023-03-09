import PropTypes from 'prop-types';

export const defaultProps = {
  native: false,
  options: [],
  visible: false,
  defaultSelections: {},
  size: 0.45,
  cancelText: 'Cancel',
  confirmText: 'Done',
  titleText: '',
  nativeTestID: undefined,
  pickerItemTextColor: '#282828',
  toolbarBackgroundColor: '#FAFAF8',
  toolbarBorderColor: '#E7E7E7',
  toolbarButtonColor: '#0A84FF',
  toolbarTextColor: '#000000',
  selectionBackgroundColor: '#F8F8F8',
  selectionBorderColor: '#C9C9C9',
  backgroundColor: '#FFFFFF',
  onValueChange: () => {},
  onCancel: () => {},
  onConfirm: () => {},
};

export const propTypes = {
  // Core Props
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
          key: PropTypes.string,
          testID: PropTypes.string,
        }),
      ).isRequired,
      testID: PropTypes.string,
      flex: PropTypes.number,
    }),
  ).isRequired,
  visible: PropTypes.bool,
  defaultSelections: PropTypes.objectOf((
    propValue,
    key,
    componentName,
    location,
    propName,
  ) => {
    const column = propValue[key];
    return (column && String(column) !== column) ? (
      new Error(
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`.`
        + ' Must be in the format: `{column1: \'value\', column2: \'value\', ...}`',
      )
    ) : null;
  }),
  size: (props: any, propName: 'size', componentName: string) => {
    const value = props[propName];
    if (value === undefined) return null;
    return (value < 0 || value > 1) ? (
      new Error(
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`.`
        + ' Must be a floating point between 0-1 representing the screen percentage to cover.'
        + ' The default value is `0.45` (eg 45%).',
      )
    ) : null;
  },
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  titleText: PropTypes.string,
  nativeTestID: PropTypes.string,
  // Styling
  pickerItemTextColor: PropTypes.string,
  toolbarBackgroundColor: PropTypes.string,
  toolbarBorderColor: PropTypes.string,
  toolbarButtonCOlor: PropTypes.string,
  toolbarTextColor: PropTypes.string,
  selectionBackgroundColor: PropTypes.string,
  selectionBorderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  // Events
  onValueChange: PropTypes.func,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
};
