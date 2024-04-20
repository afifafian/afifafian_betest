import { UserControllers } from "../../../src/controllers/user.js";
import { UserLogic } from "../../../src/logics/user.js";

jest.mock('../../../src/logics/user.js');

describe('UNIT TEST: UPDATE USER CONTROLLER', () => {

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
		body: {
			username: 'jest_test_updated',
			email: "testmail@mail.com",
			identity_number: "345395930514",
			account_number: "39459",
		},
	};
	const mRes = {
		status: jest.fn(),
		json: jest.fn(),
	};
	const mNext = jest.fn();

  test('controller should call user logic updateUser method once', async () => {
		// Action
		await UserControllers.updateUser(mReq, mRes, mNext);
		// Assert
		expect(UserLogic.updateUser).toHaveBeenCalledTimes(1);
	});
});
