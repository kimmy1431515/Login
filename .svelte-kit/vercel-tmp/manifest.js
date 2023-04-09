export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","global.css","global.scss","mail.svg","phone.svg","shield.svg","user.svg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".css":"text/css",".scss":"text/x-scss",".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.f7675082.js","imports":["_app/immutable/entry/start.f7675082.js","_app/immutable/chunks/index.64d89341.js","_app/immutable/chunks/singletons.bec895b8.js","_app/immutable/chunks/index.11bd6f3c.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.9fb499ef.js","imports":["_app/immutable/entry/app.9fb499ef.js","_app/immutable/chunks/index.64d89341.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
