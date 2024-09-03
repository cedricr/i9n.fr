export interface ImageDef {
	path: string; alt: string, title?: string
}


export interface Project {
	title: string;
	thumbnail: string;
	shortDesc: string;
	images: ImageDef[];
	fullDesc?: string;
	coAuthors?: string[];
}
export interface Projects {
	[slug: string]: Project;
}
