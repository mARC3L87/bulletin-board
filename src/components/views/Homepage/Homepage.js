import React from 'react';
import PropTypes from 'prop-types';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux.js';

import styles from './Homepage.module.scss';

const Component = ({className, posts}) => (
  <div className={clsx(className, styles.root)}>
    <CardGroup>
      {posts.map(post => (
        <Card className={styles.card_ad} key={post.id}>
          <Card.Img className={styles.card_img} variant="top" src={post.img} />
          <Card.Body>
            <Card.Title><a href={`/post/${post.id}`}>{post.title}</a></Card.Title>
            <Card.Text>
              ${post.price}
            </Card.Text>
            <Card.Text>
              Seller: {post.name}
            </Card.Text>
            <Card.Text>
              City: {post.location}
            </Card.Text>
            <Card.Text>
              phone: {post.phone}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Published {post.date}</small>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
  </div>
);

Component.propTypes = {
  posts: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const HomepageContainer = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  HomepageContainer as Homepage,
  Component as HomepageComponent,
};
