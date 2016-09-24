
`npm install -g karma`

### Setup development environment for running end-to-end tests
`npm install -g protractor`
<!-- It installs two command line tools, `protractor` and `webdriver-manager`, and you can use the `protractor --version`
command to verify the installation. -->

`webdriver-manager update`


### Running end-to-end tests
`webdriver-manager start`

`gulp serve`

`npm run test:e2e`


=======================================================================

### Dipendencies

- glob (for the karma flow)

- fs-walk (Synchronous and asynchronous recursive directory walking for node. Uses callbacks to mimic the API of the fs module.)

- connect-history-api-fallback (what is it?)

- url-loader

- node-lib-browser (cant unintall it! weird)

- lodash
