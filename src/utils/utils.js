//@flow

/**
 * Extract certain props form context props object. To use in conjuction with HoC's
 *
 * @param {Object} contextProps Props object to be extracted from the Consumer
 * @param {Array<string>} optionsList List of properties to be extracted
 */
export const extractStateFromContext = (
  contextProps: any,
  optionsList?: Array<string> = []
) => {
  if (!optionsList.length) {
    return contextProps;
  }

  return optionsList.reduce((filteredProps, option) => {
    if (contextProps.hasOwnProperty(option)) {
      return {
        ...filteredProps,
        [option]: contextProps[option],
      };
    }

    console.warn(
      `The property "${option}" does not exist on ${
        this.constructor.name
      } - omiting`
    );

    return filteredProps;
  }, {});
};
