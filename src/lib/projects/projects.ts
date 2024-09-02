import type { Projects } from '$lib/types';
import ensoleillement from "$lib/projects/assets/ensoleillement.md?raw"
import europeennes2024 from "$lib/projects/assets/europeennes-2024.md?raw";
import canopeeLidarHd from "$lib/projects/assets/canopee-lidarhd.md?raw";
import visionscartoCircos from "$lib/projects/assets/visionscarto-circos.md?raw";
import seqeUe from "$lib/projects/assets/seqe-ue.md?raw";
import icuParisNacis from "$lib/projects/assets/icu-paris-nacis.md?raw";
import icuMediapart from "$lib/projects/assets/icu-mediapart.md?raw";



const projects: Projects = {
	"ensoleillement": {
		title: "Ensoleillement",
		thumbnail: "/projects/ensoleillement-thumb.jpg",
		images: [
			{
				path: '/projects/ensoleillement-nice.jpg', alt: '',
				title: "Quartier du Vieux-Nice, 18 juillet 2024"
			},
			{
				path: '/projects/ensoleillement-blois.png', alt: '',
				title: "Centre-ville de Blois, 21 juin 2024"
			}
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
			{
				path: '/projects/europeennes-2024-cartogramme.png', alt: '',
				title: "Cartogramme des résultats"
			},
			{
				path: '/projects/europeennes-2024-densite-points.png', alt: '',
				title: "Carte en densité de points des résultats"
			}
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
			{ path: '/projects/canope-toulouse.png', alt: '' }
		],
		shortDesc: "Extraction de la canopée à partir des données LidarHD de l’IGN.",
		fullDesc: canopeeLidarHd
	},
	"visionscarto-circos": {
		title: "« Quel est votre poids électoral ? »",
		thumbnail: "/projects/visionscarto-circos-thumb.jpg",
		images: [
			{ path: '/projects/visionscarto-circos.png', alt: '' }
		],
		shortDesc: `
			Les circonscriptions électorales ont un nombre très différent d’inscrit·es.
			Sachant que chaque circonscription élit un·e seul·e député·e, plus il y a d’électeurs ou 
			d’électrices, moins le « poids » individuel est important.
		`,
		fullDesc: visionscartoCircos,
		coAuthors: ["Philippe Rivière"]
	},

	"seqe-ue": {
		title: "Les émissions industrielles de gaz à effet de serre ",
		thumbnail: "/projects/seqe-ue-thumb.jpg",
		images: [
			{ path: '/projects/seqe-ue-fr-2023-1080.png', alt: '' },
			{ path: '/projects/seqe-ue-eu-2023-1080.png', alt: '' }
		],
		shortDesc: `
			Cartographies diverses des émissions vérifiées de GES des installations soumises au système d’échange de quotas d’émissions de l’UE.
		`,
		fullDesc: seqeUe,

	},
	"icu-paris-nacis": {
		title: "Les ilots de chaleur parisiens",
		thumbnail: "/projects/icu-paris-nacis-thumb.jpg",
		images: [
			{ path: '/projects/icu-paris-nacis-1080.png', alt: '' }
		],
		shortDesc: `
			Une représentation sous forme de contours d’élévation des températures de surface de Paris. 
		`,
		fullDesc: icuParisNacis
	},
	"icu-mediapart": {
		title: "« Inégalités climatiques : comment les riches accaparent les espaces verts »",
		thumbnail: "/projects/icu-mediapart-thumb.jpg",
		images: [
			{ path: '/projects/icu-mediapart-lille-env.png', alt: '', title: "La carte de la zone d’étude" },
			{ path: '/projects/icu-mediapart-lille-orthophoto.png', alt: '', title: 'Vue satellite' },
			{ path: '/projects/icu-mediapart-lille-temperatures.png', alt: '', title: 'Les températures de surface' },
			{ path: '/projects/icu-mediapart-lille-niveau-de-vie.png', alt: '', title: 'Le niveau de vie moyen' },
			{ path: '/projects/icu-mediapart-lille-vulnerabilites.png', alt: '', title: 'L’indicateur de vulnérabilité' },
		],
		shortDesc: `
	    Une collaboration avec Mediapart sur les possibles corrélations entre inégalités climatiques et inégalités sociales.
		`,
		fullDesc: icuMediapart,
		coAuthors: ["Mickaël Correia", "Donatien Huet"]
	},
};

export default projects;
