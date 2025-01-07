import { readdir, readFile, writeFile } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const BLOG_PATH = path.resolve('src/routes/blog');
const OUTPUT_FILE = path.resolve('src/lib/data/articles.json');

async function updateMarkdownMetadata() {
	try {
		const directories = await readdir(BLOG_PATH, { withFileTypes: true });
		const metadataList = [];

		for (const dir of directories) {
			if (dir.isDirectory()) {
				const mdFilePath = path.join(BLOG_PATH, dir.name, '+page.md');
				try {
					const content = await readFile(mdFilePath, 'utf-8');
					const { data } = matter(content);
					const exists = metadataList.some((item) => item.id === data.id);
					if (!exists) {
						metadataList.push({ ...data, slug: dir.name });
					}
				} catch (err) {
					console.error(`Error reading file ${mdFilePath}:`, err);
				}
			}
		}

		await writeFile(OUTPUT_FILE, JSON.stringify(metadataList, null, 2), 'utf-8');
		console.log(`Metadata successfully updated in ${OUTPUT_FILE}`);
	} catch (err) {
		console.error('Error processing blog files:', err);
	}
}

updateMarkdownMetadata();
