export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["145x180.png","253x253-0.jpg","253x253-1.jpg","253x253-2.jpg","253x253-3.jpg","253x253.jpg","275x200.jpg","300x230-0.jpg","300x230.jpg","300x300.jpg","350x200-0.jpg","350x200-1.jpg","350x200.jpg","500x420-0.jpg","500x420-1.jpg","500x420-2.jpg","500x420.jpg","570x420.jpg","600.jpg","600x400.jpg","660x348-0.jpg","660x348.jpg","contact-bg.jpg","favicon.svg","HP1.-bg.jpg","HP1.s1.jpg","HP1.s2.jpg","Logo-XSteel.png","subheader.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DpfVCWhs.js",app:"_app/immutable/entry/app.CqDnl20_.js",imports:["_app/immutable/entry/start.DpfVCWhs.js","_app/immutable/chunks/D5t0FxkS.js","_app/immutable/chunks/BrsXXap9.js","_app/immutable/chunks/BSGI3RlU.js","_app/immutable/chunks/DN4ffuaz.js","_app/immutable/chunks/Rqp0kSx3.js","_app/immutable/chunks/DuDDLam-.js","_app/immutable/entry/app.CqDnl20_.js","_app/immutable/chunks/BSGI3RlU.js","_app/immutable/chunks/BrsXXap9.js","_app/immutable/chunks/DN4ffuaz.js","_app/immutable/chunks/Rqp0kSx3.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/D9amEckC.js","_app/immutable/chunks/DuDDLam-.js","_app/immutable/chunks/_fhQXlsU.js","_app/immutable/chunks/nGPq1FlD.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/catalogo",
				pattern: /^\/catalogo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contato",
				pattern: /^\/contato\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/produto",
				pattern: /^\/produto\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/produto/[id]",
				pattern: /^\/produto\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/sobre",
				pattern: /^\/sobre\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
