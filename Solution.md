# Solution Description

> The requirement of this project is to create an application that can help the user buy insurance policies. The user should be able to easily see different available insurance options. Depending on their age and desired currency,

# Technical Choices And Approach
The approach to this solution considers aspects of **Scalability, User Experience, Speed, and Flexibility**

## Front End Framework
This project uses the **VueJs** front end framework to cover the requirements mainly due the points mention below: 
- Lightweight
- Easy to develop and learn
- Good developer tool
- Flexibility

## Reusable Components
Since there are several screens required in the application. The common elements are divided into resusable componenets.
> Ex: Input, Dropdowns and Radio Groups.
## Navigation
**vue-router** has been used to manage the navigation between pages. 
Because it can create better user experience when the user has more control over the navigation of the application. 

## State Management
**Vuex** is state management library that can centalize data and the stored data can be shared amoung different components.
It is useful to hold the wizard summery data in store so that the user will not lose the data when navigating to another view. 

## Project Directory Structure

``` bash

/wizard-ashen/src
├─ components
│  ├─ base
│  │  ├─ DropDown.vue
│  │  ├─ InputBox.vue
│  │  ├─ RadioGroup.vue
│  │  └─ ...
│  └─ ...
├─ views
│  ├─ Home.vue
│  ├─ Page2.vue
│  ├─ Page3.vue
│  ├─ AgeError.vue
│  └─ ...
│ 
├─ router
│  ├─ index.js
│  
├─ store
│  ├─ index.js
│  ├─ state.js
│  ├─ getters.js
│  ├─ actions.js
│  ├─ mutations.js
│  └─ ...
│  
├─ main.js
└─ App.vue

```

## Jest Unit Testing
- Component Render Testing
- Methods Testing

## Future Improvements
- Add Input Box validation messages
- Prevent user from entering unwanted characters inside the form