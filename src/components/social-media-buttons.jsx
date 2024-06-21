'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { SiDiscord, SiGmail, SiInstagram } from 'react-icons/si';
import config from '@/lib/config.js';

export function DiscordButton() {
	return (
		<>
			{config.discord_url && (
				<Button variant='outline' size='icon'>
					<a href={`https://discord.gg/${config.discord_url}`}>
						<SiDiscord className='text-[1.35rem] text-[#5865F2]' />
						<span className='sr-only'>Join Discord Server</span>
					</a>
				</Button>
			)}
		</>
	);
}

export function InstagramButton() {
	return (
		<>
			{config.instagram_handle && (
				<Button variant='outline' size='icon'>
					<a
						href={`https://instagram.com/${config.instagram_handle}`}
					>
						<SiInstagram className='text-[1.35rem] text-[#E4405F]' />
						<span className='sr-only'>Follow Our Instagram</span>
					</a>
				</Button>
			)}
		</>
	);
}

export function GmailButton() {
	return (
		<Button variant='outline' size='icon'>
			<a href={`mailto:${config.club_email}`}>
				<SiGmail className='text-[1.35rem] text-[#EA4335]' />
				<span className='sr-only'>Email us!</span>
			</a>
		</Button>
	);
}
