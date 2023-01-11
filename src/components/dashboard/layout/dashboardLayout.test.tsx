import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';


describe.skip('Dashboard layout', () => {

    beforeEach(() => {

        render(
            <BrowserRouter>
                <DashboardLayout />
            </BrowserRouter>
        );

    });

    test('render sidebar', () => {

        const container = screen.getByTestId('containerSidebar');
        const logo = screen.getByTestId('logo');

        expect(container).toBeInTheDocument();
        expect(logo).toBeInTheDocument();

    });

});
