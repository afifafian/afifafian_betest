import { UserLogic } from "../../../src/logics/user.js";
import { UserRepository } from "../../../src/repositories/user-repository.js";

jest.mock('../../../src/repositories/user-repository.js');

describe('UNIT TEST: UPDATE USER LOGIC', () => {

  beforeEach(() => {
		UserRepository.mockClear()
	});

  afterEach(() => {
		jest.clearAllMocks();
	});

	const mockId = '66234d1b4ee2351df21e2383';
	const mockPayload = {
		username: 'jest_test_updated',
		email: "testmail@mail.com",
		identity_number: "345395930514",
		account_number: "39459"
	};

  test('logic should call user repository updateUser method once', async () => {
		// Action
		await UserLogic.updateUser(mockId, mockPayload);
		// Assert
		expect(UserRepository.updateUser).toHaveBeenCalledTimes(1);
	});
});
