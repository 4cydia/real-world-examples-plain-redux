import React from 'react';
import { connect } from 'react-redux';

// Bring in the asynchronous fetchPosts action:
import { fetchPosts } from '../actions/postsAction';
import { Post } from '../components/Post';

// After adding connect, Redux state is now in the props of the component:
const PostsPage = ({ loading, posts, hasErrors }) =>
{
    useEffect(() => {
        dispatchEvent(fetchPosts());
    }, [dispatch]);

    // Show loading, error, or success state:
    const renderPosts = () => {
        if (loading) return <p>Loading posts...</p>;
        if (hasErrors) return <p>Unable to display posts.</p>
        return posts.map(post => <Post key={post.id} post={post} />);
    };

    return (
        <section>
            <h1>Posts</h1>
            {renderPosts()}
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