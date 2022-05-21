# Repo with playwright tests 

 ![workflow](https://img.shields.io/github/workflow/status/Lornus/playwright-tests/ci?label=tests&style=flat-square)

---


# What is here: 
1. almost all tasks from http://uitestingplayground.com/ done
2. for sample app created isolated directory 
3. tests for https://www.saucedemo.com/

## Installation
```
git clone 
```
```
npm i 
```

## Running with docker 
```
docker pull lornus/playwight-tests
```
```
Run image
```

### For running in headless tests for [Ui Playground](http://uitestingplayground.com/)
```
npm run ui-playground-test-headless 
```  
### For running in headed tests for [Ui Playground](http://uitestingplayground.com/)
```
npm run ui-playground-test-headed
```
### For running in headless tests for [Sauce Demo](https://www.saucedemo.com/)
```
npm run sauce-labs-test-headless
```
### For running in headed tests for [Sauce Demo](https://www.saucedemo.com/)
```
npm run sauce-labs-test-headed
```
### For running all tests
```
npm test
```
### For generating report
```
npm run allure-generate
```
### For opening report
```
npm run allure-open
```

