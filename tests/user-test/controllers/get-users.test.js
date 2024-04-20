import { UserControllers } from "../../../src/controllers/user.js";
import { UserLogic } from "../../../src/logics/user.js";

jest.mock('../../../src/logics/user.js');

describe('UNIT TEST: GET LIST USER CONTROLLER', () => {

  beforeEach(() => {
		UserLogic.mockClear()
	});

  afterEach(() => {
		jest.clearAllMocks();
	});

	const mReq = {
		query: {
			account_number: '39457',
		},
	};
	const mRes = {
		status: jest.fn(),
		json: jest.fn(),
	};
	const mNext = jest.fn();

  test('controller should call user logic getUsers method once', async () => {
		// Action
		await UserControllers.findUsers(mReq, mRes, mNext);
		// Assert
		expect(UserLogic.getUsers).toHaveBeenCalledTimes(1);
	});
});
