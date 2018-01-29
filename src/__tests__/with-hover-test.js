jest.unmock('../with-hover')

import React from 'react'
import WithHover from '../with-hover'
import { mount } from 'enzyme'
import PropTypes from 'prop-types';

describe('WithHover()(Component)', () => {
  let subject
  const Header = ({ title }) => (<h1>{title}</h1>)
  Header.propTypes = { title: PropTypes.string }

  describe('when composing with default transform function', () => {
    const Decorated = WithHover()(Header)

    beforeEach(() => { subject = mount(<Decorated title={'My title'} />) })

    it('renders', () => { expect(subject).toBeTruthy() })
    it('renders inner component', () => { expect(subject.find(Header).length).toBe(1) })
    it('injects hover property', () => { expect(subject.find(Header).prop('hover')).toBe(false) })
    it('reacts to mouseenter then mouseleave', () => {
      subject.simulate('mouseenter')
      expect(subject.find(Header).prop('hover')).toBe(true)
      subject.simulate('mouseleave')
      expect(subject.find(Header).prop('hover')).toBe(false)
    })
    it('defines a displayName', () => {
      expect(Decorated.displayName).toBe('withHover(Header)')
    })
  })

  describe('when composing with a custom transform function', () => {
    const Decorated = WithHover({ transform: (flag) => ({ mouseOver: flag }) })(Header)

    beforeEach(() => { subject = mount(<Decorated title={'My title'} />) })

    it('injects mouseOver property', () => {
      expect(subject.find(Header).prop('mouseOver')).toBe(false)
    })
  })
})
