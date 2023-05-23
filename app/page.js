import Link from 'next/link';

export default function Home() {
	const posts = [
		{
			slug: 'adding-comments-to-a-nextjs-blog',
			title: 'Adding Comments to a NextJS Blog',
		},
		{
			slug: 'second-blog-post',
			title: 'How to add type safety for Links in Next.js 13 with Typescript',
		},
	];
	return (
		<main>
			<div className="container">
				<h1 className="big__header">Blog</h1>
				<ul className="blog__list">
					{posts.map((post) => (
						<li key={post.slug}>
							<Link className="blog__link" href={`/blog/${post.slug}`}>
								{post.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}
