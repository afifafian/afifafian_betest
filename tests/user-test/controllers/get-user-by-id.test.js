import { UserControllers } from "../../../src/controllers/user.js";
import { UserLogic } from "../../../src/logics/user.js";

jest.mock('../../../src/logics/user.js');

describe('UNIT TEST: GET USER BY ID CONTROLLER', () => {

  beforeEach(() => {
		UserLogic.mockClear()
	});

  afterEach(() => {
		jest.clearAllMocks();
	});

	const mReq = {
		params: {
			id: '66234d1b4ee2351df21e2383',
		},
	};
	const mRes = {
		status: jest.fn(),
		json: jest.fn(),
	};
	const mNext = jest.fn();

  test('controller should call user logic getUserById method once', async () => {
		// Action
		await UserControllers.findById(mReq, mRes, mNext);
		// Assert
		expect(UserLogic.getUserById).toHaveBeenCalledTimes(1);
	});
});
