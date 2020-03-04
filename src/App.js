import createElement from './shared/components.js';

const App = () => {
	return createElement('div',
		{
			class: 'main-div',
		},
		createElement('h1',
			{
				class: 'heading'
			})
	);
};

export default App;