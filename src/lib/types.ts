export interface Project {
	title: string;
	thumbnail: string;
	shortDesc: string;
	images: { path: string; alt: string }[];
	fullDesc?: string;
	coAuthors?: string[];
}
export interface Projects {
	[slug: string]: Project;
}
