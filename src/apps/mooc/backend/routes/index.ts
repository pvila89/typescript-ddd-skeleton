import { Router } from 'express';
import glob from 'glob';

declare const __dirname: string;
declare function require(module: string): { register: (router: Router) => void };

export function registerRoutes(router: Router): void {
	const routes = glob.sync(`${__dirname}/**/*.route.*`);
	routes.map(route => register(route, router));
}

function register(routePath: string, router: Router) {
	// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
	const { register } = require(routePath);
	register(router);
}
