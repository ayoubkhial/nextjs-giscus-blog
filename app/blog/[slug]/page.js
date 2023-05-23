import Comment from '@/components/comment';
import dynamic from 'next/dynamic';

export default function BlogPost({ params }) {
	const { slug } = params;
	const Article = dynamic(() => import(`../../../content/${slug}.js`), {
		loading: () => <p>Loading...</p>,
	});
	const repo = process.env.COMMENTS_REPO;
	const repoId = process.env.COMMENTS_REPO_ID;
	const category = process.env.COMMENTS_CATEGORY;
	const categoryId = process.env.COMMENTS_CATEGORY_ID;
	return (
		<main>
			<div className="container">
				<article className="blog__content">
					<Article />
				</article>
				<Comment repo={repo} repoId={repoId} category={category} categoryId={categoryId} />
			</div>
		</main>
	);
}
