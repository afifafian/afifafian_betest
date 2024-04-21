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

	const mockResultListUser = [
		{
			"_id": "66233c55176e895649c84e60",
			"userName": "mockUserName",
			"accountNumber": "39457",
			"emailAddress": "mockEmailAddress",
			"identityNumber": "mockIdentityNumber",
			"createdAt": "mockCreatedAt"
		}
	];

	UserRepository.findUsers.mockImplementation(() => mockResultListUser);

  test('logic should call user repository findUsers method once', async () => {
		// Action
		const users = await UserLogic.getUsers(mockFilter);
		// Assert
		expect(UserRepository.findUsers).toHaveBeenCalledTimes(1);
		expect(users).toBe(mockResultListUser);
	});
});
