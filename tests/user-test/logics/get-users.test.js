import { UserLogic } from "../../../src/logics/user.js";
import { UserRepository } from "../../../src/repositories/user-repository.js";

jest.mock('../../../src/repositories/user-repository.js');

describe('UNIT TEST: GET LIST USER LOGIC', () => {

  beforeEach(() => {
		UserRepository.mockClear()
	});

  afterEach(() => {
		jest.clearAllMocks();
	});

	const mockFilter = { account_number: '39457' };

  test('controller should call user repository findUsers method once', async () => {
		// Action
		await UserLogic.getUsers(mockFilter);
		// Assert
		expect(UserRepository.findUsers).toHaveBeenCalledTimes(1);
	});
});
