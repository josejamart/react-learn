import { reducer, initState } from "../auth";

describe('Auth reducer', () => {

    it('State with type useless', () => {
        const action = {
            type: "useless-type",
            payload: "empty"
        };

        const newState = reducer(initState, action);
        expect(newState).toBe(initState);
    });

    it('State with type useless', () => {
        const action = {
            type: "LOGIN_SUCCESS",
            payload: {
                name: "Jim",
                email: "jim@mail.com"
            }
        };

        const expectedState = {
            authTokens: {
                name: "Jim",
                email: "jim@mail.com"
            },
            name: "Jim",
            email: "jim@mail.com",
        }

        const newState = reducer(initState, action);
        expect(newState).toStrictEqual(expectedState);
    });


})