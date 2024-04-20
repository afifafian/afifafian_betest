import { UserControllers } from "../../src/controllers/user.js";
import { UserServices } from "../../src/services/user.js";

jest.mock('../../src/services/user.js');

describe('UNIT TEST: CREATE USER CONTROLLER', () => {

  beforeEach(() => {
		UserServices.mockClear()
	});

  afterEach(() => {
		jest.clearAllMocks();
	});

	const mReq = {
		body: {
			username: 'johndoe123',
      password: 'p@ss123'
		},
	};
	const mRes = {
		status: jest.fn(),
		json: jest.fn(),
	};
	const mNext = jest.fn();

  test('controller should call user service createUser method once', async () => {
		// Action
		await UserControllers.insertUser(mReq, mRes, mNext)
		// Assert
		expect(UserServices.createUser).toHaveBeenCalledTimes(1);
	});
});
