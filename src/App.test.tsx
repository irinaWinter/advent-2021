import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { App, ErrorBoundry } from './components'
import store from './store'
import { it, expect } from '@jest/globals';
import events from '@testing-library/user-event';

const application = (
    <Provider store={store}>
        <ErrorBoundry>
            <App />
        </ErrorBoundry>
    </Provider>
);

describe.only('Переключение кнопок', () => {
    it('При нажатии на кнопку "Start", на ее месте появляется кнопка "Stop"', () => {
        const { getByTestId } = render(application);
        const startButton = getByTestId('button-start-toggle');

        events.click(startButton)

        expect(startButton.textContent).toEqual("Stop");

        screen.logTestingPlaygroundURL();
    });

    it('При нажатии на кнопку "Stop", на ее месте появляется кнопка "Start"', () => {
        const { getByTestId } = render(application);
        const startButton = getByTestId('button-start-toggle');

        events.click(startButton)

        expect(startButton.textContent).toEqual("Start");

        screen.logTestingPlaygroundURL();
    });
});
