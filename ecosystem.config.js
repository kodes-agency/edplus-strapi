module.exports = {
      apps: [
        {
          name: 'edplus',
          script: 'yarn',
          args: 'develop',
	  watch: true,
	  env: {
	   "NODE_ENV":"development",
	  }
        },
      ],
    };
