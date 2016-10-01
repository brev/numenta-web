import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '../../../__mocks__/reactContextMock'

import PostListItem from '../../PostListItem'

const PostListItemStubbed = stubContext(PostListItem, context)

const blog = {
  file: {
    dir: '/blog/2016/09/30/calculus-of-the-nervous-system/',
  },
  data: {
    author: 'Ada Lovelace',
    brief: 'Quick quip or intro to the full text.',
    date: '2016/09/30',
    link: null,  // URL
    org: 'Evangelist',
    title: 'Calculus of the Nervous System',
    type: 'post',  // link
  },
  path: '/blog/2016/09/30/calculus-of-the-nervous-system/',
}

const event = {
  file: {
    dir: '/event/2016/08/20/another-ai-conference/',
  },
  data: {
    author: 'Alan Turing',
    brief: 'Quick Synopsis or First Paragraph',
    date: '2016/08/20',
    event: {
      when: {
        begin: '2016/08/20 13:00',
        end: '2016/08/20 14:00',
      },
      where: {
        desc: 'Big Ben',
        city: 'London',
        state: 'England',
        country: 'UK',
        web: 'http://bigben.co.uk',
      },
    },
    link: null,
    org: 'Evangelist',
    title: 'Another AI Conference',
    type: 'post',  // link
  },
  path: '/event/2016/08/20/another-ai-conference/',
}

const link = {
  file: {
    dir: '/press/2016/07/10/super-shout-out/',
  },
  data: {
    author: 'Blogger Uno',
    brief: 'Intro to the full text.',
    date: '2016/07/10',
    link: 'http://superblog.com',
    org: 'SuperBlog',
    title: 'Super Blog on Numenta and AI',
    type: 'link',
  },
  path: '/press/2016/07/10/super-shout-out/',
}


describe('PostListItem React component', () => {

  it('Renders Normal Post (Blog, Press Release, etc.) correctly', () => {
    const component = renderer.create(
      <PostListItemStubbed post={blog}>
        Blog-like Content
      </PostListItemStubbed>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Evented Post (Event) correctly', () => {
    const component = renderer.create(
      <PostListItemStubbed post={event}>
        Event-like Content
      </PostListItemStubbed>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Link stub (Press Link) correctly', () => {
    const component = renderer.create(
      <PostListItemStubbed post={link} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
