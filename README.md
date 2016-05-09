# react-with-hover

Simple React high order function to expose when the component is being hovered.

## Usage

Let's build an example react component:

```js
const Header = ({ style }) => (<h1 style={style}>Header</h1>)
```

And decorate:

```js
import WithHover from 'react-with-hover'

const Decorated = WithHover()(Header)
```

Now when you use `<Decorated />` it will pass a boolean property `hover`.

You can also change the property name by passing a function, example:

```js
const Decorated = WithHover((flag) => ({ mouseOver: flag }))(Header)
```

Then the property passed to the `Header` component is `mouseOver`

## Contributing

First of all, **thank you** for wanting to help!

1. [Fork it](https://help.github.com/articles/fork-a-repo).
2. Create a feature branch - `git checkout -b more_magic`
3. Add tests and make your changes
4. Check if tests are ok - `npm test`
5. Commit changes - `git commit -am "Added more magic"`
6. Push to Github - `git push origin more_magic`
7. Send a [pull request](https://help.github.com/articles/using-pull-requests)! :heart: :sparkling_heart: :heart:
