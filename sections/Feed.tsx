import { PostsList } from "site/loaders/posts.ts";

export interface Props {
    posts?: PostsList;
}

export default function Feed(props: Props) {
    const { posts } = props;

    if (!posts || posts.data.length === 0) {
        return <p>No posts available.</p>;
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
        <ul className="space-y-4">
            {posts.data.map((post) => (
                <a href={post.url}>

                <li key={post.id} className="border border-gray-300 rounded-lg p-4 my-3 shadow-md hover:shadow-lg transition-shadow duration-200">
                    <p className="font-semibold text-lg">
                        <strong>{post.title}</strong>
                    </p>

                    <p className="mt-1 text-gray-600">By: <span className="font-medium">{post.by}</span></p>
                    <p className="mt-1 text-gray-600">upvotes: <span className="font-medium">{post.score}</span></p>
                    
                </li>
                </a>
            ))}
        </ul>
    </div>
    );
}

