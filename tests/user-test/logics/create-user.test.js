import { UserLogic } from "../../../src/logics/user.js";
import { UserRepository } from "../../../src/repositories/user-repository.js";

jest.mock('../../../src/repositories/user-repository.js');

describe('UNIT TEST: CREATE USER LOGIC', () => {

  beforeEach(() => {
		UserRepository.mockClear()
	});

  afterEach(() => {
		jest.clearAllMocks();
	});

	const mockPayload = {
		username: 'jest_test',
		email: "testmail@mail.com",
		identity_number: "345395930514",
		account_number: "39459"
	};

  test('logic should call user repository createUser method once', async () => {
		// Action
		await UserLogic.createUser(mockPayload);
		// Assert
		expect(UserRepository.createUser).toHaveBeenCalledTimes(1);
	});
});
