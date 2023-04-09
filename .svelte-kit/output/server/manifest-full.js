export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","global.css","global.scss","mail.svg","phone.svg","shield.svg","user.svg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".css":"text/css",".scss":"text/x-scss",".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.e420df29.js","imports":["_app/immutable/entry/start.e420df29.js","_app/immutable/chunks/index.64d89341.js","_app/immutable/chunks/singletons.cc18c9dd.js","_app/immutable/chunks/index.11bd6f3c.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.6ce558f3.js","imports":["_app/immutable/entry/app.6ce558f3.js","_app/immutable/chunks/index.64d89341.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
