import test from 'ava';
import App from '../src/App.svelte';

test('my passing test', t => {
  const target = document.createElement('div');
  const app = new App({
    target,
    props: {
      name: 'Jim'
    },
  });

  const h1 = target.getElementsByTagName('h1')[0];

  t.is(h1.textContent, "Hello Jim!");
});
