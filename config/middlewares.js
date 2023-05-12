module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  {
     name: 'strapi::cors',
     config: {
	enabled: true,
	headers: '*',
	origin: ['http://localhost:5174' ,'http://localhost:1337', 'https://educationplus.bg', 'https://api.educationplus.bg', 'https://*.educationplus.bg']
     }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
