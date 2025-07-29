export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["145x180.png","275x200.jpg","300x230.jpg","350x200-0.jpg","350x200.jpg","570x420.jpg","600x400.jpg","bobinas.jpg","contact-bg.jpg","HP1.-bg.jpg","HP1.s1.jpg","HP1.s2.jpg","Logo-XSteel.png","roberto.png","subheader.jpg","tubos.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.DItIo29i.js",app:"_app/immutable/entry/app.5-qT_s6S.js",imports:["_app/immutable/entry/start.DItIo29i.js","_app/immutable/chunks/B1LGdMum.js","_app/immutable/chunks/bSBEkUoL.js","_app/immutable/chunks/Drqjlocp.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/UcTkXPwT.js","_app/immutable/chunks/DRKlIyb-.js","_app/immutable/entry/app.5-qT_s6S.js","_app/immutable/chunks/Drqjlocp.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/bSBEkUoL.js","_app/immutable/chunks/UcTkXPwT.js","_app/immutable/chunks/DRKlIyb-.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/pGr50Ksl.js","_app/immutable/chunks/CZaW9bpT.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js'))
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
				id: "/recuperarsenha",
				pattern: /^\/recuperarsenha\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/recuperarusuario",
				pattern: /^\/recuperarusuario\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/sobre",
				pattern: /^\/sobre\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
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
