import type { Projects } from '$lib/types';
import ensoleillement from "$lib/projects/assets/ensoleillement.md?raw"
import europeennes2024 from "$lib/projects/assets/europeennes-2024.md?raw";

const projects: Projects = {
	"ensoleillement": {
		title: "Ensoleillement",
		thumbnail: "/projects/ensoleillement-thumb.jpg",
		images: [
			{ path: '/projects/ensoleillement-nice.jpg', alt: '', title: "Quartier du Vieux-Nice, 18 juillet 2024" },
			{ path: '/projects/ensoleillement-blois.png', alt: '', title: "Centre-ville de Blois, 21 juin 2024" }
		],
		shortDesc: `
			Cartes d’ensoleillement réalisées à partir de modèles numériques de surface. 
			La luminosité de chaque point  de l’image correspond à son éclairage au long 
			d’une journée : un point blanc est toujours au soleil, un point noir n’y est jamais.
		`,
		fullDesc: ensoleillement
	},
	"europeennes-2024": {
		title: "Résultats des élections européennes 2024",
		thumbnail: "/projects/europeennes-2024-thumb.jpg",
		images: [
			{ path: '/projects/europeennes-2024-cartogramme.png', alt: '', title: "Cartogramme des résultats" },
			{ path: '/projects/europeennes-2024-densite-points.png', alt: '', title: "Carte en densité de points des résultats" }
		],
		shortDesc: `
	    Expérimentations cartographiques pour essayer de representer de façon plus juste les votant·es.
		`,
		fullDesc: europeennes2024,
	},
	"canopee-lidarhd": {
		title: "Canopée des villes françaises",
		thumbnail: "/projects/canopee-lidarhd-thumb.jpg",
		images: [
			{ path: '/projects/canope-toulouse.png', alt: 'Lorem ipsum' }
		],
		shortDesc: `
		Extraction de la canopée à partir des données LidarHD de l’IGN.
		`,
		fullDesc: `
		`
	},
	"visionscarto-circos": {
		title: "« Quel est votre poids électoral ? »",
		thumbnail: "/projects/visionscarto-circos-thumb.jpg",
		images: [
			{ path: '/projects/visionscarto-circos.png', alt: 'Lorem ipsum' }
		],
		shortDesc: `
			Les circonscriptions électorales ont un nombre très différent d’inscrit·es.
			Sachant que chaque circonscription élit un·e seul·e député·e, plus il y a d’électeurs ou d’électrices, moins le « poids » individuel est important.
		`,
		fullDesc: `https://www.visionscarto.net/quel-est-votre-poids-electoral`,
		coAuthors: ["Philippe Rivière"]
	},

	"seqe-ue": {
		title: "Les émissions industrielles de gaz à effet de serre ",
		thumbnail: "/projects/seqe-ue-thumb.jpg",
		images: [
			{ path: '/projects/seqe-ue-fr-2023-1080.png', alt: 'Lorem ipsum' },
			{ path: '/projects/seqe-ue-eu-2023-1080.png', alt: 'Lorem ipsum' }
		],
		shortDesc: `
			Cartographies diverses des émissions vérifiées de GES des installations soumises au système d’échange de quotas d’émissions de l’UE.
		`,
		fullDesc: `
	    Depuis 2019 je maintiens un jeu de données, etc.

	    - données [data.gouv](https://www.data.gouv.fr/fr/datasets/emissions-de-gaz-a-effet-de-serre-des-installations-soumises-a-quota-de-lue/#/information)
		`
	},
	"icu-paris-nacis": {
		title: "Les ilots de chaleur parisiens",
		thumbnail: "/projects/icu-paris-nacis-thumb.jpg",
		images: [
			{ path: '/projects/icu-paris-nacis-1080.png', alt: 'Lorem ipsum' }
		],
		shortDesc: `
			Représentation des ilots de chaleur parisiens. Réalisation dans le cadre d’une soumission au Volume VI de 
			“l’Atlas of Design” de la NACIS. 
		`,
		fullDesc: `
			NACIS 2022 Atlas of Design  [Mention honorable](https://atlasofdesign.org/2022/04/29/finalists/)
		`
	},
	"icu-mediapart": {
		title: "« Inégalités climatiques : comment les riches accaparent les espaces verts »",
		thumbnail: "/projects/icu-mediapart-thumb.jpg",
		images: [
			{ path: '/projects/icu-mediapart-lille-env.png', alt: 'Lorem ipsum' },
			{ path: '/projects/icu-mediapart-lille-orthophoto.png', alt: 'Lorem ipsum' },
			{ path: '/projects/icu-mediapart-lille-temperatures.png', alt: 'Lorem ipsum' },
			{ path: '/projects/icu-mediapart-lille-niveau-de-vie.png', alt: 'Lorem ipsum' },
			{ path: '/projects/icu-mediapart-lille-vulnerabilites.png', alt: 'Lorem ipsum' },
		],
		shortDesc: `
	    Une collaboration avec Mediapart sur les possibles corrélations entre inégalités climatiques et inégalités sociales.
		`,
		fullDesc: `
	    https://www.mediapart.fr/journal/ecologie/120823/inegalites-climatiques-comment-les-riches-accaparent-les-espaces-verts
		`,
		coAuthors: ["Mickaël Correia", "Donatien Huet"]
	},
};

export default projects;
