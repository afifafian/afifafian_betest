import { UserControllers } from "../../../src/controllers/user.js";
import { UserLogic } from "../../../src/logics/user.js";

jest.mock('../../../src/logics/user.js');

describe('UNIT TEST: CREATE USER CONTROLLER', () => {

  beforeEach(() => {
		UserLogic.mockClear()
	});

  afterEach(() => {
		jest.clearAllMocks();
	});

	const mReq = {
		body: {
			username: 'jest_test',
			email: "testmail@mail.com",
			identity_number: "345395930514",
			account_number: "39459"
		},
	};
	const mRes = {
		status: jest.fn(),
		json: jest.fn(),
	};
	const mNext = jest.fn();

  test('controller should call user logic createUser method once', async () => {
		// Action
		await UserControllers.insertUser(mReq, mRes, mNext);
		// Assert
		expect(UserLogic.createUser).toHaveBeenCalledTimes(1);
	});
});
