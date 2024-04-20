import { UserLogic } from "../../../src/logics/user.js";
import { UserRepository } from "../../../src/repositories/user-repository.js";

jest.mock('../../../src/repositories/user-repository.js');

describe('UNIT TEST: GET USER BY ID LOGIC', () => {

  beforeEach(() => {
		UserRepository.mockClear()
	});

  afterEach(() => {
		jest.clearAllMocks();
	});

	const mockId = '66233c55176e895649c84e60';

  test('controller should call user repository findById method once', async () => {
		// Action
		await UserLogic.getUserById(mockId);
		// Assert
		expect(UserRepository.findById).toHaveBeenCalledTimes(1);
	});
});
