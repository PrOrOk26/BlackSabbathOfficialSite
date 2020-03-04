import createElement from './shared/components.js';
import NavigationBar from './NavigationBar/NavigationBar.js';

const App = () => {
  return createElement('div',
    {
      class: 'main-div',
    },
    createElement('h1',
      {
        class: 'heading'
      }
    ),
    NavigationBar()
  );
};

export default App;