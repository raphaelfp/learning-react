import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-6 col-md-10">
                        <h3>Posts</h3>
                    </div>
                    <div className="col-xs-6 col-md-2">
                        <Link className="btn btn-primary pull-xs-right" to="/posts/new">
                            Add a Post
                        </Link>
                    </div>
                </div>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);