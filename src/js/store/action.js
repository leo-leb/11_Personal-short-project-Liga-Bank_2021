import Operations from '../mocks/operations.js';

export const ActionType = {
  UPDATE_OPERATIONS: `list/updateOperations`
};

export const ActionCreator = {
	updateOperations: (newOperation) => {
		if (Operations.length < 10) {
			Operations.unshift(newOperation);
		} else {
			Operations.unshift(newOperation);
			Operations.pop();
		}

    return {
      type: ActionType.UPDATE_OPERATIONS,
      payload: Operations
    };
  }
};
