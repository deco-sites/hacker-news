export interface Post {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
}

export interface PostsList {
    data: Post[];
}

export interface Prop {
    page?: number;
}

export default async function posts(props: Prop, _req: Request, _ctx: unknown): Promise<PostsList> {
    const page = props.page || 1;
    const pageSize = 10; 
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    //lista de IDs
    const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
    const postsIds: number[] = await response.json();

    //paginação
    const postPromises = postsIds.slice(startIndex, endIndex).map(async (id) => {
        const postResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
        return postResponse.json();
    });

    const postsData: Post[] = await Promise.all(postPromises);

    return { data: postsData };
}
