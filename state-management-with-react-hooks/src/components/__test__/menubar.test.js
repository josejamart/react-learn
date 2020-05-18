import React from "React";
import Menubar from "../menubar";
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router'

describe('Menubar -> Component', () => {

    it('Match snapshot', () => {
        const menubar = renderer
            .create(
                <StaticRouter location="someLocation" >
                    <Menubar userName="User name" />
                </StaticRouter>)
            .toJSON();
        expect(menubar).toMatchSnapshot();
    });
})