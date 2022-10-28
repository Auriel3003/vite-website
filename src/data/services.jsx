import React from 'react';
import { MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export default [
	{
		title: 'Web Design',
		icon: <MdWeb className="w-full h-full" />,
		description:
			'I value simple content structure, clean design patterns, and thoughtful interactions. This is the reason I keep most of my websites simple. For this, I often use TailWindCSS and few animations.',
	},
	{
		title: 'Web Tools',
		icon: <FaHandHoldingHeart className="w-full h-full" />,
		description:
			'I am working on my Web Development tools. I have created many static websites. Now, I am working on creating websites with VITE, NEXT.js, and many more. Even this website created with VITE (backend).',
	},
	{
		title: 'Web Future',
		icon: <VscCode className="w-full h-full" />,
		description:
			'I will be working on Web 3.0 projects, concerning mainly on Blockchain Technologies. I will be building WebApps with leading-edge technologies like Moralis, Solana, Phantom, etc.',
	},
];
