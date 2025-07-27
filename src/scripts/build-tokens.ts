
// Use an async IIFE for top-level await and ESM compatibility
(async () => {
  const StyleDictionaryImport = await import('style-dictionary');
  const StyleDictionary = StyleDictionaryImport.default || StyleDictionaryImport;

const platforms = [
  {
    name: 'web',
    buildPath: 'dist/web/',
    files: [
      {
        destination: 'tokens.css',
        format: 'css/variables',
      },
    ],
  },
  {
    name: 'android',
    buildPath: 'dist/android/',
    files: [
      {
        destination: 'tokens.xml',
        format: 'android/resources',
      },
    ],
  },
  {
    name: 'iOS',
    buildPath: 'dist/iOS/',
    files: [
      {
        destination: 'tokens.swift',
        format: 'ios-swift/class.swift',
      },
    ],
  },
];

interface PlatformsConfig {
  [key: string]: any;
}

const config = {
  source: ['src/tokens.json'],
  platforms: {} as PlatformsConfig,
};

  platforms.forEach(platform => {
    config.platforms[platform.name] = {
      transformGroup: platform.name === 'web' ? 'css' : platform.name === 'android' ? 'android' : 'ios-swift',
      buildPath: platform.buildPath,
      files: platform.files,
    };
  });


  // For Style Dictionary v5+, use the constructor
  const SD = new StyleDictionary(config as any);
  SD.buildAllPlatforms();

  console.log('Design tokens built for all platforms.');
})();
