import { writable } from 'svelte/store';
import type { Skills } from '$lib/types';

import skillsJson from '$content/skills.json';
import projectsJson from '$content/projects.json';
import socialJson from '$content/social-network.json';
import usersJson from '$content/users.json';

export const skills = writable<Skills>(skillsJson);
export const projects = writable(projectsJson);
export const socials = writable(socialJson);
export const users = writable(usersJson);

export const heroTitle = [
	'éleveur de poney',
	'vainqueur du combat de regard contre Chuck Norris',
	'producteur régional de lait de licorne',
	'protecteur du CTRL+C CTRL+V',
	'a trouvé la poulette',
	"champion olympique d'aquaponey",
	'traducteur de klingon',
	'tchat avec le capitaine Kirk',
	'amandiiiiinnnee ! reviens !'
];
