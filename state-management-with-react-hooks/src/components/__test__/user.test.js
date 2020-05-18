import React from "React";
import User from "../user";
import renderer from 'react-test-renderer';

describe('User -> Component', () => {

    it('Match snapshot', () => {
        const user = renderer
            .create(<User userName="User name" />)
            .toJSON();
        expect(user).toMatchSnapshot();
    });


})