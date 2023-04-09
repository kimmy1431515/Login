export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","global.css","global.scss","mail.svg","phone.svg","shield.svg","user.svg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".css":"text/css",".scss":"text/x-scss",".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.e420df29.js","imports":["_app/immutable/entry/start.e420df29.js","_app/immutable/chunks/index.64d89341.js","_app/immutable/chunks/singletons.cc18c9dd.js","_app/immutable/chunks/index.11bd6f3c.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.6ce558f3.js","imports":["_app/immutable/entry/app.6ce558f3.js","_app/immutable/chunks/index.64d89341.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
