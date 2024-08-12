import { PostList } from "site/loaders/postList.ts";

export interface Props {
    post?: PostList
}

export default function Feed(props: Props) {
    return (
        <p>Post número:
            {props.post?.id}
        </p>
    );
}
