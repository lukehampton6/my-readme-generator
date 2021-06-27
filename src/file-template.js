const generateFile = (data) => {
  return `
# ${data.projectName} 
![badge](https://img.shields.io/badge/license-${data.licenses}-red)

## Description 
---
${data.description}

## Table of Contents 
---
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation
---
${data.installation}

## Usage 
---
${data.usage}

## License
---
This is using the ${data.licenses} license.

## Contributing
---
${data.contribution}

## Tests
---
${data.tests}

## Questions
---
https://github.com/${data.name}

Contact me at ${data.email}
`;
};

module.exports = generateFile;
