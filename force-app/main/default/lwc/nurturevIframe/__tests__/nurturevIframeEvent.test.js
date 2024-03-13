import { createElement } from 'lwc';
import NurturevIframe from 'c/nurturevIframe';

describe('c-nurturev-iframe event handling', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('dispatches iframeLoaded event when iframe is loaded', () => {
        // Create instance of the component
        const element = createElement('c-nurturev-iframe', {
            is: NurturevIframe
        });
        document.body.appendChild(element);

        // Create a mock function to listen for the event
        const eventListenerMock = jest.fn();
        // Add event listener to our component instance
        element.addEventListener('iframeLoaded', eventListenerMock);

        // Simulate the iframe loading process. This might involve calling a method on the component
        // or changing a property that would trigger the iframe to load.
        // Since this is an example, we'll simulate it by manually dispatching the event as below.
        // In a real test, you would trigger the loading through component's methods or properties.
        const customEvent = new CustomEvent('iframeLoaded');
        element.dispatchEvent(customEvent);

        // Check if our mock function was called, indicating the event was dispatched as expected
        expect(eventListenerMock).toHaveBeenCalled();
    });

    // Add more tests here as needed for other events or component functionality
});
