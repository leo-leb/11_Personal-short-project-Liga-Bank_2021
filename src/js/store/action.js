import Operations from '../mocks/operations.js';

const operationsList = Operations.slice();

export const ActionType = {
  UPDATE_OPERATIONS: `list/updateOperations`,
	CLEAR_OPERATIONS: `list/clearOperations`,
};

export const ActionCreator = {
	updateOperations: (newOperation) => {
		if (operationsList.length < 10) {
			operationsList.unshift(newOperation);
		} else {
			operationsList.pop();
			operationsList.unshift(newOperation);
		}

    return {
      type: ActionType.UPDATE_OPERATIONS,
      payload: operationsList.slice()
    };
  },

	clearOperations: () => {
		operationsList.splice(0, operationsList.length)

		return {
			type: ActionType.CLEAR_OPERATIONS,
			payload: operationsList.slice()
		}
	}
};
