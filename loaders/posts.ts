export interface Posts {
    data: number[];
}

export interface Prop {
    page?: number
}

export default async function posts(props: Prop, _req: Request, _ctx: unknown): Promise<Posts> {
    const page = props.page || 1;
    const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");

    const data: number[] = await response.json();

    return { data };
}
