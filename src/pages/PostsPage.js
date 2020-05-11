import React from 'react';
import { connect } from 'react-redux';

// Bring in the asynchronous fetchPosts action:
import { fetchPosts } from '../actions/postsAction';

// After adding connect, Redux state is now in the props of the component:
const PostsPage = ({ loading, posts, hasErrors }) =>
{
    useEffect(() => {
        dispatchEvent(fetchPosts());
    }, [dispatch]);

    return (
        <section>
            <h1>Posts</h1>
        </section>
    );
};

// Map the Redux state to the React component's props:
const mapStateToProps = state => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
});

// Connect Redux to React:
export default PostsPage;
export default connect(mapStateToProps)(PostsPage);