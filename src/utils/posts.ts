interface BlogPostData {
	draft?: boolean;
	pubDate: Date;
}

interface BlogPost {
	data: BlogPostData;
}

export function isPublished(data: BlogPostData): boolean {
	return data.draft !== true;
}

export function sortByDateDesc<T extends BlogPost>(posts: T[]): T[] {
	return posts.toSorted(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
}
