import { UserLogic } from "../../../src/logics/user.js";
import { UserRepository } from "../../../src/repositories/user-repository.js";

jest.mock('../../../src/repositories/user-repository.js');

describe('UNIT TEST: DELETE USER LOGIC', () => {

  beforeEach(() => {
		UserRepository.mockClear()
	});

  afterEach(() => {
		jest.clearAllMocks();
	});

	const mockId = '66234d1b4ee2351df21e2383';

  test('controller should call user repository deleteUser method once', async () => {
		// Action
		await UserLogic.deleteUser(mockId);
		// Assert
		expect(UserRepository.deleteUser).toHaveBeenCalledTimes(1);
	});
});
