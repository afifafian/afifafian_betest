import { UserControllers } from "../../src/controllers/user.js";
import { UserServices } from "../../src/services/user.js";

jest.mock('../../src/services/user.js');

describe('UNIT TEST: GET USER BY USERNAME CONTROLLER', () => {

  beforeEach(() => {
		UserServices.mockClear()
	});

  afterEach(() => {
		jest.clearAllMocks();
	});

	const mReq = {
		query: {
			username: 'johndoe123',
		},
	};
	const mRes = {
		status: jest.fn(),
		json: jest.fn(),
	};
	const mNext = jest.fn();

  test('controller should call user service findByUsername method once', async () => {
		// Action
		await UserControllers.findByUsername(mReq, mRes, mNext)
		// Assert
		expect(UserServices.findByUsername).toHaveBeenCalledTimes(1);
	});
});
